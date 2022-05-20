var header = React.createElement(
    "div",
    { "class": "container mt-5 py-5" },
    React.createElement(
        "div",
        { "class": "row" },
        React.createElement(
            "div",
            { "class": "col" },
            React.createElement(
                "h2",
                null,
                "I'm Jiaying Zhou."
            )
        ),
        React.createElement(
            "div",
            { "class": "col-2" },
            React.createElement("img", { "class": "d-none d-sm-block my-profile", src: "resource/profile/1440x1440.png", alt: "profile" })
        )
    )
);

ReactDOM.createRoot(document.getElementById('header')).render(header);