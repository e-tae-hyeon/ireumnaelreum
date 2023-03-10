import { Comment } from "apis/types";
import colors from "common/styles/colors";
import { SvgIcon } from "components/@base";
import useCommentLikeManager from "hooks/mutations/useCommentLikeManager";
import useMe from "hooks/useMe";
import React, { useCallback } from "react";
import useAuthStore from "stores/useAuthStore";
import formatDate from "utils/formatDate";

type Props = {
  comment: Comment;
};

function CommentItem({ comment }: Props) {
  const { me } = useMe();
  const { id, itemId, user, text, updatedAt, likes, isLiked } = comment;
  const { like } = useCommentLikeManager({ itemId, commentId: id });
  const { open } = useAuthStore();

  const onClickLike = useCallback(async () => {
    if (!me) return open();
    if (isLiked) return;
    try {
      like();
    } catch (err) {
      console.error(err);
    }
  }, [me, isLiked]);

  return (
    <div className="flex flex-col gap-4 py-4 border-b border-neutral-200">
      <div className="flex flex-col gap-2">
        <div className="body2">{user.Profile.nickname}</div>
        <div className="caption text-neutral-400">{formatDate(updatedAt)}</div>
      </div>
      <div className="body1">{text}</div>
      <div className="flex items-center justify-between">
        <div className="caption text-neutral-400">좋아요 {likes}</div>
        <button
          type="button"
          onClick={onClickLike}
          className={`${
            isLiked ? "bg-primary cursor-text" : "bg-inherit hover:shadow-md"
          } p-2 duration-150 border rounded-full border-neutral-200`}
        >
          <SvgIcon name="heart" color={isLiked ? colors.white : colors.black} />
        </button>
      </div>
    </div>
  );
}

export default React.memo(CommentItem);
