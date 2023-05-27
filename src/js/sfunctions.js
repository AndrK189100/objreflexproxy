export function orderByProps(obj, order) {
  const filtredKeys = Object.keys(obj).filter((prop) => !order.includes(prop));
  filtredKeys.sort((a, b) => a.localeCompare(b));
  const sortedKeys = order.concat(filtredKeys);

  return sortedKeys.map((key) => ({ key, value: obj[key] }));
}

export function getSpecialAttack({ special }) {
  return special.map((element) => ({
    id: element.id,
    name: element.name,
    icon: element.icon,
    description: 'description' in element ? element.description : 'Описание недоступно',
  }));
}
