import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { trackOrderById } from '../../services/orderService';
import NotFound from '../../components/NotFound/NotFound';
import classes from './orderTrackPage.module.css';
import DateTime from '../../components/DateTime/DateTime';
import OrderItemsList from '../../components/OrderItemsList/OrderItemsList';
import Title from '../../components/Title/Title';
import Map from '../../components/Map/Map';

export default function OrderTrackPage() {
  const { orderId } = useParams();
  const [order, setOrder] = useState();

  useEffect(() => {
    orderId &&
      trackOrderById(orderId).then(order => {
        setOrder(order);
      });
  }, []);

  if (!orderId)
    return <NotFound message="Order Not Found" linkText="Go To Home Page" />;

  return (
    order && (
      <div className={classes.container}>
        <div className={classes.content}>
          <h1>Đơn hàng #{order.id}</h1>
          <div className={classes.header}>
            <div>
              <strong>Thời gian đặt hàng</strong>
              <DateTime date={order.createdAt} />
            </div>
            <div>
              <strong>Khách hàng</strong>
              {order.name}
            </div>
            <div>
              <strong>Địa chỉ</strong>
              {order.address}
            </div>
            <div>
              <strong>Trạng thái</strong>
              {order.status}
            </div>
            {order.paymentId && (
              <div>
                <strong>Mã thanh toán</strong>
                {order.paymentId}
              </div>
            )}
          </div>

          <OrderItemsList order={order} />
        </div>

        {/* <div>
          <Title title="Your Location" fontSize="1.6rem" />
          <Map location={order.addressLatLng} readonly={true} />
        </div> */}

        {order.status === 'Chưa thanh toán' && (
          <div className={classes.payment}>
            <Link to="/payment">Thanh toán</Link>
          </div>
        )}
      </div>
    )
  );
}
