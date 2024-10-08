import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native'
import { Image } from 'expo-image';
import { router } from 'expo-router';

const VehicleCard = (
    { vehicle }
) => {
    const veh = vehicle.brand + " " + vehicle.model
    const handlePress = () => {
        router.setParams({vehicle})
        router.push("pages/Packages", { relativeToDirectory: false })

    }
    return (
        <TouchableOpacity style={{
            backgroundColor: '#c4c4c4', gap: 10, margin: 10,
            borderRadius: 20, width: 'auto', flexDirection: 'row',
            padding: 10
        }}
            onPress={handlePress}
        >
            <Image
                source={vehicle.img}
                style={{ width: 100, height: 100, alignSelf: 'center', paddingLeft:10}}
            />
            <View style={{
                justifyContent: 'center',
                padding: 10
            }}>
                <Text style={{ fontSize: 20 }}>{vehicle.cat}</Text>
                <Text style={{ fontSize: 40 }}>{veh}</Text>
                <Text style={{ fontSize: 20 }}>{vehicle.regno}</Text>
            </View>

        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#c4c4c4',
        gap: 10,
        margin: 10,
        borderRadius: 20,
        height: 200,
        width: 'auto',
    },
    imageContainer: {
        width: 100,
        height: 100,
    }
});
export default VehicleCard