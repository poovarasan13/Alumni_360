
import {Link} from "react-router-dom";
import "../assets/style/ForumSideBar.css";
const ForumSideBar=()=>{
    return(
        <><div className="row  sidebar-scroll ">
                <div className="row  mx-auto ">
                       <Link className="list-group-item list-group-item-action pt-2 h6" to="/forum/forumhome">Home</Link>
                </div>
                <hr></hr>
                <Link className="list-group-item list-group-item-action h6 " to="/forum/other">Programming</Link>
                <Link className="list-group-item list-group-item-action py-2 h6" to="/forum/forumhome">Software & Apps </Link>
                <Link className="list-group-item list-group-item-action py-2 h6" to="/forum/forumhome">Artifical Intelligence & Machine Learning</Link>
                <Link className="list-group-item list-group-item-action py-2 h6" to="/forum/forumhome">Computers & Hardwares</Link>
                <Link className="list-group-item list-group-item-action py-2 h6" to="/forum/forumhome" >Trending Technologies</Link>
                <Link className="list-group-item list-group-item-action py-2 h6" to="/forum/forumhome">Software & Apps </Link>
                <Link className="list-group-item list-group-item-action py-2 h6" to="/forum/forumhome">Virtual & Augumented Reality</Link>
                <Link className="list-group-item list-group-item-action py-2 h6" to="/forum/forumhome">DIY Electronics</Link>
                <Link className="list-group-item list-group-item-action py-2 h6" to="/forum/forumhome">3D Printing</Link>
                <Link className="list-group-item list-group-item-action py-2 h6" to="/forum/forumhome">Tech News & Discussion</Link>
                <Link className="list-group-item list-group-item-action py-2 h6" to="/forum/forumhome">Education  & Career</Link>
                <Link className="list-group-item list-group-item-action py-2 h6" to="/forum/forumhome">Memes</Link>
                <Link className="list-group-item list-group-item-action py-2 h6" to="/forum/forumhome">Q & A</Link>
            {/* </div> */}
            </div>
            
        </>
    )
}
export default ForumSideBar;