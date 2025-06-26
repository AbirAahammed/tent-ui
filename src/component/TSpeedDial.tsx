import React from 'react';
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material';
import { SpeedDialAction as SpeedDialActionModel} from '../model/SpeedDialAction';
type TSpeedDialProps = {
    actions: SpeedDialActionModel[];
};
const TSpeedDial: React.FC<TSpeedDialProps> = (props: TSpeedDialProps) => {
    const { actions } = props;
    return (
        <SpeedDial
            ariaLabel="SpeedDial basic example"
            sx={{ position: 'absolute', bottom: 50, right: 50 }}
            icon={<SpeedDialIcon />}
        >
            {actions.map((action) => (
                <SpeedDialAction
                    key={action.name}
                    icon={action.icon}
                    tooltipTitle={action.name}
                    onClick={action.onClick}
                />
            ))}
        </SpeedDial>
    );
};

export default TSpeedDial;