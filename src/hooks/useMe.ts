import { useQuery } from "@tanstack/react-query";
import { checkMe } from "apis/auth";

function useMe() {
  const { data: me } = useQuery(["me"], () => checkMe());

  return { me };
}

export default useMe;
