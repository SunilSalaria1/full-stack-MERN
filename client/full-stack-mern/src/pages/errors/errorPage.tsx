import { ErrorResponse, useRouteError } from "react-router-dom";
import { Box, Card, CardContent, Container, Typography, Button } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useNavigate } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";

export default function ErrorPage() {
    const error = useRouteError();
    const navigate = useNavigate();
    console.error(error); // Log error for debugging

    return (
        <>
            <Container id="error-page" maxWidth="sm" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <Card sx={{ maxWidth: 500, border: 1, boxShadow: 0, borderColor: 'grey.300', }}>
                    <CardContent>
                        <Box component="form">
                            <Grid container>
                                <Grid size={12} sx={{ textAlign: 'center' }}>
                                    <Typography variant="h5" sx={{ fontWeight: 'bold' }} gutterBottom>
                                        Oops!
                                    </Typography>
                                    <Box sx={{ fontSize: 'default', fontFamily: 'default' }}>Sorry, an unexpected error has occurred.</Box>
                                    <Box component="div" sx={{ fontWeight: 'bold', my: 3, color: 'error.main', textTransform: 'uppercase' }}>{(error as ErrorResponse).status} {(error as ErrorResponse).statusText}</Box>
                                </Grid>
                                <Grid size={12} sx={{ textAlign: 'center' }}>
                                    <Button variant="text" startIcon={<ArrowBack />} onClick={() => navigate(-1)}>Previous Page</Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </CardContent>
                </Card>
            </Container>
        </>
    );
}
