import React from 'react';
import Grid from '@mui/material/Grid';
import { Box, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import {
    Link,
    Outlet,
} from "react-router-dom";




type AppWrapperProps = {
    children: React.ReactNode;  // This allows any React elements or components to be passed in
    className?: string;  // Optional prop for applying custom CSS classes}
}
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));
const AppWrapper: React.FC<AppWrapperProps> = ({ children }) => {
    return (

        <Box sx={{ flexGrow: 1, height: '98vh' }}>
            <Grid container spacing={2} sx={{ height: '100%' }}>
                <Grid size={2} sx={{ height: '100%' }}>
                    <Item>
                        Menu
                        <ul>
                            <li> <Link to='/'>Home</Link></li>
                            <li><Link to='/about'>about</Link></li>
                        </ul>

                    </Item>
                </Grid>
                <Grid size={10} sx={{ height: '100%' }}>
                  <Outlet/>
                </Grid>

            </Grid>
        </Box>)
}


export default AppWrapper;