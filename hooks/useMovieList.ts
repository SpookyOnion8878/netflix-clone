import useSWR from "swr";

import fetcher from "@/lib/fetcher";
import type { Movie } from "@/types";

/**
 * Fetch the full list of movies from /api/movies.
 */
const useMovieList = () => {
  const { data, error, isLoading } = useSWR<Movie[]>("/api/movies", fetcher);

  return {
    data,
    error,
    isLoading,
  };
};

export default useMovieList;
