import React, {useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Divider from "@material-ui/core/Divider";
import {Link} from "react-router-dom";

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    large: {
        width: theme.spacing(6),
        height: theme.spacing(6),
    },
}));

export default function Search(props) {
    const classes = useStyles();
    const [results, setResults] = React.useState({});
    const {name} = props.name ? props : props.match.params;

    async function find() {
        const query = name ? name : 'Metallica';
        let url = `https://wasabi.i3s.unice.fr/search/fulltext/${query}`;
        console.log(url);
        fetch(url)
            .then(response => response.json())
            .then(reponseJavaScript => {
                setResults(reponseJavaScript);
                console.log(reponseJavaScript);
            }).catch((err) => {
            console.log(err);
        });
    }

    useEffect(() => {
        find().then();
        console.log("Using Effect");
    }, []);

    if (results && results.length)
        return (
            <List className={classes.root}>
                <ListItemText id={`result-list-secondary-label`} primary="Search results of: Metallica"/>
                {results.map((value, i) => {
                    return (
                        <Link to={`/artist/${value.name}`} key={`list-secondary-label-${i}`}>
                            <ListItem disableRipple button>
                                <ListItemAvatar>
                                    <Avatar className={classes.large}
                                            alt={value.name}
                                            src={value.picture}
                                    />
                                </ListItemAvatar>
                                <ListItemText id={`result-list-secondary-label-${i}`} primary={value.name}/>
                            </ListItem>
                            <Divider/>
                        </Link>
                    );
                })}
            </List>
        );

    return <p>Loding....</p>;
}
