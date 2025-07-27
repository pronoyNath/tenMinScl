import React from 'react';
import styled from 'styled-components';

const EnrollBtn = ({btnTxt}) => {
  return (
    <StyledWrapper>
      <button className="learn-more w-full text-white bg-[#1CAB55] "> {btnTxt}
      </button>
    </StyledWrapper>
  );
}

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
//    color: #382b22;
   text-transform: uppercase;
   padding: 0.7em 2em;
//    background: #1CAB55;
   border: 2px solid ##1CAB55;
   border-radius: 0.75em;
   -webkit-transform-style: preserve-3d;
   transform-style: preserve-3d;
   -webkit-transition: background 150ms cubic-bezier(0, 0, 0.58, 1), -webkit-transform 150ms cubic-bezier(0, 0, 0.58, 1);
   transition: transform 150ms cubic-bezier(0, 0, 0.58, 1), background 150ms cubic-bezier(0, 0, 0.58, 1), -webkit-transform 150ms cubic-bezier(0, 0, 0.58, 1);
  }

  button.learn-more::before {
   position: absolute;
   content: '';
   width: 100%;
   height: 100%;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   background: #14773B;
   border-radius: inherit;
   -webkit-transform: translate3d(0, 0.75em, -1em);
   transform: translate3d(0, 0.75em, -1em);
   transition: transform 150ms cubic-bezier(0, 0, 0.58, 1), box-shadow 150ms cubic-bezier(0, 0, 0.58, 1), -webkit-transform 150ms cubic-bezier(0, 0, 0.58, 1), -webkit-box-shadow 150ms cubic-bezier(0, 0, 0.58, 1);
  }

  button.learn-more:hover {
   background: #1CAB65;
  }



  button.learn-more:active {
   background: #14773B;
   -webkit-transform: translate(0em, 0.75em);
   transform: translate(0em, 0.75em);
  }

  button.learn-more:active::before {
   -webkit-box-shadow: 0 0 0 2px #1CAB55, 0 0 #14773B;
   box-shadow: 0 0 0 2px #1CAB55, 0 0 #14773B;
   -webkit-transform: translate3d(0, 0, -1em);
   transform: translate3d(0, 0, -1em);
  }`;

export default EnrollBtn;
