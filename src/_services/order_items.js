import { API } from "../_api/index"

export const getOrdersItems = async () => {
      const {data} = await API.get("/order_items");
      return data.data
}

export const createOrdersItems = async (data) => {
      try {
            const response = await API.post("/orders", data)
            return response.data
      } catch (error){
            console.log(error);
            throw error
      }
}

export const showOrdersItems = async (id) => {
      try {
            const { data } = await API.get(`/orders/${id}`)
            return data.data
      } catch (error) {
            console.log(error)
            throw error
      }
}

export const updateOrdersItems = async (id, data) => {
      try {
            const response = await API.put(`/orders/${id}?_method=PUT`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    return response.data
      } catch (error){
            console.log(error)
            throw error
      }
}     

export const deleteOrdersItems = async (id) => {
      try {
            await API.delete(`/orders/${id}`)
      } catch(error){
            console.log(error)
            throw error
      }
}