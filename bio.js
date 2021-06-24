var bio = React.createElement(
    "div",
    { "class": "container" },
    React.createElement(
        "p",
        null,
        "I\u2019m a PhD student in the ",
        React.createElement(
            "a",
            { href: "https://www.cs.umn.edu/" },
            "Department of Computer Science & Engineering"
        ),
        " at ",
        React.createElement(
            "a",
            { href: "https://twin-cities.umn.edu/" },
            "University of Minnesota, Twin Cities"
        ),
        ", advised by ",
        React.createElement(
            "a",
            { href: "https://www-users.cs.umn.edu/~mokbel/" },
            "Prof. Mohamed F. Mokbel"
        ),
        "."
    ),
    React.createElement(
        "p",
        null,
        "My interests are broadly in database management systems, distributed and cloud systems. I'm particularly interested in system architectures for scalable analytics/transaction workloads. I also find streaming/real-time data systems interesting."
    ),
    React.createElement(
        "p",
        null,
        "My researches at UMN usually use spatial data as showcases."
    )
);

ReactDOM.render(bio, document.querySelector('#bio'));