import React, { useState, useCallback } from 'react';
import {ACTION_TYPE} from "../dto";
import {actions} from "../components/SettingsScreen/SettingsScreen";

const Context = React.createContext();

export const CommandProvider = ({children}) => {
    const [statuses, setStatuses] = useState([]);

    const setStatus = (actionName, status) => {
        if (status) {
            setStatuses(statuses => statuses.filter(it => it !== actionName));
        }
        else {
            setStatuses([...statuses, actionName]);
        }
    };

    const pushCommand = (commandCode, actionName) => {
        // some http call here
        const isOn = statuses.includes(actionName);
        const response = {
            message: isOn,
        };
        const nextStatus = response.message;
        const action = actions.find(action => action.name === actionName);
        if (action.type === ACTION_TYPE.TOGGLE) {
            setStatus(actionName, nextStatus);
        }

        console.info('COMMAND - ' + commandCode + ' ... STATUS - ' + nextStatus);
    };

    const value = {
        statuses,

        pushCommand,
    };

    return <Context.Provider value={value}>
        {children}
    </Context.Provider>;
};

export const useCommandStore = () => React.useContext(Context);
