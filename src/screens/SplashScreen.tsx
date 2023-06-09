import React, { useEffect, useRef } from 'react';
import { Animated, Image, StyleSheet, View } from 'react-native';

import {
  Bold16SpoqaHanSansNeo,
  Regular16SpoqaHanSansNeo,
} from '@components/common/Label/SpoqaHanSansNeoLabel';
import {
  CenterContainer,
  FlexContainer,
} from '@components/common/containers/FlexContainer';
import { GradientContainer } from '@components/common/containers/GradientContainer';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '@constants/auth';
import { useNavigation } from '@react-navigation/native';
import { resetNavigation } from '@utils/navigation';

import { MainTabNavigationProp } from './types';

function SplashScreen() {
  const navigation = useNavigation<MainTabNavigationProp>();

  useEffect(() => {
    setTimeout(() => {
      resetNavigation(navigation, 'Auth');
    }, 2000);
  }, [navigation]);

  const textOpacity = useRef(new Animated.Value(0)).current;
  const imageScale = useRef(new Animated.Value(2)).current;

  Animated.sequence([
    Animated.timing(imageScale, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }),

    Animated.timing(textOpacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }),
  ]).start();

  return (
    <FlexContainer style={styles.container}>
      <GradientContainer>
        <View>
          <Animated.View
            style={{
              ...styles.top,
              opacity: textOpacity,
            }}
          >
            <Image
              source={require('../assets/images/auth/splash_logo.png')}
              style={styles.logo}
              resizeMode="contain"
            />
            <Bold16SpoqaHanSansNeo
              text="당신의 일상에 에코를 더하다"
              style={{ ...styles.title, fontWeight: 'bold' }}
            />
            <Regular16SpoqaHanSansNeo
              text="오늘도 에코유 하세요!"
              style={styles.title}
            />
          </Animated.View>
          <Animated.View
            style={{
              transform: [{ scale: imageScale }],
            }}
          >
            <Image
              source={require('../assets/images/auth/splash_bear.png')}
              style={styles.bottom}
              resizeMode="contain"
            />
          </Animated.View>
        </View>
      </GradientContainer>
    </FlexContainer>
  );
}

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  logo: {
    width: SCREEN_WIDTH * 0.45,
    height: 50,
    marginBottom: 22.6,
  },
  title: {
    fontSize: 14,
    lineHeight: 21,
    color: '#757575',
  },
  top: {
    position: 'absolute',
    left: 0,
    top: 0,
    paddingTop: SCREEN_HEIGHT * 0.2,
    alignItems: 'center',
    width: '100%',
  },
  bottom: {
    width: SCREEN_WIDTH,
    marginTop: 56 + SCREEN_HEIGHT * 0.09, // 56 + 74
    // height: 465,
    // height: SCREEN_HEIGHT * 0.52,
  },
});
