import React from 'react';

import './Section.scss';

function Section({
     children
 }) {
    return <div className={'Section'}>
        {children}
    </div>;
}

export default Section;
