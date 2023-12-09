import { useEffect, useState } from "react";
import { Header } from "../Components/Header";
import { themovie } from "../service/themovies";

interface Results {
  adult: boolean,
  backdrop_path: string,
  id: number,
  original_language: string,
  original_title: string,
  overview: string,
  popularity: string,
  poster_path: string,
  release_date: Date,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number
}

export function Home() {
  const [response, setResonse] = useState<Results[]>([])

  useEffect(() => {
    (async () => {
      await themovie.get("/popular?api_key=e346d8bbd77bdb910913cb9da2901344&language=pt-BR").then(response => setResonse(response.data.results))
    })()
  }, [])

  return (
    <div className="w-full h-screen flex flex-col">

      <Header />

      <main className="w-full px-4 flex-1" >
        <div className="flex flex-wrap gap-4">
          {response.map(r => (
            <div key={r.id}>

              <img src={`https://image.tmdb.org/t/p/w200${r.poster_path}`} alt="" />

            </div>
          ))}
        </div>
      </main>
    </div>
  )
}