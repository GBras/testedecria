
import './App.scss';

import { useState } from 'react';
function App() {
  const [produto, setProduto] = useState('');
  const [valor, setValor] = useState('');
  const [adicionar, setAdicionar] = useState([]);
  const[total, setTotal]=useState('');
  

  function alterarprodutos (e) {
    setProduto(e.target.value); 

  }
  function adicionarpt() {
    adicionar.push(produto);
    setAdicionar([...adicionar]);
    setProduto('');
    adicionar.push(valor);
    setAdicionar([...adicionar]);
    setProduto('');
  }

 

  function alterarvalor (e) {
    setValor(e.target.value); 

  }
  function adicionarvl() {
    adicionar.push(valor);
    setAdicionar([...adicionar]);
    setProduto('');
  }


  return (
    <div className="sorveteria ">
      <div className='sorvete'>
        <img src='https://cdn.discordapp.com/attachments/1082674604285366322/1137017827459612832/image.png'></img>
        <h1>sorveteria</h1>

      </div>
      <h1>Novo item </h1>
      <div className='produtos '>
        <h1> </h1>
         <input type='text' value={produto} onChange={alterarprodutos}></input>
         
         <input type='number' value={valor} onChange={alterarvalor}></input>
        <button onClick={adicionarpt}>adicionar</button>
      </div>
    
       
    
      <div></div>

    </div>
  );
}

export default App;
