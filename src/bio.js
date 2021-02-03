const bio =
    <div class="container px-5">
        <p>
            I’m a PhD student in the <a href="https://www.cs.umn.edu/">Department of Computer Science & Engineering</a>
            at <a href="https://twin-cities.umn.edu/">University of Minnesota, Twin Cities</a>,
            advised by <a href="https://www-users.cs.umn.edu/~mokbel/">Prof. Mohamed F. Mokbel</a>.
        </p>
        <p>
            My interests are broadly in database management systems, big data, distributed and cloud systems.
            I'm particularlly interested in system architecture and implementation for large-scale analytics/transaction workloads.
            I also find streaming/real-time data systems interesting.
        </p>
        <p>
            My researches at UMN usually use spatial data as showcases.
        </p>
        <p>
            I think cloud DBMS is the future.
        </p>
    </div>;


ReactDOM.render(
    bio,
    document.querySelector('#bio')
);