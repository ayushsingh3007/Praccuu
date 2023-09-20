import React, { useContext } from 'react'
import { Store } from '../ContextStore/Storing';
import "./Style/Style.css"
function Hollywood() {
  const [dataContext]=useContext(Store);
  console.log(dataContext)
  return (
    <>
    
    
    <h3 id='the-latest'>The Latest</h3>
<div id='latest-home'>
 
  <div id='latest-item'>
    {dataContext.filter((item)=>item.id===49).map((item,index)=>{
      return(
        <>
       
        <img src={item.Food_img} alt='not there' width="100%"/>
        <h4>{item.name}</h4>
        <p>{item.story}</p>
        </>
      )
    })} 
</div>
<div id='latest-item'>
{dataContext.filter((item)=>item.id===50).map((item,index)=>{
      return(
        <>
        
        <img src={item.Food_img} alt='not there' width="100%"/>
        <h4>{item.name}</h4>
        <p>{item.story}</p>
        </>
      )
    })}
    </div>

    <div id='latest-item'>

    {dataContext.filter((item)=>item.id===51).map((item,index)=>{
      return(
      
    <>
        <img src={item.Food_img} alt='not there' width="100%" height="280rem"/>
        <h4>{item.name}</h4>
        <p>{item.story}</p>
      </>  
      )
    })} 
    </div>
</div>

<h3 id='top-stories'>Top Stories</h3>
<div id='bottom-homepage'>
<div id='bottom-item'>
{dataContext.filter((item)=>item.id===52).map((item,index)=>{
  return(
    <>
    <img src={item.Food_img} alt='not there' width="200rem" id='bottom-img' />
    <p>{item.story}</p>
    
    </>
    
  )
  
})}
</div>
<div id="bottom-item">
{dataContext.filter((item)=>item.id===53).map((item,index)=>{
  return(
    <>
    <img src={item.Food_img} alt='not there' width="200rem"  id='bottom-img'/>
    <p>{item.story}</p>
    
    </>
    
  )
  
})}
</div>

<div id='bottom-item'>
  {dataContext.filter((item)=>item.id===46).map((item,index)=>{
    return(
    <>
    <img src={item.Food_img} alt='not there' width="200rem" id='bottom-img'/>
    <span>{item.story}</span>
    
    </>)
  })}
</div>
<div id='bottom-item'>
  {dataContext.filter((item)=>item.id===60).map((item,index)=>{
    return(
    <>
    <img src={item.Food_img} alt='not there' width="200rem" id='bottom-img'/>
    <span>{item.story}</span>
    
    </>)
  })}
</div>
<div id='bottom-item'>
  {dataContext.filter((item)=>item.id===56).map((item,index)=>{
    return(
    <>
    <img src={item.Food_img} alt='not there' width="200rem" id='bottom-img'/>
    <span>{item.story}</span>
    
    </>)
  })}
</div>
<div id='bottom-item'>
  {dataContext.filter((item)=>item.id===48).map((item,index)=>{
    return(
    <>
    <img src={item.Food_img} alt='not there' width="200rem" id='bottom-img'/>
    <span>{item.story}</span>
    
    </>)
  })}
</div>

<div id='bottom-item'>
  {dataContext.filter((item)=>item.id===47).map((item,index)=>{
    return(
    <>
    <img src={item.Food_img} alt='not there' width="200rem" id='bottom-img'/>
    <span>{item.story}</span>
    
    </>)
  })}
</div>














</div>


<h3 id='top-post'>Top Posts</h3>
<div id='bottom-right'>
   <div id="rigth-bottom-item-1">
    {dataContext.filter((item)=>item.id===60).map((item,index)=>{
      return(
      <>
      <img src={item.Food_img} alt='not found' width="250rem" id='img-right-bottom'/>
      <p>{item.name}</p>
      <h1 id='number' >1</h1>

      </>
)    })}
   </div>
   <div id="rigth-bottom-item-1">
    {dataContext.filter((item)=>item.id===47).map((item,index)=>{
      return(
      <>
      <img src={item.Food_img} alt='not found' width="250rem" id='img-right-bottom'/>
      <p>{item.name}</p>
      <h1 id='number' >1</h1>

      </>
)    })}
   </div>
   <div id="rigth-bottom-item-1">
    {dataContext.filter((item)=>item.id===49).map((item,index)=>{
      return(
      <>
      <img src={item.Food_img} alt='not found' width="250rem" id='img-right-bottom'/>
      <p>{item.name}</p>
      <h1 id='number' >1</h1>

      </>
)    })}
   </div>




</div>

<div id="advertise"><h1>Advertisement</h1></div>



    
    </>
  )
}

export default Hollywood;