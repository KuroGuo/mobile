import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

import MnemonicInputScreen from './screens/MnemonicInputScreen';
import MnemonicViewScreen from './screens/MnemonicViewScreen';
import PassphraseScreen from './screens/PassphraseScreen';
import EnterPassphraseScreen from './screens/EnterPassphraseScreen';
import SplashScreen from './screens/SplashScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import MyWalletScreen from './screens/MyWalletScreen';
import TransactionDetailsScreen from './screens/TransactionDetailsScreen';
import AddressDetailsScreen from './screens/AddressDetailsScreen';
import AddEditAddressScreen from './screens/AddEditAddressScreen';
import SendScreen from './screens/SendScreen';
import ReceiveScreen from './screens/ReceiveScreen';
import AddressBookScreen from './screens/AddressBookScreen';
import {BottomTabBar} from './components/BottomNavigation';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ScanQRCodeScreen from './screens/ScanQRCodeScreen';
import { Platform } from 'react-native';
import SettingsScreen from './screens/SettingsScreen';

type SettingsStackParamList = {
  SettingsScreen: undefined;
};
const SettingsStack = createStackNavigator<SettingsStackParamList>();
const Settings = () => (
  <SettingsStack.Navigator screenOptions={{headerShown: false}}>
    <SettingsStack.Screen name="SettingsScreen" component={SettingsScreen} />
  </SettingsStack.Navigator>
);

type ScanQRCodeStackParamList = {
  ScanQRCodeScreen: undefined;
};
const ScanQRCodeStack = createStackNavigator<ScanQRCodeStackParamList>();
const ScanQRCode = () => (
  <ScanQRCodeStack.Navigator mode="modal" screenOptions={{headerShown: false}}>
    <ScanQRCodeStack.Screen name="ScanQRCodeScreen" component={ScanQRCodeScreen} />
  </ScanQRCodeStack.Navigator>
);

type WalletStackParamList = {
  MainScreen: undefined;
  TransactionDetailsScreen: undefined;
};
const WalletStack = createStackNavigator<WalletStackParamList>();
const Wallet = () => (
  <WalletStack.Navigator screenOptions={{headerShown: false}}>
    <WalletStack.Screen name="MainScreen" component={MyWalletScreen} />
    <WalletStack.Screen
      name="TransactionDetailsScreen"
      component={TransactionDetailsScreen}
    />
  </WalletStack.Navigator>
);

type AddressBookStackParamList = {
  AddressBookScreen: undefined;
  AddressDetailsScreen: undefined;
  AddEditAddressScreen: undefined;
};
const AddressBookStack = createStackNavigator<AddressBookStackParamList>();
const AddressBook = () => (
  <AddressBookStack.Navigator screenOptions={{headerShown: false}}>
    <AddressBookStack.Screen
      name="AddressBookScreen"
      component={AddressBookScreen}
    />
    <AddressBookStack.Screen
      name="AddressDetailsScreen"
      component={AddressDetailsScreen}
    />
    <AddressBookStack.Screen
      name="AddEditAddressScreen"
      component={AddEditAddressScreen}
    />
  </AddressBookStack.Navigator>
);

type TabStackParamList = {
  Wallet: undefined;
  Receive: undefined;
  Send: undefined;
  AddressBook: undefined;
};
const TabStack = createBottomTabNavigator<TabStackParamList>();
const TabScreen = () => (
  <TabStack.Navigator tabBar={props => <BottomTabBar {...props} />}>
    <TabStack.Screen name="Wallet" component={Wallet} />
    <TabStack.Screen name="Receive" component={ReceiveScreen} />
    <TabStack.Screen name="Send" component={SendScreen} />
    <TabStack.Screen name="AddressBook" component={AddressBook} />
  </TabStack.Navigator>
);

type CreateWalletStackParamList = {
  WelcomeScreen: undefined;
  MnemonicViewScreen: undefined;
  MnemonicInputScreen: undefined;
  PassphraseScreen: undefined;
  MainScreen: undefined;
};
const CreateWalletStack = createStackNavigator<CreateWalletStackParamList>();
const CreateWallet = () => (
  <CreateWalletStack.Navigator screenOptions={{headerShown: false}}>
    <CreateWalletStack.Screen name="WelcomeScreen" component={WelcomeScreen} />
    <CreateWalletStack.Screen
      name="MnemonicViewScreen"
      component={MnemonicViewScreen}
    />
    <CreateWalletStack.Screen
      name="MnemonicInputScreen"
      component={MnemonicInputScreen}
    />
    <CreateWalletStack.Screen
      name="PassphraseScreen"
      component={PassphraseScreen}
    />
    <CreateWalletStack.Screen name="MainScreen" component={TabScreen} />
  </CreateWalletStack.Navigator>
);

type EnterWalletStackParamList = {
  EnterPassphraseScreen: undefined;
  MainScreen: undefined;
};
const EnterWalletStack = createStackNavigator<EnterWalletStackParamList>();
const EnterWallet = () => (
  <EnterWalletStack.Navigator screenOptions={{headerShown: false}}>
    <EnterWalletStack.Screen
      name="EnterPassphraseScreen"
      component={EnterPassphraseScreen}
    />
    <EnterWalletStack.Screen name="MainScreen" component={TabScreen} />
  </EnterWalletStack.Navigator>
);

type SplashStackParamList = {
  SplashScreen: undefined;
  CreateWallet: undefined;
  EnterWallet: undefined;
  Settings: undefined;
  ScanQRCode: undefined;
};
const SplashStack = createStackNavigator<SplashStackParamList>();
const SplashRoot = () => (
  <SplashStack.Navigator screenOptions={{headerShown: false}}>
    <SplashStack.Screen name="SplashScreen" component={SplashScreen} />
    <SplashStack.Screen name="CreateWallet" component={CreateWallet} />
    <SplashStack.Screen name="EnterWallet" component={EnterWallet} />
    <SplashStack.Screen name="Settings" component={Settings} />
    <SplashStack.Screen
      name="ScanQRCode"
      component={ScanQRCode}
      options={{
        ...(Platform.OS === 'ios'
          ? TransitionPresets.ModalTransition
          : TransitionPresets.ScaleFromCenterAndroid),
        headerShown: false,
      }}
    />
  </SplashStack.Navigator>
);

export default SplashRoot;
