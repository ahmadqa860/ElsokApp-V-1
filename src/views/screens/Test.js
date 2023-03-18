import React, {useState, useEffect} from 'react';
import {
  Dimensions,
  SafeAreaView,
  View,
  Text,
  Platform,
  StyleSheet,
  StatusBar,
  Alert,
  DevSettings,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useTheme} from 'react-native-paper';
import {uploadImageTest,addProduct} from '../../services/userService';
import ImagePicker, {launchImageLibrary} from 'react-native-image-picker';
import COLORS from '../../consts/colors';

const {width} = Dimensions.get('screen');
const cardWidth = width / 2 - 40;

const Test = ({navigation}) => {
  const {colors} = useTheme();

  const [data, setData] = React.useState({
    categorie_id: '2',
    product_title: 'test',
    product_description: 'test',
    device:'android',
    product_price: 0,
    imagesArray: [],
  });

  const [imagesArray, setImagesArray] = useState([]);

  const choosePhotoFromLibrary = async () => {
    const options = {
        selectionLimit: 0,
        maxWidth: 500,
        maxHeight: 300,
        quality: 0.6,
        mediaType: 'photo',
        includeBase64: false, 
    };

      const imagesResult = await launchImageLibrary(options);
      setImagesArray(imagesResult.assets);
      setData({
        ...data,
        imagesArray: imagesResult.assets,
      });
      data.imagesArray = imagesResult.assets;
      //console.log(data);
      const res = addProduct(data);
      //uploadImageTest(imagesResult.assets);
      console.log(res);
      
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <Text
        style={[
          styles.text_footer,
          {
            color: colors.text,
            marginTop: 35,
          },
        ]}>
        أدخل الصور
      </Text>

      <TouchableOpacity
        style={styles.panelButton}
        onPress={choosePhotoFromLibrary}>
        <Text style={styles.panelButtonTitle}>Choose From Library</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Test;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF6347',
  },
  card: {
    height: 80,
    width: 80,
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: 20,
    borderRadius: 15,
    elevation: 13,
    backgroundColor: COLORS.white,
  },
  imageCard: {
    height: 75,
    width: 75,
    borderRadius: 15,
    marginVertical: -20,
    shadowColor: 'red',
  },
  cardWrap: {
    flexDirection: 'row',
  },
  categoriesListContainer: {
    paddingVertical: 30,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  header: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginVertical: 7,
  },
  deleteButtonTag: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: 'red',
    alignItems: 'center',
    marginVertical: 7,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
    direction: 'rtl',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#636060',
    paddingBottom: 5,
  },
  dropdown: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: 'auto',
    marginTop: 10,
    paddingBottom: 5,
  },
  dropdownButtonText: {
    color: '#FF6347',
    borderRadius: 20,
  },
  dropdownText: {
    color: '#FF6347',
  },
  dropdownBorder: {
    borderRadius: 15,
  },
  dropdownButton: {
    backgroundColor: '#dad3be',
    width: 350,
    borderRadius: 10,
    borderColor: '#FF6347',
    borderWidth: 1,
    marginVertical: 7,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  signIn: {
    width: 400,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
