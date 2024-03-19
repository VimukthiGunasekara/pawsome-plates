export default function Navbar() {
    return (
        <div className="navbar container">
            <a className="logo" href="#!">Pawsome<span> Plates</span></a>
            <div className="nav-links">
                <a className="active" href="#!">Home</a>
                <a href="#!">Recipes</a>
                <a href="#!">Settings</a>
            </div>
        </div>
    )
}