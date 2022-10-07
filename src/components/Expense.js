import React from 'react'

function Expense({data,deleteExpense}) {
  return (
    <tr>
    <td>{data.id}</td>
    <td>{data.item}</td>
    <td>{data.category}</td>
    <td>{data.cost}</td>
    <td><button className='btn-done' onClick={()=>deleteExpense(data.id)}>Delete expense</button></td>
    </tr>
  )
}

export default Expense;