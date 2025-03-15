import { View, TouchableOpacity, StyleSheet, Animated } from "react-native";
import React , {useRef, useEffect, use} from "react";
import Svg, { G, Circle } from "react-native-svg";
import {AntDesign} from '@expo/vector-icons'

export default function NextButton({percentage}) {
  const size = 128;
  const strokeWidth = 2;
  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = radius * 2 * Math.PI;
  const progressAnimation = useRef(new Animated.Value(0)).current;
  const progressRef = useRef(null);

  const animation = (toValue) => {
    return Animated.timing(progressAnimation , {
        toValue,
        duration: 250,
        useNativeDriver: true
    }).start();
  }

  useEffect(() => {
    animation(percentage)
  }, [percentage]) 

  useEffect(() => {
      
  })


  return (
    <View style={styles.container}>
      <Svg width={size} height={size}>
        <G rotation="-90" origin={center}>
      <Circle
          stroke="#E6E7E8"
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
          fill="none"
        />
        <Circle
          ref={progressRef}
          stroke="#F4338F"
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={circumference-(circumference*25)/100}
          fill="none"
        />
      </G>
      </Svg>

      <TouchableOpacity style={styles.button}>
        <AntDesign name="arrowright" size={32} color="#fff"/>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        justifyContent: "center",
    alignItems: "center",
    width: 128, 
    height: 128, 
    },
    button:{
        position: "absolute",
        backgroundColor: "#F4338F",
        borderRadius: 50,
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
    }
});
