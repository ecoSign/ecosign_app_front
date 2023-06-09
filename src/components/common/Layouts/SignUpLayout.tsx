import React, { ReactChild, ReactChildren } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from 'react-native';

import DisableButton from '@components/common/buttons/DisableButton';
import { FlexContainer } from '@components/common/containers/FlexContainer';
import RowContainer from '@components/common/containers/RowContainer';
import AuthStep from '@components/elements/AuthScreen/AuthStep';

interface SignUpLayoutType {
  header: JSX.Element;
  step?: number;
  content: JSX.Element;
  text: string;
  disabled?: boolean;
  onPress?: () => void;
  headerStyle?: StyleProp<ViewStyle>;
  stepStyle?: StyleProp<ViewStyle>;
}
function SignUpLayout({
  header,
  step,
  content,
  text,
  disabled = false,
  onPress,
  headerStyle,
  stepStyle,
}: SignUpLayoutType) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <FlexContainer style={styles.container}>
        <RowContainer
          style={{
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            ...(headerStyle as {}),
          }}
        >
          {header}
          {step ? <AuthStep step={step} style={stepStyle} /> : <></>}
        </RowContainer>
        <FlexContainer style={{ flex: 1 }}>{content}</FlexContainer>
        <DisableButton text={text} disabled={disabled} onPress={onPress} />
      </FlexContainer>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  container: { paddingTop: 25, paddingHorizontal: 25, paddingBottom: 40 },
});
export default SignUpLayout;
