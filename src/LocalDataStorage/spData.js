import AsyncStorage from '@react-native-async-storage/async-storage';


class spData {
  static instance = null;

  static getInstance() {
    if (!spData.instance) {
      spData.instance = new spData();
    }
    return spData.instance;
  }

  async setValue(key, value) {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error saving data:', error);
    }
  }

  async getValue(key) {
    try {
      const value = await AsyncStorage.getItem(key);
      return value !== null ? JSON.parse(value) : null;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  }
}

export default spData;