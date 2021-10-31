import React, { ElementType } from "react";
/* eslint-disable-next-line */
export interface UiLoaderProps {
  LoadingStyle?: ElementType;
}

function Main() {
  return <div className="loader" aria-label="Loading page" />;
}

export function Loader(props: UiLoaderProps) {
  if (props.LoadingStyle) {
    return (
      <props.LoadingStyle>
        <Main />
      </props.LoadingStyle>
    );
  }
  return <Main />;
}
