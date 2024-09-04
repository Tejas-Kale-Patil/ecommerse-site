import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import '../App.css'
import { useNavigate } from 'react-router-dom';
function Navbar() {
    const navigate = useNavigate();
  return (
    <nav className="navbar navbar-dark bg-primary fixed-top p-0 mb-2">
        <div className='container d-flex align-items-center justify-content-between'>
            <div  onClick={()=>navigate('/')} style={{cursor:'pointer'}}>
                <h4 className=' fw-bold text-light p-0 m-0 '>Flipkart</h4>
                <p className='text-info titleSubText'>Clone by 
                    <span className='text-warning'>Tejas</span>
                </p>
            </div>
            <div onClick={()=>navigate('/cart')}>
                <Tooltip title="Cart">
                    <IconButton>
                        <ShoppingCartIcon/>
                        <span className='cartText'>{"  "}Cart</span>
                    </IconButton>
                </Tooltip>
            </div>
        </div>
    </nav>
  )
}

export default Navbar