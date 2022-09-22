import './App.css';
import Countries from './components/Countries/Countries';


function App() {

  return (
    <div className="App">
     <Countries></Countries>
    </div>
  );
}






     {/* <LoadCountries></LoadCountries> */}
/* 
function LoadCountries(){
const [countres, setCountres] = useState([]);
useEffect(()=>{
  fetch('https://restcountries.com/v3.1/all')
  .then(res => res.json())
  .then(data => setCountres(data))
},[])

  return (
    <div>
      <h1>Visiting Every Country of the World</h1>
      <p>Available Countries: {countres.length}</p>

    {
      countres.map(countre =><Country name={countre.name.common} population={countre.population} ></Country>)
    }

    </div>
  )
}

function Country(props){
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <h4>Population {props.population}</h4>
    </div>
  )
}
 */
export default App;
