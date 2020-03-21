import React from "react";
import "./App.css";
import Username from "./components/Username";
import Groupe from "./components/Groupe";
import Photos from "./components/Photos";
import {BrowserRouter, Route} from "react-router-dom";
import TestMaterialUI from "./components/TestMaterialUI";
import GroupeRock from "./components/mettalica/GroupeRock";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import AlbumDetails from "./components/contents/Albums/AlbumDetails";

function App() {
    let nom = "Hello Madagascar";

    return (
        <div className="App">
            <AppBar color={"default"} style={{marginBottom:10}} elevation={0} position="relative">
                <Toolbar>
                </Toolbar>
            </AppBar>
            <Container maxWidth="md">
                <BrowserRouter>
                    {/* <Link to="/">Home</Link>
                    &nbsp;
                    <Link to="/rock">Groupe Rock</Link>
                    <Link to="/ui">Test Material UI</Link>
                    &nbsp;
                    <Link to="/photos">Photos</Link>
                    &nbsp;
                    <Link to="/username">Username</Link>*/}
                    <Route exact path="/" component={Groupe}/>
                    <Route path="/ui" component={TestMaterialUI}/>
                    <Route path="/photos/:id" component={Photos}/>
                    <Route
                        path="/username"
                        component={() => <Username name="Michel" age="54"/>}
                    />
                    <Route path="/rock" component={GroupeRock}/>
                    <Route path="/album-details-:id" component={AlbumDetails}/>
                </BrowserRouter>
            </Container>
        </div>
    );
}

export default App;
