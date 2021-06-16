import "../../Peekameet.css"
import React,{useState} from 'react';
import Header from '../Header/Header_login';
// import Addnote from '../Addnote/Addnote';
import ADD from '../Addnote/ADD';
import Detail from '../Addnote/Detail';
const Profile = (props)=>{
 let [tog,setTog]=useState("note");
const toggle=(e)=>{
    setTog(e.target.value);
}
 return (
<div>
<Header/>
<div className="ProfileOuter" >
<ADD/>
</div>
</div>

)}



export default Profile;