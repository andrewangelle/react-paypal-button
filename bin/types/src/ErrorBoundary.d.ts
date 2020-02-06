import React from 'react';
declare class ErrorBoundary extends React.Component<{}, {
    hasError: boolean;
}> {
    state: {
        hasError: boolean;
    };
    componentDidCatch(): void;
    setError: () => void;
    render(): {} | null | undefined;
}
export default ErrorBoundary;
