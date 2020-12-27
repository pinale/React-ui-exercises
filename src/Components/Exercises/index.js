import React, { Fragment } from "react";
import {
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";

const style = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    height: 500,
    overflow: "auto"
  }
};

export default ({ exercises }) => (
  <Grid container>
    <Grid item sm>
      <Paper style={style.Paper}>
        {exercises.map(([group, exercises]) => (
          <Fragment>
            <Typography variant="h5" style={{ textTransform: "capitalize" }}>
              {group}
            </Typography>

            <List component="ul" aria-label="secondary mailbox folders">
              {exercises.map(({ title }) => (
                <ListItem button>
                  <ListItemText primary={title} />
                </ListItem>
              ))}
            </List>
          </Fragment>
        ))}
      </Paper>
    </Grid>
    <Grid item sm>
      <Paper style={style.Paper}>
        <Typography variant="h6">Wellcome</Typography>
        <Typography variant="subtitle1" style={{ marginTop: 20 }}>
          Seleziona un esercizio dalla lista
        </Typography>
      </Paper>
    </Grid>
  </Grid>
);
