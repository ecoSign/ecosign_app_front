import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

type ContainerProps = {
  children: JSX.Element | JSX.Element[];
  style?: StyleProp<ViewStyle>;
};

export function FlexContainer({ children, style }: ContainerProps) {
  return <View style={[styles.container, style]}>{children}</View>;
}
export function CenterContainer({ children, style }: ContainerProps) {
  return <View style={[styles.centerContainer, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  rowContainer: {
    flexDirection: 'row',
  },
  spaceBetweenContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  centerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
