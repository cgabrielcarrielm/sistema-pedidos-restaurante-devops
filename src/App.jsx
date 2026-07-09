import { useEffect, useMemo, useState } from 'react';
import Header from './components/Header.jsx';
import OrderForm from './components/OrderForm.jsx';
import OrderList from './components/OrderList.jsx';
import { getOrders, saveOrders } from './utils/storage.js';
import { createOrder, generateOrderCode } from './utils/orderUtils.js';

function App() {
  const [orders, setOrders] = useState(() => getOrders());

  useEffect(() => {
    saveOrders(orders);
  }, [orders]);

  const nextOrderCode = useMemo(() => generateOrderCode(orders), [orders]);

  function handleCreateOrder(orderData) {
    const newOrder = createOrder(orderData, nextOrderCode);
    setOrders((currentOrders) => [newOrder, ...currentOrders]);
  }

  return (
    <>
      <Header />
      <main className="app-shell">
        <section className="panel order-panel" aria-labelledby="order-form-title">
          <div className="section-heading">
            <p className="section-label">Registro</p>
            <h2 id="order-form-title">Nuevo pedido</h2>
          </div>
          <OrderForm nextOrderCode={nextOrderCode} onCreateOrder={handleCreateOrder} />
        </section>

        <section className="panel list-panel" aria-labelledby="order-list-title">
          <div className="section-heading list-heading">
            <div>
              <p className="section-label">Pedidos</p>
              <h2 id="order-list-title">Pedidos registrados</h2>
            </div>
            <span className="counter">{orders.length} pedidos</span>
          </div>
          <OrderList orders={orders} />
        </section>
      </main>
    </>
  );
}

export default App;
