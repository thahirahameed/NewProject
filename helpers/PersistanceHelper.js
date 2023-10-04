//singleton class
import AsyncStorage from '@react-native-async-storage/async-storage';

class PersistanceHelper {
  setValue = async (key, value) => {
    await AsyncStorage.setItem(key, value);
  };

  getValue = key => {};
}

export default new PersistanceHelper();
