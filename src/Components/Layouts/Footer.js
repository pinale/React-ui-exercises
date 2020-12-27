import React from "react";
import { Paper, Tabs, Tab } from "@material-ui/core";

export default ({ muscles }) => (
  <Paper>
    <Tabs centered value={0} indicatorColor="primary" textColor="primary">
      <Tab key="all" label="All" />
      {muscles.map((group) => (
        <Tab key={group} label={group} />
      ))}
    </Tabs>
  </Paper>
);
