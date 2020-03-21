import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import CardMedia from "@material-ui/core/CardMedia";
import groupe from "../../../data/mettalica";
import {Link} from "react-router-dom";

const useStyles = makeStyles({
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardContent: {
        flexGrow: 1,
    }
});

export default function Album(props) {
    const classes = useStyles();
    const album = {...props.album};
    const cover = album.cover ? album.cover.big : groupe.picture.medium;
    const info = album.publicationDate ? album.publicationDate : album.length ? album.dateRelease : album.deezerFans + " Fans";

    return (
        <Paper variant="outlined">
            <Card elevation={0} className={classes.card}>
                <Link to={`/album-details-${album._id}`}>
                    <CardMedia
                        component="img"
                        image={cover}
                        title={album.title}
                    />
                </Link>
                <CardContent className={classes.cardContent}>
                    <Typography variant="span" component="p">
                        <Link to={`/album-details-${album._id}`}>{album.title}</Link>
                    </Typography>
                    <Typography variant="span" component="h6">
                        {info}
                    </Typography>
                </CardContent>
            </Card>
        </Paper>
    );
}