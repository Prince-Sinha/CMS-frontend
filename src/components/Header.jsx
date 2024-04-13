import { DEFAULT_DESKTOP_MODE_MEDIA_QUERY } from "@mui/x-date-pickers/internals";
import DropdownMenu from "./DropDown"
import DehazeIcon from '@mui/icons-material/Dehaze';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
import { NavLink } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';
import Cookie from "js-cookie";
import { useNavigate } from "react-router-dom";
import { Backdrop } from "@mui/material";
export default function Header(){
    const navigate = useNavigate();
    const name = Cookie.get('name');
    const [state,setState] = useState(false);
    const handle = ()=>{
       setState(prev => !prev);
    }
    const text = state ? 'block':'none'; 
    const handle1 = ()=>{
       Cookie.set('uuid',null);
       Cookie.set('name',null);
       navigate('/signin');
    }
    const [loading, setLoading] = useState(false);
    return (
        <>
          <div id="header">
            
             <img src="./logo.png" alt="MANIT-LOGO" />
             <div>
                <div className="name-container">Maulana Azad National Institute of Technology</div>
             </div>
           
              <div className="name-con">
                 <p>{name}</p>
                 <PersonIcon fontSize="large" />
                 <button onClick={handle1}>Log out</button>
              </div>
              <div id="small-view">
                {
                  state ?<p></p> :<DehazeIcon sx={{color:'white' ,marginRight:1}} onClick={handle} fontSize="medium" /> 
                }
               
              </div>
          </div>
          <div className="name">
             <PersonIcon fontSize="medium" />
             <p>{name}</p>
          </div>
          
          <section style={{display: text}} id='side-nav'>
                    <ul>
                      <li className="text-end content-end"><CloseIcon fontSize="large" onClick={handle} /></li>
                      <li className='p-3'>
                          <NavLink to={'/assignment'} onClick={handle} >Assign</NavLink>
                      </li>
                      <li className='p-3'>
                          <NavLink to={'/'} onClick={handle} >Details</NavLink>
                      </li>
                      <li className='p-3'>
                          <NavLink to={'/verify'} onClick={handle}>Verify</NavLink>
                      </li>
                      <li className='p-3'>
                          <NavLink to={'/signin'} onClick={handle1}>Logout</NavLink>
                      </li>
                   </ul>
            </section>
            
        </>
    )
}