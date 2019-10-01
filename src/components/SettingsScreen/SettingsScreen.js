import React, {Fragment} from 'react';

import ListItem from "../ListItem/ListItem";
import {ACTION_TYPE, COMMAND, SLOT} from "../../dto";

export const actions = [
    {
        name: 'Engine',
        command: {
            on: COMMAND.START_ON,
            off: COMMAND.START_OFF,
        },
        type: ACTION_TYPE.TOGGLE,
        slot: SLOT.MAIN,
    },
    {
        name: 'Lock',
        command: {
            on: COMMAND.ARM_ON,
        },
        type: ACTION_TYPE.PUSH,
        slot: SLOT.S1,
    },
    {
        name: 'Unlock',
        command: {
            on: COMMAND.DISARM_ON,
        },
        type: ACTION_TYPE.PUSH,
        slot: SLOT.S2,
    },
    {
        name: 'Light on',
        command: {
            on: COMMAND.LIGHT_ON,
        },
        type: ACTION_TYPE.PUSH,
        slot: SLOT.S3,
    },
    {
        name: 'Light off',
        command: {
            on: COMMAND.LIGHT_OFF,
        },
        type: ACTION_TYPE.PUSH,
        slot: SLOT.S4,
    },
    {
        name: 'Beam',
        command: {
            on: COMMAND.BEAM_ON,
            off: COMMAND.BEAM_OFF,
        },
        type: ACTION_TYPE.TOGGLE,
        slot: SLOT.S5,
    },
];

function getCommandKeyByCode(commandCode) {
    return Object
        .entries(COMMAND)
        .find(([_, code]) => code === commandCode)[0];
}

function SettingsScreen() {
    return <div className={'SettingsScreen'}>
        {actions.map(action => {
            return <ListItem
                key={action.name}
                title={action.name}
                subTitle={action.slot}
                right={<Fragment>
                    <div>
                    <b>Type:</b> {action.type}
                    </div>
                    <div>
                    <b>On:</b> {getCommandKeyByCode(action.command.on)}
                    </div>
                    <div>
                    {action.type === ACTION_TYPE.TOGGLE ? <Fragment><b>Off:</b> {getCommandKeyByCode(action.command.off)}</Fragment> : null}
                    </div>
                </Fragment>}
            />;
        })}
    </div>;
}

export default SettingsScreen;
