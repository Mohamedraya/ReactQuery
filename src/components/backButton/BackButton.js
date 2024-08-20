import React from "react";
import { TouchableOpacity } from "react-native";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import styles from "./styles";



const BackButton = ({onPress}) => {

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <FontAwesomeIcon icon={faArrowLeft}/>
        </TouchableOpacity>
    );
};


export default BackButton;