import { useMutation, useQueryClient } from "@tanstack/react-query";
import { likeComment } from "apis/item";
import { Comment } from "apis/types";

type Props = {
  itemId: number;
  commentId: number;
};

function useCommentLikeManager({ itemId, commentId }: Props) {
  const queryClient = useQueryClient();

  const { mutate: like } = useMutation(
    () => likeComment({ itemId, commentId }),
    {
      onMutate: () => {
        queryClient.setQueryData(
          ["comments", itemId],
          (old: Comment[] | undefined) => {
            if (!old) return;
            const newData = old.map((C) =>
              C.id === commentId
                ? { ...C, isLiked: true, likes: C.likes + 1 }
                : C
            );
            return newData;
          }
        );
      },
    }
  );

  return { like };
}

export default useCommentLikeManager;
