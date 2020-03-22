import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import {Layout} from "../../layout/Layout";
import Urls from "../Urls";

export default function SongInfo(props) {
    const {onClose, opening, song} = props;
    const handleClose = () => {
        onClose(false);
    };

    const subject = () => {
        if (song.subject)
            return (
                <Paper elevation={0} variant="outlined" className="memberinfo-subject-paper">
                    <ul>
                        {song.subject.map((sub, i) => <li key={i}>{sub}</li>)}
                    </ul>
                </Paper>
            );
    };

    return (
        <Layout>
            <Dialog fullWidth={true}
                    maxWidth="md"
                    open={opening}
                    onClose={handleClose}>
                <DialogContent>
                    <Grid component="div" container wrap="nowrap" spacing={2}>
                        <Grid item xs zeroMinWidth>
                            <Typography color="textPrimary" variant="h5">
                                <a href={song.urlEquipBoard} target="_blank" rel="noreferrer noopener">{song.title}</a>
                            </Typography>
                            <Typography component="p" color="textPrimary" variant="body2"/>
                            <Typography color="textPrimary" component="p" variant="subtitle2">{song.instruments?.join(" - ")}</Typography>
                        </Grid>
                    </Grid>
                    <DialogContentText>
                        {song.abstract}
                    </DialogContentText>
                    {subject()}
                    <DialogActions>
                        <Grid container spacing={2}>
                            <Urls urls={song}/>
                        </Grid>
                        <Button onClick={handleClose} color="primary">Close</Button>
                    </DialogActions>
                </DialogContent>
            </Dialog>
        </Layout>
    );
}

SongInfo.propTypes = {
    onClose: PropTypes.func.isRequired,
    opening: PropTypes.bool.isRequired,
    song: PropTypes.any.isRequired
};
