import { useEffect, useState } from "react";
import { ActivityIndicator, Image, ScrollView, StatusBar, TouchableOpacity, View } from "react-native";
import IonIcon from "react-native-vector-icons/Ionicons";
import { Header } from "../components/Header";
import { useAuth } from "../hooks/useAuth";
import { themovie } from "../services/themovies";

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
  const { signOut } = useAuth()
  const [response, setResonse] = useState<Results[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    (async () => {
      try {
        const { data } = await themovie.get("/popular?api_key=e346d8bbd77bdb910913cb9da2901344&language=pt-BR")

        setResonse(data.results)
        setLoading(false)
      } catch (error) {

      }
    })()
  }, [])

  return (
    <View className="flex-1 bg-background">
      <View className="h-6 bg-primary" />

      <Header className="items-end">
        <TouchableOpacity className="bg-primary rounded px-[2]" activeOpacity={0.8} onPress={signOut}>
          <IonIcon name="exit-outline" color="#fff" size={28} />
        </TouchableOpacity>
      </Header>

      <View className="h-12 bg-primary border-t">

      </View>

      {loading ?
        <View className="flex-1 h-28 items-center justify-center">
          <ActivityIndicator color={"#023f85"} />
        </View>
        :
        <ScrollView className="flex-1 px-4" >
          <View className="flex-1 flex-row flex-wrap gap-3">
            {
              response.map(r => (
                <View key={r.id} className="w-28 h-44" >
                  <Image resizeMethod="resize" source={{
                    uri: `https://image.tmdb.org/t/p/w200${r.poster_path}`
                  }} className="flex-1" />
                </View>

              ))}
          </View>
        </ScrollView>
      }


      <StatusBar barStyle="light-content" />
    </View>
  )
}