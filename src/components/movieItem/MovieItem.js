import React from "react";
import { View , TouchableOpacity, Image, Text} from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";




const MovieItem = ({item}) => {

    const navigation = useNavigation();

    return (
         <TouchableOpacity onPress={() => {navigation.navigate("DetailsScreen" , {item})}}>
            <View>
                <Image source={{uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`}} style={styles.img}/>
                <Text>{item.title}</Text>
                
            </View>
         </TouchableOpacity>
    );
}


export default MovieItem;