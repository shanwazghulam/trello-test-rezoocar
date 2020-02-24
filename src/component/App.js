import React, { Component } from "react";
import TrelloList from "./TrelloList";
import TrelloActionButton from "./TrelloActionButton";
import { connect } from "react-redux";
import { StyleSheet, css } from "aphrodite";
import { DragDropContext } from "react-beautiful-dnd";
import { sort } from "../actions";

class App extends Component {
  onDragEnd = result => {
    const { destination, source, draggebleId } = result;

    if (!destination) {
      return;
    }
    this.props.dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggebleId
      )
    );
  };
  render() {
    const { list } = this.props;
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <listsContainer>
          <h2>Reezocar</h2>
          <div className={css(styles.listsContainer)}>
            {list.map(list => (
              <TrelloList
                listID={list.id}
                key={list.id}
                title={list.title}
                card={list.card}
              />
            ))}
            <TrelloActionButton list />
          </div>
        </listsContainer>
      </DragDropContext>
    );
  }
}
const mapStateProps = state => ({
  list: state.list
});
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#848B92"
  },
  listsContainer: {
    display: "flex",
    flexDirection: "row",
    marginRight: 8
  }
});
export default connect(mapStateProps)(App);
