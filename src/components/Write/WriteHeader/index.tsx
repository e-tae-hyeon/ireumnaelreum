import { ActionsHeader } from "components/@module";
import React, { useEffect, useState } from "react";
import useWriteStore from "stores/useWriteStore";

function Submit() {
  const [disabled, setDisabled] = useState(true);
  const { form } = useWriteStore();

  useEffect(() => {
    if (!form.title || !form.body) setDisabled(true);
    else setDisabled(false);
  }, [form]);

  return (
    <button
      type="button"
      disabled={disabled}
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
