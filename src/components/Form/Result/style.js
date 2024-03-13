import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        color:"#000000"
    },

    boxText:{
        width: "calc(100% - 0px)", // Subtrai 40px para margem esquerda e direita de 20px
        marginHorizontal: 10, // Adiciona margem horizontal de 20px
        alignItems: "center",
        justifyContent: "center",
        padding: 60,
        backgroundColor: "#f6f6f6",
        borderRadius: 10, // Adiciona bordas arredondadas de 10px
    }
    
});

export default styles