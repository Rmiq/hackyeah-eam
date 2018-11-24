import React, {Component} from "react";

import {Link} from "@reach/router";
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';

import "./styles.scss";

class Header extends Component {
    render() {

        return (

            <AppBar >
                <div className={`nav class-2`}>
                    <h1 className="nav-logo">Hackyeah-EAM</h1>
                    <nav>

                        <Link className={`nav-link`} to="/">
                            <Button color="inherit" classes={`nav-btn`}>Home</Button>
                        </Link>

                        <Link className={`nav-link`} to="rejestracja">
                            <Button color="inherit" classes={`nav-btn`}>Rejestracja</Button>
                        </Link>

                    </nav>
                </div>
            </AppBar>

        )
    }
}

export default Header;