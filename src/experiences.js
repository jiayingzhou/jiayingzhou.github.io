function Experience(props) {
    return (
        <div class="row my-3">
            <div class="col-md-9">
                <div class="my-bold">{props.where}</div>
                <div class="fw-light">{props.role}</div>
            </div>
            <div class="col">
                <div class="fw-light small"><i>{props.when}</i></div>
                <div class="fw-light small"><i>{props.location}</i></div>
            </div>
        </div>
    );
}


const experiences =
    <div class="py-3">
        <h5>Experiences</h5>
        <Experience where="University of Minnesota, Twin Cities" role="Ph.D., Department of Computer Science & Engineering" when="09/2020 - Present" location="Minneapolis, MN USA" />
        <Experience where="University of Minnesota, Twin Cities" role="M.A., Department of Geography, Environment & Society" when="09/2017 - 08/2020" location="Minneapolis, MN USA" />
        <Experience where="JD.com, Inc." role="Research & Algorithm Engineer Intern" when="06/2019 - 11/2019" location="Beijing, China" />
        <Experience where="Wuhan University" role="B.Eng., School of Remote Sensing and Information Engineering" when="09/2013 - 06/2017" location="Wuhan, China" />
    </div>;


ReactDOM.render(
    experiences,
    document.querySelector('#experiences')
);