import { StyledWrapperLoader } from '@/components/styled-wrappers/StyledWrapperLoader';
import React from 'react';

const Loading= () => {
  return (
    <StyledWrapperLoader>
      <main id="container">
        <div className="dots">
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
        </div>
        <div className="dots2">
          <div className="dot2" />
          <div className="dot2" />
          <div className="dot2" />
          <div className="dot2" />
          <div className="dot2" />
          <div className="dot2" />
          <div className="dot2" />
          <div className="dot2" />
          <div className="dot2" />
          <div className="dot2" />
        </div>
        <div className="circle" />
      </main>
    </StyledWrapperLoader>
  );
}
export default Loading
