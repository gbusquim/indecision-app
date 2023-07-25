import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

let obj = {
  title: "My title",
  subtitle: "My subtitle",
  options: []
}

const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if (option) {
    obj.options.push(option);
    e.target.elements.option.value = '';
    renderOptions();
  }
};

const onRemoveAll = () => {
  obj.options = [];
  renderOptions();
};

const renderOptions = () => {
  const template = (
    <div>
      <h1>{ obj.title }</h1>
      {obj.subtitle && <p>{ obj.subtitle }</p>}
      <p>{obj.options.length > 0 ? "Your options" : "No options" }</p>
      <p>{obj.options.length}</p>
      <button onClick={onRemoveAll}>Remove all</button>
      <ol>
        {
          obj.options.map((option) => <li key = {option}>{option}</li>)
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add</button>
      </form>
    </div>
  );
  
  root.render(template);
};

renderOptions();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
