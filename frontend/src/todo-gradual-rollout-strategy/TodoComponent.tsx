import React from 'react';
import { Card, CardContent, Typography } from "@mui/material";
import {Todo} from "./interface/Todo";

export type TodoComponentProps = {
  todo: Todo;
};

export const TodoComponent = ({todo}: TodoComponentProps) => {
  const {name, description, status, dueDate} = todo;

  return (
    <Card sx={{ minWidth: 275, maxWidth: 450 }}>
      <CardContent>
        <Typography sx={{ mb: 1.5 }} color="text.secondary" gutterBottom>
          {name}
        </Typography>
        <Typography sx={{ mb: 1.5 }}  color="text.secondary">
          {description}
        </Typography>
        <Typography variant="body2">
          {status}
        </Typography>
        <Typography variant="body2">
          {dueDate}
        </Typography>
      </CardContent>
    </Card>
  )
};
