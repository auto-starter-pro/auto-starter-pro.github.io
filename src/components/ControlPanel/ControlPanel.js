import React from 'react';
import Section from "../Section/Section";

import './ControlPanel.scss';
import Line from "../Line/Line";
import Control from "../Control/Control";
import EngineControl from "../EngineControl/EngineControl";
import {actions} from '../SettingsScreen/SettingsScreen';
import {SLOT} from "../../dto";
import {useCommandStore} from "../../store/commandStore";

function ControlPanel() {
    const {
        statuses,
    } = useCommandStore();

    const getAction = slot => {
        const action = actions.find(action => action.slot === slot);
        const status = statuses.includes(action.name);
        return {
            ...action,
            status,
        };
    };
    const isActionEnabled = slot => !!actions.find(action => action.slot === slot && action.name);

    return <div className={'ControlPanel'}>
        <Section>
            <div className={'app-name'}>Auto Starter Pro</div>
            <Line>
                <div className={'row flex align-center'}>
                    <div className={'col-4'}>
                        <Control {...getAction(SLOT.S1)} />
                    </div>
                    <div className={'col-4'}>
                        <div className={'car-info'}>Toyota Camry VI 2.4 V40 (2009)</div>
                    </div>
                    <div className={'col-4'}>
                        <Control {...getAction(SLOT.S2)} />
                    </div>
                </div>
            </Line>
        </Section>
        <Section>
            <div className={'flex justify-center'}>
                <EngineControl {...getAction(SLOT.MAIN)} />
            </div>
        </Section>
        <Section>
            <Line>
                <div className={'row'}>
                    <div className={'col-5'}>
                        <Control {...getAction(SLOT.S3)} />
                    </div>
                    <div className={'col-2'}></div>
                    <div className={'col-5'}>
                        <Control {...getAction(SLOT.S4)} />
                    </div>
                </div>
            </Line>
        </Section>

        {(isActionEnabled(SLOT.S5) || isActionEnabled(SLOT.S6)) ? (
            <Section>
                <Line>
                    <div className={'row'}>
                        <div className={'col-4'}>
                            <Control {...getAction(SLOT.S5)} />
                        </div>
                        <div className={'col-4'}>
                            {/*engine<br />status*/}
                        </div>
                        <div className={'col-4'}>
                            {/*<Control {...getAction(SLOT.S6)} />*/}
                        </div>
                    </div>
                </Line>
            </Section>
        ) : null}

        {/*{(isActionEnabled('f5') && isActionEnabled('f6') && isActionEnabled('f7') && isActionEnabled('f8')) ? (*/}
        {/*    <Section>*/}
        {/*        {(isActionEnabled('f5') && isActionEnabled('f6')) ? (*/}
        {/*            <Line>*/}
        {/*                <div className={'row'}>*/}
        {/*                    <div className={'col-6'}>*/}
        {/*                        <Control {...getAction('f5')} />*/}
        {/*                    </div>*/}
        {/*                    <div className={'col-6'}>*/}
        {/*                        <Control {...getAction('f6')} />*/}
        {/*                    </div>*/}
        {/*                </div>*/}
        {/*            </Line>*/}
        {/*        ) : null}*/}
        {/*        {(isActionEnabled('f7') && isActionEnabled('f8')) ? (*/}
        {/*            <Line>*/}
        {/*                <div className={'row'}>*/}
        {/*                    <div className={'col-6'}>*/}
        {/*                        <Control {...getAction('f7')} />*/}
        {/*                    </div>*/}
        {/*                    <div className={'col-6'}>*/}
        {/*                        <Control {...getAction('f8')} />*/}
        {/*                    </div>*/}
        {/*                </div>*/}
        {/*            </Line>*/}
        {/*        ) : null}*/}
        {/*    </Section>*/}
        {/*) : null}*/}
    </div>;
}

export default ControlPanel;
