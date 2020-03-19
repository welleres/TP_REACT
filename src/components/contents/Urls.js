import React, {Component} from "react";
import urls from "../../data/urls";
import {Layout} from "../layout/Layout";
import "./Contents.css"
import List from "@material-ui/core/List";

export default class Urls extends Component {

    url = (data, i) => {
        return (
            <li key={`section-${i}`}>
                <a href={data.url} key={i} target="_blank" rel="noopener noreferrer">
                    <img className="button-default button-external-link" src={data.icon} alt={data.name}/>
                </a>
            </li>
        );
    };

    render() {
        return (
            <Layout>
                <List className="urls-mui-list">
                    {urls(this.props.urls).map(this.url)}
                </List>
            </Layout>
        );
    }
}