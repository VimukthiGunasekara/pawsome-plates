import { Link, useLocation } from "react-router-dom"
import { useState } from "react"
import Sidebar from "./Sidebar"

export default function Navbar() {
    const location = useLocation()
    const [showSidebar, setShowSidebar] = useState(false)
    const links = [
        {
            name: "Home",
            path: "/"
        },
        {
            name: "Recipes",
            path: "/recipes"
        },
        {
            name: "PlayList",
            path: "/playlist"
        }
    ]

    function closeSidebar() {
        setShowSidebar(false)
    }

    return (
        <>
            <div className="navbar container">
                <Link to="/" className="logo">Pawsome<span> Plates</span></Link>
                <div className="nav-links">
                    {links.map(link => (
                        <Link className={location.pathname === link.path ? "active" : " "} to={link.path} key={link.name}>{link.name}</Link>
                    ))}
                </div>
                <div onClick={() => setShowSidebar(true)} className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
            {showSidebar && <Sidebar close={closeSidebar} links={links} />}

        </>
    )
}