import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { StyleSheet, css } from "aphrodite";

import Typography from "@material-ui/core/Typography";

const TrelloCard = ({ text }) => {
  return (
    <Card className={css(styles.container)}>
      <CardContent>
        <Typography gutterBottom>{text}</Typography>
      </CardContent>
    </Card>
  );
};
const styles = StyleSheet.create({
  container: {
    marginBottom: 8
  }
});
export default TrelloCard;
