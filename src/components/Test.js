import "./test.css";

function Test(props) {
  return (
    <div className="hero">
      <h1>hello world</h1>
      <p>hello</p>
      <h2>{props.num}</h2>
    </div>
  );
}

export default Test;
