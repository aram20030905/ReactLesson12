import "./work.css"
import image1 from "../../image/1.jpg"
import image2 from "../../image/2.jpg"
import image3 from "../../image/3.jpg"
import image4 from "../../image/4.jpg"

function Work(){
    return (
        <div className="work">
            <div className="works">
            <h2>Խանութներում</h2>
<img src={image1}  height="350px" width="350px"/>
     
            </div>
            <div className="works">
            <h2>Արտադրամասերում</h2>
            <img src={image2}  height="350px" width="350px"/>
            </div>
            <div className="works">
            <h2>Առաքում</h2>
            <img src={image3}  height="350px" width="350px"/>
            </div>
            <div className="works">
            <h2>Տեխնիկական սպասարկում</h2>
            <img src={image4}  height="350px" width="350px"/>
            </div>
        </div>
    )
}
export default Work