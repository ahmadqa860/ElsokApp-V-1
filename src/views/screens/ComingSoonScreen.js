import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import COLORS from '../../consts/colors';


const ComingSoonScreen = ({navigation}) => {
  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor="#FF6347" barStyle="light-content" />
      <ScrollView showsVerticalScrollIndicator={false} style={{marginBottom:1,top:-60}}>
        <View style={style.header}>
          <Image source={require('../../assets/bg-img/aboutPageHeader.png')} />
        </View>
        <View style={style.header}>
          <Text style={style.headerText}>قريبا ستتاح هذه الخدمة!</Text>
        </View>
        <View>
          <Text style={style.pText}>
            نعمل باستمرار على تطوير خدماتنا لكم.
            مع تحياتنا فريق السوق.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 9,
  },
  header: {
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText:{
    color: '#FF6347',
    fontSize: 26,
    fontWeight: 'bold',
  },
  pText:{
    fontSize: 18,
    lineHeight: 28,
  },
  shareIcon: {
    height: 50,
    width: 50,
    borderRadius: 10,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  details: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 60,
    marginTop: 40,
    backgroundColor: COLORS.primary,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    direction: 'rtl',
  },
  iconContainer: {
    backgroundColor: COLORS.white,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  backIcon: {
    backgroundColor: COLORS.white,
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  detailsText: {
    marginTop: 5,
    paddingBottom: 70,
    lineHeight: 22,
    fontSize: 16,
    color: COLORS.white,
    direction: 'rtl',
  },
  Text: {
    direction: 'rtl',
  },
  View: {
    direction: 'rtl',
  },
  ViewContentText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 3,
  },
  contentText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
  },
  pagingText: {color: '#888', margin: 2, fontSize: 65},
  pagingActiveText: {color: '#FFF', margin: 2, fontSize: 65},
});

export default ComingSoonScreen;
