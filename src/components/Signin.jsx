import TextField from '@mui/material/TextField';
import { Form } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react"
import { useAuth } from '../AuthContext';
import Cookie from 'js-cookie'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {CircularProgress, Backdrop} from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function Signin() {
    const navigate = useNavigate();
    const { signIn } = useAuth();
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(prev=> !prev);

        const form = new FormData(event.target);
        const formData = Object.fromEntries(form.entries());
        

        fetch(`https://backend.ankitkumar143872.workers.dev/api/v1/user/signin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
            .then(async (res) => {
                if (!res.ok) {
                    toast.error('Invalid Emailid or Password', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    setLoading(prev=> !prev);
                    return;
                }
                const resData = await res.json();
                signIn(resData);
                
                Cookie.set('uuid', resData.token);
                Cookie.set('name',resData.name);
                setLoading(prev=> !prev);
                navigate('/admin/details');
            }).catch((err) => {
                toast.error(err, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
                setLoading(prev=> !prev);
                
            })



    }
    // useEffect(() => {
    //     console.log("this is data");
    //     console.log(data);
    //     // navigate("/assignment", { state: { id: 7, color: 'green'} });

    // }, [data]);
    return (
        <>
            <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
            />
            
            <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={loading}>
            <CircularProgress />
            </Backdrop>
            {/* <div className='sign'>

                <Form className='sigin' method='post' onSubmit={handleSubmit} >
                    <TextField sx={{ margin: 1, width: '100%' }} id="outlined-basic" name='username' label="Mobile Number" variant="outlined" />
                    <TextField
                        sx={{ margin: 1, width: '100%' }}
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        name='password'
                        autoComplete="current-password"
                    />
                    <button type='submit' className='sign-btn'>Sign in</button>
                   
                </Form>
            </div> */}
            <div className='account'>
            <div className='account-summ account-ui view '>
                            <div >
                                <img src="static/images/logo.png" alt="" />
                                <p className='text-2xl font-semibold text-center text-white'>Maulana Azad</p>
                                <p className='text-4xl font-bold text-center text-white'>National Institute of Technology</p>
                            </div>
                    </div>
                
                <div className='account-summ account-form'>
                    <div className='account-subform'>
                    
                    <Form className='form-signin'  method='post' onSubmit={handleSubmit} >
                      <TextField sx={{ margin : 1 }} fullWidth id="outlined-basic" name='username' label="Mobile Number" variant="outlined" />
                      <TextField
                        sx={{ margin : 1 }}
                       id="outlined-password-input"
                        label="Password"
                        type="password"
                        name='password'
                        autoComplete="current-password"
                        fullWidth
                      />
                      <button type='submit' className='sign-btn'>Sign in</button>
                   
                    </Form>
                    </div>
                    </div>
                   
                
            </div>
        </>
    )
}