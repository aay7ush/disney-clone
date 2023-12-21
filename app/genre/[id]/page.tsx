import MoviesCarousel from "@/components/MoviesCarousel"
import { getDiscoverMovies } from "@/lib/getMovies"

type Props = {
  params: { id: string }
  searchParams: { genre: string }
}

const GenrePage = async ({
  params: { id },
  searchParams: { genre },
}: Props) => {
  const movies = await getDiscoverMovies(id)

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col gap-y-5 mt-32 xl:mt-42">
        <h2 className="text-6xl font-bold px-10">Results for {genre}</h2>
      </div>

      <MoviesCarousel title="Genre" movies={movies} isVertical />
    </div>
  )
}

export default GenrePage
