import React from "react";
import Icon from "@material-ui/core/Icon";
import Card from "@material-ui/core/Card";
import Textarea from "react-textarea-autosize";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import { addList } from "../actions";

class TrelloActionButton extends React.Component {
  state = {
    formOpen: false,
    text: ""
  };

  openForm = () => {
    this.setState({
      formOpen: true
    });
  };
  closeForm = e => {
    this.setState({
      formOpen: false
    });
  };
  handleInputChange = e => {
    this.setState({
      text: e.target.value
    });
  };
  handleAddList = () => {
    const { dispatch } = this.props;
    const { text } = this.state;

    if (text) {
      dispatch(addList(text));
    }
    return;
  };
  renderAddButton() {
    const { list } = this.props;

    const buttonText = list ? "Ajouter une liste" : "Ajouter une carte";
    const buttonOpacity = list ? 1 : 0.5;
    const buttonTextColor = list ? "white" : "inherit";
    const buttonTextBackground = list ? "rgba(0,0,0,.15)" : "inherit";

    return (
      <div
        onClick={this.openForm}
        style={{
          ...styles.openFormButtonGroup,
          opacity: buttonOpacity,
          color: buttonTextColor,
          background: buttonTextBackground
        }}
      >
        <Icon>add</Icon>
        <p>{buttonText}</p>
      </div>
    );
  }
  renderForm = () => {
    const { list } = this.props;
    const placeholder = list
      ? "Entrer le titre de votre liste"
      : "Entrer le titre de votre carte";
    const buttonTitle = list ? "Ajouter une liste" : "Ajouter une carte";
    return (
      <div>
        <Card
          style={{
            overflow: "visible",
            minHeight: 80,
            minWidth: 272,
            padding: "6px 8px 2px"
          }}
        >
          <Textarea
            placeholder={placeholder}
            autoFocus
            onBlur={this.closeForm}
            value={this.state.text}
            onChange={this.handleInputChange}
            style={{
              resize: "none",
              width: "100%",
              outline: "none",
              border: "none"
            }}
          />
        </Card>
        <div style={styles.formButtonGroup}>
          <Button
            onMouseDown={this.handleAddList}
            variant="contained"
            style={{ color: "white", background: "#5aac44" }}
          >
            {buttonTitle}
          </Button>
          <Icon style={{ marginLeft: 8, cursor: "pointer" }}>close</Icon>
        </div>
      </div>
    );
  };
  render() {
    return this.state.formOpen ? this.renderForm() : this.renderAddButton();
  }
}
const styles = {
  openFormButtonGroup: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    borderRadius: 3,
    height: 36,
    width: 272,
    paddingLeft: 10
  },
  formButtonGroup: {
    marginTop: 8,
    display: "flex",
    alignItems: "center"
  }
};
export default connect()(TrelloActionButton);
