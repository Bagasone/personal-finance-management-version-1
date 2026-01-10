const getEntityNameFromRoute = (path) => {
  const entityName = path.slice(1);
  return entityName ? entityName : null;
};

export { getEntityNameFromRoute };
