import type React from "react";

interface IconProps extends React.ComponentPropsWithoutRef<"svg"> {}

export const WorldIcon: React.FunctionComponent<IconProps> = ({
    viewBox = "0 0 20 20",
    ...props
}) => {
    return (
        <svg
            viewBox={viewBox}
            aria-hidden="true"
            role="img"
            {...props}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M8.516 0c-4.687 0-8.5 3.813-8.5 8.5s3.813 8.5 8.5 8.5 8.5-3.813 8.5-8.5-3.814-8.5-8.5-8.5zM1.041 9h2.937c0.044 1.024 0.211 2.031 0.513 3h-2.603c-0.481-0.906-0.776-1.923-0.847-3zM3.978 8h-2.937c0.071-1.077 0.366-2.094 0.847-3h2.6c-0.301 0.969-0.467 1.976-0.51 3zM5.547 5h5.896c0.33 0.965 0.522 1.972 0.569 3h-7.034c0.046-1.028 0.239-2.035 0.569-3zM4.978 9h7.035c-0.049 1.028-0.241 2.035-0.572 3h-5.891c-0.331-0.965-0.524-1.972-0.572-3zM13.013 9h2.978c-0.071 1.077-0.366 2.094-0.847 3h-2.644c0.302-0.969 0.469-1.976 0.513-3zM13.013 8c-0.043-1.024-0.209-2.031-0.51-3h2.641c0.48 0.906 0.775 1.923 0.847 3h-2.978zM14.502 4h-2.354c-0.392-0.955-0.916-1.858-1.55-2.7 1.578 0.457 2.938 1.42 3.904 2.7zM9.074 1.028c0.824 0.897 1.484 1.9 1.972 2.972h-5.102c0.487-1.071 1.146-2.073 1.97-2.97 0.199-0.015 0.398-0.030 0.602-0.030 0.188 0 0.373 0.015 0.558 0.028zM6.383 1.313c-0.629 0.838-1.151 1.737-1.54 2.687h-2.314c0.955-1.267 2.297-2.224 3.854-2.687zM2.529 13h2.317c0.391 0.951 0.915 1.851 1.547 2.689-1.561-0.461-2.907-1.419-3.864-2.689zM7.926 15.97c-0.826-0.897-1.488-1.899-1.978-2.97h5.094c-0.49 1.072-1.152 2.075-1.979 2.972-0.181 0.013-0.363 0.028-0.547 0.028-0.2 0-0.395-0.015-0.59-0.030zM10.587 15.703c0.636-0.842 1.164-1.747 1.557-2.703h2.358c-0.968 1.283-2.332 2.247-3.915 2.703z"
                fill="currentColor"
            />
        </svg>
    );
};

export const OpenMenuIcon: React.FunctionComponent<IconProps> = ({
    viewBox = "0 0 20 20",
    ...props
}) => {
    return (
        <svg
            viewBox={viewBox}
            aria-hidden="true"
            role="img"
            fill="currentColor"
            {...props}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
            ></path>
        </svg>
    );
};

export const OkIcon: React.FunctionComponent<IconProps> = ({
    viewBox = "0 0 20 20",
    ...props
}) => {
    return (
        <svg
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            viewBox={viewBox}
            {...props}
        >
            <path d="M19.3,5.3L9,15.6l-4.3-4.3l-1.4,1.4l5,5L9,18.4l0.7-0.7l11-11L19.3,5.3z" />
        </svg>
    );
};

export const ItalianFlagIcon: React.FunctionComponent<IconProps> = ({
    viewBox = "0 0 36 36",
    ...props
}) => {
    return (
        <svg
            viewBox={viewBox}
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            preserveAspectRatio="xMidYMid meet"
            {...props}
        >
            <path
                fill="#CE2B37"
                d="M36 27a4 4 0 0 1-4 4h-8V5h8a4 4 0 0 1 4 4v18z"
            ></path>
            <path
                fill="#009246"
                d="M4 5a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h8V5H4z"
            ></path>
            <path fill="#EEE" d="M12 5h12v26H12z"></path>
        </svg>
    );
};

export const EnglishFlagIcon: React.FunctionComponent<IconProps> = ({
    viewBox = "0 0 512 512",
    ...props
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox={viewBox}
            aria-hidden="true"
            role="img"
            preserveAspectRatio="xMidYMid meet"
            {...props}
        >
            <path
                fill="#41479B"
                d="M473.655,88.276H38.345C17.167,88.276,0,105.443,0,126.621V385.38
	c0,21.177,17.167,38.345,38.345,38.345h435.31c21.177,0,38.345-17.167,38.345-38.345V126.621
	C512,105.443,494.833,88.276,473.655,88.276z"
            />
            <path
                fill="#F5F5F5"
                d="M511.469,120.282c-3.022-18.159-18.797-32.007-37.814-32.007h-9.977l-163.54,107.147V88.276h-88.276
	v107.147L48.322,88.276h-9.977c-19.017,0-34.792,13.847-37.814,32.007l139.778,91.58H0v88.276h140.309L0.531,391.717
	c3.022,18.159,18.797,32.007,37.814,32.007h9.977l163.54-107.147v107.147h88.276V316.577l163.54,107.147h9.977
	c19.017,0,34.792-13.847,37.814-32.007l-139.778-91.58H512v-88.276H371.691L511.469,120.282z"
            />
            <g>
                <polygon
                    fill="#FF4B55"
                    points="282.483,88.276 229.517,88.276 229.517,229.517 0,229.517 0,282.483 229.517,282.483 
		229.517,423.724 282.483,423.724 282.483,282.483 512,282.483 512,229.517 282.483,229.517 	"
                />
                <path
                    fill="#FF4B55"
                    d="M24.793,421.252l186.583-121.114h-32.428L9.224,410.31
		C13.377,415.157,18.714,418.955,24.793,421.252z"
                />
                <path
                    fill="#FF4B55"
                    d="M346.388,300.138H313.96l180.716,117.305c5.057-3.321,9.277-7.807,12.287-13.075L346.388,300.138z"
                />
                <path
                    fill="#FF4B55"
                    d="M4.049,109.475l157.73,102.387h32.428L15.475,95.842C10.676,99.414,6.749,104.084,4.049,109.475z"
                />
                <path
                    style={{ fill: "#FF4B55" }}
                    d="M332.566,211.862l170.035-110.375c-4.199-4.831-9.578-8.607-15.699-10.86L300.138,211.862H332.566z"
                />
            </g>
        </svg>
    );
};
