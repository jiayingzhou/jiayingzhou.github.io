function Publication(props) {
    return React.createElement(
        "div",
        { "class": "row my-3" },
        React.createElement(
            "div",
            { "class": "col-md-1" },
            React.createElement(
                "div",
                { "class": "container px-0" },
                React.createElement(
                    "a",
                    { href: props.pdfLink, "class": "d-none d-md-block" },
                    React.createElement("img", { src: props.thumbnails, alt: props.thumbnailsAlt, "class": "img-fluid img-thumbnail shadow-sm" })
                )
            )
        ),
        React.createElement(
            "div",
            { "class": "col" },
            React.createElement(
                "div",
                { "class": "container" },
                React.createElement(
                    "a",
                    { href: props.titleLink },
                    props.title
                ),
                React.createElement(
                    "p",
                    { "class": "font-weight-light small" },
                    props.authorsBefore,
                    React.createElement(
                        "span",
                        { "class": "my-bold" },
                        "Yuchuan Huang"
                    ),
                    props.authorsAfter,
                    React.createElement("br", null),
                    props.proceeding,
                    React.createElement("br", null),
                    props.extraLinks
                )
            )
        )
    );
}

var justProceeding = React.createElement(
    "span",
    null,
    React.createElement(
        "i",
        null,
        "Proceedings of the 36th IEEE International Conference on Data Engineering"
    ),
    ", pages. 1558\u20141569, April 2020"
);
var justLinks = React.createElement(
    "span",
    null,
    React.createElement(
        "a",
        { href: "http://just.urban-computing.com/" },
        "[Demo]"
    ),
    React.createElement(
        "a",
        { href: "resource/papers/icde2020_just.pdf" },
        "[PDF]"
    ),
    React.createElement(
        "a",
        { href: "https://drive.google.com/file/d/1IZnxBmhp_12rfSktjZO2jUGfIr2mUeTQ/view" },
        "[Slides]"
    ),
    React.createElement(
        "a",
        { href: "https://www.youtube.com/watch?v=0zuk9d7Vjhk&t=951s" },
        "[Video]"
    )
);
var just = React.createElement(Publication, { pdfLink: "resource/papers/icde2020_just.pdf", thumbnails: "resource/papers/thumbnails/icde2020_just.png", thumbnailsAlt: "icde2020",
    titleLink: "https://ieeexplore.ieee.org/document/9101507", title: "JUST: JD Urban Spatio-Temporal Data Engine",
    authorsBefore: "Ruiyuan Li, Huajun He, Rubin Wang, ", authorsAfter: ", Junwen Liu, Sijie Ruan, Tianfu He, Jie Bao and Yu Zheng",
    proceeding: justProceeding,
    extraLinks: justLinks });

var publications = React.createElement(
    "div",
    { "class": "py-3" },
    React.createElement(
        "h5",
        null,
        "Publications"
    ),
    React.createElement(
        "div",
        null,
        "2020"
    ),
    React.createElement("hr", { "class": "my-1" }),
    React.createElement(
        "div",
        { id: "JUST" },
        just
    )
);

ReactDOM.createRoot(document.getElementById('publications')).render(publications);