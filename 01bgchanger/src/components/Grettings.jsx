const Greetings = () => {
  const product = [
    { id: 1, name: "Laptop", price: "$1200", avalability: "in Stock" },
    { id: 2, name: "Lap", price: "$200", avalability: "in Stock" },
    { id: 3, name: "Top", price: "$100", avalability: "Sold out" },
    { id: 4, name: "Laptop", price: "$200", avalability: "in Stock" },
    { id: 5, name: "Laptop", price: "$1200", avalability: "sold out" },
  ];
  return (
    <div>
      <div>
        {product.map((item) => (
          <div key={item.id}>
            <h1>{item.name}</h1>
            <p>{item.price}</p>
            <p>{item.avalability}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Greetings;
