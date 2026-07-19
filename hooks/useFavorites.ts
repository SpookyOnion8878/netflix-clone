import useSWR from "swr";

import fetcher from "@/lib/fetcher";
import type { Movie } from "@/types";

/**
 * Fetch the current user's favorited movies from /api/favorites.
 */
const useFavorites = () => {
  const { data, error, isLoading } = useSWR<Movie[]>("/api/favorites", fetcher);

  return {
    data,
    error,
    isLoading,
  };
};

export default useFavorites;
