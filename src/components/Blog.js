import React from 'react'

function Blog() {
  function handleClick(){
     alert("Thank you for subscribing to our blog...")
  }
  return (
   <div>
     <h3>Saving Tips Blog</h3>
     <p>The goal of financial education is financial capability development.<br/>
       Depending on their circumstances, people may lack some or all of the elements <br/>
       that enable them to be financially capable within their own community. <br/>
       This is true for people of different incomes and backgrounds and living <br/>
       in different parts of the world. The FECC is specifically designed for low-income <br/>
       people in developing countries, who face greater challenges due to their lack of resources, <br/>
       variability of incomes, and exposure to greater risks inherent in their external environments.</p>
    <button type='submit' onClick={handleClick}>Subscribe</button>
   </div>
  )
}

export default Blog