import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>Designed to organize your life, one task at a time</Text>
    </View>
  );
};

const MainLayout = ({ children }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {children}
      </View>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",  
  },
  content: {
    flex: 1, 
    padding: 20, 
  },
  footer: {
    height: 50, 
    backgroundColor: "#4CAF50", 
    alignItems: "center",
    justifyContent: "center",
    borderTopWidth: 1,
    borderColor: "#ddd", 
  },
  footerText: {
    color: "#fff", 
    fontSize: 14,
    fontWeight: "600", 
    textAlign: "center",
  },
});

export default MainLayout;
