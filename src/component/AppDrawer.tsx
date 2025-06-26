import { Sheet } from "@mui/joy";
import Drawer from '@mui/joy/Drawer';
import React from "react";
import { useAppContext } from "../context/AppContext";
import { Box, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

const AppDrawer: React.FC = () => {

  const { state, dispatch } = useAppContext();
  return <Drawer
    size="md"
    variant="plain"
    open={state?.drawer?.open ?? false}
    onClose={state?.drawer?.onClose}
    anchor='right'
    slotProps={{
      content: {
        sx: {
          bgcolor: 'transparent',
          p: { md: 3, sm: 0 },
          boxShadow: 'none',
          width: state?.drawer?.size === 'sm' ? '30%' : state?.drawer?.size === 'md' ? '50%' : '100%',

        },
      },
    }}
  >
    <Sheet
      sx={{
        borderRadius: 'md',
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        height: '100%',
        // overflow: 'auto',
      }}
    >
      <Box sx={{ height: 25 }}>
        <IconButton
          sx={{ position: 'absolute', top: 8, right: 8 }}
          onClick={state?.drawer?.onClose}
        >
          <CloseIcon />
        </IconButton>
      </Box>

      <Box sx={{ flexGrow: 1 }}>
        {state?.drawer?.children}
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
        {state?.drawer?.actions?.map((action, index) => <Box key={index}>{action}</Box>)}
      </Box>

    </Sheet>
  </Drawer>

};


export default AppDrawer;