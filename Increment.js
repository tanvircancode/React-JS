 const domContainer = document.querySelector("#root");

const Increment = () => {
    const [counter, setCounter] = React.useState(9);
    console.log(reactState);
      return(
          <div id="root">
              <h1 id="display">{counter}</h1>
            <div>
              <button id="button" onClick="setCounter(counter+1)">Increment +</button>
            </div>
           </div>
      );
 };

 ReactDOM.render(<Increment  />, domContainer);
 let number = 0;
  const display = document.querySelector("#display");
  const button = document.querySelector("#button");

  button.addEventListener("click", () => {
     number++;
     display.textContent = number;
  });


