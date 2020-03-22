import React from "react";
import "./Groupe.css";
import Typography from "@material-ui/core/Typography";
import {Layout} from "./layout/Layout";
// import groupe from "../data/groupe";
import {Card} from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Urls from "./contents/Urls";
import Members from "./contents/Members";
import Albums from "./contents/Albums/Albums";
import Loading from "./contents/Loading";


class Groupe extends React.Component {
    state = {
        url: "https://wasabi.i3s.unice.fr/search/artist/Metallica",
        groupe: undefined,
        loading: true
    };

    componentDidMount() {
        if (this.state.groupe)
            return;
        this.getDataFromServer(this.state.url).then();
    }

    async getDataFromServer(url) {
        console.log("Getting data from server");
        fetch(url)
            .then(response => response.json())
            .then(reponseJavaScript => {
                this.setState({
                    ...this.state,
                    groupe: reponseJavaScript,
                    loading: false
                });
                console.log(reponseJavaScript);
                return reponseJavaScript;
            })
            .catch((err) => {
                console.log(err);
            });
    };

    endLoding = () => {
        console.log('resoudree');
    };

    render() {
        const {groupe, loading} = this.state;
        if (!groupe)
            return <Loading open={loading} endListener={this.endLoding}/>;

        let content = (groupInfo) => (
            <Layout>
                <Typography gutterBottom variant="h4" component="h2">
                    {groupInfo.name}
                </Typography>
                <Typography variant="subtitle2" color="textSecondary" component="h5">
                    {groupInfo.genres?.join(" * ")}
                </Typography>
                <br/>
                <Typography variant="subtitle2" color="textPrimary" component="p">
                    {groupInfo.nameVariations_fold?.join(" - ")}
                </Typography>
                <br/>
                <Members title="All members"/>
                <hr/>
                <Typography variant="body2" align={"justify"} color="textSecondary" component="p">
                    {groupInfo.dbp_abstract}
                </Typography>
            </Layout>
        );

        return (
            <Layout>
                <Card elevation={0}>
                    <CardMedia
                        className="groupe-picture"
                        title={groupe.labels.join(", ")}>
                        <img src={groupe.picture.medium} alt={groupe.labels.join(", ")}/>
                    </CardMedia>
                    <CardContent>
                        {content(groupe)}
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