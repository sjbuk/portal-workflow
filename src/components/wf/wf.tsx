import { Component } from "react";
import axios from "axios";
import WfForm from "../wfform/wfform"
import WfProgress from "../wfprogress/wfprogress"

import {IStepState,IStepProps} from "../../interfaces/interfaces"

const SERVER_URL = process.env.REACT_APP_K2_URL;
const HEADERS = {
  method: "Get",
  headers: { Accept: "application/json;odata=verbose" },
  mode: "cors" as RequestMode,
};


class Wf extends Component<IStepState,IStepProps> {
  constructor(props:IStepProps){
    super(props);
    this.state = {steps: [], fromJson: "HELLLOOO"};
    
  }
  async workflowStages() {
    try {
      const resp = await axios.get(`${SERVER_URL}WorkFlowInstanceDetails`);
      console.dir(resp.data.value);
      this.setState({ steps: resp.data.value });
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  }

  componentDidMount() {
    this.workflowStages();
  }

  render() {
    return (
      <div className="workflow">
          <WfProgress steps={this.state.steps}></WfProgress>
          <WfForm form={this.state.fromJson}></WfForm>
      </div>
    );
  }
}

export default Wf;
