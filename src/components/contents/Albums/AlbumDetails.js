import React, {useEffect} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import AllSongs from "./AllSongs";
import artist from "../../../data/groupe";
import Paper from "@material-ui/core/Paper";
import {Link} from "react-router-dom";
import {Layout} from "../../layout/Layout";
import Urls from "../Urls";
import Loading from "../Loading";

export default function AlbumDetails(props) {
    const [album, setAlbum] = React.useState(null);
    const [opening, setOpen] = React.useState(true);
    const {id, albumId} = props.match.params;

    async function getAlbum() {
        const url = `https://wasabi.i3s.unice.fr/api/v1/artist_all/id/${id}`;
        fetch(url)
            .then(response => response.json())
            .then(reponseJavaScript => {
                let list = reponseJavaScript.albums.filter(a => a._id === albumId);
                const res = list.length ? list[0] : {};
                setAlbum(res);
                setOpen(false);
                console.log(reponseJavaScript);
            })
            .catch((err) => {
                const list = artist.albums.filter(a => a._id === albumId);
                const res = list.length ? list[0] : {};
                setAlbum(res);
                console.log(err);
                setOpen(false);
            });
    }

    useEffect(() => {
        getAlbum().then();
        console.log("Get Album")
    }, []);

    const info = () => {
        if (album.publicationDate)
            return album.publicationDate;
        if (album.dateRelease)
            return album.dateRelease;
        if (album.deezerFans)
            return album.deezerFans + " fans";
        return artist.name;
    };

    if (album) {
        const sep = <span className="span">:</span>;
        const cover = album.cover ? album.cover?.xl : artist.picture.xl;
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
                                {album.title} ({album.songs?.length} titles)
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
    return <Loading open={opening}/>
}
