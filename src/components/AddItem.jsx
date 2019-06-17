import React from "react";

export class AddItem extends React.Component {
  constructor() {
    super();
    this.state = {
      title: ""
    };
  }

  onChange = e => {
    let title = this.state.title;
    title = e.target.value;
    this.setState({ title });
  };

  onClick = () => {
    const { onAddItem } = this.props;
    if (this.state.title !== "") {
      onAddItem(this.state.title);
    }
    this.setState({
      title: ""
    });
  };

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row"
        }}
      >
        <span
          style={{
            marginRight: "1vh",
            color: "#8000ff",
            fontSize: "20px"
          }}
        >
          Add new item to the list:
        </span>
        <input
          style={{
            marginRight: "1vh",
            flex: "auto",
            border: "1px solid blue",
            fontSize: "16px"
          }}
          placeholder="title"
          value={this.state.title}
          onChange={e => this.onChange(e)}
        />
        <button
          onClick={this.onClick}
          disabled={this.state.title === ""}
          style={btnStyle}
        >
          Add item
        </button>
      </div>
    );
  }
}

const btnStyle = {
  background: "#4000ff",
  color: "#ffa500",
  padding: "5px 8px",
  borderRadius: "none",
  coursor: "pointer",
  flex: "1"
};
