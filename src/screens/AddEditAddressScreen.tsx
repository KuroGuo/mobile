import React, {FC, useState} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {FiroToolbar} from '../components/Toolbar';
import {CurrentFiroTheme} from '../Themes';
import {AddressBookItem} from '../data/AddressBookItem';
import {Confirmation} from '../components/Confirmation';
import * as NavigationService from '../NavigationService';
import {AppStorage} from '../app-storage';
import localization from '../localization';

const appStorage = new AppStorage();

const {colors} = CurrentFiroTheme;

type AddressBookStackRouteProps = {
  Address: {item: AddressBookItem};
};

type AddEditAddressProps = {
  route: RouteProp<AddressBookStackRouteProps, 'Address'>;
};

const AddEditAddress: FC<AddEditAddressProps> = props => {
  let {item} = props.route.params;
  const hasInputAddress = item !== undefined;

  const [address, setAddress] = useState(hasInputAddress ? item.address : '');
  const [name, setName] = useState(hasInputAddress ? item.name : '');

  const onDiscard = () => {
    NavigationService.back();
  };
  const onConfirm = () => {
    if (hasInputAddress) {
      item.address = address;
      item.name = name;
      appStorage.updateAddressBookItem(item);
    } else {
      appStorage.addNewAddressBookItem(new AddressBookItem(name, address));
    }
    NavigationService.back();
  };

  return (
    <View>
      <View style={styles.root}>
        <FiroToolbar
          title={
            hasInputAddress
              ? localization.add_edit_address_screen.edit_address
              : localization.add_edit_address_screen.add_new_address
          }
        />
        <View style={[styles.card]}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder={localization.send_address.address}
              value={address}
              onChangeText={txt => setAddress(txt)}
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              NavigationService.navigate('ScanQRCode', {
                screen: 'ScanQRCodeScreen' as any,
                params: {
                  onBarScanned: (info: {data: string}) => {
                    if (info.data) {
                      setAddress(info.data);
                    }
                  },
                },
              });
            }}>
            <Image style={styles.icon} source={require('../img/ic_scan.png')} />
          </TouchableOpacity>
        </View>
        <TextInput
          style={styles.label}
          value={name}
          placeholder={localization.add_edit_address_screen.name}
          onChangeText={txt => setName(txt)}
        />
      </View>

      <Confirmation
        style={styles.confirmation}
        confirmButtonText={localization.add_edit_address_screen.save}
        onDiscardAction={onDiscard}
        onConfirmAction={onConfirm}
      />
    </View>
  );
};

export default AddEditAddress;

const styles = StyleSheet.create({
  root: {
    height: '100%',
    display: 'flex',
    padding: 30,
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 25,
    elevation: 2,
    width: '100%',
  },
  inputContainer: {
    flexGrow: 1,
    width: 0,
  },
  input: {
    marginLeft: 20,
    fontFamily: 'Rubik-Medium',
    fontWeight: '500',
    fontSize: 14,
    color: 'rgba(15, 14, 14, 0.5)',
  },
  divider: {
    width: 30,
    marginHorizontal: -15,
    transform: [{rotate: '90deg'}],
  },
  icon: {
    marginHorizontal: 10,
    width: 24,
    height: 24,
  },
  label: {
    backgroundColor: colors.cardBackground,
    paddingHorizontal: 20,
    marginTop: 25,
    fontFamily: 'Rubik-Regular',
    fontSize: 14,
    borderRadius: 25,
    elevation: 2,
    width: '100%',
  },
  confirmation: {
    marginTop: 'auto',
    elevation: 16,
    backgroundColor: '#fff',
    padding: 20,
  },
});
