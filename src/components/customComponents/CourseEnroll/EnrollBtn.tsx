"use client";

import React from "react";
import styled from "styled-components";
import clsx from "clsx";

const EnrollBtn = ({
  btnTxt,
  className = "",
}: {
  btnTxt: string;
  className?: string;
}) => {
  return (
    <StyledWrapper>
      <button className={clsx("learn-more bg-[#1cab55] text-white w-full", className)}>
        {btnTxt}
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  button {
    position: relative;
    display: inline-block;
    cursor: pointer;
    outline: none;
    border: 0;
    vertical-align: middle;
    text-decoration: none;
    font-family: inherit;
    font-size: 15px;
  }

  button.learn-more {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0.7em 2em;
    border: 2px solid #1cab55;
    border-radius: 0.75em;
    transform-style: preserve-3d;
    transition: transform 150ms cubic-bezier(0, 0, 0.58, 1),
      background 150ms cubic-bezier(0, 0, 0.58, 1);
  }

  button.learn-more::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    inset: 0;
    background: #14773b;
    border-radius: inherit;
    transform: translate3d(0, 0.75em, -1em);
    transition: transform 150ms cubic-bezier(0, 0, 0.58, 1),
      box-shadow 150ms cubic-bezier(0, 0, 0.58, 1);
  }

  button.learn-more:hover {
    background: #1cab65;
  }

  button.learn-more:active {
    background: #14773b;
    transform: translate(0em, 0.75em);
  }

  button.learn-more:active::before {
    box-shadow: 0 0 0 2px #1cab55, 0 0 #14773b;
    transform: translate3d(0, 0, -1em);
  }
`;

export default EnrollBtn;
