import React from "react";

function ItemOwnActions() {
  return (
    <div className="flex items-center justify-end gap-4">
      <button type="button" className="body2 text-neutral-400">
        수정
      </button>
      <button type="button" className="body2 text-neutral-400">
        삭제
      </button>
    </div>
  );
}

export default ItemOwnActions;
