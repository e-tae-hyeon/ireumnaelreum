import { writeItem } from "apis/item";
import { ActionsHeader } from "components/@module";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import useWriteStore from "stores/useWriteStore";

function Submit() {
  const { replace } = useRouter();
  const [disabled, setDisabled] = useState(true);
  const { form } = useWriteStore();

  useEffect(() => {
    if (!form.title || !form.body) setDisabled(true);
    else setDisabled(false);
  }, [form]);

  const onClickSubmit = async () => {
    try {
      await writeItem(form);
      replace("/"); // 완료 시, item 상세페이지로 이동으로 수정할 것
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
