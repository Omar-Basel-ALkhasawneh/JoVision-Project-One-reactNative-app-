// Components/SharedTextContext.js
import React, { createContext, useState } from 'react';

export const SharedTextContext = createContext();

export const SharedTextProvider = ({ children }) => {
  const [sharedText, setSharedText] = useState('');

  return (
    <SharedTextContext.Provider value={{ sharedText, setSharedText }}>
      {children}
    </SharedTextContext.Provider>
  );
};
