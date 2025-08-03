import { Textarea } from '@mui/joy';
import React, { Component, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
    error?: Error;

}

class ErrorBoundaryNoRouter extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    // Update state to display the fallback UI
        return { hasError: true, error };
  }

   componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
        // 🔥 Optionally log to external services like Sentry, LogRocket, etc.
    }

  render() {
        if (this.state.hasError) {
            return (
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '100vh',
                  }}
                >
                  <Textarea
                    placeholder="Error details will be displayed here"
                    value={this.state.error?.toString() || "No error details available"}
                    readOnly
                    minRows={3}
                    maxRows={5}
                    style={{ width: '400px', marginTop: '10px' }}
                  />
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundaryNoRouter;
