import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import React from "react";
import CardMedia from "@material-ui/core/CardMedia";
import PropTypes from "prop-types";

export default function TeamItem(props) {
    const {item} = props;
    return (
        <Card className="team-item-card"
              variant="outlined" elevation={0}>
            <a target="_blank" rel="noopener noreferrer" href={item.urlDescription}>
                <CardMedia
                    className="team-item-cardmedia"
                    component="img"
                    image={item.img}
                    title={item.description}
                />
            </a>
            <CardContent>
                <Typography variant="subtitle2" component="h5">
                    <a href={item.url} target="_blank" rel="noopener noreferrer">{item.name}</a>
                </Typography>
            </CardContent>
        </Card>
    );
}

TeamItem.propTypes = {
    item: PropTypes.any.isRequired
};