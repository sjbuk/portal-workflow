import { Component, ReactNode } from "react";

import "./wfprogress.css";



type StepState = { steps: any[] };
type StepProps = { steps: any[] };
class WfProgress extends Component<StepProps, StepState> {


  render() {
    return (
      <div className="steps-progressbar">
        Hello from WF PROGRESS
        <ul>
          {this.props.steps
            .sort((a, b) => a.StageId - b.StageId)
            .map((Stage) => {
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
