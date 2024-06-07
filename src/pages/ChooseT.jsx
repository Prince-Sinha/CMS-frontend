import Button from './../components/Button'
import { useState } from 'react';
import { useParams , useNavigate } from 'react-router-dom';
import Header from '../components/Header';

export default function ChooseT(){
    const detail = localStorage.getItem('detail');
    const details = JSON.parse(detail);
    const {Id, floorid , gen}= useParams();
    const navigate = useNavigate();
    let washroomlist=[];
    details.forEach(el=>{
        if(el.id==floorid){
            washroomlist = el.washroom.filter(elm => elm.washroom_name.startsWith(gen));
        }
    })
    console.log(washroomlist);
    
    const handleChange = (Tid)=>{
        navigate(`/${Id}/${floorid}/${gen}/${Tid}`);
    }

    return (
        <>
          <Header />
          <div className='container'>
             {
                washroomlist.map(el =>{
                    return <button key={el.id} onClick={()=>handleChange(el.id)} className="btn"> <h1>{el.washroom_name}</h1></button>
                })
             }
          </div>
          
        </>
      )
}