var root = React.createElement(
    "div",
    { "class": "d-flex flex-column min-vh-100" },
    React.createElement(
        "div",
        { "class": "container" },
        React.createElement("div", { id: "header" }),
        React.createElement("div", { id: "bio" }),
        React.createElement("div", { id: "links" }),
        React.createElement("div", { id: "more" })
    ),
    React.createElement(
        "div",
        { "class": "my-footer mt-auto" },
        React.createElement("div", { "class": "container", id: "footer" })
    )
);

ReactDOM.render(root, document.querySelector('#root'));
// ReactDOM.createRoot(document.getElementById('root')).render(root);