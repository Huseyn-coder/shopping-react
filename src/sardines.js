import foto from './img/sardines.gif'
import "./sardines.css"

export default function Sardines () {
    return (
        <>
        <div className='fishdiv'>
            <img src={foto}/>
            <div className='sardinesdiv'>
                <p>YOU DON'T EAT THE SARDINES. THE SARDINES, THEY EAT YOU!</p>
                <ul style={{padding: "0"}}>
                    <li>
                    <a style={{color: "white", fontSize: "1.6em", fontWeight: 'bold',}} href="./">GO BACK</a>
                    </li>
                </ul>
            </div>
        </div>
        
        </>
    )
}