const root =
    <div class="d-flex flex-column min-vh-100">
        <div class="container">
            <div id="header"></div>
            <div id="bio"></div>
            <div id="links"></div>
            <div id="more"></div>
        </div>
        <div class="my-footer mt-auto" >
            <div class="container" id="footer"></div>
        </div>
    </div>
    ;

ReactDOM.render(root, document.querySelector('#root'));
// ReactDOM.createRoot(document.getElementById('root')).render(root);