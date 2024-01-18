import {View, FlatList, Text} from 'react-native';
import React, {useState} from 'react';
import ButtonComp from '../components/ButtonComp';
import { moderateScale } from 'react-native-size-matters';

const Home = () => {
  const [calculate, setCalculate] = useState('');

  const button = [
    '7',
    '8',
    '9',
    '/',
    '4',
    '5',
    '6',
    '*',
    '1',
    '2',
    '3',
    '-',
    'C',
    '0',
    '=',
    '+',
  ];

  const calculateFun = item => {
    if (item === 'C') {
      setCalculate('');
    } else if (item === '=') {
      try {
        setCalculate(eval(calculate));
      } catch (error) {
        setCalculate('galat hai bsdk');
      }
    } else {
      setCalculate(prev => prev + item);
    }
  };

  const renderItem = ({item}) => (
    <ButtonComp text={item} onpress={() => calculateFun(item)} />
  );

  return (
    <View style={{flex: 1, justifyContent: 'space-between', gap: 45}}>
      {/*Screen section*/}
      <View
        style={{
          padding: moderateScale(30),
          backgroundColor: '#2c3e50',
          borderBottomStartRadius: moderateScale(30),
          borderBottomEndRadius: moderateScale(30),
          borderTopEndRadius: moderateScale(30),
          borderTopStartRadius: moderateScale(30),
          marginTop: moderateScale(10),
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          flex: 1,
        }}>
        <Text style={{fontSize:moderateScale(80), color: 'white', fontWeight: '500'}}>
          {calculate || 0}
        </Text>
      </View>

      {/*Button section*/}
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <FlatList
          data={button}
          renderItem={renderItem}
          //keyExtractor={(item,index)=>index.toString()}
          numColumns={4}
          columnWrapperStyle={{gap: 22}}
          contentContainerStyle={{gap: 22, paddingBottom: 30}}
        />
      </View>
    </View>
  );
};

export default Home;
