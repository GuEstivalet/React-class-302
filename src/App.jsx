import React from 'react';
import Produto from './Produto';

const App = () => {
  
  const [produto, setProduto] = React.useState(null);
  
  function handleClick({target}) {
    setProduto(target.innerText);
  }

  React.useEffect(() =>{
    if (produto !== null)
      window.localStorage.setItem('produto', produto);
  }, [produto]);

  React.useEffect(() => {

    const produtoLocal = window.localStorage.getItem("produto");

    if (produtoLocal !== null){
      setProduto(produtoLocal);
    }
    console.log(produtoLocal);

  }, []);

  return (
    <div>
      <h1>Preferência: {produto}</h1>
      <button onClick = {handleClick} style={{margin: "1rem"}}>Notebook</button>
      <button onClick = {handleClick} style={{margin: "1rem"}}>Smartphone</button>
      <Produto produto = {produto} />
    </div>
  )
}

export default App;

