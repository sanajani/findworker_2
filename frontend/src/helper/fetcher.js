import api from "@/utils/api"

export const fetcher = (url) => api.get(url).then(response => response.data)
