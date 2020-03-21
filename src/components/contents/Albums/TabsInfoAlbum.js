import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import List from "@material-ui/core/List";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <Typography component="div"
                    role="tabpanel"
                    hidden={value !== index}
                    id={`simple-tabpanel-${index}`}
                    aria-labelledby={`simple-tab-${index}`}
                    {...other}>
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        'id': `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

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
        borderRadius: 4
    }
}));

export default function TabsInfoAlbum(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const info = {...props.album};

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                <Tab disableRipple label="All Song" {...a11yProps(0)} />
                <Tab disableRipple label="Item Two" {...a11yProps(1)} />
                <Tab disableRipple label="Item Three" {...a11yProps(2)} />
            </Tabs>
            <TabPanel value={value} index={0}>
                <Grid item xs>
                    <List className={classes.list}>
                        {info.songs?.map((song, i) => (
                            <li key={`section-${i}`} className={classes.listSection}>
                                <Card className={classes.card} elevation={0}>
                                    <CardContent>
                                        <Typography className={classes.title} variant="span" component="h6" color="textSecondary" gutterBottom>
                                            Sortie: {song.publicationDate}
                                        </Typography>
                                        <Typography variant="h6" component="p">
                                            {i + 1}. {song.title}
                                        </Typography>
                                        <Typography className={classes.pos} color="textSecondary">
                                            {song.genre}
                                        </Typography>
                                        <Typography variant="body2" component="p">
                                            well meaning and kindly.
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </li>
                        ))}
                    </List>
                </Grid>
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>
        </div>
    );
}
