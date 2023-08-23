import axios from "axios";

const API_SERVER = 'https://64e2a6cfab003735881914ce.mockapi.io/';

export default class PostService {
   static async getTeam() {
      const response = await axios.get(`${API_SERVER}mockDataTeam`);
      return response.data
   }
   static async getContacts() {
      const response = await axios.get(`${API_SERVER}mockDataContacts`);
      return response
   }
   static async getInvoices() {
      const response = await axios.get(`${API_SERVER}mockDataInvoices`);
      return response
   }
   static async getBar() {
      const response = await axios.get(`${API_SERVER}mockBarData`);
      return response
   }
   static async getPie() {
      const response = await axios.get(`${API_SERVER}mockPieData`);
      return response
   }
   static async getLine() {
      const response = await axios.get(`${API_SERVER}mockLineData`);
      return response
   }
}