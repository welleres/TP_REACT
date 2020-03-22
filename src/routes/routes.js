import TestMaterialUI from "../components/TestMaterialUI";
import Photos from "../components/Photos";
import GroupeRock from "../components/groupe/GroupeRock";
import {Route} from "react-router";
import React from "react";

const routes = [{
    id: 1,
    path: "/ui",
    component: TestMaterialUI
},
    {
        id: 2,
        path: "/photos/:id",
        component: Photos
    },
    {
        id: 3,
        path: "/rock",
        component: GroupeRock
    }
];

export const NavRoute = (props) => {
    let route = routes.filter((route, i) => {
        return props.path === route.path ? route : {};
    });
    return <Route path={route.path} component={route.component}/>
};

export default routes;