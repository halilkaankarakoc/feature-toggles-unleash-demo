import React, {useEffect, useState} from 'react';
import {Todo} from './interface/Todo';
import {TodoComponent} from "./TodoComponent";
import {GridLayout} from "../layout/GridLayout";
import {useFlag} from "@unleash/proxy-client-react";
import {StackLayout} from "../layout/StackLayout";
import {TodoService} from "./service/TodoService";

export const TodosContainer = () => {
  const gridLayoutFeatureEnabled = useFlag('grid-layout-feature');
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
    <h1>Standard Strategy</h1>
    <h3>Feature Toggle: 'grid-layout-feature'</h3>
    <h3>Active: {`${gridLayoutFeatureEnabled}`}</h3>
    {gridLayoutFeatureEnabled ? gridLayout : stackLayout}
  </div>
};
