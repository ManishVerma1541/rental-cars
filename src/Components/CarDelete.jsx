import React, { useState, useEffect } from 'react';

function App() {
  // State to hold the list of items
  const [items, setItems] = useState([]);
  // State for loading and error handling
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch items from API on component mount
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/delete"');
        if (!response.ok) {
          throw new Error('Failed to fetch items');
        }
        const data = await response.json();
        setItems(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchItems();
  }, []);

  // Function to handle item deletion
  const deleteItem = async (id) => {
    try {
      // Make a DELETE request to the API
      const response = await fetch(`https://api.example.com/items/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete the item');
      }

      // Remove item from the state after successful deletion
      setItems((prevItems) => prevItems.filter(item => item.id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Item List</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} <button onClick={() => deleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
