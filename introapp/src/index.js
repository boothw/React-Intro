//import React and ReactDOM libs
import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText() {
    return "Click Me!";
}

//create a  React component
const App = () => {

    const labelText = "Enter name:";

    return (
        <div>
            <div>Are ya winning son?</div>
            <label className="label" htmlFor="name">{labelText}</label>
            <input id="name" type="text" />
            <button style={{ backgroundColor: 'blue', color: 'white' }}>{getButtonText()}</button>
        </div>
    );
};

//show component on screen
ReactDOM.render(<App />, document.querySelector("#root"))