import http from './baseUrl';
class TaskDataService {
    getAll() {
        return http.get(`/data`);
    }

    get(id) {
        return http.get(`/data/${id}`);
    }

    create(data) {
        return http.post(`/data`, data);
    }

    update(id, data) {
        return http.put(`/data/${id}`, data);
      }
      delete(id) {
        return http.delete(`/data/${id}`);
      }
}

export default new TaskDataService();