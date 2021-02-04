const footer =
    <div class="container px-5">

        <div class="row bg-light py-3">
            <div class="col">
                <div class=" text-muted my-footer">
                    <span>&copy; 2021 Yuchuan Huang. Designed with Bootstrap and React. All rights reserved. </span>
                    <i>Last updated: {document.lastModified}</i>
                </div>
            </div>
            <div class="col-sm-2">
                <img class="img-fluid" src="resource/icon/MHwdmk_D2Dgold.png" alt="footer-icon"></img>
            </div>
        </div>
    </div>;


ReactDOM.render(
    footer,
    document.querySelector('#footer')
);