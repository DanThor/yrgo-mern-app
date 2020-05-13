class RequestService {
    async getRequest(endpoint) {
        try {
            const response = await fetch(endpoint, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    Accept: "application/json"
                }
            });

            return await response.json();
        } catch (error) {
            throw error;
        }
    }

    async postRequest(endpoint, opts) {
        try {
            const response = await fetch(endpoint, {
                method: "POST",
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(opts)
            });

            const data = await response.json();

            return data;
        } catch (error) {
            throw error;
        }
    }

    async deleteRequest(endpoint) {
        try {
            const response = await fetch(endpoint, {
                method: "DELETE",
                headers: {
                    "Access-Control-Allow-Origin": "*"
                }
            });

            return await response.json();
        } catch (error) {
            throw error;
        }
    }

    async putRequest(endpoint) {
        try {
            const response = await fetch(endpoint, {
                method: "PUT",
                headers: {
                    "Access-Control-Allow-Origin": "*"
                }
            });

            return await response.json();
        } catch (error) {
            throw error;
        }
    }
}

export default new RequestService();
