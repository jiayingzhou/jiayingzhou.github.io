const root =
    <div>
        <div class="container">
            <div id="header"></div>
            <div id="bio"></div>
            <div id="links"></div>
            <div id="more"></div>
        </div>
        <div class="my-footer" >
            <div class ="container" id="footer"></div>
        </div>
    </div>
    ;

ReactDOM.render(
    root,
    document.querySelector('#root')
);