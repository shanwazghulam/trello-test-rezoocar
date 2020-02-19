import React, { Component } from "react";
import TrelloList from "./TrelloList";
import TrelloActionButton from "./TrelloActionButton";
import { connect } from "react-redux";
import { StyleSheet, css } from "aphrodite";

class App extends Component {
  render() {
    const { list } = this.props;
    return (
      <div className={css(styles.container)}>
        <h2>Reezocar</h2>
        <div className={css(styles.listsContainer)}>
          {list.map(list => (
            <TrelloList key={list.id} title={list.title} card={list.card} />
          ))}
          <TrelloActionButton list />
        </div>
      </div>
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
