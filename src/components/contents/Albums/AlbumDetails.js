import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import AllSongs from "./AllSongs";
import groupe from "../../../data/groupe";
import Paper from "@material-ui/core/Paper";
import {Link} from "react-router-dom";
import {Layout} from "../../layout/Layout";
import Urls from "../Urls";

export default function AlbumDetails(props) {
    const {id} = props.match.params;
    const albums = groupe.albums.filter(album => album._id === id);
    const album = albums.length ? albums[0] : {};
    const cover = album.cover ? album.cover.xl : groupe.picture.xl;

    const info = () => {
        if (album.publicationDate)
            return album.publicationDate;
        if (album.dateRelease)
            return album.dateRelease;
        if (album.deezerFans)
            return album.deezerFans + " fans";
        return groupe.name;
    };
    const sep = <span className="span">:</span>;

    return (
        <Layout>
            <Card elevation={0}>
                <CardMedia
                    image={cover}
                    component="img"
                    title={album.title}
                />
                <CardContent>
                    <Paper className={"album-details-paper"}>
                        <Typography gutterBottom variant="h5" component="h2">
                            {album.title} ({album.songs.length} titles)
                        </Typography>
                        <Typography variant="subtitle2" component="span">
                            {info()}
                        </Typography>
                    </Paper>
                    <Card elevation={0}>
                        <Urls urls={album}/>
                    </Card>
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
                </CardContent>
            </Card>
            <Card elevation={0}>
                <AllSongs album={album}/>
            </Card>
        </Layout>
    );
}
