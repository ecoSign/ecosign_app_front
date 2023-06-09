import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';

import {
  Medium15SpoqaHanSansNeo,
  Regular12SpoqaHanSansNeo,
  Regular14SpoqaHanSansNeo,
  Regular17SpoqaHanSansNeo,
  Thin12SpoqaHanSansNeo,
} from '@components/common/Label/SpoqaHanSansNeoLabel';
import Touchable from '@components/common/buttons/Touchable';
import RowContainer from '@components/common/containers/RowContainer';
import { SCREEN_WIDTH } from '@constants/auth';
import { ThemeType } from '@theme/ThemeType';
import useThemedStyles from '@theme/useThemedStyles';

interface HotGatherPostType {
  gather: any;
  onPress?: (e: any) => void;
}
function HotGatherPost({ gather, onPress }: HotGatherPostType) {
  const styles = useThemedStyles(styleSheet);

  return (
    <View style={styles.container}>
      <RowContainer
        style={{ justifyContent: 'space-between', marginBottom: 10 }}
      >
        <RowContainer>
          <Image
            source={require('assets/icons/common/gather/culture_performance.png')}
            style={styles.icons}
          />
          <Regular17SpoqaHanSansNeo text="운동" style={styles.gray900Color} />
        </RowContainer>
        <Touchable>
          <Regular12SpoqaHanSansNeo text="더보기" style={styles.gray500Color} />
        </Touchable>
      </RowContainer>
      <View style={styles.box}>
        {[1, 2].map((data, index) => (
          <React.Fragment key={index}>
            <RowContainer>
              <Image
                // source={require('assets/images/auth/tree.png')}
                source={{ uri: 'https://reactjs.org/logo-og.png' }}
                resizeMode="cover"
                style={styles.gatherImage}
              />
              <View style={{ flex: 1 }}>
                <Regular12SpoqaHanSansNeo
                  text="부산 수영구"
                  style={styles.gray500Color}
                />
                <Regular14SpoqaHanSansNeo
                  text="헬린이분들 무료 피티 , 연습할헬린 이분들 무료 피티 , 연습할"
                  style={styles.gray900Color}
                  numberOfLines={1}
                />
                <RowContainer style={{ marginTop: 8 }}>
                  <Image
                    source={require('assets/icons/common/activePeople.png')}
                    style={{ width: 14, height: 14, marginRight: 3 }}
                    resizeMode="contain"
                  />
                  <Thin12SpoqaHanSansNeo
                    text="1/2"
                    style={{
                      ...styles.gray700Color,
                    }}
                  />
                  <MaterialCommunityIcons
                    name="calendar-check-outline"
                    size={14}
                    style={{
                      ...styles.green400Color,
                      marginRight: 3,
                      marginLeft: 15,
                      width: 14,
                      height: 14,
                    }}
                  />
                  <Thin12SpoqaHanSansNeo
                    text="11/03 19:00"
                    style={styles.gray700Color}
                  />
                </RowContainer>
              </View>
            </RowContainer>
            {index === 0 && <View style={styles.division} />}
          </React.Fragment>
        ))}
      </View>
    </View>
  );
}
const styleSheet = (theme: ThemeType) =>
  StyleSheet.create({
    gray900Color: {
      color: theme.colors.GRAY900,
    },
    gray500Color: {
      color: theme.colors.GRAY500,
    },
    gray700Color: {
      color: theme.colors.GRAY700,
    },
    green400Color: {
      color: theme.colors.GREEN400,
    },
    container: {
      paddingTop: 16,
      paddingLeft: 12,
      paddingRight: 16,
      paddingBottom: 25,
      backgroundColor: theme.colors.GRAY50,
      marginRight: 8,
    },
    box: {
      width: SCREEN_WIDTH * 0.75,
      backgroundColor: theme.colors.WHITE,
      paddingTop: 16,
      paddingLeft: 12,
      paddingBottom: 25,
      paddingRight: 17,
      elevation: 1,
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowRadius: 6,
      shadowColor: 'rgba(0, 0, 0, 0.03)',
      shadowOpacity: 1,
      borderRadius: 10,
    },
    icons: {
      marginRight: 8,
      width: 32,
      height: 26,
    },

    gatherImage: {
      width: 64,
      height: 64,
      marginRight: 12,
      borderRadius: 5,
    },
    division: {
      height: 1,
      backgroundColor: theme.colors.GRAY100,
      marginVertical: 20,
    },
  });
export default HotGatherPost;
