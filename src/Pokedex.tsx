import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useGetPokemonsQuery } from './store/api/pokemonApi';
import { Link } from 'react-router-dom';
import PokereactLogo from './assets/Pokereactimg.png';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));



export default function Pokedex() {
  const { data: lPokemons, error: lError, isLoading: lIsLoading } = useGetPokemonsQuery();
  const [lSearchTerm, setSearchTerm] = useState<string>('');

  if (lIsLoading) return <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>Loading...</Box>;
  if (lError) return <Box sx={{ color: 'error.main', textAlign: 'center', p: 4 }}>Error fetching pokemons</Box>;

  const lFilteredPokemons = lPokemons?.slice(1).filter((lPokemon) => lPokemon.name.fr.toLowerCase().includes(lSearchTerm.toLowerCase()));
  return (

    <Box sx={{ flexGrow: 1, marginTop: 20 }}>
      <Box sx={{ position: 'absolute', width: 700, maxWidth: '100%', marginLeft: 50, marginTop: -14 }}>
        <TextField fullWidth label="Search a Pokemon" id="searchBar" onChange={(e) => setSearchTerm(e.target.value)} />
      </Box>

      <Box sx={{ position: 'absolute', top: -70, left: 10 }}>
        <Link to="/">
          <img
            src={PokereactLogo}
            alt="Pokereact Logo"
            style={{ width: 150, height: 'auto', cursor: 'pointer' }}
          />
        </Link>
      </Box>

      {<Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {lFilteredPokemons?.map((lPokemon) => (
          <Grid key={lPokemon.pokedex_id} size={{ xs: 2, sm: 4, md: 3 }}>

            <Item>
              <Box sx={{ display: 'fixed', justifyContent: 'center', marginTop: -2, textDecoration: 'underline', fontWeight: 'bold', fontSize: 12 }}>Index: {lPokemon.pokedex_id}</Box>
              <img
                src={lPokemon.sprites.regular}
                alt={lPokemon.name.fr}
                style={{ width: '100%', height: 'auto', maxWidth: 150, margin: '0 auto', display: 'block' }}
              />
              <Box component="span" sx={{ display: 'block', marginTop: 2, fontWeight: 'bold' }}>
                {lPokemon.name.fr}

                <Box style={{ display: 'flex', flexDirection: 'row', justifyContent: 'left', width: '100%' }}>
                  {lPokemon.types?.map((lType) => (
                    <img
                      key={lType.index}
                      src={lType.image}
                      alt={lType.name}
                      style={{ width: 20, height: 20, marginLeft: 5, marginTop: 5 }}
                    />
                  ))}
                </Box>
              </Box>
            </Item>
          </Grid>
        ))}
      </Grid>}
    </Box>
  );
}
