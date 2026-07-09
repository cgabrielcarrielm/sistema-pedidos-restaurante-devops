import OrderCard from './OrderCard.jsx';

function OrderList({ orders }) {
  if (orders.length === 0) {
    return (
      <div className="empty-state">
        <h3>No hay pedidos registrados</h3>
        <p>Complete el formulario para crear el primer pedido del día.</p>
      </div>
    );
  }

  return (
    <div className="order-list">
      {orders.map((order) => (
        <OrderCard key={order.id} order={order} />
      ))}
    </div>
  );
}

export default OrderList;
