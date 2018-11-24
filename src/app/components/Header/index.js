import React, {Component} from "react";
import {Link} from "@reach/router"

class Header extends Component {
    render() {

        return (
            <div>

                <nav>
                    <Link to="/">Home</Link>
                    |{" "}
                    <Link to="rejestracja">Rejestracja</Link>
                </nav>

            </div>
        )
    }
}

export default Header;