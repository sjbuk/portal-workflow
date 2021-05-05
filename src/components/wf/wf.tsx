import { Component } from "react";
import axios from "axios";
import WfForm from "../wfform/wfform"
import WfProgress from "../wfprogress/wfprogress"

type StepState = { steps: any[] };
type StepProps = { steps: any[] };

const SERVER_URL = process.env.REACT_APP_K2_URL;
const HEADERS = {
  method: "Get",
  headers: { Accept: "application/json;odata=verbose" },
  mode: "cors" as RequestMode,
};


class Wf extends Component<StepState,StepProps> {
  constructor(props:StepProps){
    super(props);
    this.state = {steps: []};
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
          <WfForm steps={this.state.steps}></WfForm>
          <WfProgress steps={this.state.steps}></WfProgress>
      </div>
    );
  }
}

export default Wf;
