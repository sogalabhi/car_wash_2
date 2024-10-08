import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useLocalSearchParams } from 'expo-router';
import { VehicleCard } from '../components/Card'
import { router } from 'expo-router';

const Packages = () => {
    const [interior, setinterior] = useState()
    const [exterior, setexterior] = useState()
    let { vehicle } = useLocalSearchParams();
    vehicle = JSON.parse(vehicle)
    const handlePress = () => {
        console.log("TODO")
    }
    return (
        <View>
            <VehicleCard key={vehicle.model} vehicle={vehicle} handlePress={handlePress} />
            <View>
                <Text>Select interior cleaning</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginVertical: 10 }}>
                    <TouchableOpacity style={[styles.box, { borderWidth: interior == "1" ? 2 : 0 }]} onPress={() => setinterior("1")}>
                        <Text>1</Text>
                        <Text>per month</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.box, { borderWidth: interior == "2" ? 2 : 0 }]} onPress={() => setinterior("2")}>
                        <Text>2</Text>
                        <Text>per month</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.box, { borderWidth: interior == "3" ? 2 : 0 }]} onPress={() => setinterior("3")}>
                        <Text>4</Text>
                        <Text>per month</Text>
                    </TouchableOpacity>
                </View>
                <Text>Select exterior cleaning</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginVertical: 10 }}>
                    <TouchableOpacity style={[styles.box, { borderWidth: exterior == "1" ? 2 : 0 }]} onPress={() => setexterior("1")}>
                        <Text>1</Text>
                        <Text>per week</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.box, { borderWidth: exterior == "2" ? 2 : 0 }]} onPress={() => setexterior("2")}>
                        <Text>3</Text>
                        <Text>per week</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.box, { borderWidth: exterior == "3" ? 2 : 0 }]} onPress={() => setexterior("3")}>
                        <Text>6</Text>
                        <Text>per week</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        width: 'auto', height: 100, padding: 20,
        borderColor: 'blue',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Packages