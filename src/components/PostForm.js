import React from "react";
import { Form, } from "semantic-ui-react";

class PostForm extends React.Component {
  state = { title: "", body: "", };
  componentDidMount() {
    if (this.props.id)
      this.setState({ title: this.props.title, body: this.props.body, });
  }

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   this.props.add(this.state);
  //   this.setState({ title: "", body: "", });
  // }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.id) {
      this.props.edit({id: this.props.id, ...this.state});
      this.props.toggleEdit()
    } else {
      this.props.add(this.state);
    }
    this.setState({ title: "", body: "", });
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, });
  }

  render() {
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input 
            placeholder="Title"
            label="Title"
            name="title"
            onChange={this.handleChange}
            value={this.state.title}
          />
          <Form.Input
            placeholder="Body"
            label="Body"
            name="body"
            onChange={this.handleChange}
            value={this.state.body}
          />
          <Form.Button color="green">Submit</Form.Button>
        </Form.Group>
      </Form>
    )
  }
};

export default PostForm;