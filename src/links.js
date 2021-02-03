const links =
    <div class="container px-5" id="quickLinks">
        <a data-bs-toggle="collapse" href="#collapseBio">[Bio]</a>
        <a data-bs-toggle="collapse" href="#collapseContact">[Contact]</a>
        <a href="">[CV]</a>
        <a href="https://scholar.google.com/citations?user=QLZJaXgAAAAJ&hl=en">[Google Scholar]</a>
        <a href="https://www.linkedin.com/in/yuchuan-huang-db/">[LinkedIn]</a>

        <div class="accordion-group">
            <div class="collapse" id="collapseBio" data-bs-parent="#quickLinks">
                <div>
                    <div class="container alert alert-success">
                        Yuchuan Huang is a PhD student in the Department of Computer Science & Engineering at University of Minnesota, Twin Cities.
                        His research interests are in database management systems.
                        Yuchuan is advised by Prof. Mohamed F. Mokbel.
                        </div>
                </div>
            </div>
            <div class="collapse" id="collapseContact" data-bs-parent="#quickLinks">
                <div>
                    <div class="container alert alert-success">
                        <span>Email: huan1531[at]umn[dot]edu</span>
                        <hr />
                            Kenneth H. Keller Hall<br />
                            200 Union Street SE<br />
                            Minneapolis, MN 55455
                        </div>
                </div>
            </div>
        </div>
    </div>;



ReactDOM.render(
    links,
    document.querySelector('#links')
);