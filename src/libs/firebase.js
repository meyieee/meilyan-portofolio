import { getDatabase, ref, get, set, update, remove } from 'firebase/database';
import { app } from '../config/firebase';

// Initialize Realtime Database
const db = getDatabase(app);

// Get data from a specific path
export const getData = async (path) => {
  try {
    const reference = ref(db, path);
    const snapshot = await get(reference);
    if (snapshot.exists()) {
      return snapshot.val();
    }
    return null;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

// Set data at a specific path
export const setData = async (path, data) => {
  try {
    const reference = ref(db, path);
    await set(reference, data);
    return true;
  } catch (error) {
    console.error('Error setting data:', error);
    throw error;
  }
};

// Update data at a specific path
export const updateData = async (path, updates) => {
  try {
    const reference = ref(db, path);
    await update(reference, updates);
    return true;
  } catch (error) {
    console.error('Error updating data:', error);
    throw error;
  }
};

// Delete data at a specific path
export const deleteData = async (path) => {
  try {
    const reference = ref(db, path);
    await remove(reference);
    return true;
  } catch (error) {
    console.error('Error deleting data:', error);
    throw error;
  }
};
