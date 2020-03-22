import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import {makeStyles} from '@material-ui/core/styles';
import PropTypes from "prop-types";

const useStyles = makeStyles(theme => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));

export default function Loading(props) {
    const classes = useStyles();
    const {open} = props;

    const endListener = () => {
        console.log("End listener");
    };

    return (
        <>
            <Backdrop timeout={5000} className={classes.backdrop} open={open} addEndListener={endListener}>
                <CircularProgress color="inherit"/>
            </Backdrop>
        </>
    );
}

Loading.propTypes = {
    open: PropTypes.bool.isRequired,
};