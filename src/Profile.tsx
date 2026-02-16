import Box from '@mui/material/Box';
import PokereactLogo from './assets/Pokereactimg.png';
import { Link } from 'react-router-dom';


export default function Profile() {
    return (
 
        <Box sx={{ position: 'absolute', top: -70, left: 10 }}>
          <Link to="/">
            <img
              src={PokereactLogo}
              alt="Pokereact Logo"
              style={{ width: 150, height: 'auto', cursor: 'pointer' }}
            />
          </Link>
        </Box>       
    );
}