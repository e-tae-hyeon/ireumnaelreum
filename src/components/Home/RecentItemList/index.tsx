import { useInfiniteQuery } from "@tanstack/react-query";
import { getItems } from "apis/item";
import { ItemList } from "components/Item";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

function RecentItemList() {
  const { ref, inView } = useInView();
  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery(
    ["items"],
    ({ pageParam }) => getItems(pageParam),
    {
      getNextPageParam: (lastPage) => {
        if (!lastPage.pageInfo.hasNextPage) return undefined;
        return lastPage.pageInfo.endCursor;
      },
    }
  );

  useEffect(() => {
    if (hasNextPage && inView) fetchNextPage();
  }, [inView, hasNextPage]);

  const items = data?.pages.flatMap((P) => P.items);

  return (
    <div className="flex flex-col gap-4">
      <h3 className="h3">멋진 이름을 기다리고 있어요!</h3>
      {items && (
        <>
          <ItemList items={items} />
          <div ref={ref} />
        </>
      )}
    </div>
  );
}

export default RecentItemList;
