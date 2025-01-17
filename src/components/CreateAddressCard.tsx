import React from 'react';
import {Text, Divider} from 'react-native-elements';
import {View, StyleSheet, Image, TextInput} from 'react-native';
import {FiroPrimaryGreenButton} from './Button';
import localization from '../localization';

export const CreateAddressCard = () => {
  const onAddressSaveClick = () => {};
  return (
    <View style={styles.card}>
      <Text style={styles.currentAddressLabel}>
        {localization.create_address_card.current_address}
      </Text>
      <View style={styles.currentAddress}>
        <Text style={styles.address}>a7awi8VeyAJs...CbdqRs234sDFSAz2Kg</Text>
        <Image style={styles.icon} source={require('../img/ic_refresh.png')} />
      </View>
      <TextInput
        style={styles.addressName}
        placeholder={localization.create_address_card.address_name}
      />
      <Divider style={styles.divider} />
      <FiroPrimaryGreenButton
        text={localization.create_address_card.save_address}
        onClick={onAddressSaveClick}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 15,
    paddingTop: 20,
    paddingHorizontal: 15,
    paddingBottom: 12,
    elevation: 2,
  },
  currentAddressLabel: {
    fontFamily: 'Rubik-Regular',
    fontWeight: '400',
    fontSize: 12,
    color: 'rgba(15, 14, 14, 0.5)',
    marginBottom: 5,
  },
  currentAddress: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  address: {
    fontFamily: 'Rubik-Medium',
    fontWeight: '500',
    fontSize: 12,
    color: '#3C3939',
  },
  icon: {
    width: 24,
    height: 24,
  },
  addressName: {
    height: 36,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    textAlignVertical: 'top',
    fontFamily: 'Rubik-Medium',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 14,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 24,
  },
  divider: {
    marginTop: 12,
    marginBottom: 12,
  },
});
