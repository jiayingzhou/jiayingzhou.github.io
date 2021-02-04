function Paper(props) {
    return React.createElement(
        "li",
        null,
        React.createElement(
            "my-bold",
            null,
            props.time
        ),
        " ",
        props.content
    );
}

var justNews = React.createElement(
    "span",
    null,
    "My work at JD.com ",
    React.createElement(
        "a",
        { href: "#JUST" },
        "JUST: JD Urban Spatio-Temporal Data Engine"
    ),
    " has been accepted to ",
    React.createElement(
        "a",
        { href: "https://www.utdallas.edu/icde/" },
        "ICDE 2020"
    ),
    "."
);

var news = React.createElement(
    "div",
    { "class": "py-3" },
    React.createElement(
        "h5",
        null,
        "News"
    ),
    React.createElement(Paper, { time: "12/2019", content: justNews })
);

ReactDOM.render(news, document.querySelector('#news'));