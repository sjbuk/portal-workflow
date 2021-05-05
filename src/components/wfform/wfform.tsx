import { Component } from "react";

type StepState = { steps: any[] };
type StepProps = { steps: any[] };

class Wf extends Component<StepProps, StepState> {


  render() {
    return (
      <div className="wf">
          FORM
      </div>
    );
  }
}

export default Wf;
