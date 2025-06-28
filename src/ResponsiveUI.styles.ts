import { StyleSheet } from "react-native";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

const styles = StyleSheet.create({
  container: {
    padding: scale(16),
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: verticalScale(10),
  },
  imageBackground: {
    borderWidth: moderateScale(1),
    borderColor: "red",
    borderRadius: moderateScale(10),
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: scale(300),
    height: verticalScale(150),
    marginBottom: verticalScale(20),
  },

  title: {
    fontSize: moderateScale(24),
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: verticalScale(12),
  },

  longText: {
    fontSize: moderateScale(16),
    textAlign: "justify",
    marginVertical: verticalScale(12),
    paddingHorizontal: scale(10),
    color: "#333",
  },

  input: {
    width: "100%",
    height: verticalScale(45),
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: scale(8),
    paddingHorizontal: scale(12),
    fontSize: moderateScale(16),
    marginBottom: verticalScale(16),
  },

  buttonContainer: {
    width: "100%",
    marginTop: verticalScale(10),
  },
});

export default styles;
