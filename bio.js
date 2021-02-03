var bio = React.createElement(
    "div",
    { "class": "container px-5" },
    React.createElement(
        "p",
        null,
        "I\u2019m a PhD student in the ",
        React.createElement(
            "a",
            { href: "https://www.cs.umn.edu/" },
            "Department of Computer Science & Engineering"
        ),
        "at ",
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
        "My interests are broadly in database management systems, big data, distributed and cloud systems. I'm particularlly interested in system architecture and implementation for large-scale analytics/transaction workloads. I also find streaming/real-time data systems interesting."
    ),
    React.createElement(
        "p",
        null,
        "My researches at UMN usually use spatial data as showcases."
    ),
    React.createElement(
        "p",
        null,
        "I think cloud DBMS is the future."
    )
);

ReactDOM.render(bio, document.querySelector('#bio'));