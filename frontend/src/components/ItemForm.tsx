import React, { useState } from 'react';
import axios from 'axios';
import { Item } from '../types';

interface ItemFormProps {
  addItem: (item: Item) => void;  // Prop for adding an item to the list
}

const ItemForm: React.FC<ItemFormProps> = ({ addItem }) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Send POST request to the API
      const response = await axios.post('http://localhost:8000/api/items/', {
        title,
        description,
      });

      // Add the new item to the list after successful submission
      addItem(response.data);

      // Clear the input fields after submission
      setTitle("");
      setDescription("");
    } catch (error) {
      console.error("There was an error adding the item", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
        />
      </div>
      <div>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ItemForm;
