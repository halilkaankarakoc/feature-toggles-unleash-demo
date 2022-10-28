import React, {useEffect, useState} from 'react';
import {Todo} from './interface/Todo';
import {TodoComponent} from "./TodoComponent";
import {GridLayout} from "../layout/GridLayout";
import {useFlag} from "@unleash/proxy-client-react";
import {StackLayout} from "../layout/StackLayout";
import {TodoService} from "../todo-standard-strategy/service/TodoService";

export const TodosContainer = () => {
  const gridLayoutFeatureRolloutEnabled = useFlag('grid-layout-feature-rollout');

  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    new TodoService().getAllTodos().then((res) => setTodos(res))
  }, []);

  const stackLayout = <StackLayout>
    {todos.map((todo) => <TodoComponent key={todo.id} todo={todo}/>)}
  </StackLayout>;
  const gridLayout = <GridLayout>
    {todos.map((todo) => <TodoComponent key={todo.id} todo={todo}/>)}
  </GridLayout>
  return <div>
    <h1>Gradual Rollout Strategy</h1>
    <h3>Feature Toggle: 'grid-layout-feature-rollout'</h3>
    <h3>Active: {`${gridLayoutFeatureRolloutEnabled}`}</h3>
    {gridLayoutFeatureRolloutEnabled ? gridLayout : stackLayout}
  </div>
};
