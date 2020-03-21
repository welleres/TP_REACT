import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import PropTypes from "prop-types";
import Urls from "./Urls";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import Equipements from "./Equipements";
import Paper from "@material-ui/core/Paper";

export default function MemberInfo(props) {
    const {onClose, opening, member} = props;
    const handleClose = () => {
        onClose(false);
    };
    const memberName = member.realName ? member.realName : member.name;
    const memberBorn = [member.birthDate ? `born in ${member.birthDate}` : undefined];
    const memberInfo = [member.gender, memberBorn, member.type];
    const memberDate = [member.begin, member.ended ? member.end : 'Now'];


    return (
        <>
            <Dialog
                fullWidth={true}
                maxWidth="md"
                open={opening}
                onClose={handleClose}
            >
                <DialogContent>
                    <Grid component="div" container wrap="nowrap" spacing={2}>
                        <Grid item>
                            <Avatar>{memberName?.charAt(0)}</Avatar>
                        </Grid>
                        <Grid item xs zeroMinWidth>
                            <Typography color="textPrimary" variant="h5">
                                <a href={member.urlEquipBoard} target="_blank" rel="noreferrer noopener">{memberName}</a>
                            </Typography>
                            <Typography component="p" color="textPrimary" variant="span">{memberInfo.join(", ")} * {memberDate.join(" to ")}</Typography>
                            <Typography color="textPrimary" component="h4" variant="span">{member.instruments?.join(" - ")}</Typography>
                        </Grid>
                    </Grid>
                    <Grid className="member-name-variation" spacing={1}>
                        <Typography component="div" variant="div">{member.nameVariations?.map((varn) =>
                            <Chip label={varn} className="member-chip" variant="outlined"/>
                        )}
                        </Typography>
                    </Grid>
                    <br/>
                    <DialogContentText>
                        {member.abstract}
                    </DialogContentText>
                    <Paper elevation={0} variant="outlined" className="memberinfo-subject-paper">
                        <ul>
                            {member.subject?.map((sub, i) =>  <li key={i}>{sub}</li>)}
                        </ul>
                    </Paper>
                    <Equipements member={member}/>
                </DialogContent>
                <DialogActions>
                    <Grid container spacing={2}>
                        <Urls urls={member}/>
                    </Grid>
                    <Button onClick={handleClose} color="primary">Close</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

MemberInfo.propTypes = {
    onClose: PropTypes.func.isRequired,
    opening: PropTypes.bool.isRequired,
    member: PropTypes.any.isRequired
};
