import React, { ElementType, SyntheticEvent } from "react";

export interface SomethingWentWrongProps {
  SomethingWentWrongStyle?: ElementType;
  handleClick: (event: SyntheticEvent) => void;
  SomethingWentWrongConstants: {
    scope: number;
    heading: string;
    message: string;
    link: string;
  };
}

function Main(props: SomethingWentWrongProps) {
  return (
    <section className = "something-went-wrong">
      <div className = "container">
        <h2 className="headingScope">{props.SomethingWentWrongConstants.scope}</h2>
        <div className = "contentScope">
          <h3 className="contentHeading">{props.SomethingWentWrongConstants.heading}</h3>
          <p className="contents">{props.SomethingWentWrongConstants.message}</p>
          <p onClick={props.handleClick} className="links">
            {props.SomethingWentWrongConstants.link}
          </p>
        </div>
      </div>
    </section>
  );
}

export function SomethingWentWrong(props: SomethingWentWrongProps) {
  if (props.SomethingWentWrongStyle) {
    return (
      <props.SomethingWentWrongStyle>
        <Main {...props} />
      </props.SomethingWentWrongStyle>
    );
  }
  return <Main {...props} />;
}
