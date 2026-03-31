import API from "./api";

export const createAccount = (account) => {
  return API.post("/accounts", account);
};

export const deposit = (id, amount) => {
  return API.put(`/accounts/${id}/deposit?amount=${amount}`);
};

export const withdraw = (id, amount) => {
  return API.put(`/accounts/${id}/withdraw?amount=${amount}`);
};

export const transfer = (fromId, toId, amount) => {
  return API.put(
    `/accounts/transfer?fromId=${fromId}&toId=${toId}&amount=${amount}`
  );
};