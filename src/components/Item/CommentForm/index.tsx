import { Button } from "components/@base";
import React from "react";
import TextareaAutosize from "react-textarea-autosize";

function CommentForm() {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <h2 className="h3">멋진 이름을 지어주세요!</h2>
      <TextareaAutosize
        placeholder="어떤 이름이 좋을까요?"
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
