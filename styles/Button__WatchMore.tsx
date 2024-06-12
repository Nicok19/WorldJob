"use client"

import styled from 'styled-components';

export const WatchMore = styled.button`
  display: flex;
  width: 199.863px;
  height: 47px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--Primary-Color, #5D5FEF);
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  border-radius: 25px;
  border: 1px solid var(--Primary-Color, #5D5FEF);
  background-color: transparent; /* Corrección aquí */

  &:hover {
    background-color: var(--primary-color, #5D5FEF);
    color: var(--white, #fff);
  }
`;
