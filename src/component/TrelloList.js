import React from "react";
import { StyleSheet, css } from "aphrodite";
import TrelloCard from "./TrelloCard";
import TrelloActionButton from "./TrelloActionButton";

const TrelloList = ({ title, card }) => {
  return (
    <div className={css(styles.container)}>
      <h4>{title}</h4>
      {card.map(card => (
        <TrelloCard
          key={card.id}
          text={card.text}
          title={card.title}
          card={card.card}
        />
      ))}
      <TrelloActionButton />
    </div>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#dfe3e6",
    borderRadius: 3,
    marginRight: 8,
    width: 300,
    height: "100%",
    padding: 8
  }
});
export default TrelloList;
