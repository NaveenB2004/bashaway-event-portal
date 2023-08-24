import React from "react";
import { Button } from "@/components";

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="w-full min-h-screen flex flex-col justify-center items-center font-inter">
          <div className="w-10/12 sm:w-auto flex flex-col justify-center items-center gap-7 p-20 text-center border rounded-3xl">
            <span className="text-4xl font-bold">Something&apos;s Off</span>
            <span className="text-lg font-medium"> Please contact support if the problem persists.</span>
            <Button className="px-6 py-2 text-[20px]" onClick={() => window.location.reload()}>
              Reload
            </Button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
