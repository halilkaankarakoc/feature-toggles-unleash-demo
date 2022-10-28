import React, {useEffect} from 'react';
import {Container, CssBaseline} from "@mui/material";
import {TodosContainer as TodosContainerWithStandardStrategy} from "./todo-standard-strategy/TodosContainer";
import {TodosContainer as TodosContainerWithRolloutStrategy} from "./todo-gradual-rollout-strategy/TodosContainer";
import {TodosContainer as TodosContainerWithUserIdStrategy} from "./todo-userId-strategy/TodosContainer";
import {useFlagsStatus, useUnleashContext} from "@unleash/proxy-client-react";

function App() {
  const {flagsReady} = useFlagsStatus();

  const updateContext = useUnleashContext();
  const userId = '4';
  useEffect(() => {
    updateContext({userId: userId});
  }, []);

  console.log('App:FlagsReady', flagsReady)
  if (!flagsReady) {
    return <div>Loading...</div>
  }
  return (
    <React.Fragment>
      <CssBaseline />
      <Container sx={{padding: '50px'}} maxWidth="lg">
        userId: {userId}
        <TodosContainerWithStandardStrategy />
        <br />
        <br />
        <hr />
        <br />
        <TodosContainerWithRolloutStrategy />
        <TodosContainerWithUserIdStrategy />
      </Container>
    </React.Fragment>
  );
}

export default App;
