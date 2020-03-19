import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import TabsInfoAlbum from "./TabsInfoAlbum";
import groupe from "../../../data/mettalica";
import ".././Contents.css"
import Urls from "../Urls";

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

    return (
        <>
            <Card elevation={0} className={classes.root}>
                <CardActionArea disableRipple>
                    <CardMedia className={classes.media}
                               image={cover}
                               component="img"
                               title={album.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {album.title}
                        </Typography>
                        <Typography variant="span" component="h4">
                            {info}
                        </Typography>
                    </CardContent>
                </CardActionArea>
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
