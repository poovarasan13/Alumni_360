
import "../../assets/style/OtherForum.css";
import PostCard from "./PostCard";
import P from "../../assets/images/Person.png";
import post from "../../assets/images/post.png";
const posts=[
    {
          id:1,
          Image:P,
          name:"John Wick",
          content:"Vertical 12 pack can dispenser",
          imgPost:post,
          link:"/",
          para:"Holds a 12 pack of 12oz cans vertically with a slot at the bottom to grab them. Printed with minimal support, though that could use some tweaking. Only used about 78g of filament but took ~9 hours to print. I can upload the STL if there is interest.",

    },
    {
        id:2,
        Image:P,
        name:"Poovarasan",
        content:"Vertical 12 pack can dispenser",
        imgPost:post,
        link:"/",

  },
  {
    id:3,
    Image:P,
    name:"John Wick",
    content:"Vertical 12 pack can dispenser",
    imgPost:post,
    link:"/",

},
{
    id:4,
    Image:P,
    name:"John Wick",
    content:"Vertical 12 pack can dispenser",
    imgPost:post,
    link:"/",

},

]
const OtherForum=()=>{
    return(
        <>
        <div className="container mt-3">
            <div className="row text-start mt-3">
                <div className="col ">
                    <div className="text h4 fw-bold ">3D Printing</div>
                    </div>
            </div>
            {
                posts.map((pos,index)=>
                (
                    <PostCard key={index} {...pos}/>
                ))
            }
               {/* <PostCard/> */}
        </div>
        </>
    )
}
export default OtherForum;