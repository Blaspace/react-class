import Nav from "./Nav";
import Test from "./Test";
import { useEffect, useState } from "react";

function Header(props) {
  //useState hook
  const [name, setName] = useState(0);

  //useEffect hook
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div>
      <Nav logo={props.text} />
      <Test />
      <h1>{props.number}</h1>
      <h1>{name}</h1>
      <button onClick={() => setName(name + 1)}>Change State</button>
    </div>
  );
}

export default Header;
