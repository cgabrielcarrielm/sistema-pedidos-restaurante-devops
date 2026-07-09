const STORAGE_KEY = 'restaurant-orders';

export function getOrders() {
  const storedOrders = localStorage.getItem(STORAGE_KEY);

  if (!storedOrders) {
    return [];
  }

  try {
    return JSON.parse(storedOrders);
  } catch {
    return [];
  }
}

export function saveOrders(orders) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(orders));
}
