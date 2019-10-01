import React from 'react';

import './Line.scss';

function Line({
    children,
}) {
    return <div className={'Line'}>
        {children}
    </div>;
}

export default Line;
