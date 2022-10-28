import {Grid} from "@mui/material";

export const GridLayout = ({children}: any) => {
  return <Grid container spacing={2}>
    {
      children.map((eachChild: any, index: number) => <Grid key={index} item xs={4}>{eachChild}</Grid>)
    }
  </Grid>
};
