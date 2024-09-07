import React from 'react';
import { Item } from '../types';

interface ItemListProps {
  items: Item[];  // Accepts the list of items as a prop
}

const ItemList: React.FC<ItemListProps> = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
