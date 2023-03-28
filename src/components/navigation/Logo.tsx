import { Link } from "react-router-dom";

export const Logo = () => {
    return (
        <Link 
            to="/"
            style={{
                fontFamily: "Merienda, cursive",
                fontSize: "1.5rem",
                color: "white",
                textDecoration: "none"
            }}
        >
            Poetree
        </Link>
    );
}
