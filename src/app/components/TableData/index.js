import React, {Component} from "react";
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './styles.scss';

const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white
    },
    body: {
        fontSize: 14
    }
}))(TableCell);

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto'
    },
    table: {
        minWidth: 700
    },
    row: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default
        }
    }
});

function PlacesTable(props) {
    const {classes, places} = props;

   /*  handleRowPlacesTableClick = () => {

    } */
    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <CustomTableCell>Nazwa</CustomTableCell>
                        <CustomTableCell>Lokalizacja</CustomTableCell>
                        <CustomTableCell>Dostępność</CustomTableCell>
                        <CustomTableCell>Dystans</CustomTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {places && places.map(x => {
                        return (
                            <TableRow className={classes.row} key={x.attributes.id}>
                                <CustomTableCell key={x.attributes.id} component="th" scope="row">
                                    {x.attributes.provider}
                                </CustomTableCell>
                                <CustomTableCell key={x.attributes.id} numeric>{`${x.attributes.locality}, ${x.attributes.address}`}</CustomTableCell>
                                <CustomTableCell key={x.attributes.id} numeric>{x.attributes.dates.date}</CustomTableCell>
                                <CustomTableCell key={x.distance} numeric>{Math.round(x.distance * 111.1) + "km"}</CustomTableCell>

                            </TableRow>
                        );
                    })}</TableBody>
            </Table>
        </Paper>
    );
}

class TableData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    // handleRowTableClick = () => {
    //     this.props.onSelectRow('sss')
    // }
    // componentDidMount() {

    //     fetch('https://api.nfz.gov.pl/queues?page=1&limit=10&format=json&case=1&province=07&loc' +
    //                 'ality=Warszawa')
    //         .then(response => response.json())
    //         .then(data => this.setState({data}))

    // }

    render() {

        return (

            <div className="table-container">
            {console.log(this.props.dataPlaces)}
                <PlacesTable places={this.props.dataPlaces.data ? this.props.dataPlaces.data : null} classes={this.props.classes}/></div>
        )
    }
}

PlacesTable.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TableData);