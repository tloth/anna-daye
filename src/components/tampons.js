import React from "react";
import styled from 'styled-components';

const SvgContainer = styled.div`
    width: 4em;
    height: 4em;
    margin: -1.2em;
`

function PlainTampon() {
  return (
    <SvgContainer>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 50 63" width="100%" height="100%">
      <g clipPath="url(#clip0)">
        <path
          fill="#004324"
          d="M32.107 50.777c-3.206.189-5.966.358-8.663-2.318a8.55 8.55 0 01-1.365-1.733 2.204 2.204 0 011.875-3.346h2.9a1.197 1.197 0 001.198-1.197V8.635A8.518 8.518 0 0020.61.04a8.276 8.276 0 00-9.094 8.226v33.917a1.197 1.197 0 001.197 1.197h2.788a3.88 3.88 0 013.67 2.695 10.246 10.246 0 002.585 4.083c3.458 3.436 7.199 3.211 10.493 3.009 3.205-.195 5.966-.36 8.664 2.318a8.173 8.173 0 012.46 6.286 1.197 1.197 0 001.197 1.185h.012a1.197 1.197 0 001.186-1.21 10.61 10.61 0 00-3.169-7.96c-3.457-3.435-7.198-3.21-10.493-3.009zm-12.322-9.79h-3.59a2.285 2.285 0 01-2.284-2.285V8.266a5.886 5.886 0 017.107-5.745 5.98 5.98 0 014.64 5.914v30.267a2.284 2.284 0 01-2.285 2.284h-3.588z"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <path fill="#fff" d="M0 0H50V62.956H0z" />
        </clipPath>
      </defs>
    </svg>
    </SvgContainer>
  );
}

function CbdTampon() {
  return (
    <SvgContainer>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 50 63" width="100%" height="100%">
      <g clipPath="url(#clip0)">
        <path
          fill="#F2A900"
          d="M25.657 38.701V8.435a5.98 5.98 0 00-4.64-5.915 5.884 5.884 0 00-7.106 5.746v30.435a2.284 2.284 0 002.284 2.285h7.178a2.284 2.284 0 002.284-2.285z"
        />
        <path
          fill="#004324"
          d="M32.107 50.777c-3.206.189-5.966.358-8.663-2.318a8.55 8.55 0 01-1.365-1.733 2.204 2.204 0 011.875-3.346h2.9a1.197 1.197 0 001.198-1.197V8.635A8.518 8.518 0 0020.61.04a8.276 8.276 0 00-9.094 8.226v33.917a1.197 1.197 0 001.197 1.197h2.788a3.88 3.88 0 013.67 2.695 10.246 10.246 0 002.585 4.083c3.458 3.436 7.199 3.211 10.493 3.009 3.205-.195 5.966-.36 8.664 2.318a8.173 8.173 0 012.46 6.286 1.197 1.197 0 001.197 1.185h.012a1.197 1.197 0 001.186-1.21 10.61 10.61 0 00-3.169-7.96c-3.457-3.435-7.198-3.21-10.493-3.009zm-12.322-9.79h-3.59a2.285 2.285 0 01-2.284-2.285V8.266a5.886 5.886 0 017.107-5.745 5.98 5.98 0 014.64 5.914v30.267a2.284 2.284 0 01-2.285 2.284h-3.588z"
        />
        <path fill="#FEFEE5" d="M19.5 18l2.165 3.75h-4.33L19.5 18z" />
        <circle cx="19.5" cy="23" r="2.5" fill="#FEFEE5" />
      </g>
      <defs>
        <clipPath id="clip0">
          <path fill="#fff" d="M0 0H50V62.956H0z" />
        </clipPath>
      </defs>
    </svg>
    </SvgContainer>
  );
}

export {PlainTampon, CbdTampon};
