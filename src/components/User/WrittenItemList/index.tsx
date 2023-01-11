import { useQuery } from "@tanstack/react-query";
import { getMyItems } from "apis/user";
import { ItemList } from "components/Item";
import React from "react";

function WrittenItemList() {
  const { data: myItems } = useQuery(["myItems"], getMyItems, {
    initialData: [],
  });

  return (
    <div>
      <ItemList items={myItems} />
    </div>
  );
}

export default WrittenItemList;
