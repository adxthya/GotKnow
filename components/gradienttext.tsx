import React, { ReactNode } from "react";
import { Text } from "./themed";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import { StyleProp, ViewStyle } from "react-native";

interface props {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}

const GradientText = (props: props) => {
  return (
    <MaskedView maskElement={<Text {...props} />}>
      <LinearGradient
        colors={["rgb(32, 38, 57)", "rgb(63, 76, 119)"]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
        <Text
          {...props}
          style={[props.style, { opacity: 0 }]}
        />
      </LinearGradient>
    </MaskedView>
  );
};

export default GradientText;
