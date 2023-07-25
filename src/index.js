import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const IndecisionApp = () => {
  const myTitle = "Another title";

  const [options, setOptions] = useState([]);

  const handlePick = () => {
    const chosenOption = options[Math.floor(Math.random() * options.length)];
    alert(chosenOption);
  };

  const deleteOptions = () => {
    setOptions([]);
  };

  const addOption = (option) => {
    if (!option) {
      return "Invalid Option";
    } else if (options.indexOf(option) > -1) {
      return "Already exists";
    }

    setOptions(options.concat(option));
  };

  return (
    <div>
      <Header title={ myTitle }/>
      <Action hasOptions={options.length > 0} handlePick={handlePick} />
      <Options options={options} deleteOptions={deleteOptions}/>
      <AddOptions addOption={addOption}/>
    </div>
  )
};



class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{ this.props.title }</h1>
      </div>
    );
  }
}

const Action = ({ hasOptions, handlePick }) => {

  return (
    <button 
      onClick={handlePick}
      disabled={!hasOptions}
    >  
      What should I do?
    </button>
  );
};


// class Action extends React.Component {
//   render() {
//     return (
//       <button>This is an action button.</button>
//     );
//   }
// }

const Options = ({ options, deleteOptions }) => {


  return (
    <div>
      <button onClick={deleteOptions}>Remove all</button>
      {options.map(option => <Option key={option} innerText={option} />)}
    </div>
  )
};

const Option = ({ innerText }) => {
  return (
    <div>{innerText}</div>
  )
};

// class AddOptions extends React.Component {
//   render() {
//     return (
//       <button>Add option.</button>
//     );
//   }
// }

const AddOptions = ({ addOption }) => {

  const [error, setError] = useState(undefined); 


  const handleAddOption = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = addOption(option);
    setError(error);
    
  };

  return (
    <div>
      {error && <p>{error}</p>}
      <form onSubmit={handleAddOption}>
        <input type="text" name="option"/>
        <button>Add Option</button>
      </form>
    </div>
  );
}


root.render(<IndecisionApp />);
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
