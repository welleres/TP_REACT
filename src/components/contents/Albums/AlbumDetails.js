import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import TabsInfoAlbum from "./TabsInfoAlbum";
import groupe from "../../../data/mettalica";
import ".././Contents.css"
import Urls from "../Urls";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import {Link} from "react-router-dom";

const useStyles = makeStyles({
    root: {
        fullWidth: true,
    },
    media: {
        // fullWidth: true,
        height: 350
    },
});

export default function AlbumDetails(props) {
    const classes = useStyles();
    const {id} = {...props.match.params};
    const albums = groupe.albums.filter(album => album._id === id);
    const album = albums.length ? albums[0] : {};
    const cover = album.cover ? album.cover.xl : groupe.picture.xl;
    const info = album.publicationDate ? album.publicationDate : album.length ? album.dateRelease : album.deezerFans + " Fans";
    const sep = <span className="span">:</span>;

    return (
        <>
            <Card elevation={0} className={classes.root}>
                <CardMedia className={classes.media}
                           image={cover}
                           component="img"
                           title={album.title}
                />
                <CardContent>
                    <Paper className={"album-details-paper"}>
                        <Typography gutterBottom variant="h5" component="h2">
                            {album.title} ({album.songs.length} titles)
                        </Typography>
                        <Typography variant="span" component="h4">
                            {info}
                        </Typography>
                    </Paper>
                    <table>
                        <thead>
                        <tr>
                            <th>Duration {sep}</th>
                            <td>{album.length}</td>
                            <th>Group {sep}</th>
                            <td><Link to={"/"}>{album.name}</Link></td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th>Genre {sep}</th>
                            <td>{album.genre}</td>
                            <th>Country {sep}</th>
                            <td>{album.country}</td>
                        </tr>
                        <tr>
                            <th>Date realese {sep}</th>
                            <td>{album.dateRelease}</td>
                            <th>Publication date {sep}</th>
                            <td>{album.publicationDate}</td>
                        </tr>
                        </tbody>
                    </table>
                    <List className={classes.list}>
                        {album.availableCountries?.map((countrie, i) => (
                            <li key={`section-${i}`} className={classes.listSection}>
                                <a href="#">{countrie}</a>
                            </li>
                        ))}
                    </List>
                </CardContent>
            </Card>
            <Card elevation={0}>
                <Urls urls={album}/>
            </Card>
            <Card elevation={0}>
                <TabsInfoAlbum album={album}/>
            </Card>
        </>
    );
}
