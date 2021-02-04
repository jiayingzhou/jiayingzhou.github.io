var footer = React.createElement(
    "div",
    { "class": "container px-5" },
    React.createElement(
        "div",
        { "class": "row bg-light py-3" },
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
            React.createElement("img", { "class": "img-fluid", src: "resource/icon/MHwdmk_D2Dgold.png", alt: "footer-icon" })
        )
    )
);

ReactDOM.render(footer, document.querySelector('#footer'));