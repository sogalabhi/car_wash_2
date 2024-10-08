import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native'
import { Image } from 'expo-image';
import { router } from 'expo-router';

export const VehicleCard = (
    { vehicle, handlePress }
) => {
    const veh = vehicle.brand + " " + vehicle.model
    
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
                style={{ width: 100, height: 100, alignSelf: 'center', paddingLeft: 10 }}
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
export const PackageCard = (
    { packageObj }
) => {
    const title = packageObj.title;
    const interior = packageObj.interior
    const exterior = packageObj.exterior
    const price = packageObj.price
    const handlePress = () => {
        router.push({
            pathname: 'pages/Packages',
            params: {
                vehicle: JSON.stringify(packageObj)
            },
        });

    }
    return (
        <TouchableOpacity style={{
            backgroundColor: '#c4c4c4', gap: 10, margin: 10,
            borderRadius: 20, width: 'auto', flexDirection: 'row',
            padding: 10
        }}
            onPress={handlePress}
        >
            <Text>{title}</Text>
            <View style={{ flexDirection: 'row' }}>
                <View style={styles.box}>
                    <Text>1</Text>
                    <Text>Interior</Text>
                    <Text>per week</Text>
                </View>
                <View style={styles.box}>
                    <Text>2</Text>
                    <Text>Exterior</Text>
                    <Text>per month</Text>
                </View>
            </View>
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
    box: {
        width: 'auto', height: 100, padding: 20,
        borderColor: 'blue',
        borderRadius: 10,
        justifyContent: 'center',
        borderWidth: 2,
        alignItems: 'center'
    }
})