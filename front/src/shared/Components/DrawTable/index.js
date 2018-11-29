import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from "@material-ui/core/Table";
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '90%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
    margin: '5%'
  },
  table: {
    minWidth: 700,
  },
});

const DrawTable = ({ classes, structure, data }) => (
  <Paper className={classes.root}>
    <Table className={classes.table}>
      <TableHead>
        <TableRow>
          {structure.map(keyName => (
            <TableCell>{keyName.label}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map(obj => (
          <TableRow key={obj.id}>
            {structure.map(keyName => (
                <TableCell>{obj[keyName.key]}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

DrawTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DrawTable);
