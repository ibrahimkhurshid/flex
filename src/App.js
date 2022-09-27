import './App.css';

function App() {
  return (
    <div>
      <div className='header'>Header</div>
      <div className="flex-container">
        <Line />
        <Line />
        <Line />
      </div>
      <div>Footer</div>
    </div>
  );
}


const Line = ()=>{
  return(
    <textarea className="item">Lorem ipsum dolor sit amet consectetur adipisicing elit. </textarea>
  )
}

export default App;
