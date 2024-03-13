import React, { useState } from "react";
import styles from "./style";
import Result from "./Result";

import { View, Text, TextInput, TouchableOpacity } from 'react-native';

export default function Form() {
    const [valueA, setValueA] = useState(null);
    const [valueB, setValueB] = useState(null);
    const [valueC, setValueC] = useState(null);
    const [roots, setRoots] = useState([]);
    const [messageBhaskara, setMessageBhaskara] = useState("Preencha os valores");
    const [textButton, setTextButton] = useState("Calcular");

    function calculation() {
        if (valueA != null && valueB != null && valueC != null) {
            const delta = valueB ** 2 - 4 * valueA * valueC;

            if (delta > 0) {
                const root1 = (-valueB + Math.sqrt(delta)) / (2 * valueA);
                const root2 = (-valueB - Math.sqrt(delta)) / (2 * valueA);
                setRoots([root1, root2]);
                setMessageBhaskara("Resultado igual a: ");
            } else if (delta === 0) {
                const root = -valueB / (2 * valueA);
                setRoots([root]);
                setMessageBhaskara("Resultado igual a: ");
            } else {
                setRoots([]);
                setMessageBhaskara("Não há raízes reais");
            }
        }
    }

    return (
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Valor de A</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ex. 1.5"
                    keyboardType="numeric"
                    onChangeText={(text) => setValueA(text)}
                    value={valueA}
                />

                <Text style={styles.formLabel}>Valor de B</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ex. 1.5"
                    keyboardType="numeric"
                    onChangeText={(text) => setValueB(text)}
                    value={valueB}
                />

                <Text style={styles.formLabel}>Valor de C</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ex. 1.5"
                    keyboardType="numeric"
                    onChangeText={(text) => setValueC(text)}
                    value={valueC}
                />

                <TouchableOpacity style={styles.button} onPress={calculation}>
                    <Text style={styles.textButton}>
                        {textButton}
                    </Text>
                </TouchableOpacity>
            </View>

            <Result messageResult={messageBhaskara} valueResult={roots} />
        </View>
    );
}
