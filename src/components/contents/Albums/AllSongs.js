import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from "@material-ui/core/List";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import SongInfo from "./SongInfo";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    list: {
        textAlign: 'left'
    },
    paper: {
        padding: 5
    },
    card: {
        margin: 5,
        border: '1px solid #e6e6e6',
        borderRadius: 4,
    }
}));

export function SongItem(props) {
    const classes = useStyles();
    const {song, click} = props;

    const info = (song) => {
        if (song.writer && song.writer.length)
            return "Writen by " + song.writer.join(" and ");
        if (song.recorded && song.recorded.length)
            return "Recorded in " + song.recorded.join(" - ");
        if (song.producer)
            return "Producer: " + song.producer;
        if (song.subject)
            return "Subject: " + song.subject.join(" - ");
        if (song.isClassic)
            return "Classic"
    };

    return (
        <Card className={classes.card} elevation={0}>
            <CardContent>
                <Typography className={classes.title} variant="subtitle2" component="h6" color="textSecondary" gutterBottom>
                    {song.publicationDate}
                </Typography>
                <Typography variant="h6" component="div">
                    <a target="_blank" title={song.name} href={song.urlSong}>{song.position + 1}. {song.title}</a>
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {song.genre?.join(" - ")}
                </Typography>
                <Typography variant="body2" component="p">
                    {info(song)}
                </Typography>
            </CardContent>
            <CardActions style={{float: 'right'}}>
                <Button onClick={(e) => click(e, song)}
                        size="small"
                        color="primary">
                    See More
                </Button>
            </CardActions>
        </Card>
    );
}

export default function AllSongs(props) {
    const classes = useStyles();
    const info = {...props.album};
    const [song, setSong] = React.useState({});
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = (e, value) => {
        setOpen(true);
        setSong(value);
    };

    const handleClose = () => setOpen(false);

    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item md={2} xs/>
                <Grid item md={8} xs>
                    <List className={classes.list}>
                        {info.songs?.map((song, i) => (
                            <li key={`section-${i}`} className={classes.listSection}>
                                <SongItem click={handleClickOpen} song={song}/>
                            </li>
                        ))}
                    </List>
                </Grid>
                <Grid item md={2} xs/>
            </Grid>
            <SongInfo onClose={handleClose} opening={open} song={song}/>
        </div>
    );
}

SongItem.propTypes = {
    song: PropTypes.any.isRequired
};