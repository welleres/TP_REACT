import React, {useState} from "react";
import "./App.css";
import {BrowserRouter, Route} from "react-router-dom";
import Container from "@material-ui/core/Container";
import AlbumDetails from "./components/contents/Albums/AlbumDetails";
import Search from "./components/Search";
import Groupe from "./components/Groupe";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import {fade} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));

export default function App(props) {
    const classes = useStyles();
    const [query, setQuery] = useState(null);

    const handleChange = function (event) {
        setQuery(event.target.value);
    };

    const handleKeyPress = (event) => {
        if (event.charCode === 13) {
            console.log("Enter");
        }
    };

    const result = () => {
        if (query) {
            return <Search name={query}/>
        } else {
            return <Route exact path="/" component={Groupe}/>
        }
    };

    return (
        <div className="App">
            <div className={classes.grow}>
                <AppBar style={{marginBottom: 10}} position="static">
                    <Toolbar>
                        {/*<IconButton
                            edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="open drawer">
                            <MenuIcon/>
                        </IconButton>*/}
                        <Typography className={classes.title} variant="h6" noWrap>
                            Projet MBDS React with Material UI
                        </Typography>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon/>
                            </div>
                            <InputBase
                                placeholder="Search…"
                                onChange={handleChange}
                                onKeyPress={handleKeyPress}
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{'aria-label': 'search'}}
                            />
                        </div>
                        <div className={classes.grow}/>
                    </Toolbar>
                </AppBar>
            </div>

            <BrowserRouter>
                <Container maxWidth="md">
                    <Route path="/album/details-:id-:albumId" component={AlbumDetails}/>
                    <Route exact path="/artist/:name" component={Groupe}/>
                    {result()}
                </Container>
                <Container maxWidth="sm">
                    <Route exact path="/search/:value" component={Search}/>
                </Container>
            </BrowserRouter>
        </div>
    );
}
