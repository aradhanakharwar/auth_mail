import { Box, Card, Grid, Tab, Tabs } from '@mui/material';
import React from 'react';
import pic1 from '../../../images/pic1.png';

const tabPanel = () => {
    
}

export default function LoginReg() {
    return (
        <div>
            <Grid container height="90vh" >
                <Grid item lg={7} sm={5} sx={{
                    backgroundImage: `url(${pic1})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
                />
                <Grid item lg={5} sm={7} sx={{
                    backgroundImage: `url(${pic1})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
                >
                    <Card sx={{ width: "100%", height: "100%" }}>
                        <Box>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <Tabs textColor='primary' indicatorColor='primary'>
                                    <Tab label="Login" sx={{ textTransform: 'none', fontWeight: "bold" }}></Tab>
                                    <Tab label="Registration" sx={{ textTransform: 'none', fontWeight: "bold" }}></Tab>
                                </Tabs>
                            </Box>
                        </Box>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}
