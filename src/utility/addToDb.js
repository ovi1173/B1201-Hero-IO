const getStoredApps = () => {
  const stored = localStorage.getItem("installedApps");
  return stored ? JSON.parse(stored) : [];
};

const addToDb = (id) => {
  const storedApps = getStoredApps();
  if (!storedApps.includes(id)) {
    storedApps.push(id);
    localStorage.setItem("installedApps", JSON.stringify(storedApps));
  }
};

const removeFromDb = (id) => {
  const storedApps = getStoredApps().filter(appId => appId !== id);
  localStorage.setItem("installedApps", JSON.stringify(storedApps));
};

export { addToDb, removeFromDb, getStoredApps };
