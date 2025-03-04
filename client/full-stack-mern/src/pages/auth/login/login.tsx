import React from 'react'
import { Box, Button, Card, CardContent, Checkbox, Container, FormControlLabel, TextField, Typography, Link } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Link as RouterLink } from 'react-router-dom';
import { Google } from '@mui/icons-material';

const Login = () => {

  return (
    <>
      <Container maxWidth="sm" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Card sx={{ maxWidth: 500, border: 1, boxShadow: 0, borderColor: 'grey.300', }}>
          <CardContent>
            <Box component="form">
              <Grid container spacing={3}>
                <Grid size={12} sx={{ textAlign: 'center', mb:4 }}>
                  <Typography variant="h5" sx={{ fontWeight: 'bold' }} gutterBottom>
                    Sign In
                  </Typography>
                  <Box sx={{ fontSize: 'default', fontFamily: 'default' }}>Welcome, please sign in to continue</Box>
                </Grid>
                <Grid size={12}>
                  <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth />
                </Grid>
                <Grid size={12}>
                  <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth />                 
                </Grid>
                <Grid size={12} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <FormControlLabel control={<Checkbox />} label="Remember me" />
                  <Link component={RouterLink} to={`/forgot-password`} underline="hover" sx={{ fontFamily: 'default', textAlign: 'center' }}>Forgot password</Link>
                </Grid>
                <Grid size={12} sx={{ display: 'flex' }}>
                  <Button variant="contained" sx={{ textTransform: 'capitalize' }} fullWidth size="large">Sign In</Button>
                  <Button variant="outlined" fullWidth size="large" sx={{ textTransform: 'capitalize', ml: 2 }} startIcon={<Google />}>Sign In With Google</Button>
                </Grid>
                <Grid size={12} sx={{ textAlign: 'center' }}>
                  <Link component={RouterLink} to={`/register`} underline="hover" sx={{ fontFamily: 'default', textAlign: 'center' }}>Create an account and explore!</Link>
                </Grid>
              </Grid>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </>
  );
};

export default Login;
