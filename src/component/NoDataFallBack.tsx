import React from 'react';
import myImage from '../static/assets/no-data.png'; 

interface NoDataFallbackProps {
    children: React.ReactNode;
    noData: boolean;
}

const NoDataFallback: React.FC<NoDataFallbackProps> = ({ children, noData }) => {
    
    return noData ?   
    <div style={{ textAlign: 'center', padding: '20px' }}>
        <img src={myImage} alt="Example" />

    </div>:
    <>{children}</>;
};

export default NoDataFallback;