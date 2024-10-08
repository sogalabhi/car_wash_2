import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Tabs } from 'expo-router';

export default function _layout() {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: 'blue',  headerShown:false}}>
            <Tabs.Screen
                name="ViewVehicles"
                options={{
                    title: 'ViewVehicles',
                    tabBarIcon: ({ color }) => <MaterialCommunityIcons name="view-list" size={28} color={color} />,
                }}
            />
            <Tabs.Screen
                name="AddVehicles"
                options={{
                    title: 'Add Vehicles',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="plus" color={color} />,
                }}
            />
            <Tabs.Screen
                name="Bookings"
                options={{
                    title: 'Bookings',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="shopping-cart" color={color} />,
                }}
            />
            <Tabs.Screen
                name="Support"
                options={{
                    title: 'Support',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="support" color={color} />,
                }}
            />
            <Tabs.Screen
                name="Share"
                options={{
                    title: 'Share',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="share-alt" color={color} />,
                }}
            />
        </Tabs>
    )
}