var header = React.createElement(
    "div",
    { "class": "container px-5 mt-5 py-5" },
    React.createElement(
        "div",
        { "class": "row" },
        React.createElement(
            "div",
            { "class": "col" },
            React.createElement(
                "h2",
                { "class": "my-header" },
                "I'm Yuchuan Huang."
            )
        ),
        React.createElement(
            "div",
            { "class": "col-2" },
            React.createElement("img", { "class": "profile img-fluid d-none d-sm-block", src: "resource/profile/1440x1440.jpeg", alt: "profile" })
        )
    )
);

ReactDOM.render(header, document.querySelector('#header'));