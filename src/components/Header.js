import Nav from "./Nav";
import Test from "./Test";

function Header(props) {
  const num = 2000;

  
  return (
    <div>
      <Nav logo={props.text} />
      <Test num={num} />
      <h1>{props.number}</h1>
    </div>
  );
}

export default Header;
