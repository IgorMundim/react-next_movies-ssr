// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { MoviesService } from "../services/MoviesService";

export default async function handler(_, res) {
  const {
      data: { results},
  } = await MoviesService.getPopularMovies();
  res.status(200).json({results});
}
