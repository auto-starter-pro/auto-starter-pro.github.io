import React from 'react';

import './Control.scss';
import {useCommandStore} from "../../store/commandStore";
import {ACTION_TYPE} from "../../dto";

function Control({
    name,
    type,
    status,
    command,
 }) {
    const {
        pushCommand,
    } = useCommandStore();

    const classNames = ['Control'];
    type && classNames.push(`Control--TYPE-${type}`);
    !name && classNames.push(`Control--hidden`);

    const handleClick = () => {
        if (type === ACTION_TYPE.PUSH) {
            pushCommand(command.on, name);
        }
        else if (type === ACTION_TYPE.TOGGLE) {
            if (status) {
                pushCommand(command.off, name);
            }
            else {
                pushCommand(command.on, name);
            }
        }
    };

    status && classNames.push(`Control--on`);

    return <div className={classNames.join(' ')} onClick={() => handleClick()}>
        {name} {!status ? 'On' : 'Off'}
    </div>;
}

export default Control;
