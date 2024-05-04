import React from 'react'
import ProductItem from "../productItem/ProductItem";
import ProductListingPagination from "../productListingPagination/ProductListingPagination";

const ProductListingProducts = ({filtersHidden,productsList,pageCount})=>{

    return(
        <>
            <div className={`w-full ${filtersHidden && "sm:col-span-2"} order-4 sm:order-none`}>
                {!productsList && <div className={"grid place-items-center text-white"}>
                <span className="animate-spin h-5 w-5 mr-3">
                </span>
                    Loading...
                </div>}
                {productsList?.length>0 &&
                    <>
                        <div className={`grid grid-cols-2  ${filtersHidden?"sm:grid-cols-2":"sm:grid-cols-1"} md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-3 gap-4`}>
                            {productsList?.map((item,index)=>{
                                return <ProductItem key={index} product={item}/>
                            })}
                        </div>
                        <ProductListingPagination/>
                    </>
                }
                { productsList?.length===0 &&
                    <div className={"py-3 text-white h-[70vh]"}>
                        <p>Sorry, we couldn't find any products based on your search.</p>
                    </div>
                }


            </div>

        </>
    )
}

export default ProductListingProducts
