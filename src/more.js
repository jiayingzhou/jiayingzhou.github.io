const more =
    <div class="container py-3">
        <button class="btn d-inline-flex align-items-center px-1" data-bs-toggle="collapse" data-bs-target="#more-collapse" aria-expanded="false">
            More
        </button>
        <div class="collapse py-3" id="more-collapse">
            <a href="#publications">Publications</a>
            <br />
            <a data-bs-toggle="collapse" href="#collapseProject">Projects</a>
            <div class="container collapse" id="collapseProject">
                <a href="http://just.urban-computing.com/">JUST</a>
            </div>
            <br />
            <div id="news"></div>
            <div id="publications"></div>
            <div id="experiences"></div>
        </div>
    </div>;

ReactDOM.render(more, document.querySelector('#more'));
// ReactDOM.createRoot(document.getElementById('more')).render(more);