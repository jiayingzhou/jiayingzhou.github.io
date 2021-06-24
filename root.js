var root = React.createElement(
    "div",
    { "class": "container px-5" },
    React.createElement("div", { id: "header" }),
    React.createElement("div", { id: "bio" }),
    React.createElement("div", { id: "links" }),
    React.createElement("div", { id: "more" }),
    React.createElement("div", { id: "footer" })
);

ReactDOM.render(root, document.querySelector('#root'));