import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";
import { useAuth } from "../hooks/useAuth";
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";
import { LoadingRoute } from "./loading.route";

export function Routes() {
  const { user, loading } = useAuth()

  return (
    <View className="flex-1 bg-background">
      <NavigationContainer>
        {loading ?
          <LoadingRoute />
          :
          user.id ?
            <AuthRoutes /> : <AppRoutes />
        }

      </NavigationContainer>
    </View>
  )
}