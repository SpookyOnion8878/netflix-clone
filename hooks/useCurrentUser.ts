import useSWR from "swr";

import fetcher from "@/lib/fetcher";
import type { User } from "@/types";

/**
 * Fetch the currently authenticated user from /api/current.
 */
const useCurrentUser = () => {
  const { data, error, isLoading, mutate } = useSWR<User>("/api/current", fetcher);

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default useCurrentUser;
