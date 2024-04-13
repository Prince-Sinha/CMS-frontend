import { NavLink} from 'react-router-dom'
export default function SideBar(){
    return(
        <>
          <div className="side">
            <ul>
                <li className='p-1'>
                    <NavLink to={'/assignment'} >Assign</NavLink>
                </li>
                <li>
                    <NavLink to={'/'} >Details</NavLink>
                </li>
                <li>
                    <NavLink to={'/verify'} >Verify</NavLink>
                </li>
            </ul>
          </div>
        </>
    )
}