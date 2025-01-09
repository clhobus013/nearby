import { Text, View } from "react-native";
import { IconPhone, IconMapPin, IconTicket } from "@tabler/icons-react-native";
import { Button } from "@/components/button";
import { router } from "expo-router";
import { styles } from "./styles";

export type PropsDetails = {
    name: string
    description: string
    address: string
    phone: string
    cupons: number
    rules: {
        id: string
        description: string
    }[]
}

type Props = {
    data: PropsDetails
}

export function Details({ data }: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{data.name}</Text>
            <Text style={styles.description}>{data.description}</Text>

            <View style={styles.group}>
                <Text style={styles.title}>Informações</Text>
            </View>
        </View>
    )
}