import { Component, ErrorInfo, ReactNode } from 'react';

import { CommonErrorPage } from '@components/services/Errors/CommonErrorPage/CommonErrorPage';


interface IErrorBoundaryProps {
  children: ReactNode;
}

interface IErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends Component<
  IErrorBoundaryProps,
  IErrorBoundaryState
> {
  constructor(props: IErrorBoundaryProps) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    this.setState({
      hasError: true,
    });

    console.error(error, info);
  }

  render() {
    const { children } = this.props;
    const { hasError } = this.state;

    if (hasError) {
      return <CommonErrorPage />;
    }

    return <>{children}</>;
  }
}
