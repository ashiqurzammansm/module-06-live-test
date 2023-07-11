import React from 'react';
import TextDisplay from './TextDisplay';

const App = () => {
  const textToDisplay = 'Hello, world!';

  return (
    <div>
      <h1>My App</h1>
      <TextDisplay text={textToDisplay} />
    </div>
  );
};

export default App;
