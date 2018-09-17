var recipes = { key: "value" };

function updateObjectWithKeyAndValue(object, key, value)
{
  Object.assign ({ prop: '1' }, { prop2: '2' })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value)
{
  recipes[key] = value;
  return recipes;
}