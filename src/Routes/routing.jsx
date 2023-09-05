import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShowableProductDetails from "../pages/productDetailPage/showableProductDetails";
import MainCouponLandingPage from "../pages/couponsPage/mainCouponsLandingPage";
import MainLandingPage from "../pages/landingPage/landingPage";
import MainStorePage from "../pages/storesCouponsPage/mainStorePage";
import MainCategories from "../pages/categoriesPage/mainCategoriesPage";
import AllStores from "../pages/AllStores/allStores";

function Routing(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLandingPage/>} />
                <Route path="/product-details" element={<ShowableProductDetails/>} />
                <Route path="/coupon-deals" element={<MainCouponLandingPage/>}/>
                <Route path="/coupon-store" element={<MainStorePage/>}/>
                <Route path="/all-stores" element={<AllStores/>}/>
                <Route path="/categories" element={<MainCategories/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Routing;