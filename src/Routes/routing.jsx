import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShowableProductDetails from "../pages/productDetailPage/showableProductDetails";
import MainCouponLandingPage from "../pages/couponsPage/mainCouponsLandingPage";
import MainLandingPage from "../pages/landingPage/landingPage";
import MainStorePage from "../pages/storesCouponsPage/mainStorePage";



function Routing(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLandingPage/>} />
                <Route path="/product-details" element={<ShowableProductDetails/>} />
                <Route path="/coupon-deals" element={<MainCouponLandingPage/>}/>
                <Route path="/coupon-store" element={<MainStorePage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Routing;