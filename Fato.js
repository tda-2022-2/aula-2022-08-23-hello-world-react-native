import { StyleSheet, Text } from "react-native";

export default function Fato(props) {
    return (
        <Text style={styles.fato}>
            {props.texto}
        </Text>
    )
}

const styles = StyleSheet.create({
    fato: {
        fontSize: 24,
        color: 'blue'
    }
});