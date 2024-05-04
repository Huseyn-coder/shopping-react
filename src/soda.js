import "./soda.css"
import foto from './img/Soda.png'
export default function Soda () {
    return (
        <>
        <div className="main1">
            <div>
                <img className="rotate" src={foto}/>
            </div>
            <div className="main2">
                <div>
                    <h2 className="sugarh2">OMG SUGARRRRRR</h2>
                <ul  style={{listStyleType: "none",padding: "0"}}>
                    <li  ><a style={{textDecoration: 'none',color: "white",fontSize: "1.6em", fontWeight: 'bold'}} href="./">GO BACK</a></li>
                </ul>
                </div>
                
            </div>
            <div>
                <img className="rotate" src={foto}/>
            </div>


        </div>
        
        </>
    )
};