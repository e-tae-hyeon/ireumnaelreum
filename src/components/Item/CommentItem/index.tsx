import { Comment } from "apis/types";
import { SvgIcon } from "components/@base";
import React from "react";

type Props = {
  comment: Comment;
};

function CommentItem({ comment }: Props) {
  const { user, text, updatedAt, likes } = comment;

  return (
    <div className="flex flex-col gap-4 py-4 border-b border-neutral-200">
      <div className="flex flex-col gap-2">
        <div className="body2">{user.Profile.nickname}</div>
        <div className="caption text-neutral-400">{updatedAt}</div>
      </div>
      <div className="body1">{text}</div>
      <div className="flex items-center justify-between">
        <div className="caption text-neutral-400">좋아요 {likes}</div>
        <button
          type="button"
          className="p-2 duration-150 border rounded-full border-neutral-200 hover:shadow-md"
        >
          <SvgIcon name="heart" />
        </button>
      </div>
    </div>
  );
}

export default CommentItem;
