import React from "react";
import { Button, Header, Icon, Segment, } from "semantic-ui-react";
import PostForm from "./PostForm";

class Post extends React.Component {
  state = { editing: false, };

  toggleEdit = () => this.setState({ editing: !this.state.editing, });


  render() {
    return (
      <Segment style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {
          this.state.editing ? 
            <PostForm { ...this.props } toggleEdit={this.toggleEdit} />
          :
            <div>
              <Header as="h3">{this.props.title}</Header>
              <p>{this.props.body}</p>
            </div>
        }
        <div>
          <Button icon color="blue" onClick={this.toggleEdit}>
            <Icon name="pencil" />
          </Button>
          <Button icon color="red">
            <Icon name="trash" />
          </Button>
        </div>
      </Segment>
    )
  }
}

export default Post;
