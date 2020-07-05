import React from "react";
import { useSafeArea } from "react-native-safe-area-context";
import {
  ScrollView,
  StyleSheet,
  Image
} from "react-native";
import { Block, Text, theme } from "galio-framework";

import Images from "../constants/Images";
import { DrawerItem as DrawerCustomItem } from '../components';
import { connect } from 'react-redux';
import {isLogin, getUser} from '../redux/reducers'

class CustomDrawerContent extends React.Component {
  render() {
    var username = (this.props.isLogin)? this.props.getUser.user : "Khách";
    const { drawerPosition, navigation, profile, focused, state } = this.props;
    //const insets = useSafeArea();
    const screens = [
      "Home", 
      "Logout",
      "Kết quả xổ số",
      "Profile",
      "Account",
      "Elements",
      "Articles",
    ];
    return (
      <Block
        style={styles.container}
        forceInset={{ top: 'always', horizontal: 'never' }}
      >
        <Block flex={0.06} style={styles.header}>
          <Image styles={styles.logo} source={Images.Logo} />
          <Text color="#8898AA" style={{ marginTop: 16, marginLeft: 8 }}>Xin chào: {username}</Text>
        </Block>
        <Block flex style={{ paddingLeft: 8, paddingRight: 14 }}>
          <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
            {screens.map((item, index) => {
                return (
                  <DrawerCustomItem
                    title={item}
                    key={index}
                    navigation={navigation}
                    focused={state.index === index ? true : false}
                  />
                );
              })}
              <Block flex style={{ marginTop: 24, marginVertical: 8, paddingHorizontal: 8 }}>
                <Block style={{ borderColor: "rgba(0,0,0,0.2)", width: '100%', borderWidth: StyleSheet.hairlineWidth }}/>
                <Text color="#8898AA" style={{ marginTop: 16, marginLeft: 8 }}>DOCUMENTATION</Text>
              </Block>
              <DrawerCustomItem title="Getting Started" navigation={navigation} />
          </ScrollView>
        </Block>
      </Block>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 28,
    paddingBottom: theme.SIZES.BASE,
    paddingTop: theme.SIZES.BASE * 3,
    justifyContent: 'center'
  }
});

//Map the redux state to your props.
const mapStateToProps = state => ({
  isLogin: isLogin(state),
  getUser: getUser(state)
})

//export your list as a default export 
export default connect(mapStateToProps)(CustomDrawerContent);
