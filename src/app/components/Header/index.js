import React, {Component} from "react";

import {Link} from "@reach/router";
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import {Formik} from "formik";
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import "./styles.scss";
import {LineChart, Line} from 'recharts';

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

                        <Link className={`nav-link`} to="rejestracja">
                            <Button color="inherit" className={`nav-btn`}>Rejestracja</Button>
                        </Link>
                    </nav>
                </div>
            </AppBar>

        )
    }
}

export default Header;