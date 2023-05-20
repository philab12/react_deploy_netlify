import {useState, useEffect} from "react";
import Form from "./Form";
// import List from "./List";
import Table from "./Table";

function App() {
  const API_URL = "https://jsonplaceholder.typicode.com/";
  const [reqType, setRegType] = useState("users");
  const [items, setItems] = useState([]);
 // const [fetchError, setFetchError] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try{
      const getUrl = `${API_URL}${reqType}`;
      const response = await fetch(getUrl);
       if(!response.ok) throw Error("Please Reload The Page") 
       const data = await response.json();
       setItems(data);
      }catch(err){
       console.log(err);
      }
    }

    fetchItems();


  },[reqType])

  return (
    <div className="App">

      <Form 
         reqType={reqType} 
         setRegType={setRegType} 
      />

      {/* <List items={items} /> */}

      <Table items={items} />
      
    </div>
  );
}

export default App;
