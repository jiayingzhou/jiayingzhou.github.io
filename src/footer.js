const footer =
    <div class="container px-5">
        <div class="row bg-light py-1">
            <div class="col">
                <div class=" text-muted my-footer">
                    <span>&copy; 2021 Yuchuan Huang. Designed with Bootstrap and React. All rights reserved. </span>
                    <br />
                    <i>Last updated: {document.lastModified}</i>
                </div>
            </div>
            <div class="col-sm-2 py-1">
                <img class="d-none d-sm-block img-fluid" src="resource/icon/MHwdmk_D2Dgold.png" alt="footer-icon"></img>
                <img class="d-sm-none img-fluid w-50 mx-auto" src="resource/icon/MHwdmk_D2Dgold.png" alt="footer-icon"></img>
            </div>
        </div>
    </div>;


ReactDOM.render(
    footer,
    document.querySelector('#footer')
);