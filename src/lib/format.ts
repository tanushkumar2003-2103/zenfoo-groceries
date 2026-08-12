export const formatINR = (value: number) =>
  `₹${value.toLocaleString("en-IN", { maximumFractionDigits: 0 })}`;

export const DELIVERY_THRESHOLD = 199;
export const HANDLING_FEE = 5;
export const DELIVERY_FEE = 25;
