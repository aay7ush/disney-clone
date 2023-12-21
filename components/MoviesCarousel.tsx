import { cn } from "@/lib/utils"
import MovieCard from "./MovieCard"

type Props = {
  title?: string
  movies: Movie[]
  isVertical?: boolean
}

const MoviesCarousel = ({ title, movies, isVertical }: Props) => {
  return (
    <div className="z-50">
      <h2 className="text-xl font-bold px-10 py-2">{title}</h2>

      <div
        className={cn(
          "flex gap-x-4 overflow-scroll p-5 lg:px-10 scrollbar-hide",
          isVertical && "flex-col gap-x-0 gap-y-12"
        )}
      >
        {isVertical
          ? movies.map((movie) => (
              <div
                key={movie.id}
                className={cn(
                  isVertical &&
                    "flex flex-col gap-y-5 mb-5 items-center lg:flex-row gap-x-5"
                )}
              >
                <MovieCard movie={movie} />

                <div className="max-w-2xl">
                  <p className="font-bold">
                    {movie.title} ({movie.release_date?.split("-")[0]})
                  </p>
                  <hr className="mb-3" />
                  <p>{movie.overview}</p>
                </div>
              </div>
            ))
          : movies?.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  )
}

export default MoviesCarousel
