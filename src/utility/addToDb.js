// get stored app IDs
export const getStoredApp = () => {
  const stored = localStorage.getItem('installed-apps');
  return stored ? JSON.parse(stored) : [];
};

// add app ID to localStorage
export const addToDb = (id) => {
  const storedApps = getStoredApp();
  const idStr = id.toString();
  if (!storedApps.includes(idStr)) {
    storedApps.push(idStr);
    localStorage.setItem('installed-apps', JSON.stringify(storedApps));
  }
};

export const removeFromDb = (id) => {
  try {
    const storedApps = getStoredApp();
    const updated = storedApps.filter(appId => appId !== id.toString());
    localStorage.setItem("installed-apps", JSON.stringify(updated));
    return updated;
  } catch (err) {
    console.error("Error removing app from localStorage:", err);
    return [];
  }};