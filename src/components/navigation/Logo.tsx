import { Link } from "react-router-dom";
import PoetreeLogo from "../../static/images/logo.svg";

export const Logo = () => {
    return (
        <Link to="/">
            <img src={PoetreeLogo} width={120} alt="Poetree's logo"/>
        </Link>
    );
}
