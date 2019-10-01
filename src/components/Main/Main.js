import React from 'react';
import ControlPanel from "../ControlPanel/ControlPanel";
import {Route, Switch} from "react-router-dom";
import SettingsScreen from "../SettingsScreen/SettingsScreen";

function Main() {
    return <div className={'Main'}>
        <Switch>
            <Route path={'/settings'} render={() => <SettingsScreen />} />
            <Route render={() => <ControlPanel />} />
        </Switch>
    </div>;
}

export default Main;
