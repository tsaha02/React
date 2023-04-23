function ChildProps({ restItem }) {
  console.log(restItem);
  let { category, price, rating, id, description } = restItem;
  function userDescription(description) {
    console.log(description);
  }
  return (
    <div key={id}>
      <h1>{category}</h1>
      <h2>{price}</h2>
      <h3>{rating.rate}</h3>
      <button onClick={() => userDescription(description)}>More Details</button>
    </div>
  );
}
export default ChildProps;
