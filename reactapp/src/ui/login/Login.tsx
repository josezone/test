import React, { ElementType } from "react";
/* eslint-disable-next-line */
export interface UiLoginProps {
  LoginStyle?: ElementType;
  children: React.ReactNode;
  loginConstants: {
    header: String;
    description: String;
  };
}

function Main(props: UiLoginProps) {
  return (
    <section className="section">
      <div className="left">
        <div className="container">
          <h1>{props.loginConstants.header}</h1>
          <p>{props.loginConstants.description}</p>
        </div>
      </div>
      <div className="right">
        <div className="container">{props.children}</div>
      </div>
    </section>
  );
}

export function Login(props: UiLoginProps) {
  if (props.LoginStyle) {
    return (
      <props.LoginStyle>
        <Main {...props} />
      </props.LoginStyle>
    );
  }
  return <Main {...props} />;
}
