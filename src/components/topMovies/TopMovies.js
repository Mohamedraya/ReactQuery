import React, { useState, useEffect } from "react";
import { View, Text, FlatList, SafeAreaView, ActivityIndicator } from "react-native";
import { useQuery , useInfiniteQuery} from "@tanstack/react-query";
import getTopMovies from "../../api/Movies";
import MovieItem from "../movieItem/MovieItem";
import styles from "./styles";



const TopMovies = () => {

    const { data, isLoading, error , fetchNextPage} = useInfiniteQuery({ queryKey: ['movies'], queryFn: getTopMovies,
                                                          initialPageParam: 1,
                                                          getNextPageParam: (lastpage , pages) => pages.length + 1
                                                         });

    const movies = data?.pages?.flat(); //means if you have subArray it will be to one Array like [1,2,3,[4,5]] => [1,2,3,4,5]                                                     
    //console.log(query);

    /* const [movies, setMovies] = useState([]);
     const [isLoading , setIsLoading] = useState(false);
     const [error , setError] = useState("");
 
 
     useEffect(() => {
 
         const getMovies = async () => {
             try {
                 setIsLoading(true);
                 const movies = await getTopMovies();
                 setMovies(movies);
                 setIsLoading(false);
             } 
             
             catch (error) {
                 setError(error);
             }
            
         }
 
         getMovies();
     }, []);*/

    if (isLoading) {
        return <ActivityIndicator />
    }

    if (error) {
        return <Text>{error}</Text>
    }

    return (
        <SafeAreaView style={styles.theMain}>
            <View style={styles.listContainer}>
                <FlatList data={movies} key={2} showsVerticalScrollIndicator={false}
                    numColumns={2} contentContainerStyle={{ gap: 30 }} columnWrapperStyle={{ gap: 50 }}
                    renderItem={({ item }) => (<MovieItem item={item} />)} 
                    //onEndReachedThreshold={0.5}
                    onEndReached={() => {fetchNextPage()}}/>
            </View>
        </SafeAreaView>
    );
}


export default TopMovies;