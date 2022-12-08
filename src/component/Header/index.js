import { StyleSheet, Image } from 'react-native';
import { Appbar } from 'react-native-paper';

const Header = () => {
    return (
        <Appbar.Header style={styles.header}>
            <Image style={styles.menuIcon} source={require("C:/Users/user/Documents/DashboardMob/assets/menu.png")} />
            <Image style={styles.logo} source={require("C:/Users/user/Documents/DashboardMob/assets/senac.png")} />
            <Image style={styles.user} source={require("C:/Users/user/Documents/DashboardMob/assets/user.png")} />
        </Appbar.Header>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#004587',
        height: 64,
        alignItems: 'center',
      },
      menuIcon: {
        width: 32,
        height: 32,
        marginLeft: 16,
        marginRight: 16,
      },
      logo: {
        width: 80,
        height: 48,
        marginRight: 16,
        resizeMode: 'contain',
      },
      user: {
        width: 32,
        height: 40,
        marginRight: 20,
        marginLeft: 'auto',
        resizeMode: 'contain',
      },
      headerTitle: {
        color: '#ffffff',
      },
  });

export {
    Header, styles
}