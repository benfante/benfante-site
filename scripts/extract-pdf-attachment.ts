// extract-pdf-attachment.js
// Extract a PDF attachment from a PDF document.
// Based on the code from https://github.com/Hopding/pdf-lib/issues/534

import fs from "fs";
import {
    PDFDocument,
    PDFName,
    PDFDict,
    PDFArray,
    PDFHexString,
    PDFString,
    PDFStream,
    decodePDFRawStream,
    PDFRawStream,
} from "pdf-lib";

const extractRawAttachments = (pdfDoc: PDFDocument) => {
    if (!pdfDoc.catalog.has(PDFName.of("Names"))) return [];
    const Names = pdfDoc.catalog.lookup(PDFName.of("Names"), PDFDict);

    if (!Names.has(PDFName.of("EmbeddedFiles"))) return [];
    const EmbeddedFiles = Names.lookup(PDFName.of("EmbeddedFiles"), PDFDict);

    if (!EmbeddedFiles.has(PDFName.of("Names"))) return [];
    const EFNames = EmbeddedFiles.lookup(PDFName.of("Names"), PDFArray);

    const rawAttachments = [];
    for (let idx = 0, len = EFNames.size(); idx < len; idx += 2) {
        const fileName = EFNames.lookup(idx) as PDFHexString | PDFString;
        const fileSpec = EFNames.lookup(idx + 1, PDFDict);
        rawAttachments.push({ fileName, fileSpec });
    }

    return rawAttachments;
};

const extractAttachments = (pdfDoc: PDFDocument) => {
    const rawAttachments = extractRawAttachments(pdfDoc);
    return rawAttachments.map(({ fileName, fileSpec }) => {
        const stream = fileSpec
            .lookup(PDFName.of("EF"), PDFDict)
            .lookup(PDFName.of("F"), PDFStream) as PDFRawStream;
        return {
            name: fileName.decodeText(),
            data: decodePDFRawStream(stream).decode(),
        };
    });
};

(async () => {
    const args = process.argv.slice(2);
    if (args.length !== 3) {
        console.log(
            "Usage: tsx extract-pdf-attachment.ts <pdfFile> <attachmentName> <destinationFile>"
        );
        process.exit(1);
    }

    const pdfFile = args[0];
    const attachmentName = args[1];
    const destinationFile = args[2];

    const pdf = fs.readFileSync(pdfFile);
    const pdfDoc = await PDFDocument.load(pdf.toString("base64"));

    const attachments = extractAttachments(pdfDoc);

    const attachment = attachments.find(
        (attachment) => attachment.name === attachmentName
    )!;
    fs.writeFileSync(destinationFile, attachment.data);
    console.log(`Attachment file written to ${destinationFile}`);
})();
