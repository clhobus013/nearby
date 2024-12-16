import { View, Text } from "react-native";
import { styles } from "./styles";
import { IconProps } from "@tabler/icons-react-native";
import { colors } from "@/styles/colors";

type Props = {
    title: string,
    description: string,
    icon: React.ComponentType<IconProps>
}

export function Step({title, description, icon: Icon}: Props){
    return(
        <View style={styles.container}>
            {Icon && <Icon size={32} color={colors.red.base}/>}
            <View style={styles.details}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description}</Text>
            </View>
        </View>
    )
}