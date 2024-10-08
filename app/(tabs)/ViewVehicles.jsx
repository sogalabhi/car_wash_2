import { View, Text } from 'react-native'
import React from 'react'
import VehicleCard from '../components/Card'
import AppBar from '../components/AppBar'
import { GestureDetector } from 'react-native-gesture-handler';

export default function ViewVehicles() {
  const vehicleList = [
    {
      model: "Nano",
      brand: "Tata",
      regno: 1221, cat: "car",
      img: 'https://picsum.photos/200/300'
    },
    {
      model: "Nexon",
      brand: "Tata",
      regno: 6543, cat: "car",
      img: 'https://picsum.photos/200/300'
    },
    {
      model: "Maruti",
      brand: "Swift",
      regno: 5678, cat: "car",
      img: 'https://picsum.photos/200/300'
    },
    {
      model: "Punch",
      brand: "Tata",
      regno: 987, cat: "car",
      img: 'https://picsum.photos/200/300'
    }
  ]
  return (
    <View>
      <AppBar title="View Vehicles" />
      {vehicleList.map((vehicle) => (<VehicleCard key={vehicle.model} vehicle={vehicle} />))}
    </View>
  )
}