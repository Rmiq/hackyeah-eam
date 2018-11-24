import React, {Component} from "react";

import {Link} from "@reach/router";
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import "./styles.scss";

class Header extends Component {
    render() {

        return (

            <AppBar position="sticky">
                <div className={`nav class-2`}>
                    <h1 className="nav-logo">Hackyeah-EAM</h1>
                    <nav>
                        <Link className={`nav-link`} to="/">
                            <Button color="inherit" className={`nav-btn`}>Home</Button>
                        </Link>

                        <Link className={`nav-link`} to="znajdz-wizyte">
                            <Button color="inherit" className={`nav-btn`}>Znajdź wizyte</Button>
                        </Link>
                        <Link className={`nav-link`} to="dane-analityczne">
                            <Button color="inherit" className={`nav-btn`}>Dane analityczne</Button>
                        </Link>
                    </nav>
                </div>
            </AppBar>

        )
    }
}

export default Header;