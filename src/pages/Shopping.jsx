import { useEffect, useState } from 'react';

function Shopping() {
  const [lists, setList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setList(data));
  }, []);

  // Extract unique categories
  const categories = ['all', ...new Set(lists.map(item => item.category))];

  // Filter based on selected category
  const filteredProducts =
    selectedCategory === 'all'
      ? lists
      : lists.filter(item => item.category === selectedCategory);


  const handleAddToCart = (product) => {
    setCart(prevCart => {
      const exists = prevCart.find(item => item.id === product.id);
      return exists ? prevCart : [...prevCart, product];
    });
  };



  const totalItems = cart.length;
  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0).toFixed(2);


  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>🛒 Shopping Page</h2>

      {/* Horizontal scrollable category row */}
      <div style={styles.categoryRow}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            style={{
              ...styles.categoryButton,
              backgroundColor: selectedCategory === cat ? '#007BFF' : '#f1f1f1',
              color: selectedCategory === cat ? '#fff' : '#333',
            }}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>
     
      <div style={styles.cartInfo}>
        <p><strong>🛍️ Items in Cart:</strong> {totalItems}</p>
        <p><strong>💰 Total Price:</strong> ${totalPrice}</p>
      </div>

      {/* Product Grid */}
      <div style={styles.grid}>
        {filteredProducts.map((list) => (
          <div key={list.id} style={styles.card}>
            <img src={list.image} alt={list.title} style={styles.image} />
            <h3 style={styles.title}>{list.title}</h3>
            <p style={styles.price}>${list.price}</p>
            <button style={styles.cartButton} onClick={() => handleAddToCart(list)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: { padding: '20px', fontFamily: 'Arial, sans-serif' },
  heading: { textAlign: 'center', marginBottom: '20px' },
  categoryRow: {
    display: 'flex', overflowX: 'auto', paddingBottom: '10px', marginBottom: '20px'
  },
  categoryButton: {
    padding: '8px 12px', marginRight: '10px', border: '1px solid #ccc',
    borderRadius: '5px', cursor: 'pointer', whiteSpace: 'nowrap'
  },
  grid: {
    display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px'
  },
  card: {
    padding: '15px', border: '1px solid #ddd', borderRadius: '8px', textAlign: 'center',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)', backgroundColor: '#fff'
  },
  image: {
    maxWidth: '100%', height: '150px', objectFit: 'contain', marginBottom: '10px'
  },
  title: {
    fontSize: '16px', fontWeight: 'bold', height: '60px', overflow: 'hidden'
  },
  price: { fontWeight: 'bold', color: '#2e7d32', marginTop: '10px' },
  cartButton: {
    marginTop: '10px', padding: '8px 12px', backgroundColor: '#FF5722',
    color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer'
  },
  cartInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#f9f9f9',
    border: '1px solid #ddd',
    marginBottom: '20px',
    borderRadius: '8px',
    fontSize: '16px'
  },

};
export default Shopping;
