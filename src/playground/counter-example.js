let count = 0;

const addOne = () => {count++; renderCounter()};
const subtracteOne = () => {count--; renderCounter()};
const resetCount = () => {count = 0; renderCounter()};


// root.render(template2
//   // <React.StrictMode>
//   //   <App />
//   // </React.StrictMode>

// );

const renderCounter = () => {
  const template2 = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={subtracteOne}>-1</button>
      <button onClick={resetCount}>Reset</button>  
    </div>
  );
  root.render(template2);
}

renderCounter();