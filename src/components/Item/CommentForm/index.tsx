import { writeComment } from "apis/item";
import { Button } from "components/@base";
import useItemId from "hooks/useItemId";
import React, { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";

function CommentForm() {
  const itemId = useItemId();
  const [comment, setComment] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!itemId || !comment) return;

    try {
      await writeComment({ itemId, text: comment });
      setComment("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <h2 className="h3">멋진 이름을 지어주세요!</h2>
      <TextareaAutosize
        placeholder="어떤 이름이 좋을까요?"
        value={comment}
        onChange={onChange}
        className="p-4 border rounded-lg outline-none resize-none border-neutral-200"
        minRows={4}
      />
      <div className="flex items-center justify-end">
        <Button type="submit">작성 완료!</Button>
      </div>
    </form>
  );
}

export default CommentForm;
