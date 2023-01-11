import { getItem } from "apis/item";
import useItemId from "hooks/useItemId";
import React, { useEffect } from "react";
import TextareaAutosize from "react-textarea-autosize";
import useWriteStore from "stores/useWriteStore";

function WriteForm() {
  const itemId = useItemId();
  const { form, changeForm, clearForm } = useWriteStore();

  useEffect(() => {
    clearForm();
    const fetchForm = async (id: number) => {
      const item = await getItem(id);
      changeForm({ name: "title", value: item.title });
      changeForm({ name: "body", value: item.body });
    };
    if (!itemId) return;
    fetchForm(itemId);
  }, [itemId]);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    changeForm({ name, value });
  };

  return (
    <form className="flex flex-col gap-4">
      <input
        name="title"
        placeholder="제목을 입력해주세요!"
        value={form.title}
        onChange={onChange}
        maxLength={35}
        className="py-4 border-b outline-none h3 placeholder:text-neutral-200 border-neutral-200"
      />
      <TextareaAutosize
        name="body"
        placeholder="어떤 이름을 원하시나요? 구체적으로 설명해주세요!"
        value={form.body}
        onChange={onChange}
        minRows={6}
        className="leading-8 outline-none resize-none body1 placeholder:text-neutral-200 "
      />
    </form>
  );
}

export default WriteForm;
