import { useParams , useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Submit from '../components/Submit'
import { useEffect, useState } from "react";
import Header from "../components/Header";
export default function FloorSection(){
    const detail = localStorage.getItem('detail');
    const [floor , setFloor] = useState(JSON.parse(detail));
    const { Id } = useParams();
    const navigate = useNavigate();
    

    const handleChange = (floor_id)=>{
        navigate(`/${Id}/${floor_id}`);
    }

    return (
        <>
          <Header />
          <div className='container'>
             {
                floor.map(el =>{
                    return <button key={el.id} onClick={()=>handleChange(el.id)} className="btn"> <h1>{el.name}</h1></button>
                })
             } 
          </div>
        </>
      )
}