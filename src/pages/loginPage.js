import { useState } from "react";

import LoginPanel from "../components/loginPanel"

export default function LoginPage() {

    const [windowHeight, setWindowHeight] = useState(window.innerHeight);
    console.log(windowHeight)


    window.addEventListener("resize", () => {
        setWindowHeight(window.innerHeight);
    });

    return (
        <div style={{ width: "100%", height: `${windowHeight}px`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <LoginPanel />
        </div>
    )
}