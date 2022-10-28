import React, {useEffect, useState} from 'react';
import {Todo} from './interface/Todo';
import {TodoComponent} from "./TodoComponent";
import {GridLayout} from "../layout/GridLayout";
import {useFlag} from "@unleash/proxy-client-react";
import {StackLayout} from "../layout/StackLayout";
import {TodoService} from "../todo-standard-strategy/service/TodoService";

export const TodosContainer = () => {
  const gridLayoutFeatureEnabledUserId = useFlag('grid-layout-feature-userId');
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
    <h1>UserId Strategy</h1>
    <h3>Feature Toggle: 'grid-layout-feature-userId'</h3>
    <h3>Active: {`${gridLayoutFeatureEnabledUserId}`}</h3>
    {gridLayoutFeatureEnabledUserId ? gridLayout : stackLayout}
  </div>
};
