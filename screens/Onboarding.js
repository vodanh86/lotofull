import React, { useState } from 'react';
import {
  ImageBackground,
  Image,
  StyleSheet,
  StatusBar,
  Dimensions
} from "react-native";
import { Block, Button, Text, theme } from "galio-framework";
import { Input} from "../components/";
const { height, width } = Dimensions.get("screen");

import argonTheme from "../constants/Theme";
import Images from "../constants/Images";

import { useDispatch } from 'react-redux';
import { login } from '../redux2/actions';

import { connect } from 'react-redux';

class Onboarding extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  
  
  render() {
    const { navigation } = this.props;

    return (
      <Block flex style={styles.container}>
        <StatusBar hidden />
        <Block flex center>
        <ImageBackground
            source={Images.Onboarding}
            style={{ height, width, zIndex: 1 }}
          />
        </Block>
        <Block center>
          <Image source={Images.LogoOnboarding} style={styles.logo} />
        </Block>
        <Block flex space="between" style={styles.padded}>
            <Block flex space="around" style={{ zIndex: 2 }}>
              <Block style={styles.title}>
                <Block style={styles.subTitle}>
                <Text bold size={16} style={styles.title}>
                  Đăng nhập
                </Text>
                <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
                  <Input right placeholder="Tài khoản" iconContent={<Block />}
                  onChangeText={(text) => this.setState({ username: text })} />
                </Block>
                <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
                  <Input right placeholder="Mật khẩu" secureTextEntry={true}  iconContent={<Block />}
                  autoCompleteType="password" 
                  onChangeText={(text) => this.setState({ password: text })}/>
                </Block>
                </Block>
              </Block>
              <Block row space="evenly">
              <Block flex center>
                <Button small center color={argonTheme.COLORS.SECONDARY} style={styles.optionsButton}
                textStyle={{ color: argonTheme.COLORS.BLACK }}
                onPress={() => navigation.navigate("App")}>
                  Đăng nhập
                </Button>
              </Block>
              <Block flex={1.25} right>
                <Button center color={argonTheme.COLORS.SECONDARY} style={styles.optionsButton}
                textStyle={{ color: argonTheme.COLORS.BLACK }}
                onPress={() => useDispatch(this.props.login({'username': this.state.username, 'password': this.state.password }))} 
                >
                  Không Tài Khoản
                </Button>
              </Block>
            </Block>
          </Block>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.COLORS.BLACK
  },
  padded: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    position: "relative",
    bottom: theme.SIZES.BASE,
    zIndex: 2,
  },
  button: {
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0
  },
  optionsButton: {
    width: 150,
    height: 40,
    paddingHorizontal: theme.SIZES.BASE,
    paddingVertical: 10
  },
  logo: {
    width: 200,
    height: 60,
    zIndex: 2,
    position: 'relative',
    marginTop: '-50%'
  },
  title: {
    marginTop:'-5%'
  },
  subTitle: {
    marginTop: 20
  }
});

//Map the redux state to your props.
const mapStateToProps = state => ({
  people: state.people,
  loading: state.loading,
})

//Map your action creators to your props.
const mapDispatchToProps = {
  login,
}

//export your list as a default export 
export default connect(mapStateToProps, mapDispatchToProps)(Onboarding);

//export default Onboarding;
