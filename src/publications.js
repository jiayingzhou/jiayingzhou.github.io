function Publication(props) {
    return (
        <div class="row my-3">
            <div class="col-md-1">
                <div class="container px-0">
                    <a href={props.pdfLink} class="d-none d-md-block">
                        <img src={props.thumbnails} alt={props.thumbnailsAlt} class="img-fluid img-thumbnail shadow-sm"></img>
                    </a>
                </div>
            </div>
            <div class="col">
                <div class="container">
                    <a href={props.titleLink}>{props.title}</a>
                    <p class="font-weight-light small">
                        {props.authorsBefore}<span class="my-bold">Yuchuan Huang</span>{props.authorsAfter}
                        <br />
                        {props.proceeding}
                        <br />
                        {props.extraLinks}
                    </p>
                </div>
            </div>
        </div>
    );
}


const justProceeding = <span><i>Proceedings of the 36th IEEE International Conference on Data Engineering</i>, pages. 1558—1569, April 2020</span>;
const justLinks =
    <span><a href="http://just.urban-computing.com/">[Demo]</a>
        <a href="resource/papers/icde2020_just.pdf">[PDF]</a>
        <a href="https://drive.google.com/file/d/1IZnxBmhp_12rfSktjZO2jUGfIr2mUeTQ/view">[Slides]</a>
        <a href="https://www.youtube.com/watch?v=0zuk9d7Vjhk&t=951s">[Video]</a></span>;
const just =
    <Publication pdfLink="resource/papers/icde2020_just.pdf" thumbnails="resource/papers/thumbnails/icde2020_just.png" thumbnailsAlt="icde2020"
        titleLink="https://ieeexplore.ieee.org/document/9101507" title="JUST: JD Urban Spatio-Temporal Data Engine"
        authorsBefore="Ruiyuan Li, Huajun He, Rubin Wang, " authorsAfter=", Junwen Liu, Sijie Ruan, Tianfu He, Jie Bao and Yu Zheng"
        proceeding={justProceeding}
        extraLinks={justLinks} />;

const publications =
    <div class="py-3">
        <h5 >Publications</h5>
        <div>2020</div>
        <hr class="my-1" />
        <div id="JUST">{just}</div>
    </div>;


ReactDOM.render(
    publications,
    document.querySelector('#publications')
);