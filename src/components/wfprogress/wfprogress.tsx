import { Component, ReactNode } from "react";

import "./wfprogress.css";
import {IStepState,IStepProps} from "../../interfaces/interfaces"


class WfProgress extends Component<IStepProps, IStepState> {


  render() {
    return (
      <div className="steps-progressbar">
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
