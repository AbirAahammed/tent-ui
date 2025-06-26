import React from 'react';
import SettingsIcon from '@mui/icons-material/Settings';

const PageUnderMaintenance: React.FC = () => {
    return (
        <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center', 
            alignItems: 'center', 
            height: '99vh', 
            textAlign: 'center' 
        }}>
            <SettingsIcon
            style={{
            fontSize: 100,
            color: 'gray',
            animation: 'spin 4s linear infinite',
            }}
            />
            <h1>Page Under Maintenance</h1>
            <p>We are currently working on this page. Please check back later.</p>
            <style>
            {`
            @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
            }
            `}
            </style>
        </div>
    );
};

export default PageUnderMaintenance;