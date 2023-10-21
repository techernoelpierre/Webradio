import "./navigation.css"

export function Navigation() {
    return (
        <nav className="navigation">
            <img src="../images/webradioLogo" alt="" style={{ width: "20px", height: "20px" }} />
            <div>
                <button className="LeDirect">Le direct</button>
            </div>
        </nav>
    )
}