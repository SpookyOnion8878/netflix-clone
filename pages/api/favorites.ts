import type { NextApiRequest, NextApiResponse } from "next";

import prismadb from "@/lib/prismadb";
import serverAuth from "@/lib/serverAuth";

/**
 * GET    /api/favorites           -> the current user's favorited movies
 * PUT    /api/favorites?movieId=x -> toggle the given movie in/out of favorites
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { currentUser } = await serverAuth(req);

    if (req.method === "GET") {
      const favoriteMovies = await prismadb.movie.findMany({
        where: {
          id: {
            in: currentUser.favoriteIds,
          },
        },
      });

      return res.status(200).json(favoriteMovies);
    }

    if (req.method === "PUT") {
      const { movieId } = req.body;

      const existingMovie = await prismadb.movie.findUnique({
        where: { id: movieId },
      });

      if (!existingMovie) {
        return res.status(404).end();
      }

      const hasFavorited = currentUser.favoriteIds.includes(movieId);

      const updatedUser = await prismadb.user.update({
        where: { id: currentUser.id },
        data: {
          favoriteIds: hasFavorited
            ? { set: currentUser.favoriteIds.filter((id) => id !== movieId) }
            : { push: movieId },
        },
      });

      return res.status(200).json(updatedUser);
    }

    return res.status(405).end();
  } catch (error) {
    console.error(error);
    return res.status(400).end();
  }
}
