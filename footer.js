var footer = React.createElement(
    "div",
    { "class": "container px-5" },
    React.createElement(
        "div",
        { "class": "bg-light text-muted my-footer" },
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
);

ReactDOM.render(footer, document.querySelector('#footer'));