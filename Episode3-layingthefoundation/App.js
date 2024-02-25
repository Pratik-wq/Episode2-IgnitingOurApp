import React from "react";
import ReactDOM from "react-dom/client";

//All three are functional components
const Heading = () => {
    return <h1>Namaste React 🚀</h1>
};

const New = () => <h1>🐰</h1>;



//render the component inside the another component is called Composing Component ex:-<New/>
const SecondHeading = () =>(
    <div>
        <New/> 
        <h1> 👍</h1>
        <h1> 👎</h1>
    </div>
);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<><Heading/><SecondHeading/></>); //here we use fragments to put multiple component rendering like a wrapper.

//<Heading/>
//<Heading></Heading>
//{Heading()}
//all three to render to functional component