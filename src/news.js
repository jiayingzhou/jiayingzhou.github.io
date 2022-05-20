function News(props) {
    return (
        <div>
            <span class="my-bold">{props.time} - </span>{props.content}
        </div>
    );
}


const justNews = <span>My work at JD.com <a href="#JUST">JUST: JD Urban Spatio-Temporal Data Engine</a> has been accepted to <a href="https://www.utdallas.edu/icde/">ICDE 2020</a>.</span>

const news =
    <div class="py-3">
        <h5>News</h5>
        <News time="12/2019" content={justNews} />
    </div>;

ReactDOM.createRoot(document.getElementById('news')).render(news);