import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useGetPokemonsQuery } from './store/api/pokemonApi';

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

  if (lIsLoading) return <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>Loading...</Box>;
  if (lError) return <Box sx={{ color: 'error.main', textAlign: 'center', p: 4 }}>Error fetching pokemons</Box>;

  return (
    <Box sx={{ flexGrow: 1, marginTop: 20 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {lPokemons?.map((lPokemon) => (
          <Grid key={lPokemon.id} size={{ xs: 2, sm: 4, md: 3 }}>
            <Item>
              <img
                src={lPokemon.image}
                alt={lPokemon.name}
                style={{ width: '100%', height: 'auto', maxWidth: 150, margin: '0 auto', display: 'block' }}
              />
              <Box component="span" sx={{ display: 'block', marginTop: 1, fontWeight: 'bold' }}>
                {lPokemon.name}
              </Box>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
