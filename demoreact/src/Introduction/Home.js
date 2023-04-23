import data from "../Introduction/data.js";
import ChildProps from "./ChildProps.js";
function Home() {
  return (
    <div>
      <h1>Welcome to Home Page</h1>;
      {data.map((item, index) => {
        return (
          <div key={index}>
            <h1>{item.id}</h1>
            <img src={item.image} alt={item.id} height="350px" width="350px" />
            <ChildProps restItem={item} />
          </div>
        );
      })}
    </div>
  );
}
export default Home;
