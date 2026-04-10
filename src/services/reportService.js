import axios from 'axios'

const API_URL = 'https://my-json-server.typicode.com/maitetijger-dev/realestatecare'

export default {
  getCompletedReports() {
    return axios.get(`${API_URL}/completedReports`).then(r => r.data)
  },

  getAssignedReports() {
    return axios.get(`${API_URL}/assignedReports`).then(r => r.data)
  },

  getKnowledgeBase() {
    return axios.get(`${API_URL}/knowledgeBase`).then(r => r.data)
  }
}
