import axios from "axios";

const API_SERVER = 'https://64e2a6cfab003735881914ce.mockapi.io/';

export default class PostService {
   static async getTeam() {
      const response = await axios.get(`${API_SERVER}mockDataTeam`);
      return response.data
   }
   static async getContacts() {
      return  await axios.get(`${API_SERVER}mockDataContacts`);
   }
   static async getInvoices() {
      return await axios.get(`${API_SERVER}mockDataInvoices`);
   }
   static async getBar() {
      return await axios.get(`${API_SERVER}mockBarData`);

   }
   static async getPie() {
      return await axios.get(`${API_SERVER}mockPieData`);

   }
   static async getLine() {
      return await axios.get(`${API_SERVER}mockLineData`);
   }
   static async getGeo() {
      return await axios.get(`${API_SERVER}mockGeographyData`);
   }
}