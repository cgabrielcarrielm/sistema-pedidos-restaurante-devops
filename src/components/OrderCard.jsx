import { formatCurrency, formatDate } from '../utils/orderUtils.js';

function OrderCard({ order }) {
  return (
    <article className="order-card">
      <div className="order-card-header">
        <div>
          <h3>{order.code}</h3>
          <p>{order.customerName}</p>
        </div>
        <span className="status-badge status-pending">{order.status}</span>
      </div>

      <dl className="order-meta">
        <div>
          <dt>Mesa</dt>
          <dd>{order.tableNumber || 'Sin asignar'}</dd>
        </div>
        <div>
          <dt>Fecha</dt>
          <dd>{formatDate(order.createdAt)}</dd>
        </div>
      </dl>

      <ul className="order-items">
        {order.items.map((item) => (
          <li key={item.id}>
            <span>
              {item.quantity} x {item.name}
            </span>
            <strong>{formatCurrency(item.price * item.quantity)}</strong>
          </li>
        ))}
      </ul>

      <div className="order-total">
        <span>Total</span>
        <strong>{formatCurrency(order.total)}</strong>
      </div>
    </article>
  );
}

export default OrderCard;
