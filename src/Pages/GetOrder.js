import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
// import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { Skeleton } from "antd";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import OrderDetailModal from "./OrderDetailModal";

const GetOrder = () => {
  const { userToken } = useContext(AuthContext);
  const [order, setOrder] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModal , setIsModal] = useState(false);

  const getOrder = async () => {
    setLoading(true);
    try {
      let response = await fetch(`http://localhost:3000/api/getorder`, {
        method: "GET",
        headers: {
          authToken: userToken,
        },
      });
      let res = await response.json();
      if (res.success) {
        setOrder(res.orders);
        setLoading(false);
      } else {
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  useEffect(() => {
    getOrder();
  }, []);

  const updateOrder = async (orderNo, foodNo, resturantAuth, status) => {
    try {
      const response = await fetch(`http://localhost:3000/api/updateorder`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          authToken: userToken,
        },
        body: JSON.stringify({
          orderNo,
          foodNo,
          resturantAuth,
          status,
        }),
      });
      let res = await response.json();
      if (res.success) {
        toast.success(res.message)
        setOrder(prevOrder => prevOrder.filter(x => x.orderNo !== orderNo));
        // setOrder((prevOrders) => {
        //   const filteredOrders = prevOrders.filter((item) => {
        //     if (item.orderNo === orderNo) {
        //       const filteredOrderDetails = item.orderDetails.filter(
        //         (detail) => detail.foodNo !== foodNo
        //       );
        //       return filteredOrderDetails.length > 0
        //         ? { ...item, orderDetails: filteredOrderDetails }
        //         : null;
        //     }
        //     return item;
        //   });
        //   return filteredOrders.filter(Boolean); // Remove null values
        // });
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  return (
    <div className="container h-auto max-w-[100%] overflow-x-scroll custom-scrollbar">
      <h2 className="text-4xl mt-2 mb-4">Get Order</h2>
      <hr className="mb-6"></hr>
      <table className="w-full border-collapse border">
        <thead>
          <tr className="bg-[#FEC013]">
            <th className="p-2 border">Order No</th>
            <th className="p-2 border">Customer Name</th>
            <th className="p-2 border">Total Ammount</th>
            <th className="p-2 border">Total Qunatity</th>
            <th className="p-2 border">Status</th>
            <th className="p-2 border">See Details</th>
          </tr>
        </thead>

        {/* // this is update code of there is any error occur then you can match code with your github account */}
        {loading ? (
          <tr>
            <td className="text-center text-lg py-20" colSpan="5">
              <Skeleton paragraph={{ rows: 8 }} />
            </td>
          </tr>
        ) : order.length === 0 ? (
          <tr>
            <td colSpan={5}>
            <span  className="m-auto">
            <MdOutlineAddShoppingCart className="m-auto mt-16" size={48} />
            <h1 className="mt-2 text-lg text-center">
              There is no food added in restauarnt
            </h1>
          </span>
            </td>
          </tr>
         
        ) : (
          order.map((item, index) => (
            <React.Fragment key={index}>
              <tr>
                <td rowSpan={2} className="p-1 border">
                  {item.orderNo}
                </td>
                <td rowSpan={2} className="p-1 border">
                  {item.userName}
                </td>
                <td rowSpan={2} className="p-1 border">
                  {item.totalAmount}
                </td>
                <td rowSpan={2} className="p-1 border">
                  {item.totalQty}
                </td>
                <td rowSpan={2} className="p-1 border">
                  {item.orderDetails[0].status}
                </td>
                <td rowSpan={2} className="p-1 border">
                  <button onClick={()=>setIsModal(!isModal)} className="bg-[#FEC013] px-3 py-2 rounded-sm my-3">View Details</button>
                </td>
              </tr>
            </React.Fragment>
          ))
        )}
      </table>
      {isModal && (<OrderDetailModal setIsModal={setIsModal} setOrder={setOrder} order={order}/>)}
    </div>
  );
};

export default GetOrder;
