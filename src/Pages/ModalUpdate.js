import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const ModalUpdate = ({ setModalOpen }) => {
  const initialValues = {
    foodTitle: "",
    foodDescription: "",
    foodQuantity: "",
    foodPrice: "",
    foodOffer: "",
  };

  const validationSchema = Yup.object({
    foodTitle: Yup.string().required("Required"),
    foodDescription: Yup.string().required("Required"),
    foodQuantity: Yup.string().required("Required"),
    foodPrice: Yup.string().required("Required"),
    foodOffer: Yup.string().required("Required"),
  });

  const onSubmit = (values, { resetForm }) => {
    // Handle your form submission here
    // You can access form values using the 'values' parameter
    console.log("Form submitted:", values);

    // Reset the form after submission
    resetForm();

    // Close the modal
    setModalOpen(false);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
        <div className="relative w-2/3 mx-auto max-w-full h-[70%]">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none ">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold font-sans text-black">
                Update your food
              </h3>
              <button
                className="p-1 ml-auto  border-0 text-[#FEC013]  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setModalOpen(false)}
              >
                <span className=" text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                  x
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto h-96 overflow-y-auto custom-scrollbar">
              <form onSubmit={formik.handleSubmit}>
                <div className="flex flex-col">
                  <label
                    htmlFor="foodTitle"
                    className="leading-7 text-base my-2 text-slate-900"
                  >
                    Food Title
                  </label>
                  <input
                    type="text"
                    id="foodTitle"
                    name="foodTitle"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.foodTitle}
                    className="w-full bg-white rounded border border-[#FEC013] focus:ring-2 focus:ring-[#FEC013] focus:yellow-red-300 text-base outline-none text-slate-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  {formik.touched.foodTitle && formik.errors.foodTitle ? (
                    <div className="text-red-500 text-xs">
                      {formik.errors.foodTitle}
                    </div>
                  ) : null}

                  {/* Repeat the above block for other form fields */}
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="foodTitle"
                    className="leading-7 text-base my-2 text-slate-900"
                  >
                    Food Description
                  </label>
                  <input
                    type="text"
                    id="foodDescription"
                    name="foodDescription"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.foodDescription}
                    className="w-full bg-white rounded border border-[#FEC013] focus:ring-2 focus:ring-[#FEC013] focus:yellow-red-300 text-base outline-none text-slate-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  {formik.touched.foodDescription && formik.errors.foodDescription ? (
                    <div className="text-red-500 text-xs">
                      {formik.errors.foodDescription}
                    </div>
                  ) : null}

                  {/* Repeat the above block for other form fields */}
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="foodTitle"
                    className="leading-7 text-base my-2 text-slate-900"
                  >
                    Food Quantity
                  </label>
                  <input
                    type="text"
                    id="foodQuantity"
                    name="foodQuantity"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.foodQuantity}
                    className="w-full bg-white rounded border border-[#FEC013] focus:ring-2 focus:ring-[#FEC013] focus:yellow-red-300 text-base outline-none text-slate-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  {formik.touched.foodQuantity && formik.errors.foodQuantity ? (
                    <div className="text-red-500 text-xs">
                      {formik.errors.foodQuantity}
                    </div>
                  ) : null}

                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="foodTitle"
                    className="leading-7 text-base my-2 text-slate-900"
                  >
                    Food Price
                  </label>
                  <input
                    type="number"
                    id="foodPrice"
                    name="foodPrice"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.foodPrice}
                    className="w-full bg-white rounded border border-[#FEC013] focus:ring-2 focus:ring-[#FEC013] focus:yellow-red-300 text-base outline-none text-slate-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  {formik.touched.foodPrice && formik.errors.foodPrice ? (
                    <div className="text-red-500 text-xs">
                      {formik.errors.foodPrice}
                    </div>
                  ) : null}

                  {/* Repeat the above block for other form fields */}
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="foodTitle"
                    className="leading-7 text-base my-2 text-slate-900"
                  >
                    Food Offer
                  </label>
                  <input
                    type="text"
                    id="foodOffer"
                    name="foodOffer"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.foodOffer}
                    className="w-full bg-white rounded border border-[#FEC013] focus:ring-2 focus:ring-[#FEC013] focus:yellow-red-300 text-base outline-none text-slate-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  {formik.touched.foodOffer && formik.errors.foodOffer ? (
                    <div className="text-red-500 text-xs">
                      {formik.errors.foodOffer}
                    </div>
                  ) : null}
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="foodTitle"
                    className="leading-7 text-base my-2 text-slate-900"
                  >
                    Food Image
                  </label>
                  <input
                    type="file"
                    id="image"
                    name="image"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.image}
                    className="w-full bg-white rounded border border-[#FEC013] focus:ring-2 focus:ring-[#FEC013] focus:yellow-red-300 text-base outline-none text-slate-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  {formik.touched.image && formik.errors.image ? (
                    <div className="text-red-500 text-xs">
                      {formik.errors.image}
                    </div>
                  ) : null}
                </div>
                {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b ">
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="text-black background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              >
                Close
              </button>
              <button
                type="submit"
                className="bg-[#FEC013] text-black active:bg-yellow-500 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none hover:bg-yellow-400 focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              >
                Update
              </button>
            </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default ModalUpdate;