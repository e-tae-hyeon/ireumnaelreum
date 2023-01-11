import { updateItem, writeItem } from "apis/item";
import { ActionsHeader } from "components/@module";
import useItemId from "hooks/useItemId";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import useWriteStore from "stores/useWriteStore";

function Submit() {
  const { replace } = useRouter();
  const [disabled, setDisabled] = useState(true);
  const { form } = useWriteStore();
  const itemId = useItemId();

  useEffect(() => {
    if (!form.title || !form.body) setDisabled(true);
    else setDisabled(false);
  }, [form]);

  const onClickSubmit = async () => {
    try {
      if (itemId) {
        await updateItem({ itemId, ...form });
        replace(`/item/${itemId}`);
      } else {
        const item = await writeItem(form);
        replace(`/item/${item.id}`);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClickSubmit}
      className={`${disabled && "text-neutral-200"} p-4 body1 m-[-1rem]`}
    >
      완료
    </button>
  );
}

function WriteHeader() {
  return <ActionsHeader action={<Submit />} />;
}

export default WriteHeader;
