import React from "react";
import "./Groupe.css";
import Typography from "@material-ui/core/Typography";
import {Layout} from "./layout/Layout";
import groupe from "../data/mettalica";
import {Card} from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Urls from "./contents/Urls";
import Members from "./contents/Members";
import Albums from "./contents/Albums/Albums";


class Groupe extends React.Component {
    state = {
        newItem: null,
        hobbies: ["tennis", "foot"]
    };
    link = "https://wasabi.i3s.unice.fr/search/artist/";

    addHobby = () => {
        const {hobbies, newItem} = this.state;
        hobbies.push(newItem);
        this.setState({hobbies});
    };

    removeHobby = (hobbyToRemove) => {
        this.setState(prevState => {
            const newHobbiesList = prevState.hobbies.filter(
                hobby => hobby !== hobbyToRemove && hobby
            );
            return {hobbies: newHobbiesList};
        });
    };

    memberNameItem = (memberInfo, i) => {
        return (
            <Typography variant="body2" component="span" key={i}>
                {memberInfo.name}
            </Typography>
        );
    };

    render() {
        return (
            <Layout>
                <Card elevation={0}>
                    <CardMedia
                        className="groupe-picture"
                        title={groupe.labels.join(", ")}>
                        <img src={groupe.picture.medium} alt={groupe.labels.join(", ")}/>
                    </CardMedia>
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="h2">
                            {groupe.name}
                        </Typography>
                        <Typography variant="span" color="textSecondary" component="h5">
                            {groupe.genres?.join(" * ")}
                        </Typography>
                        <br/>
                        <Typography variant="body" color="textPrimary" component="p">
                            {groupe.nameVariations_fold?.join(" - ")}
                        </Typography>
                        <br/>
                        <Members title="All members"/>
                        <hr/>
                        <Typography variant="body2" align={"justify"} color="textSecondary" component="p">
                            {groupe.dbp_abstract}
                        </Typography>
                    </CardContent>
                </Card>
                <Card elevation={0}>
                    <Urls urls={groupe}/>
                </Card>
                <Card elevation={0}>
                    <Albums albums={groupe.albums}/>
                </Card>
            </Layout>
        );
    }
}

export default Groupe;