import api from "./api";
const FINANCIAL_API_URL = import.meta.env.VITE_FINANCIAL_API_URL;

// Get all financial records
const getAllFinancialRecords = async () => {
  return await api.get(`${FINANCIAL_API_URL}`);
};

// Get all financial records by userId
const getAllFinancialRecordsByUserId = async (userId) => {
  return await api.get(`${FINANCIAL_API_URL}/user/${userId}`);
};

// Get a financial record by id
const getFinancialRecordById = async (id) => {
  return await api.get(`${FINANCIAL_API_URL}/${id}`);
};

// Create a new record
const createFinancialRecord = async (record) => {
  return await api.post(`${FINANCIAL_API_URL}`, record);
};

// Update a record
const updateFinancialRecord = async (id, record) => {
  return await api.put(`${FINANCIAL_API_URL}/${id}`, record);
};

// Delete a record
const deleteFinancialRecord = async (id) => {
  return await api.delete(`${FINANCIAL_API_URL}/${id}`);
};

const FinancialService = {
  getAllFinancialRecords,
  getAllFinancialRecordsByUserId,
  getFinancialRecordById,
  createFinancialRecord,
  updateFinancialRecord,
  deleteFinancialRecord,
};

export default FinancialService;
