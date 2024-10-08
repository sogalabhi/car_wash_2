import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { View, Text, FlatList, Button, SafeAreaView } from 'react-native';
import AppBar from '../components/AppBar';
import { VehicleCard } from '../components/Card';

const vehicles = [
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
  },
  {
    model: "Electric",
    brand: "Tesla",
    regno: 987, cat: "car",
    img: 'https://picsum.photos/200/300'
  },
  {
    model: "Duke",
    brand: "KTM",
    regno: 987, cat: "bike",
    img: 'https://picsum.photos/200/300'
  },
  {
    model: "125",
    brand: "Axis",
    regno: 987, cat: "scooter",
    img: 'https://picsum.photos/200/300'
  },
]
const AddVehicles = () => {
  const [selectedModel, setSelectedModel] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [filteredVehicles, setFilteredVehicles] = useState(vehicles);

  const filterVehicles = () => {
    let tempVehicles = vehicles;
    if (selectedModel) {
      tempVehicles = tempVehicles.filter(vehicle => vehicle.model === selectedModel);
      console.log(tempVehicles)
    }
    if (selectedBrand) {
      tempVehicles = tempVehicles.filter(vehicle => vehicle.brand === selectedBrand);
      console.log(tempVehicles)
    }
    if (selectedType) {
      tempVehicles = tempVehicles.filter(vehicle => vehicle.cat === selectedType);
    }
    setFilteredVehicles(tempVehicles);
  };

  const clearFilters = () => {
    setSelectedModel(null);
    setSelectedBrand(null);
    setSelectedType(null);
    setFilteredVehicles(vehicles);  // Reset to full list
  };
  const handlePress = () => {
    console.log("TODO")
  }
  return (
    <SafeAreaView>

      <AppBar title="Add Vehicles" />

      {/* Filter Buttons */}
      <View>
        <Picker
          selectedValue={selectedType}
          onValueChange={(itemValue) => setSelectedType(itemValue)}
        >
          <Picker.Item label="Select Category" value={null} />
          <Picker.Item label="bike" value="bike" />
          <Picker.Item label="scooter" value="scooter" />
          <Picker.Item label="car" value="car" />
        </Picker>
      </View>
      <View>
        <Picker
          selectedValue={selectedBrand}
          onValueChange={(itemValue) => setSelectedBrand(itemValue)}
        >
          <Picker.Item label="Select Brand" value={null} />
          <Picker.Item label="Tata" value="Tata" />
          <Picker.Item label="Swift" value="Swift" />
          <Picker.Item label="Tesla" value="Tesla" />
          <Picker.Item label="KTM" value="KTM" />
          <Picker.Item label="Axis" value="Axis" />
        </Picker>
      </View>
      <View>
        <Picker
          selectedValue={selectedModel}
          onValueChange={(itemValue) => setSelectedModel(itemValue)}
        >
          <Picker.Item label="Select Model" value={null} />
          <Picker.Item label="Nano" value="Nano" />
          <Picker.Item label="Nexon" value="Nexon" />
          <Picker.Item label="Maruti" value="Maruti" />
          <Picker.Item label="Punch" value="Punch" />
          <Picker.Item label="Electric" value="Electric" />
          <Picker.Item label="Duke" value="Duke" />
          <Picker.Item label="125" value="125" />
        </Picker>
      </View>
      {/* Apply and Clear Filters */}
      <Button title="Apply Filters" onPress={filterVehicles} />
      <Button title="Clear Filters" onPress={clearFilters} />
      {/* Display Filtered Vehicles */}
      <FlatList
        style={{ height: 400 }}
        data={filteredVehicles}
        renderItem={({ item }) => (
          <VehicleCard vehicle={item} handlePress={handlePress}></VehicleCard>
        )}
        keyExtractor={item => item.model}
      />
    </SafeAreaView>
  );
};

export default AddVehicles;
