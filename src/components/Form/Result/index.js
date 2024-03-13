import React from "react";
import { View, Text } from "react-native";
import styles from "./style";

export default function Result(props){

    return(
        <View style={styles.boxText}>
            <Text style={styles.text}>{props.messageResult}</Text>
            {props.valueResult.length > 0 ? (
                    <View>
                        {props.valueResult.map((root, index) => (
                            <Text key={index} style={styles.text}>
                                x{index + 1} = {root}
                            </Text>
                        ))}
                    </View>
                ) : (
                    <Text style={styles.text}></Text>
                )}
        </View>
    );
}