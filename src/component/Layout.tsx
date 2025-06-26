import React, { ReactNode } from "react";
import { Box, Chip, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

import {
    Link,
    Outlet,
} from "react-router-dom";
// import SideNavigation from "./Navigation/SideNavigation";



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    height: '100%',
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));

interface LayoutProps {
    SideNavigation: React.ComponentType;
}

const Layout: React.FC<LayoutProps> = ({ SideNavigation }) => {
    return (

        <Box sx={{ flexGrow: 1, height: '98vh' }}>
            <Grid container spacing={2} sx={{ height: '100%' }}>
                <Grid size={2}>
                    <Item sx={{ height: '100%' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                            <Typography variant="h4">TEnt</Typography>
                        </Box>
                        <SideNavigation />


                    </Item>
                </Grid>
                <Grid size={10} sx={{ height: '100%' }}>
                    <Item>
                        <Outlet />
                    </Item>

                </Grid>

            </Grid>
        </Box>)
};


export default Layout;