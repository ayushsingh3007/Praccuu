import React, { useContext } from 'react'
import { Store } from '../ContextStore/Storing';
import "./Style/Style.css"

function Bollywood() {
    const [dataContext]=useContext(Store);
    console.log(dataContext);

  return (
    <>
     <div id='container-1-home'>
      {dataContext.filter((item)=>item.id===1).map((item,index)=>{
        return(
          <div id='home-item-1'>
          
          <img src={item.bolly_img} width="105%" height="90%" alt='no there'/>
          <h3>{item.name}</h3>
          {/* <p>{item.story}</p> */}


          </div>
        )
      })}

      {dataContext.filter((item)=>item.id===10).map((item,index)=>{
      return(
        <div id='home-item-2'>
        <img src={item.bolly_img} width="70%"height="90%" alt='not there'/>
        <h3>{item.name}</h3>
        {/* <p>{item.story}</p> */}
      
      </div>
      
      )
      })}
         
          {dataContext.filter((item)=>item.id===11).map((item,index)=>{
            return(
              <div id='home-item-3'>

              <img src={item.bolly_img} width="70%" height="90%" alt='not there'/>
              <h3>{item.name}</h3>
              {/* <p>{item.story}</p> */}
              
              </div>
            )
          })}
</div>
<h3 id='the-latest'>The Latest</h3>
<div id='latest-home'>
 
  <div id='latest-item'>
    {dataContext.filter((item)=>item.id===7).map((item,index)=>{
      return(
        <>
       
        <img src={item.bolly_img} alt='not there' width="100%"/>
        <h4>{item.name}</h4>
        <p>{item.story}</p>
        </>
      )
    })} 
</div>
<div id='latest-item'>
{dataContext.filter((item)=>item.id===6).map((item,index)=>{
      return(
        <>
        
        <img src={item.bolly_img} alt='not there' width="100%"/>
        <h4>{item.name}</h4>
        <p>{item.story}</p>
        </>
      )
    })}
    </div>

    <div id='latest-item'>

    {dataContext.filter((item)=>item.id===8).map((item,index)=>{
      return(
      
    <>
        <img src={item.bolly_img} alt='not there' width="100%" height="200rem"/>
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
{dataContext.filter((item)=>item.id===11).map((item,index)=>{
  return(
    <>
    <img src={item.bolly_img} alt='not there' width="200rem" id='bottom-img' />
    <p>{item.story}</p>
    
    </>
    
  )
  
})}
</div>
<div id="bottom-item">
{dataContext.filter((item)=>item.id===5).map((item,index)=>{
  return(
    <>
    <img src={item.bolly_img} alt='not there' width="200rem"  id='bottom-img'/>
    <p>{item.story}</p>
    
    </>
    
  )
  
})}
</div>

<div id='bottom-item'>
  {dataContext.filter((item)=>item.id===6).map((item,index)=>{
    return(
    <>
    <img src={item.bolly_img} alt='not there' width="200rem" id='bottom-img'/>
    <span>{item.story}</span>
    
    </>)
  })}
</div>
<div id='bottom-item'>
  {dataContext.filter((item)=>item.id===4).map((item,index)=>{
    return(
    <>
    <img src={item.bolly_img} alt='not there' width="200rem" id='bottom-img'/>
    <span>{item.story}</span>
    
    </>)
  })}
</div>
<div id='bottom-item'>
  {dataContext.filter((item)=>item.id===13).map((item,index)=>{
    return(
    <>
    <img src={item.bolly_img} alt='not there' width="200rem" id='bottom-img'/>
    <span>{item.story}</span>
    
    </>)
  })}
</div>
<div id='bottom-item'>
  {dataContext.filter((item)=>item.id===9).map((item,index)=>{
    return(
    <>
    <img src={item.bolly_img} alt='not there' width="200rem" id='bottom-img'/>
    <span>{item.story}</span>
    
    </>)
  })}
</div>

<div id='bottom-item'>
  {dataContext.filter((item)=>item.id===2).map((item,index)=>{
    return(
    <>
    <img src={item.bolly_img} alt='not there' width="200rem" id='bottom-img'/>
    <span>{item.story}</span>
    
    </>)
  })}
</div>














</div>


<h3 id='top-post'>Top Posts</h3>
<div id='bottom-right'>
   <div id="rigth-bottom-item-1">
    {dataContext.filter((item)=>item.id===5).map((item,index)=>{
      return(
      <>
      <img src={item.bolly_img} alt='not found' width="250rem" id='img-right-bottom'/>
      <p>{item.name}</p>
      <h1 id='number' >1</h1>

      </>
)    })}
   </div>
   <div id="rigth-bottom-item-1">
    {dataContext.filter((item)=>item.id===5).map((item,index)=>{
      return(
      <>
      <img src={item.bolly_img} alt='not found' width="250rem" id='img-right-bottom'/>
      <p>{item.name}</p>
      <h1 id='number' >1</h1>

      </>
)    })}
   </div>
   <div id="rigth-bottom-item-1">
    {dataContext.filter((item)=>item.id===5).map((item,index)=>{
      return(
      <>
      <img src={item.bolly_img} alt='not found' width="250rem" id='img-right-bottom'/>
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

export default Bollywood;