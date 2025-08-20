import Nav from "./Nav";
import Test from "./Test";
import { useState } from "react";

function Header(props) {
  const [name, setName] = useState("joy");

  return (
    <div>
      <Nav logo={props.text} />
      <Test />
      <h1>{props.number}</h1>
      <h1>{name}</h1>
      <button onClick={() => setName("Peter")}>Change State</button>
    </div>
  );
}

export default Header;
