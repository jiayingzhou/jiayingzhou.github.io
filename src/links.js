const links =
    <div class="container" id="quickLinks">
        <a data-bs-toggle="collapse" href="#collapseBio">[Bio]</a>
        <a href="">[CV]</a>
        <a href="https://github.com/yhuang-db">[GitHub]</a>
        <a href="https://scholar.google.com/citations?user=QLZJaXgAAAAJ&hl=en">[Google Scholar]</a>
        <a href="https://www.linkedin.com/in/yuchuan-huang-db/">[LinkedIn]</a>

        <div class="collapse" id="collapseBio" data-bs-parent="#quickLinks">
            <div>
                <div class="container alert alert-success">
                    Yuchuan Huang is a PhD student in the Department of Computer Science & Engineering at University of Minnesota, Twin Cities.
                    His research interest is database management systems.
                    Yuchuan is advised by Prof. Mohamed F. Mokbel.
                </div>
            </div>
        </div>
    </div>;


ReactDOM.render(
    links,
    document.querySelector('#links')
);