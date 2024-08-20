import React from "react";
import { View } from "react-native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NavigationContainer } from "@react-navigation/native";

import RootNavigation from "./src/navigation/RootNavigation";







const queryClient = new QueryClient();



function App() {

  return (
    <QueryClientProvider client={queryClient}>

      <NavigationContainer>
          <RootNavigation/>
      </NavigationContainer>
      
    </QueryClientProvider>

  );
}


export default App;