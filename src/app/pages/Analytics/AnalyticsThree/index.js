import React, {Component} from "react";
import './styles.scss';
import {withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import {
    PieChart,
    Pie,
    Tooltip,Cell
} from 'recharts';

const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white
    },
    body: {
        fontSize: 14
    }
}))(TableCell);

class AnalyticsThree extends Component {

    componentDidMount() {

        const url = "https://0f9gctnbb6.execute-api.eu-central-1.amazonaws.com/hackyeah-eam/get-data/most-common?criteria=isFinalized";
        fetch(url)
            .then(response => response.json())
            .then(data => this.setState({ dataPlaces: data.query }));
    }

    constructor(props) {
        super(props);
        this.state = {
          dataPlaces: []
        }
    }

    render() {
        const COLORS = ['#d50000', '#039be5'];
        return (
            <div className="analytics-heading">
                <h2>Porzucone rezerwacje</h2>
                <p>Ile osób szukało placówki ale nie zdecydowało się na umówienie wizyty.</p>
                <div className="charts-container">
                <PieChart width={800} height={400}>
                    <Pie isAnimationActive={false} data={this.state.dataPlaces} cx={200} cy={200} outerRadius={80} fill="#8884d8" label>
                        {this.state.dataPlaces.map((entry,index)=><Cell fill={COLORS[index % COLORS.length]}/>)}
                    </Pie>
                    <Tooltip/>
                </PieChart>
                <Paper>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <CustomTableCell>Decyzja</CustomTableCell>
                                <CustomTableCell>Ilosc</CustomTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.dataPlaces && this.state.dataPlaces.map(x => {
                                return (
                                    <TableRow key={x.name}>
                                        
                                        <CustomTableCell key={x.name} component="th" scope="row">
                                            {x.name == 'false' ? "Nie" : "Tak"}
                                        </CustomTableCell>
                                        <CustomTableCell key={x.value} component="th" scope="row">
                                            {x.value}
                                        </CustomTableCell>
                                        
                                        
                                    </TableRow>
                                );
                            })}</TableBody>
                    </Table>
                </Paper>
                
                </div>
            </div>
        )
    }
}
export default AnalyticsThree;