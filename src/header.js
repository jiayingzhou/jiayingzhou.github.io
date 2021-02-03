const header =
    <div class="container px-5 mt-5 py-5">
        <div class="row">
            <div class="col">
                <h2 class="my-header">I'm Yuchuan Huang.</h2>
            </div>
            <div class="col-2">
                <img class="profile img-fluid d-none d-sm-block" src="resource/profile/1440x1440.jpeg" alt="profile"></img>
            </div>
        </div>
    </div>;


ReactDOM.render(
    header,
    document.querySelector('#header')
);