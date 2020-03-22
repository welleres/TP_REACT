import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Album from "./Album";

const useStyles = makeStyles(theme => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));

export default function Albums(props) {
    const classes = useStyles();
    const {artistId} = props;

    const albumItem = (item, i) => {
        return (
            <Grid item key={i} xs={12} sm={6} md={3}>
                <Album artistId={artistId} album={item}/>
            </Grid>
        );
    };

    return (
        <>
            <CssBaseline/>
            <AppBar color={"default"} elevation={0} position="relative">
                <Toolbar>
                    <CameraIcon className={classes.icon}/>
                    <Typography variant="h6" color="inherit" noWrap>
                        All albums
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={2}>
                        {props.albums.map(albumItem)}
                    </Grid>
                </Container>
            </main>
        </>
    );
}
