import './home.css'
 import React,{ useState , useEffect } from 'react';
 
 export default function Home() { 
        const X=['combo.jpg ','men.jpg' ,'women.jpg',  'watch.jpg', 'shoe.webp' ,'Shirt-Pants.webp']
    const [count,setcount]=useState(0);    
     
        useEffect( ()=>{
            setTimeout(()=>{
                if(count===X.length-1)
                {
                    setcount(0);
                }
                else{
                    setcount(count+1);
                }
    },2000);
        },[X.length,count]);
    
     
    
        return (
            <>
            <div className='cont-both'>
             <button onClick={()=>setcount(count+1)} className='cont-but1'>&lt;</button>
            <img src={ X[count] } className='cont-img'/>
            <button onClick={()=>setcount(count-1)} className='cont-but2'>&gt;</button>
             </div> 
        </>
        
        )
      }