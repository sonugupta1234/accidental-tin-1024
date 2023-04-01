import React, { useState } from 'react'
import axios from "axios"

const Adminproduct = () => {
  const [data,setData]=useState([])

  const fetchAndUpdate = () => {
    return axios.get(`https://good-lime-perch-sock.cyclic.app/products/getproducts`).then((res)=>{ 
      setData(res.data.products)  
      console.log(res.data.products)
    })
  }

  React.useEffect(()=> {
   fetchAndUpdate()
  },[])

  function deletefn(id){
    return axios({
      method:"delete",
      url:`https://good-lime-perch-sock.cyclic.app/products/getproducts/${id}`,
    })
  }

  const handleDel = (id)=> {
    // console.log(1);
    deletefn(id)
    fetchAndUpdate()
  }

  return (
    <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",width:"90%",margin:"auto"}}>
      {data.map((el)=> (
        <div key={el._id} style={{border:"1px solid grey",margin:"5px"}} >
          <img src={el.images} alt="" width={"80%"} height={"500px"} />
          <h3 style={{fontWeight:'800',marginTop:"10px"}} >{el.brand}</h3>
          <p style={{marginTop:"10px",fontSize:"13px"}}>{el.title}</p>
          <p style={{marginTop:"10px"}}><span style={{fontWeight:'700'}}>Rs. {el.discounted_price} </span> <span style={{textDecoration:"line-through"}} >{el.strike_price}</span> <span style={{fontWeight:'450',color:"red"}}>{el.discount}</span></p>
          <button style={{backgroundColor:"grey",color:"white",borderRadius:"5px",marginTop:"15px"}} >Update</button>
          <button style={{backgroundColor:"red",color:"white",borderRadius:"5px"}} onClick={()=>handleDel(el._id)}>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default Adminproduct;