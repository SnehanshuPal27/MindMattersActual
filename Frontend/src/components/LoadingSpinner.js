// components/LoadingSpinner.js
import React from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframe for spinning animation
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// Styled overlay container
const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8); /* Light overlay for better visibility */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* Ensure it's on top of other content */
`;

// Styled spinner
const Spinner = styled.div`
  border: 8px solid rgba(0, 0, 0, 0.1); /* Light border */
  border-left: 8px solid #3498db; /* Blue spinner */
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: ${spin} 1.5s linear infinite;
`;

const LoadingSpinner = () => {
  return (
    <LoadingOverlay>
      <Spinner />
    </LoadingOverlay>
  );
};

export default LoadingSpinner;
