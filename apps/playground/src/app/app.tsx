import styled from 'styled-components';
import { Button } from '@mvds/button';
const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <h2>Playground for components</h2>
      <Button onPress={(e) => console.log('button clicked using', e.pointerType)}>Klick</Button>
    </StyledApp>
  );
}

export default App;
