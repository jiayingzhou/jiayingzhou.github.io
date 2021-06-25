var footer = React.createElement(
    "div",
    { "class": "container py-3 text-light" },
    React.createElement(
        "div",
        null,
        React.createElement(
            "h5",
            null,
            "Contact"
        ),
        "Email: huan1531 [at] umn [dot] edu",
        React.createElement("br", null),
        React.createElement("br", null),
        "Kenneth H. Keller Hall",
        React.createElement("br", null),
        "200 Union Street SE",
        React.createElement("br", null),
        "Minneapolis, MN 55455"
    ),
    React.createElement("hr", null),
    React.createElement(
        "div",
        { "class": "row" },
        React.createElement(
            "div",
            { "class": "col" },
            React.createElement(
                "div",
                null,
                "\xA9 2021 Yuchuan Huang. Designed with Bootstrap and React. All rights reserved.",
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
            { "class": "col-sm-3" },
            React.createElement("img", { "class": "d-none d-sm-block img-fluid", src: "resource/icon/MHwdmk_D2Dgold.png", alt: "footer-icon" }),
            React.createElement("img", { "class": "d-block d-sm-none img-fluid w-50 mx-auto py-2", src: "resource/icon/MHwdmk_D2Dgold.png", alt: "footer-icon" })
        )
    )
);

ReactDOM.render(footer, document.querySelector('#footer'));