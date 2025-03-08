import fs from "fs/promises";

interface Props {
    title?: string;
    description?: string;
}

const myImageBase64 = (await fs.readFile("src/assets/BenfanteLucio.png")).toString("base64");

const OgImage: React.FunctionComponent<Props> = ({ title = 'Title', description = 'description' }) => {
    return (
        <div
            style={{
                height: "100%",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: "#fff",
                fontSize: 32,
                fontWeight: 600,
                fontFamily: "Roboto",
                padding: "1em",
                background:
                    "linear-gradient(135deg, rgb(255, 203, 59) 0%, rgba(255, 214, 168, 1) 100%)",
            }}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    color: "#FF0000",
                    width: "100%",
                }}
            >
                <svg
                    width="85.509918mm"
                    height="85.510048mm"
                    viewBox="0 0 85.509918 85.510048"
                    version="1.1"
                    id="svg5"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs id="defs2" />
                    <g id="layer1" transform="translate(-52.288288,-91.979958)">
                        <circle
                            fill="#dd0000"
                            fillOpacity={1}
                            stroke="none"
                            strokeWidth={0.264583}
                            paintOrder="fill markers stroke"
                            id="path8968-9"
                            cx="94.859123"
                            cy="135.1584"
                            r="5"
                        />
                        <circle
                            fill="#dd0000"
                            fillOpacity={1}
                            stroke="none"
                            strokeWidth={0.264583}
                            paintOrder="fill markers stroke"
                            id="path8968-3-6"
                            cx="94.859123"
                            cy="147.80478"
                            r="5"
                        />
                        <circle
                            fill="#dd0000"
                            fillOpacity={1}
                            stroke="none"
                            strokeWidth={0.264583}
                            paintOrder="fill markers stroke"
                            id="path8968-9-7"
                            cx="107.50549"
                            cy="128.83522"
                            r="5"
                        />
                        <circle
                            fill="#dd0000"
                            fillOpacity={1}
                            stroke="none"
                            strokeWidth={0.264583}
                            paintOrder="fill markers stroke"
                            id="path8968-3-6-6"
                            cx="107.50549"
                            cy="141.4816"
                            r="5"
                        />
                        <circle
                            fill="#dd0000"
                            fillOpacity={1}
                            stroke="none"
                            strokeWidth={0.264583}
                            paintOrder="fill markers stroke"
                            id="path8968-9-7-3"
                            cx="120.15185"
                            cy="122.27271"
                            r="5"
                        />
                        <circle
                            fill="#dd0000"
                            fillOpacity={1}
                            stroke="none"
                            strokeWidth={0.264583}
                            paintOrder="fill markers stroke"
                            id="path8968-9-7-3-9"
                            cx="120.15185"
                            cy="109.62634"
                            r="5"
                        />
                        <circle
                            fill="#dd0000"
                            fillOpacity={1}
                            stroke="none"
                            strokeWidth={0.264583}
                            paintOrder="fill markers stroke"
                            id="path8968-9-7-3-9-1"
                            cx="132.7982"
                            cy="115.94951"
                            r="5"
                        />
                        <circle
                            fill="#dd0000"
                            fillOpacity={1}
                            stroke="none"
                            strokeWidth={0.264583}
                            paintOrder="fill markers stroke"
                            id="path8968-9-7-3-9-1-0"
                            cx="132.7982"
                            cy="128.59592"
                            r="5"
                        />
                        <circle
                            fill="#dd0000"
                            fillOpacity={1}
                            stroke="none"
                            strokeWidth={0.264583}
                            paintOrder="fill markers stroke"
                            id="path8968-3-6-6-2"
                            cx="120.15185"
                            cy="135.1584"
                            r="5"
                        />
                        <circle
                            fill="#dd0000"
                            fillOpacity={1}
                            stroke="none"
                            strokeWidth={0.264583}
                            paintOrder="fill markers stroke"
                            id="path8968-9-7-3-5-1"
                            cx="107.50549"
                            cy="103.30315"
                            r="5"
                        />
                        <circle
                            fill="#dd0000"
                            fillOpacity={1}
                            stroke="none"
                            strokeWidth={0.264583}
                            paintOrder="fill markers stroke"
                            id="path8968-3-6-6-2-9-4"
                            cx="107.50549"
                            cy="115.94953"
                            r="5"
                        />
                        <circle
                            fill="#dd0000"
                            fillOpacity={1}
                            stroke="none"
                            strokeWidth={0.264583}
                            paintOrder="fill markers stroke"
                            id="path8968-9-7-3-5"
                            cx="95.569366"
                            cy="96.979958"
                            r="5"
                        />
                        <circle
                            fill="#dd0000"
                            fillOpacity={1}
                            stroke="none"
                            strokeWidth={0.264583}
                            paintOrder="fill markers stroke"
                            id="path8968-3-6-6-2-9"
                            cx="95.569366"
                            cy="109.62634"
                            r="5"
                        />
                        <circle
                            fill="#dd0000"
                            fillOpacity={1}
                            stroke="none"
                            strokeWidth={0.264583}
                            paintOrder="fill markers stroke"
                            id="path8968"
                            cx="94.859123"
                            cy="160.04341"
                            r="5"
                        />
                        <circle
                            fill="#dd0000"
                            fillOpacity={1}
                            stroke="none"
                            strokeWidth={0.264583}
                            paintOrder="fill markers stroke"
                            id="path8968-3"
                            cx="94.859123"
                            cy="172.49001"
                            r="5"
                        />
                        <circle
                            fill="#dd0000"
                            fillOpacity={1}
                            stroke="none"
                            strokeWidth={0.264583}
                            paintOrder="fill markers stroke"
                            id="path8968-9-7-3-5-4"
                            cx="82.869377"
                            cy="96.979958"
                            r="5"
                        />
                        <circle
                            fill="#dd0000"
                            fillOpacity={1}
                            stroke="none"
                            strokeWidth={0.264583}
                            paintOrder="fill markers stroke"
                            id="path8968-3-6-6-2-9-8"
                            cx="82.869377"
                            cy="109.62634"
                            r="5"
                        />
                        <circle
                            fill="#dd0000"
                            fillOpacity={1}
                            stroke="none"
                            strokeWidth={0.264583}
                            paintOrder="fill markers stroke"
                            id="path8968-4"
                            cx="82.159134"
                            cy="160.04341"
                            r="5"
                        />
                        <circle
                            fill="#dd0000"
                            fillOpacity={1}
                            stroke="none"
                            strokeWidth={0.264583}
                            paintOrder="fill markers stroke"
                            id="path8968-3-2"
                            cx="82.159134"
                            cy="172.49001"
                            r="5"
                        />
                        <circle
                            fill="#dd0000"
                            fillOpacity={1}
                            stroke="none"
                            strokeWidth={0.264583}
                            paintOrder="fill markers stroke"
                            id="path8968-9-7-3-5-4-5"
                            cx="70.69854"
                            cy="96.979958"
                            r="5"
                        />
                        <circle
                            fill="#dd0000"
                            fillOpacity={1}
                            stroke="none"
                            strokeWidth={0.264583}
                            paintOrder="fill markers stroke"
                            id="path8968-3-6-6-2-9-8-5"
                            cx="70.69854"
                            cy="109.62634"
                            r="5"
                        />
                        <circle
                            fill="#dd0000"
                            fillOpacity={1}
                            stroke="none"
                            strokeWidth={0.264583}
                            paintOrder="fill markers stroke"
                            id="path8968-4-9"
                            cx="69.988297"
                            cy="160.04341"
                            r="5"
                        />
                        <circle
                            fill="#dd0000"
                            fillOpacity={1}
                            stroke="none"
                            strokeWidth={0.264583}
                            paintOrder="fill markers stroke"
                            id="path8968-3-2-0"
                            cx="69.988297"
                            cy="172.49001"
                            r="5"
                        />
                        <circle
                            fill="#dd0000"
                            fillOpacity={1}
                            stroke="none"
                            strokeWidth={0.264583}
                            paintOrder="fill markers stroke"
                            id="path8968-4-9-4"
                            cx="57.288288"
                            cy="160.04341"
                            r="5"
                        />
                        <circle
                            fill="#dd0000"
                            fillOpacity={1}
                            stroke="none"
                            strokeWidth={0.264583}
                            paintOrder="fill markers stroke"
                            id="path8968-3-2-0-0"
                            cx="57.288288"
                            cy="172.49001"
                            r="5"
                        />
                        <circle
                            fill="#dd0000"
                            fillOpacity={1}
                            stroke="none"
                            strokeWidth={0.264583}
                            paintOrder="fill markers stroke"
                            id="path8968-6"
                            cx="120.15185"
                            cy="160.04341"
                            r="5"
                        />
                        <circle
                            fill="#dd0000"
                            fillOpacity={1}
                            stroke="none"
                            strokeWidth={0.264583}
                            paintOrder="fill markers stroke"
                            id="path8968-3-7"
                            cx="120.15185"
                            cy="172.49001"
                            r="5"
                        />
                        <circle
                            fill="#dd0000"
                            fillOpacity={1}
                            stroke="none"
                            strokeWidth={0.264583}
                            paintOrder="fill markers stroke"
                            id="path8968-69"
                            cx="132.7982"
                            cy="160.04341"
                            r="5"
                        />
                        <circle
                            fill="#dd0000"
                            fillOpacity={1}
                            stroke="none"
                            strokeWidth={0.264583}
                            paintOrder="fill markers stroke"
                            id="path8968-3-8"
                            cx="132.7982"
                            cy="172.49001"
                            r="5"
                        />
                        <circle
                            fill="#dd0000"
                            fillOpacity={1}
                            stroke="none"
                            strokeWidth={0.264583}
                            paintOrder="fill markers stroke"
                            id="path8968-2"
                            cx="107.50549"
                            cy="160.04341"
                            r="5"
                        />
                        <circle
                            fill="#dd0000"
                            fillOpacity={1}
                            stroke="none"
                            strokeWidth={0.264583}
                            paintOrder="fill markers stroke"
                            id="path8968-3-82"
                            cx="107.50549"
                            cy="172.49001"
                            r="5"
                        />
                    </g>
                </svg>
                <span style={{ marginLeft: "0.5em", fontSize: "2em", fontFamily: "Roboto Bold" }}>
                    Lucio Benfante
                </span>
            </div>
            <div style={{ marginTop: 40, fontSize: "1.5em" }}>{title}</div>
            <div style={{ marginTop: 20, color: "#555555" }}>{description}</div>
            <div
                style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "flex-end",
                }}
            >
                <div
                    style={{
                        fontSize: "0.7em",
                        marginRight: "0.5em",
                        color: "#777777",
                    }}
                >
                    Software developer and teacher
                </div>
                <img
                    style={{ borderRadius: "10%" }}
                    width={100}
                    src={`data:image/png;base64, ${myImageBase64}`}
                    alt="Lucio Benfante"
                />
            </div>
        </div>
    );
}

export default OgImage;