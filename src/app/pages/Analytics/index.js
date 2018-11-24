import React, {Component} from "react";
import './styles.scss';
import {Router, Link} from "@reach/router";
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import AnalyticsOne from "./AnalyticsOne";
import AnalyticsTwo from "./AnalyticsTwo";
import AnalyticsThree from "./AnalyticsThree";
class Analytics extends Component {

    componentDidMount() {

    }
    render() {

        return (
            <div className="analytics">
                <div className="sideNav">
                <MenuList>
                    <MenuItem>
                    <Link to="AnalyticsOne">Mapa wyszukiwań szpitali</Link>
                    </MenuItem>
                    <MenuItem>
                    <Link to="AnalyticsTwo">Najczęściej szukane usługi</Link>
                    </MenuItem>
                    <MenuItem>
                    <Link to="AnalyticsThree">Publiczne vs. prywatne</Link>
                    </MenuItem>
                </MenuList>
                </div>

                <Router>
                    <AnalyticsOne path="AnalyticsOne"></AnalyticsOne>
                    <AnalyticsTwo path="AnalyticsTwo"></AnalyticsTwo>
                    <AnalyticsThree path="AnalyticsThree"></AnalyticsThree>
                </Router>
            </div>
        )
    }
}
export default Analytics;