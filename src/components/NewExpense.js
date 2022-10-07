import React, {useState} from 'react';

 function NewExpense() {
   const [item,setItem]= useState("")
   const [category,setCategory]= useState("")
   const [cost,setCost]= useState()
  

  function addExpense (event){
    event.preventDefault();
    const data = {
      item: item,
      category: category,
      cost:cost
    }
    //hoisting
   post(data)
 
  setItem("")
  setCategory(" ")
  setCost(" ")
  }

  function post (obj){
    fetch(`https://budget-bac.herokuapp.com/expenses`,{
      method: "POST", 
      headers: {"Content-Type": "application/json", 
    },
      body: JSON.stringify(obj)
    })
  }

  return (
    <div>
      <h2>Add a new item :</h2>
    <form className="form" onSubmit={addExpense} >
        <div>
        <input type="text" placeholder="Item" value={item} onChange={(e)=>setItem(e.target.value)} />
        <input type="text" placeholder="Category" value={category} onChange={(e)=>setCategory(e.target.value)} />
        <input type="number" placeholder="Cost" step="$10" value={cost} onChange={(e)=>setCost(e.target.value)} />
      </div>
      <button className="button" type="submit" > Add Item </button>
    </form>
  </div>
  )
}

export default NewExpense;