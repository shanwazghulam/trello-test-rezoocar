import React from "react";
import { StyleSheet, css } from "aphrodite";
import TrelloCard from "./TrelloCard";
import TrelloActionButton from "./TrelloActionButton";
import { Droppable } from "react-beautiful-dnd";

const TrelloList = ({ title, card, listID }) => {
  return (
    <Droppable droppableId={String(listID)}>
      {provided => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className={css(styles.container)}
        >
          <h4>{title}</h4>
          {card.map((card, index) => (
            <TrelloCard
              index={index}
              key={card.id}
              text={card.text}
              title={card.title}
              card={card.card}
              id={card.id}
            />
          ))}
          <TrelloActionButton listID={listID} />
          {provided.placeholder}
        </div>
      )}
    </Droppable>
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
