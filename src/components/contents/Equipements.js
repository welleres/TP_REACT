import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TeamItem from "./TeamItem";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {Layout} from "../layout/Layout";
import Toolbar from "@material-ui/core/Toolbar";
import PropTypes from "prop-types";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
    textCenter:{
        textAlign: 'center'
    }
}));

export default function Equipements(props) {
    const {member} = props;
    const classes = useStyles();

    const item = (item, i) => {
        return (
            <Grid key={i} item xs={12} sm={6} md={4}>
                <TeamItem item={item}/>
            </Grid>
        );
    };

    if (member.equipments)
        return (
            <Layout>
                <div className={classes.root}>
                    {member.equipments.map((equipement, i) => {
                        return (
                            <Layout key={i}>
                                <Toolbar>
                                    <Typography variant="h6" color="inherit" noWrap>
                                        {equipement.type}
                                    </Typography>
                                </Toolbar>
                                <Grid className="equipement-grid" container spacing={0}>
                                    {equipement.items.map(item)}
                                </Grid>
                            </Layout>
                        );
                    })}
                </div>
            </Layout>
        );
    return <></>
}

Equipements.propTypes = {
    member: PropTypes.any.isRequired
};
