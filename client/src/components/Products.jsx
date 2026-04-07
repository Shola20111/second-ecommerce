import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productListAction } from "../Redux/Actions/Product";


const Products = () => {
  const dispatch = useDispatch();

 const { loading, error, products = [] } = useSelector(
  (state) => state.productList || {}
);

  useEffect(() => {
    dispatch(productListAction());
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h1>{error}</h1>
      ) : (
        <>
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">

              {/* ✅ GRID CONTAINER */}
              <div className="flex flex-wrap -m-4">

                {products && products.map((product) => (
                  <div
                    className="p-4 lg:w-1/4 md:w-1/2 w-full"
                    key={product._id}
                  >
                    <div className="bg-white p-4 rounded shadow">

                      <div className="group relative">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75"
                        />

                        <div className="mt-4 flex justify-between">
                          <div>
                            <h3 className="text-sm text-gray-700">
                              {product.name}
                            </h3>

                            <p className="mt-1 text-sm text-gray-500">
                              {product.category || "Category"}
                            </p>
                          </div>

                          <p className="text-sm font-medium text-gray-900">
                            ₦{product.price}
                          </p>
                        </div>
                      </div>

                    </div>
                  </div>
                ))}

              </div>
            </div>
          </section>
        </>

      )}
    </div>
  );
};

export default Products;