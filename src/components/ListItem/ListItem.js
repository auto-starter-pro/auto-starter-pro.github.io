import React from 'react';

import './ListItem.scss';

function ListItem({
    title,
                      subTitle,
                      right,
                  }) {
    return <div className={'ListItem'}>
        <div className={'ListItem-info'}>
            <b>{title}</b>
            <div>{subTitle}</div>
        </div>
        <div className={'ListItem-right'}>{right}</div>
    </div>;
}

export default ListItem;
