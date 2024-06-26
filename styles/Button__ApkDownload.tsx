"use client"

import styled from 'styled-components';


export const DownloadApk= styled.a`
  color: var(--Primary-Color, #5D5FEF);
  text-align: center;
  font-size: 35px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  display: flex;
  width: 370.563px;
  height: 67.109px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 25px;
  border: none;
  background-color: var(--white-color, #fff);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  &:hover {
    background-color: var(--background-color, #494949);
    color: var(--white-color, #fff);
  }

  @media (max-width: 1440px) {
    font-size: 30px;
    width: 300px;
    height: 60px;
  }

  @media (max-width: 768px) {
    font-size: 4vw;
    width: 25vw;
    height: 50px;
    margin: 0 auto;
  }
`;


