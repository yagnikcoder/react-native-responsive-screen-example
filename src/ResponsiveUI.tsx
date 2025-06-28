import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  ScrollView,
  Alert,
} from "react-native";

import styles from "./ResponsiveUI.styles";

const ResponsiveUI: React.FC = () => {
  const [name, setName] = useState<string>("");

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header Image */}
      <View style={styles.imageBackground}>
        <Image
          source={require("./assets/freeImage.jpg")}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      {/* Title */}
      <Text style={styles.title}>
        Before you dive in, make sure to review README for guidance
      </Text>

      {/* Long Text / TextArea */}
      <Text style={styles.longText}>
        This is a long description text block. It can act as a TextArea or
        content viewer. It should be readable and adaptive to different screen
        sizes, from small phones to large TVs. With `react-native-size-matters`,
        we scale it nicely across all devices.
      </Text>

      {/* Input Field */}
      <TextInput
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
        style={styles.input}
        placeholderTextColor="#888"
      />

      {/* Button */}
      <View style={styles.buttonContainer}>
        <Button
          title="Submit"
          onPress={() => Alert.alert("Hello", `Welcome, ${name || "Guest"}!`)}
        />
      </View>
    </ScrollView>
  );
};

export default ResponsiveUI;
