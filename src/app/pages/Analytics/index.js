import React, {Component} from "react";
import './styles.scss';
import {Router, Link} from "@reach/router";
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';

import AnalyticsOne from "./AnalyticsOne";
import AnalyticsTwo from "./AnalyticsTwo";
import AnalyticsThree from "./AnalyticsThree";
import AnalyticsFour from "./AnalyticsFour";
import DistanceMap from "./DistanceMap";
import UserPreferences from "./UserPreferences";
class Analytics extends Component {

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
                        <Link to="AnalyticsThree">Porzucone rezerwacje</Link>
                        </MenuItem>
                        <MenuItem>
                        <Link to="AnalyticsFour">Aktywność wojewodztw</Link>
                        </MenuItem>
                        <MenuItem>
                        <Link to="DistanceMap">Aktywność uztkowników</Link>
                        </MenuItem>
                        <MenuItem>
                        <Link to="UserPreferences">Preferencje uytkowników</Link>
                        </MenuItem>
                    </MenuList>
                </div>

                <Router>
                    <AnalyticsOne path="AnalyticsOne"></AnalyticsOne>
                    <AnalyticsTwo path="AnalyticsTwo"></AnalyticsTwo>
                    <AnalyticsThree path="AnalyticsThree"></AnalyticsThree>
                    <AnalyticsFour path="AnalyticsFour"></AnalyticsFour>
                    <DistanceMap path="DistanceMap"></DistanceMap>
                    <UserPreferences path="UserPreferences"></UserPreferences>
                </Router>
            </div>
        )
    }
}
export default Analytics;