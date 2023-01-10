import { Comment } from "apis/types";
import React from "react";
import CommentItem from "../CommentItem";

type Props = {
  comments: Comment[];
};

function CommentList({ comments }: Props) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="h3">{comments.length}개의 이름 추천이 있어요! </h3>
      <div className="flex flex-col">
        {comments.map((C) => (
          <CommentItem comment={C} key={C.id} />
        ))}
      </div>
    </div>
  );
}

export default CommentList;
