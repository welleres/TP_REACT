import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import groupe from "../../data/mettalica";
import {useHistory} from "react-router";

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
    const history = useHistory();

    const handleClick = () => {
        console.info('You clicked the delete icon.');
        const path = `/member-details-1-olivier-jean`;
        console.log(path);
        history.push(path)
    };

    const memberInfoItem = (member, i) => {
        return (
            <Chip key={i}
                  avatar={<Avatar className="members-avatar" alt={member.name} src={""}>{member.name[0]}</Avatar>}
                  label={member.name}
                  variant="outlined"
                  onClick={handleClick}
            />
        );
    };

    return (
        <div className={classes.root}>
            {groupe.members.map(memberInfoItem)}
        </div>
    );
}
