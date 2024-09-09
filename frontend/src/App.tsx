import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ItemForm from './components/ItemForm';
import ItemList from './components/ItemList';
import { Item } from './types';
const baseApiURL = "http://localhost:8000/api"
const App: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);  // State to hold items
  const [loading, setLoading] = useState<boolean>(true);  // Loading state
  const [error, setError] = useState<string | null>(null);  // Error state

  // Function to fetch items from the API
  const fetchItems = async () => {
    try {
      const response = await axios.get(`${baseApiURL}/items/`);
      setItems(response.data);  // Set fetched items to state
      setError(null)
      setLoading(false);  // Set loading to false when data is fetched
    } catch (error) {
      console.error("Error fetching items:", error);
      setLoading(false);  // Ensure loading is turned off in case of an error
      setError("Failed to load items. The backend server might be down")

    }
  };

  // useEffect to fetch items when the component mounts
  useEffect(() => {
    fetchItems();
  }, []);

  // Function to add a new item after submission
  const addItem = (newItem: Item) => {
    setItems((prevItems) => [...prevItems, newItem]);  // Add new item to the state
  };

  return (
    <div>
      <h1>Item Management</h1>
      {/* Pass the addItem function to ItemForm */}
      <ItemForm addItem={addItem} />

      {/* Display error message if there's an error */}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* Display a loading message or the list of items */}
      {loading ? (
        <p>Loading items...</p>
      ) : (
        <ItemList items={items} />
      )}
    </div>
  );
};

export default App;
