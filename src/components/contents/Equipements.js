import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import metallicaData from "../../data/mettalica";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

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
}));

export default function Equipements() {
    const classes = useStyles();
    const items = metallicaData.members[1].equipments[0]?.items;

    const item = (item, i) => {
        return (
            <GridListTile key={i}>
                <img src={item.img} alt={item.name} />
                <GridListTileBar
                    title={item.name}
                    subtitle={<span>{item.description}</span>}
                    actionIcon={
                        <IconButton aria-label={`info about ${item.title}`} className={classes.icon}>
                            <InfoIcon />
                        </IconButton>
                    }
                />
            </GridListTile>
        );
    };
    if(items && items.length)
        return (
            <div className={classes.root}>
                <GridList className="equipement-grid">
                    <GridListTile key="Subheader" cols={3} style={{ height: 'auto' }}>
                        <ListSubheader component="div">{}</ListSubheader>
                    </GridListTile>
                    {items.map(item)}
                </GridList>
            </div>
        );
    return <></>
}

