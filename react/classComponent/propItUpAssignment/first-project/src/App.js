import './App.css';
import PersonCard from './components/PersonCard';
function App() {
  return (
    <>
      <header className="App">
        <PersonCard firstName={"Doe"} lastName={"Jane"} age={"45"} hairColor={"Black"}/>
        <PersonCard firstName={"Smith"} lastName={"John"} age={"88"} hairColor={"Brown"}/>
        <PersonCard firstName={ "Header Prop" }>
            <p >This is a child</p>
            <p>This is another child</p>
            <p>This is even another child</p>
            <button onClick={ ()=> alert("This button has been clicked!") }>Click Me</button>
        </PersonCard> 
        <PersonCard firstName={"Fillmore"} lastName={"Millard"} age={"50"} hairColor={"Brown"}/>
        <PersonCard firstName={"Smith"} lastName={"Maria"} age={"62"} hairColor={"Brown"}/>
      </header>
    </>
  );
}

export default App;
