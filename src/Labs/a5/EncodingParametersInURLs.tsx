import React, { useState } from "react";

function EncodingParametersInURLs() {
  const [a, setA] = useState(34);
  const [b, setB] = useState(23);
  return (
    <div>
      <h3>Encoding Parameters In URLs</h3>
      <h4>Calculator</h4>
      <input className="form-control" type="number" value={a}
        onChange={(e) => setA(parseInt(e.target.value))}/>
      <input className="form-control" type="number"
        onChange={(e) => setB(parseInt(e.target.value))} value={b}/>
      <h3>Path Parameters</h3>
      <a className="btn btn-primary" href={`http://localhost:4000/a5/add/${a}/${b}`}>
        Add {a} + {b}
      </a>
      <a className="btn btn-danger" href={`http://localhost:4000/a5/subtract/${a}/${b}`}>
        Substract {a} - {b}
      </a>
      <a className="btn btn-primary" href={`http://localhost:4000/a5/multiply/${a}/${b}`}>
        Add {a} * {b}
      </a>
      <a className="btn btn-danger" href={`http://localhost:4000/a5/divide/${a}/${b}`}>
        Substract {a} / {b}
      </a>
      <h3>Query Parameters</h3>
      <a className="btn btn-primary"
        href={`http://localhost:4000/a5/calculator?operation=add&a=${a}&b=${b}`}>
        Add {a} + {b}
      </a>
      <a className="btn btn-danger"
        href={`http://localhost:4000/a5/calculator?operation=subtract&a=${a}&b=${b}`}>
        Substract {a} - {b}
      </a>
      <a className="btn btn-primary"
        href={`http://localhost:4000/a5/calculator?operation=multiply&a=${a}&b=${b}`}>
        Multiply {a} * {b}
      </a>
      <a className="btn btn-danger"
        href={`http://localhost:4000/a5/calculator?operation=divide&a=${a}&b=${b}`}>
        Divide {a} / {b}
      </a>
    </div>
  );
}
export default EncodingParametersInURLs;