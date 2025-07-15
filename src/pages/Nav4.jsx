// src/pages/Home.jsx
function Nav4() {
  const products = [
    { id: 1, name: 'Shirt', category: 'Clothing' },
    { id: 2, name: 'Pants', category: 'Clothing' },
    { id: 3, name: 'Watch', category: 'Accessories' }
  ];

  const categories = products.map(item => item.category);

  const uniqueCategories = [...new Set(categories)];
  return <>
    <h2>Study Page</h2>
    <ul>
      {products.map(product => (
        <li key={product.id}>
          {product.name} - {product.category}
        </li>
      ))}
    </ul>
    <br />
    <h4>Unique Categories (using Set):</h4>

    <ul>
      {uniqueCategories.map((category, index) => (
        <li key={index}>{category}</li>
      ))}
    </ul>
    <h2>Grouped Products by Category</h2>

    {uniqueCategories.map((category) => (
      <div key={category} style={{ marginBottom: '20px' }}>
        <h3>🧍 {category}</h3>
        <ul>
          {products
            .filter(product => product.category === category)
            .map(product => (
              <li key={product.id}>{product.name}</li>
            ))}
        </ul>
      </div>
    ))}

  </>;
}
export default Nav4;
