import React from 'react'
import { Box, Button, Card, CardContent, Container, TextField, Typography, Link } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Link as RouterLink } from 'react-router-dom';

function ForgotPassword() {
  return (
    <>
       <Container maxWidth="sm" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Card sx={{ maxWidth: 500, border: 1, boxShadow: 0, borderColor: 'grey.300', }}>
          <CardContent>
            <Box component="form">
              <Grid container spacing={3}>
                <Grid size={12} sx={{ textAlign: 'center', mb:4 }}>
                  <Typography variant="h5" sx={{ fontWeight: 'bold' }} gutterBottom>
                    Forgot Password
                  </Typography>
                  <Box sx={{ fontSize: 'default', fontFamily: 'default' }}>Trouble logging in? Reset your password</Box>
                </Grid>
                <Grid size={12}>
                  <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth />
                </Grid>                
                <Grid size={12} sx={{ display: 'flex' }}>
                  <Button variant="contained" sx={{ textTransform: 'capitalize' }} fullWidth size="large">Sign In</Button>                 
                </Grid>
                <Grid size={12} sx={{ textAlign: 'center' }}>
                  <Link component={RouterLink} to={`/login`} underline="hover" sx={{ fontFamily: 'default', textAlign: 'center' }}>Have an account? Sign in now!</Link>
                </Grid>
              </Grid>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </>
  )
}

export default ForgotPassword
