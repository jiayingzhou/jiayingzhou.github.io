function Paper(props) {
    return (
        <li>
            <my-bold >{props.time}</my-bold> {props.content}
        </li>
    );
}


const justNews = <span>My work at JD.com <a href="#JUST">JUST: JD Urban Spatio-Temporal Data Engine</a> has been accepted to <a href="https://www.utdallas.edu/icde/">ICDE 2020</a>.</span>

const news =
    <div class="py-3">
        <h5>News</h5>
        <Paper time="12/2019" content={justNews} />
    </div>;


ReactDOM.render(
    news,
    document.querySelector('#news')
);