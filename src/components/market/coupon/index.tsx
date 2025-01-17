import { ImageBackground, Text, View } from "react-native";
import { styles } from "./styles";
import { IconTicket } from "@tabler/icons-react-native";
import { Button } from "@/components/button";
import { router } from "expo-router";
import { colors } from "@/styles/theme" 

type Props = {
    code: string
}

export function Coupon({ code }: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Utilize esse cupom</Text>

            <View style={styles.content}>
                <IconTicket size={24} color={colors.green.light}/>
                <Text style={styles.code}>{code}</Text>
            </View>
        </View>
    )
}