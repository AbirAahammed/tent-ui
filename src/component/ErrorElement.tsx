import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorElement: React.FC = () => {
    const error: any = useRouteError();

    console.error(error); // Log the error for debugging purposes.

    return (
        <div style={{ padding: '1rem', textAlign: 'center' }}>
            <h1>Something went wrong.</h1>
            <p style={{color:'red'}}>{error?.message || 'An unexpected error occurred.'}</p>
            {error?.statusText && <p>Status: {error.statusText}</p>}
            <textarea style={{height:'400px', width:'800px', resize: 'none', marginTop: '100px'}} readOnly>
                {error.stack}
            </textarea>

        </div>
    );
};

export default ErrorElement;
