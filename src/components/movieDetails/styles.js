import { StyleSheet } from "react-native";



const styles = StyleSheet.create({

    theMain: {
        flex: 1,
        backgroundColor: "#FFFFFF"
    },

    scrollContainer: {
        backgroundColor: "#FFFFFF",
        marginHorizontal: 20,
        marginTop: 7
    },

    img: {
        marginTop: 12,
        marginBottom: 14,
        width: "100%",
        height: 300,
        borderRadius: 5,
        //resizeMode: "contain"
    },

    nameTxt: {
        color: "#000",
        fontWeight: "600",
        fontSize: 24
      },
    
      description: {
        margin: 7,
        fontWeight: "400",
        fontSize: 14,
        marginBottom: 10
      },

      btnContainer: {
        backgroundColor: "#2979F2",
        height: 55,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        margin: 20
      },

      btnTxt: {
        color: '#FFFFFF',
        fontSize: 24,
        fontWeight: "600"
      }
});


export default styles;