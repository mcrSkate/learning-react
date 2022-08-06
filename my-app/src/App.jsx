import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {

  const nome = "Maria"

  return (
    <div className="App">
      <SayMyName nome="Matheus"/>
      <SayMyName nome="João"/>
      <SayMyName nome={nome}/>
      <Pessoa nome="Rodrigo" idade="28" profissao="Programador" foto="https://images.theconversation.com/files/465905/original/file-20220530-22-ktw8io.jpeg?ixlib=rb-1.1.0&q=45&auto=format&w=150&h=150.0&fit=crop" />
    </div>
  );
}

export default App;
