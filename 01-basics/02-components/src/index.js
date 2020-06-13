import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";


const App = () => {
  return (
    <div className="ui container comments">
      <h3 className="ui dividing header">Comments</h3>

      <ApprovalCard>
        <h3>Warning !</h3>
        <p>Are you sure you want to approve this ?</p>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Shane Warne"
          time="Today at  4:50 P.M"
          content="Nice bowling man!!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Ricky Pointing"
          time="Today at  1:00 A.M"
          content="Great captaincy!!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Sourav Ganguly"
          time="Yesterday at  12:00 P.M"
          content="Aggressive batsman!!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
