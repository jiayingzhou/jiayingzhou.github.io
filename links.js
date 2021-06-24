var links = React.createElement(
    "div",
    { "class": "container", id: "quickLinks" },
    React.createElement(
        "a",
        { "data-bs-toggle": "collapse", href: "#collapseBio" },
        "[Bio]"
    ),
    React.createElement(
        "a",
        { href: "" },
        "[CV]"
    ),
    React.createElement(
        "a",
        { href: "https://github.com/yhuang-db" },
        "[GitHub]"
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
        { "class": "collapse", id: "collapseBio", "data-bs-parent": "#quickLinks" },
        React.createElement(
            "div",
            null,
            React.createElement(
                "div",
                { "class": "container alert alert-success" },
                "Yuchuan Huang is a PhD student in the Department of Computer Science & Engineering at University of Minnesota, Twin Cities. His research interest is database management systems. Yuchuan is advised by Prof. Mohamed F. Mokbel."
            )
        )
    )
);

ReactDOM.render(links, document.querySelector('#links'));