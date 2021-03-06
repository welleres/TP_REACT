import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import {Layout} from "../layout/Layout";
import MemberInfo from "./MemberInfo";
import PropTypes from "prop-types";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(0.5),
        },
    },
}));

export default function Members(props) {
    const classes = useStyles();
    const [member, setMember] = React.useState({});
    const [open, setOpen] = React.useState(false);
    const {members} = props;

    const handleClickOpen = (e, value) => {
        setOpen(true);
        setMember(value);
    };

    const handleClose = () => setOpen(false);

    const memberInfoItem = (member, i) => {
        const memberName = member.realName ? member.realName : member.name;

        return (
            <Chip key={i}
                  avatar={<Avatar className="members-avatar" alt={memberName} src={""}>{memberName[0]}</Avatar>}
                  label={member.name}
                  title={memberName}
                  variant="outlined"
                  onClick={(e) => handleClickOpen(e, member)}
            />
        );
    };

    return (
        <Layout>
            <div className={classes.root}>
                {members.map(memberInfoItem)}
            </div>
            <MemberInfo opening={open} member={member} onClose={handleClose}/>
        </Layout>
    );
}

Members.propTypes = {
    members: PropTypes.any.isRequired
};