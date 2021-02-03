var links = React.createElement(
    "div",
    { "class": "container px-5", id: "quickLinks" },
    React.createElement(
        "a",
        { "data-bs-toggle": "collapse", href: "#collapseBio" },
        "[Bio]"
    ),
    React.createElement(
        "a",
        { "data-bs-toggle": "collapse", href: "#collapseContact" },
        "[Contact]"
    ),
    React.createElement(
        "a",
        { href: "" },
        "[CV]"
    ),
    React.createElement(
        "a",
        { href: "https://scholar.google.com/citations?user=QLZJaXgAAAAJ&hl=en" },
        "[Google Scholar]"
    ),
    React.createElement(
        "a",
        { href: "https://www.linkedin.com/in/yuchuan-huang-db/" },
        "[LinkedIn]"
    ),
    React.createElement(
        "div",
        { "class": "accordion-group" },
        React.createElement(
            "div",
            { "class": "collapse", id: "collapseBio", "data-bs-parent": "#quickLinks" },
            React.createElement(
                "div",
                null,
                React.createElement(
                    "div",
                    { "class": "container alert alert-success" },
                    "Yuchuan Huang is a PhD student in the Department of Computer Science & Engineering at University of Minnesota, Twin Cities. His research interests are in database management systems. Yuchuan is advised by Prof. Mohamed F. Mokbel."
                )
            )
        ),
        React.createElement(
            "div",
            { "class": "collapse", id: "collapseContact", "data-bs-parent": "#quickLinks" },
            React.createElement(
                "div",
                null,
                React.createElement(
                    "div",
                    { "class": "container alert alert-success" },
                    React.createElement(
                        "span",
                        null,
                        "Email: huan1531[at]umn[dot]edu"
                    ),
                    React.createElement("hr", null),
                    "Kenneth H. Keller Hall",
                    React.createElement("br", null),
                    "200 Union Street SE",
                    React.createElement("br", null),
                    "Minneapolis, MN 55455"
                )
            )
        )
    )
);

ReactDOM.render(links, document.querySelector('#links'));