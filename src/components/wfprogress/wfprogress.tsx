import { Component } from "react";
import axios from "axios";
import "./wfprogress.css";

const SERVER_URL = process.env.REACT_APP_K2_URL;
const HEADERS = {
  method: "Get",
  headers: { Accept: "application/json;odata=verbose" },
  mode: "cors" as RequestMode,
};

type StepState = { steps: any[] };
type StepProps = any;
class WfProgress extends Component<StepProps, StepState> {
  constructor(props: any) {
    super(props);
    this.state = {
      steps: ["Hello from State"],
    };
  }

  async workflowStages() {
    try {
      const resp = await axios.get(`${SERVER_URL}WorkFlowDetails`);
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
      <div className="steps-progressbar">
        Hello from WF PROGRESS
        <ul>
          {this.state.steps.sort((a, b) => a.StageId - b.StageId).map((Stage) => {
            return (
              <li className={Stage.StageClass}>
                {Stage.StageId} - {Stage.StageName}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default WfProgress;
