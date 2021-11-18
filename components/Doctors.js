import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Link } from 'react-router-native';
import Doctor from './Doctor';

export default function Doctors() {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('https://afternoon-bayou-81687.herokuapp.com/doctors')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return (
        <View>
            <Text>This is Doctors: {doctors.length}</Text>
            <ScrollView>

                {
                    doctors.map(doctor => <Doctor
                        key={doctor._id}
                        doctor={doctor}
                    >
                    </Doctor>)
                }
            </ScrollView>

        </View>
    )
}
