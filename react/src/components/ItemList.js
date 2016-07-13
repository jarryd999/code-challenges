import React from 'react';
import Item from './Item';

export default function ItemList({items, onItemClick}) {
    return (
        <ul>
            {items.map(item => <Item
                key={item.id} 
                source={item.source.display_name}
                title={item.title}
                active={item.active}
                onClick={e => onItemClick(item)}
            />)}
        </ul>
    );
};
