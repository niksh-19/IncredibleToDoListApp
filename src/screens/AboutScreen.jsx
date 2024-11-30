import React from "react";
import MainLayout from "../layouts/MainLayout";
import { Alert, StyleSheet, Text, TouchableOpacity } from "react-native";

const AboutScreen = () => {
    const currentDate = new Date().toLocaleDateString();

    return (
        <MainLayout>
            <Text style={styles.title}>My Incredible ToDo List App</Text>
            <TouchableOpacity onPress={() => Alert.alert('Well done, Detective! 🕵️‍♀️ You found me.')} >
                <Text style={styles.link}>Nikita Sharma </Text>
            </TouchableOpacity>
            <Text style={styles.text}>Date: {currentDate}</Text>
        </MainLayout>
    );
};

const styles = StyleSheet.create({
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10},
    text: { fontSize: 18, marginBottom: 10},
    link: { fontSize: 22, textDecorationLine: 'underline', marginBottom: 10},
})

export default AboutScreen;