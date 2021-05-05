import { Component } from "react";
import Form from "@rjsf/core";
import {IFormProps} from "../../interfaces/interfaces"
import {JSONSchema, UISchema} from "../../mock/formNameTelephone"

class Wf extends Component<IFormProps> {


  render() {
    return (
      <div className="wf">
          {this.props.form}
          <Form schema={JSONSchema} uiSchema={UISchema}></Form>
      </div>
    );
  }
}

export default Wf;
