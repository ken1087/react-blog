import axios from 'axios'
import './App.css';

function App() {

  const getData = async () => {
    let response = await axios.get('https://my-json-server.typicode.com/typicode/demo/posts');
    return response.data;
  }

  let res = getData();

  res.then((data) => {
    console.log(JSON.stringify(data));
  });

  return (
    <div className="App">
    </div>
  );
}

export default App;