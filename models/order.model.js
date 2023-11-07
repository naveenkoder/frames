import mongoose from 'mongoose';
import { stringType, booleanType, orderStatusType, cartType, numberType, joinSchema, dateType,addressType } from './common/commonTypes.js';
const OrderSchema = mongoose.model('orders', new mongoose.Schema({
    orderId: stringType,
    receiptId: stringType,
    shiprocket: {
        orderId: stringType,
        shipmentId: stringType,
        awbCode: stringType
    },
    coupon  : joinSchema('offers'),
    user: joinSchema('users'),
    cart: cartType,
    promo: joinSchema('promos'),
    paymentType : stringType, 
    payment: booleanType,
    totalPrice: numberType,
    data: stringType,
    address  : addressType,
    status: orderStatusType,
    complete : booleanType,
    isDeleted: dateType
}, { timestamps: true }))

export { OrderSchema };
