import { useState } from "react"
import Sidebar from "./Sidebar"

export default function Navbar() {

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
            name: "Settings",
            path: "/settings"
        }
    ]

    function closeSidebar() {
        setShowSidebar(false)
    }

    return (
        <>
            <div className="navbar container">
                <a className="logo" href="#!">Pawsome<span> Plates</span></a>
                <div className="nav-links">
                    {links.map(link => (
                        <a href="#!" key={link.name}>{link.name}</a>
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