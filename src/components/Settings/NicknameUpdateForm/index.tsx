import { updateProfile } from "apis/user";
import { Button, Input } from "components/@base";
import { useRouter } from "next/router";
import React, { useState } from "react";

function NicknameUpdateForm() {
  const [nickname, setNickname] = useState("");
  const { push } = useRouter();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!nickname) return;
    try {
      await updateProfile(nickname);
      push("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <h2 className="h3">닉네임</h2>
      <Input
        placeholder="닉네임을 입력하세요! (10글자 이내)"
        value={nickname}
        onChange={onChange}
        maxLength={10}
      />
      <div className="flex items-center justify-end">
        <Button type="submit">변경 완료</Button>
      </div>
    </form>
  );
}

export default NicknameUpdateForm;
