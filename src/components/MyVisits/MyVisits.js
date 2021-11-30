const MyVisits = () => {
    return(
        <section id="my-caves-page" className="my-caves">
            <h1>My Visits</h1>
            <ul className="my-caves-list">
                <li className="otherCaves">
                    <p className="img"><img src="/images/dog.png"/></p>
                    <h3>Name:</h3>
                    <p>Location:</p>
                    <a className="button" href="#">Details</a>
                </li>
                <li className="otherCaves">
                    <p className="img"><img src="/images/dog.png"/></p>
                    <h3>Name:</h3>
                    <p>Location:</p>
                    <a className="button" href="#">Details</a>
                </li>
            </ul>

            <p className="no-items">No caves in database!</p>
        </section>
    )
}
export default MyVisits