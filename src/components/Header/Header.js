import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext.js"
const Header = () => {
    const {user} = useContext(AuthContext)
    return(
        <header>
            <nav className="navbar">
                <section className="topnav">
                    <a href="/">Dashboard</a>
                    {user.email
                    ?(<div id="user">
                        <a className="button" href="/my-visits">My Visits</a>
                        <a className="button" href="/create">Add Cave</a>
                        <a className="button" href="#">Logout</a>
                        <span>Welcome, {user.email}</span>
                    </div>)
                    :(<div id="guest">
                    <a className="button" href="/login">Login</a>
                    <a className="button" href="/register">Register</a>
                </div>)
                }
                    
                    
                </section>
            </nav>
        </header>
    )
}
export default Header