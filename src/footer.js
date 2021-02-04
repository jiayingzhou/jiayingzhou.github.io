const footer =
    <div class="container px-5">
        <div class="bg-light text-muted my-footer">
            <span>&copy; 2021 Yuchuan Huang. Designed with Bootstrap and React. All rights reserved. </span>
            <i>Last updated: {document.lastModified}</i>
        </div>
    </div>;


ReactDOM.render(
    footer,
    document.querySelector('#footer')
);