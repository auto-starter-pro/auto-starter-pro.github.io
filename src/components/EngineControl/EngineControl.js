import React from 'react';

import './EngineControl.scss';
import {useCommandStore} from "../../store/commandStore";
import {ACTION_TYPE} from "../../dto";

function EngineControl({
   name,
   type,
   status,
   command,
}) {
    const {
        pushCommand,
    } = useCommandStore();

    const classNames = ['EngineControl'];
    type && classNames.push(`EngineControl--TYPE-${type}`);
    !name && classNames.push(`EngineControl--hidden`);

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

    status && classNames.push(`EngineControl--on`);

    return <div className={classNames.join(' ')} onClick={() => handleClick()}>
        {name}<br />{!status ? 'Start' : 'Stop'}
    </div>;
}

export default EngineControl;
