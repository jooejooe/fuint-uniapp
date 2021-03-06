import request from '@/utils/request'

// api地址
const api = {
  submit: 'settlement/submit',
  prePay: 'pay/prePay',
}

// 结算台订单提交
export const submit = (targetId, selectNum, type, remark, payAmount, usePoint, goodsId, skuId, buyNum, orderMode) => {
  return request.post(api.submit, { targetId, selectNum, type, remark, payAmount, usePoint, goodsId, skuId, buyNum, orderMode})
}

// 支付前查询
export const prePay = () => {
  return request.get(api.prePay)
}
