import React, { useState } from 'react';
import MyContext from './MyContext';

function MyProvider({ children }) {
  const [showHome, setShowHome] = useState(false);
  const [showselectors, setshowselectors] = useState(false);
  const [showReportCard, setShowReportCard] = useState(false);
  

  const contextValue = {
    showHome,
    setShowHome,
    showselectors,
    setshowselectors,
    showReportCard,
    setShowReportCard,
  };

  return (
    <MyContext.Provider value={contextValue}>
      {children}
    </MyContext.Provider>
  );
}

export default MyProvider;
