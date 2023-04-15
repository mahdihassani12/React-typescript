import { useState } from "react"

export const Loggedin = () => {

    const [ isLoggedIn, setIsLoggedIn ] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    }
    const handleLogout = () => {
        setIsLoggedIn(false);
    }

    return (
        <div>
            <button onClick={ handleLogin } >Login</button>
            <button onClick={ handleLogout } >Logout</button>
            <p>
                User is { isLoggedIn ? ' log in ' : ' log out ' }
            </p>
        </div>
    )
}