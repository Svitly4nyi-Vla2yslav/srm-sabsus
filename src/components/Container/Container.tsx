import React, { ReactNode } from 'react';

interface MainContainerProps {
  children: ReactNode;
}

const Container: React.FC<MainContainerProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Container;
