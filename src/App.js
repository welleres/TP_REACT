import React from "react";
import "./App.css";
import Username from "./components/Username";
import Groupe from "./components/Groupe";
import Photos from "./components/Photos";
import {BrowserRouter, Route} from "react-router-dom";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import AlbumDetails from "./components/contents/Albums/AlbumDetails";

function App() {
    return (
        <div className="App">
            <AppBar color={"default"} style={{marginBottom: 10}} elevation={0} position="relative">
                <Toolbar>
                </Toolbar>
            </AppBar>
            <Container maxWidth="md">
                <BrowserRouter>
                    <Route path="/album-details-:id" component={AlbumDetails}/>
                    <Route exact path="/" component={Groupe}/>
                    <Route path="/photos/:id" component={Photos}/>
                    <Route
                        path="/username"
                        component={() => <Username name="Michel" age="54"/>}
                    />
                </BrowserRouter>
            </Container>
        </div>
    );
}

export default App;
