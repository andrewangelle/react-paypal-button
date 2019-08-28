import React from 'react';

class ErrorBoundary extends React.Component<{}, {hasError: boolean}> {
  state={
    hasError: false
  }
  componentDidCatch(){
    this.setState({hasError: true})
  }
  setError = () => {
    this.setState({hasError: true})
  }
  render() {
    if(this.state.hasError){
      return null
    } else {
      return this.props.children
    }
  }
}

export default ErrorBoundary
