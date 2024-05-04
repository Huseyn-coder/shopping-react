
import './App.css';
import foto from './img/VendingMachine.png'


const Home = () => {
  return (
    <>
  <div className='arkafoto'>
  <img style={{ width: '100%', height: '100%', position: 'absolute', zIndex: "-1" }} src={foto} alt="Background" />
  <div style={{ display: 'flex', justifyContent: 'space-between',alignItems: "center"}} className='maindiv'>
    <div style={{marginTop: '15%', marginLeft: "5%", width: '30%',fontSize: "1.2em",  backgroundColor: 'rgba(0, 0, 0, 0.5)',color: 'white',display: "flex",justifyContent: "center",textAlign: "center", borderRadius: "10px", height: 'auto'}}  >
      <h2>HELLO I AM VENDING MACHINE.WHAT WOULD YOU LIKE TO EAT ?</h2>
    </div>
    <div style={{marginTop: '15%', marginRight: "5%", width: '30%',  backgroundColor: 'rgba(0, 0, 0, 0.5)',color: 'white', borderRadius: "10px", height: 'auto'}}>
    <ul style={{listStyleType: "none", fontSize: "1.5em", fontWeight: "bold",textAlign: "center"}}>
      <li style={{marginBottom: "5px"}}>< a style={{color: "white",textDecoration: "none"}} href='./soda'>SODA</a></li>
      <li style={{marginBottom: "5px"}}>< a style={{color: "white",textDecoration: "none"}} href='./chips'>CHIPS</a></li>
      <li style={{marginTop: "5px"}}>< a style={{color: "white",textDecoration: "none"}} href='./sardines'>FRESH SARDINES</a></li>
    </ul>
    </div>
  </div>
</div>


    
    </>
    
  );
}

export default Home;
