import React from "react";
import { View, Text, FlatList, SafeAreaView, ActivityIndicator } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { getWatchListMovies } from "../../api/WatchList";
import styles from "./styles";
import MovieItem from "../movieItem/MovieItem";



const WatchList = () => {

    const {data , isLoading , error} = useQuery({queryKey: ["watchlist"] , queryFn: getWatchListMovies});

    console.log(data);

    if (isLoading) {
        return <ActivityIndicator/>
    }

    if (error) {
        return <Text>{error}</Text>
    }

    return (
        <SafeAreaView style={styles.theMain}>
            <View style={styles.listContainer}>
                 <FlatList data={data} renderItem={({item}) => (<MovieItem item={item}/>)} numColumns={2}
                           showsVerticalScrollIndicator={false} contentContainerStyle={{ gap: 30 }} columnWrapperStyle={{ gap: 50 }}/>
            </View>
        </SafeAreaView>
    );
};


export default WatchList;