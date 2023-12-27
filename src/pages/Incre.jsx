import React from 'react';
import ChildComponent from '../ChildComponent';
import MyContextProvider from '../MyContextProvider';

const Incre = () => {  
      
  return (
        <MyContextProvider>
          <ChildComponent />
        </MyContextProvider>
  );
};

export default Incre;
