import React from "react";
import { View, SafeAreaView, Image, Text, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {addToWatchList} from "../../api/WatchList";
import BackButton from "../backButton/BackButton";
import styles from "./styles";




const MovieDetails = () => {


    const route = useRoute();
    const { item } = route.params;

    const navigation = useNavigation();

    const client = useQueryClient();

    const {mutate} = useMutation({mutationFn: () => addToWatchList(item.id) , 
                                  onSuccess: () => {
                                     client.invalidateQueries(["watchlist"]);
                                  }});

    return (
        <SafeAreaView style={styles.theMain}>
            <ScrollView style={styles.scrollContainer}>

                <BackButton onPress={() => { navigation.goBack() }} />

                <Image source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }} style={styles.img} />

                <Text style={styles.nameTxt}>{item.title}</Text>

                <Text style={styles.description}>{item.overview}</Text>
            </ScrollView>

            <TouchableOpacity style={styles.btnContainer} onPress={() => mutate()}>
                <Text style={styles.btnTxt}>Add To Watchlist</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};


export default MovieDetails;