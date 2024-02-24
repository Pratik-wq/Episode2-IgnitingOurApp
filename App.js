/**
 * <div id="parent">
 *      <div id="child">
 * 
 *             //here we creating siblings more than one tags as siblings
 *          <h1>I'm h1 tag</h1>
 *          <h2>I'm h2 tag</h2>
 *      </div>
 * 
 * </div>
 * 
*/

/**
 * if u have to pass mutiple siblings inside the parent tag then we can use array of sbilings in place of children in createElement.
 * const heading=React.createElement(The type of element or tags,object({}),the content inside the element)
 * const heading=Recat.createElement(type,props,...children)
 * 
 */
import React from "react";
import ReactDOM from "react-dom/client";


const heading=React.createElement(
    "div",
    {id:"parent"},
    React.createElement("div",{id:"child"},[
        React.createElement("h1",{},"I'm learning 😄"),
        React.createElement("h2",{},"I'm new here 🥳")
    ]));
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
/**
 * JSX to get rid from this the nesting or creating array
 * 
 */