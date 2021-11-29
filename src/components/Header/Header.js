import {Link} from 'react-router-dom'
const Header = () => {
    return(
        <header>
            <nav className="navbar">
                <section className="topnav">
                    <a href="/">Dashboard</a>
                    <div id="guest">
                        <a className="button" href="/login">Login</a>
                        <a className="button" href="/register">Register</a>
                    </div>
                    <div id="user">
                        <a className="button" href="/my-visits">My Visits</a>
                        <a className="button" href="/create">Add Pet</a>
                        <a className="button" href="#">Logout</a>
                        <span>Welcome, email</span>
                    </div>
                </section>
            </nav>
        </header>
    )
}
export default Header