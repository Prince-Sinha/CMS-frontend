import Cookie from 'js-cookie'
import { redirect } from 'react-router-dom';


export function Check(){
      const token = Cookie.get('uuid');
      if(!token){
        return redirect('/');
      }
      return null;
}