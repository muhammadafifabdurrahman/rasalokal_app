import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getOrders } from "../../../_services/orders";

export default function AdminOrders() {
  const [orders, setOrders] = useState([]);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const ordersData = await getOrders();
      setOrders(ordersData);
    };
    fetchData();
  }, []);

  const toggleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
      <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
          <div className="w-full md:w-1/2">
            <form className="flex items-center">
              <div className="relative w-full">
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                    focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 p-2 
                    dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                    dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                  placeholder="Search orders..."
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 
                      000-8zM2 8a6 6 0 1110.89 3.476l4.817 
                      4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 
                      6 0 012 8z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </form>
          </div>

          <Link
            to={"/admin/orders/create"}
            className="flex items-center justify-center text-white bg-indigo-700 hover:bg-indigo-800 
              focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-4 py-2 
              dark:bg-indigo-600 dark:hover:bg-indigo-700 focus:outline-none dark:focus:ring-indigo-800"
          >
            <svg className="h-3.5 w-3.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 
                110 2h-5v5a1 1 0 
                11-2 0v-5H4a1 1 0 
                110-2h5V4a1 1 0 011-1z"
              />
            </svg>
            Add Order
          </Link>
        </div>

        {/* TABLE */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th className="px-4 py-3">No Order</th>
                <th className="px-4 py-3">Customer</th>
                <th className="px-4 py-3">Tipe Order</th>
                <th className="px-4 py-3">No Meja</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Menu Items</th>
                <th className="px-4 py-3">Total</th>
                <th className="px-4 py-3">Note</th>
                <th className="px-4 py-3 text-center">Action</th>
              </tr>
            </thead>

            <tbody>
              {orders.length > 0 ? (
                orders.map((order) => (
                  <tr key={order.id} className="border-b dark:border-gray-700">
                    <td className="px-4 py-3">{order.order_number}</td>
                    <td className="px-4 py-3">{order.customer_name}</td>
                    <td className="px-4 py-3">{order.order_type}</td>
                    <td className="px-4 py-3">{order.table_number || "-"}</td>

                    <td className="px-4 py-3">
                      <span className={`px-2 py-1 rounded text-white ${order.status === "completed" ? "bg-green-600" : order.status === "pending" ? "bg-yellow-500" : "bg-red-600"}`}>{order.status}</span>
                    </td>

                    {/* ITEMS */}
                    <td className="px-4 py-3">
                      {order.order_items?.length > 0 ? (
                        <ul className="list-disc ml-4">
                          {order.order_items.map((item) => (
                            <li key={item.id}>
                              {item.menu.name} x {item.quantity} <span className="text-xs">(Rp{item.subtotal})</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <span className="italic text-gray-400">No items</span>
                      )}
                    </td>

                    <td className="px-4 py-3">Rp. {order.total_amount}</td>
                    <td className="px-4 py-3">{order.note || "-"}</td>

                    {/* ACTION */}
                    <td className="px-4 py-3 relative text-center">
                      <button onClick={() => toggleDropdown(order.id)} className="p-2">
                        ⋮
                      </button>

                      {openDropdown === order.id && (
                        <div className="absolute right-0 mt-2 w-44 bg-white rounded shadow dark:bg-gray-700 z-10">
                          <ul className="py-1 text-sm">
                            <li>
                              <Link to={`/admin/orders/${order.id}`} className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600">
                                Detail
                              </Link>
                            </li>
                            <li>
                              <Link to={`/admin/orders/edit/${order.id}`} className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600">
                                Edit
                              </Link>
                            </li>
                          </ul>
                          <button className="block w-full text-left py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 text-red-400">Delete</button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="10" className="text-center p-4 text-gray-500 italic">
                    No orders found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* 🔥 PAGINATION — COPY PERSIS DARI PAYMENT */}
        <nav className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4" aria-label="Table navigation">
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
            Showing
            <span className="font-semibold text-gray-900 dark:text-white"> 1-10 </span>
            of
            <span className="font-semibold text-gray-900 dark:text-white"> 1000 </span>
          </span>

          <ul className="inline-flex items-stretch -space-x-px">
            <li>
              <a
                href="#"
                className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white 
                rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 
                dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span className="sr-only">Previous</span>
                <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 
                    10l3.293 3.293a1 1 0 
                    01-1.414 1.414l-4-4a1 1 0 
                    010-1.414l4-4a1 1 0 
                    011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white 
                  border border-gray-300 hover:bg-gray-100 hover:text-gray-700 
                  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 
                  dark:hover:bg-gray-700 dark:hover:text-white"
              >
                1
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white 
                  border border-gray-300 hover:bg-gray-100 hover:text-gray-700 
                  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 
                  dark:hover:bg-gray-700 dark:hover:text-white"
              >
                2
              </a>
            </li>

            <li>
              <a
                href="#"
                aria-current="page"
                className="flex items-center justify-center text-sm z-10 py-2 px-3 leading-tight text-indigo-600 
                  bg-indigo-50 border border-indigo-300 hover:bg-indigo-100 hover:text-indigo-700 
                  dark:border-gray-700 dark:bg-gray-700 dark:text-white"
              >
                3
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border 
                  border-gray-300 hover:bg-gray-100 hover:text-gray-700 
                  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 
                  dark:hover:bg-gray-700 dark:hover:text-white"
              >
                ...
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white 
                  border border-gray-300 hover:bg-gray-100 hover:text-gray-700 
                  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 
                  dark:hover:bg-gray-700 dark:hover:text-white"
              >
                100
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white 
                  rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 
                  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 
                  dark:hover:text-white"
              >
                <span className="sr-only">Next</span>
                <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 
                    10 7.293 6.707a1 1 0 
                    011.414-1.414l4 4a1 1 0 
                    010 1.414l-4 4a1 1 0 
                    01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}
