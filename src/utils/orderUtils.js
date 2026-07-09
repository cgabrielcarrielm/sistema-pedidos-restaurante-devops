export const ORDER_STATUS = {
  pending: 'Pendiente',
};

export function calculateOrderTotal(items) {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
}

export function validateOrder(orderData) {
  if (!orderData.customerName.trim()) {
    return {
      isValid: false,
      message: 'Ingrese el nombre del cliente.',
    };
  }

  if (orderData.items.length === 0) {
    return {
      isValid: false,
      message: 'Seleccione al menos un producto del menú.',
    };
  }

  return {
    isValid: true,
    message: '',
  };
}

export function createOrder(orderData, code) {
  return {
    id: crypto.randomUUID(),
    code,
    customerName: orderData.customerName.trim(),
    tableNumber: orderData.tableNumber.trim(),
    items: orderData.items,
    total: orderData.total,
    status: ORDER_STATUS.pending,
    createdAt: new Date().toISOString(),
  };
}

export function generateOrderCode(orders) {
  const nextNumber = orders.length + 1;
  return `PED-${String(nextNumber).padStart(3, '0')}`;
}

export function formatCurrency(value) {
  return new Intl.NumberFormat('es-EC', {
    style: 'currency',
    currency: 'USD',
  }).format(value);
}

export function formatDate(dateValue) {
  return new Intl.DateTimeFormat('es-EC', {
    dateStyle: 'short',
    timeStyle: 'short',
  }).format(new Date(dateValue));
}
