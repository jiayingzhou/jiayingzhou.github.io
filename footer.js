var footer = React.createElement(
    "div",
    { "class": "container" },
    React.createElement(
        "div",
        { "class": "row bg-light py-1" },
        React.createElement(
            "div",
            { "class": "col" },
            React.createElement(
                "div",
                { "class": " text-muted my-footer" },
                React.createElement(
                    "span",
                    null,
                    "\xA9 2021 Yuchuan Huang. Designed with Bootstrap and React. All rights reserved. "
                ),
                React.createElement("br", null),
                React.createElement(
                    "i",
                    null,
                    "Last updated: ",
                    document.lastModified
                )
            )
        ),
        React.createElement(
            "div",
            { "class": "col-sm-2 py-1" },
            React.createElement("img", { "class": "d-none d-sm-block img-fluid", src: "resource/icon/MHwdmk_D2Dgold.png", alt: "footer-icon" }),
            React.createElement("img", { "class": "d-sm-none img-fluid w-50 mx-auto", src: "resource/icon/MHwdmk_D2Dgold.png", alt: "footer-icon" })
        )
    )
);

ReactDOM.render(footer, document.querySelector('#footer'));