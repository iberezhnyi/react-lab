import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<React.StrictMode></React.StrictMode>);

// const div = document.createElement("div");
const root = document.getElementById("root");

// root.append(div);

// const p = React.createElement("p", { id: "rty", className: "paragraph" });
// const div = React.createElement("div", {
//   id: "qwe",
//   className: "section",
//   children: [p, p],
// });

const div2 = (
  <>
    <div id="qaz" classname="footer"></div>
    <div></div>
  </>
);

console.log("div2 :>> ", div2);
ReactDOM.createRoot(root).render(div2);
