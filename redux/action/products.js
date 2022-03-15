import { productsList } from '../../servises/productsList'


export const getAllProducts = () => {
    return async(dispatch, getState) => {
        //let products = [...getState().products]
        return await dispatch({ type: 'GET_ALL_PRODUCTS', payload: productsList.products })
    }
}

//BRAND OPTION///
export const barndChangeHandel = (e, filterOption) => {
        return async(dispatch) => {
            //console.log(filterOption)
            if (e.target.checked) {
                if (!filterOption.selectedBrand.find((i) => i === e.target.value)) {
                    return filterOption.selectedBrand.push(e.target.value)
                }
            } else {
                const index = filterOption.selectedBrand.indexOf(e.target.value)
                if (index > -1) {
                    return (filterOption.selectedBrand.splice(index, 1))
                }
            }

            return await dispatch({ type: 'BRAND_OPTION', payload: filterOption })
        }
    }
    //CATEGORAY OPTION///
export const categotyChangeHandel = (e, filterOption) => {
        return async(dispatch) => {
            if (e.target.checked) {
                if (!filterOption.selectedCategory.find((i) => i === e.target.value)) {
                    return filterOption.selectedCategory.push(e.target.value)
                }
            } else {
                const index = filterOption.selectedCategory.indexOf(e.target.value)
                if (index > -1) {
                    return (filterOption.selectedCategory.splice(index, 1))
                }
            }


            return await dispatch({ type: 'CATEGORY_OPTION', payload: filterOption })
        }
    }
    ///MIN PRICE OPTION ///
export const minpriceChangeHandel = (value, filterOption) => {
        return async(dispatch) => {
            filterOption.minPrice = value
            return await dispatch({ type: 'MINPRICE_OPTION', payload: filterOption })
        }
    }
    //MAX PRICE//
export const maxpriceChangeHandel = (value, filterOption) => {
    return async(dispatch) => {
        filterOption.maxPrice = value

        return await dispatch({ type: 'MAXPRICE_OPTION', payload: filterOption })
    }
}
export const availabilityChangeHandel = (filterOption) => {
    return async(dispatch) => {
        filterOption.map((item) => {
            return (item.availability = !item.availability)
        })

        return await dispatch({ type: 'AVAILIBILITY_OPTION', payload: filterOption })
    }
}
export const discontChangeHandel = (filterOption) => {
    return async(dispatch) => {
        filterOption.map((item) => {
            return (item.discont = !item.discont)
        })

        return await dispatch({ type: 'DISCOT_OPTION', payload: filterOption })
    }
}

//USE FILTER OPTIN TAHT USE SET TO FILTER PRODUCT ARRAY, BY CLICK ON 'ذخیره'
export const fillterProductsHandler = () => {
    return async(dispatch, getState) => {
        let products = [...getState().products]
        let filterOption = {...getState().filterOption }
        let minPrice = filterOption.minPrice
        let maxPrice = filterOption.maxPrice
        let tempProducts = [...products]
        if (minPrice > 100 || maxPrice < 1000) {
            tempProducts = tempProducts.filter((item) => {
                return (item.price >= minPrice && item.price <= maxPrice)
            })
            products = tempProducts
        }
        if (filterOption.selectedBrand.length > 0) {

            tempProducts = tempProducts.filter((p) => {
                return filterOption.selectedBrand.indexOf(p.brand) !== -1
            })
            products = tempProducts

        }
        if (filterOption.selectedCategory.length > 0) {
            console.log('vaghti some brande selected' + filterOption.selectedBrand)
            tempProducts = tempProducts.filter((p) => {
                return filterOption.selectedCategory.indexOf(p.category) !== -1
            })
            products = tempProducts
            console.log(products)
        }


        return await dispatch({ type: 'FILLTER_PRODUCTS', payload: products })
    }
}

export const sortProductsHandle = (value) => {
    return async(dispatch, getState) => {
        let products = [...getState().products]


        console.log(value)
        if (value === 'mostVisitedr') {
            products = products.filter((p) => {
                return p.mostVisited === true
            })
        }
        if (value === 'bestSeller') {
            products = products.filter((p) => {
                return p.bestSeller === true
            })
        }
        if (value === 'mostPopular') {
            products = products.filter((p) => {
                return p.mostPopular === true
            })
        }
        if (value === 'mostExpensive') {
            products = products.sort((a, b) => a.price - b.price)
        } else {
            products = products.sort((a, b) => a.price - b.price)


        }
        if (value === 'mostCheapest') {

            products = products.sort((a, b) => b.price - a.price)
        } else {
            products = products.sort((a, b) => b.price - a.price)


        }

        return await dispatch({ type: 'SORT_PRODUCTS', payload: products })
    }
}


export const clearAllProducts = () => {
    return async dispatch => {
        let tempProducts = [...productsList.products]
        return await dispatch({ type: 'CLEAR_ALL_PRODUCTS', payload: tempProducts })
    }
}



// return async(dispatch) => {
//     const selectedBrand = filterOption.map((item) => {
//         return item.selectedBrand
//     })


//     if (e.target.checked) {
//         console.log(selectedBrand)
//         console.log(e.target.value)
//             // if (!selectedBrand.find((i) => i === e.target.value)) {
//         return selectedBrand.push(e.target.value)

//         // }
//     } else {
//         console.log('remove')
//             // const index = selectedBrand.indexOf(e.target.value);
//             // if (index > -1) {
//             //     return (selectedBrand.splice(index, 1))
//             // }

//     }



//     return await dispatch({ type: 'BRAND_OPTION', payload: selectedBrand })
// }


















// //sortvalue is parameter to this func //
// export const sortProductsBy = (sortValue) => {
//     return async(dispatch, getState) => {
//         const products = getState().products

//         return await dispatch({
//             type: 'SORT_PRODUCTS_BY',
//             payload: {
//                 sortValue,
//                 //filter array 
//                 sortedProducts: products.filter((p) => p.mostPopular === false)
//                     //now render sortProductBy instead of all products//
//             }
//         })
//     }
// }