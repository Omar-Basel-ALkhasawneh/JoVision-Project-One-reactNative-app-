import AsyncStorage from '@react-native-async-storage/async-storage';

export const useAsyncStorage = () => {
    const saveData = async (key, value) => {
        try {
            await AsyncStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error('Failed to save data', error);
        }
    };

    const loadData = async (key) => {
        try {
            const jsonData = await AsyncStorage.getItem(key);
            return jsonData !== null ? JSON.parse(jsonData) : null;
        } catch (error) {
            console.error('Failed to load data', error);
        }
    };

    return { saveData, loadData };
};
