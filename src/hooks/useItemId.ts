import { useRouter } from "next/router";

function useItemId() {
  const { id } = useRouter().query;

  const parsed = id ? parseInt(id as string, 10) : null;

  if (parsed && Number.isNaN(parsed)) return null;

  return parsed;
}

export default useItemId;
