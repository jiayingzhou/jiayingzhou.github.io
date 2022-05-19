var more = React.createElement(
    "div",
    { "class": "container py-3" },
    React.createElement(
        "button",
        { "class": "btn d-inline-flex align-items-center px-1", "data-bs-toggle": "collapse", "data-bs-target": "#more-collapse", "aria-expanded": "false" },
        "More"
    ),
    React.createElement(
        "div",
        { "class": "collapse py-3", id: "more-collapse" },
        React.createElement(
            "a",
            { href: "#publications" },
            "Publications"
        ),
        React.createElement("br", null),
        React.createElement(
            "a",
            { "data-bs-toggle": "collapse", href: "#collapseProject" },
            "Projects"
        ),
        React.createElement(
            "div",
            { "class": "container collapse", id: "collapseProject" },
            React.createElement(
                "a",
                { href: "http://just.urban-computing.com/" },
                "JUST"
            )
        ),
        React.createElement("br", null),
        React.createElement("div", { id: "news" }),
        React.createElement("div", { id: "publications" }),
        React.createElement("div", { id: "experiences" })
    )
);

ReactDOM.render(more, document.querySelector('#more'));