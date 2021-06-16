import "../../Peekameet.css"
import React  from 'react';
import {Link} from 'react-router-dom';

const Header_login = (props)=>{

 return (
<div className="onToprectangle">
    <div className="header_left">
        <div>
            {/* <div className="Path1"></div>
            <div className="Path2"></div>
            <div className="Path3"></div>
            <div className="Path4"></div>
            <div className="Path5"></div>
            <div className="Path6"></div>
            <div className="Path7"></div> */}
        </div>
        <div className="PeekameetText"> Blogger</div>  
        {/* <div className="Sign-In"> <button> Logout </button></div> */}
        <Link to='/blog' className="create_your_blog"><button class="create_blog">Your&nbsp;Blogs</button></Link>
        <Link to='/resume' className="resume_head"><button class="create_blog"> Resume </button></Link>
        {/* <div className="Sign-Up"><button>Sign Up</button></div> */}
    </div>
</div>

    )
}



export default Header_login;