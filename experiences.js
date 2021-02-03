function Experience(props) {
    return React.createElement(
        "div",
        { "class": "row my-3" },
        React.createElement(
            "div",
            { "class": "col-md-9" },
            React.createElement(
                "my-bold",
                null,
                props.where
            ),
            React.createElement("br", null),
            React.createElement(
                "div",
                { "class": "font-weight-light" },
                props.role
            )
        ),
        React.createElement(
            "div",
            { "class": "col d-none d-md-block" },
            React.createElement(
                "div",
                { "class": "font-weight-light small float-right" },
                React.createElement(
                    "i",
                    null,
                    props.when
                )
            ),
            React.createElement(
                "div",
                { "class": "font-weight-light small float-right" },
                React.createElement(
                    "i",
                    null,
                    props.location
                )
            )
        ),
        React.createElement(
            "div",
            { "class": "col d-md-none" },
            React.createElement(
                "div",
                { "class": "font-weight-light small" },
                React.createElement(
                    "i",
                    null,
                    props.when
                )
            ),
            React.createElement(
                "div",
                { "class": "font-weight-light small" },
                React.createElement(
                    "i",
                    null,
                    props.location
                )
            )
        )
    );
}

var experiences = React.createElement(
    "div",
    { "class": "py-3" },
    React.createElement(
        "h5",
        null,
        "Experiences"
    ),
    React.createElement(Experience, { where: "University of Minnesota, Tiwn Cities", role: "Ph.D., Department of Computer Science & Engineering", when: "09/2020 - Present", location: "Minneapolis, MN USA" }),
    React.createElement(Experience, { where: "University of Minnesota, Tiwn Cities", role: "M.A., Department of Geography, Environment & Society", when: "09/2017 - 08/2020", location: "Minneapolis, MN USA" }),
    React.createElement(Experience, { where: "JD.com, Inc.", role: "Research & Algorithm Engineer Intern", when: "06/2019 - 11/2019", location: "Beijing, China" }),
    React.createElement(Experience, { where: "Wuhan University", role: "B.Eng., School of Remote Sensing and Information Engineering", when: "09/2013 - 06/2017", location: "Wuhan, China" })
);

ReactDOM.render(experiences, document.querySelector('#experiences'));