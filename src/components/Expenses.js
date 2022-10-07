import React,{useEffect,useState} from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Expense from './Expense'
import Search from './Search';

function Expenses() {
  const [expenses,setExpenses] = useState([]);
  const[searchInput, setSearchInput]=useState([]);

  function getExpense(data){
    fetch(`https://budget-bac.herokuapp.com/expenses`)
    .then(res=>res.json())
    .then(data=> setExpenses(data))
  }
  
  // useEffect(getExpense,[]);


  function deleteExpense (id){ 
    fetch(`https://budget-bac.herokuapp.com/expenses/${id}`,{
    method:"DELETE" })
     getExpense();
 }

useEffect(() => {
  if (searchInput.length > 0){
    setExpenses(prevItems => prevItems.filter((expense) => expense.item.toLowerCase().includes(searchInput.toLowerCase())));
  } else {
    getExpense()
  } 
},[searchInput])

const handleSearch = (event) => {
  setSearchInput(event.target.value);
}


  return ( 
  <div>
    <div>
      <Search handleSearch={handleSearch}/>
    </div>
     <div className='table'>
    <table className="table table-dark">
  <thead>
    <tr>
      <th scope='col'>NO.</th>
      <th scope="col">ITEM</th>
      <th scope="col">CATEGORY</th>
      <th scope="col">COST</th>
      <th>#</th>
    </tr>
  </thead>
  <tbody>
    {expenses.map(data=> <Expense
    key={data.id}
    data={data}
    deleteExpense={deleteExpense}
    />)}
  </tbody>
  </table>
   </div>
  </div>
  );
}

export default Expenses;