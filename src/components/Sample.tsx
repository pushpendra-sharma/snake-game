import { useState } from 'react';

// Declaring type of props - see "Typing Component Props" for more examples
type AppProps = {
  message: string;
}; /* use `interface` if exporting so that consumers can extend */

// Easiest way to declare a Function Component; return type is inferred.
const App = ({ message }: AppProps) => {
  const [state, setState] = useState(false);
  // `state` is inferred to be a boolean
  // `setState` only takes booleans
  return <div>{message}</div>;
};
