import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Payment from '../Pages/HeaderPages/Payment';
import Service from '../Pages/HeaderPages/Service';
//import News from '../Pages/HeaderPages/News';
//import Admin from '../Pages/HeaderPages/Admin';
import Home from '../Pages/HomePages/Home';
import PackageCard from '../Components/PackageCard';
import Holidays from '../Pages/HomePages/Holidays';
import Testimonial from '../Pages/HomePages/Testimonial';
import Contects from '../Pages/HomePages/Contects';
import FeaturedPackages from '../Components/FeaturedPackages';
import FixDeparture from '../Pages/HomePages/FixDeparture';
import TigerSafari from '../Pages/HomePages/TigerSafari';
import Domestic from '../Pages/HomePages/Domestic';
import International from '../Pages/HomePages/International';
import SpecialPackages from '../Components/SpecialPackages';
import PackageDetails from '../Components/PackageDetails';
import Support from '../Pages/HomePages/Support';
import WhyChooseUs from '../Components/WhyChooseUs';
//import HolidayCarousel from '../Components/HolidayCarousel';
import DomesticPackage from '../Components/DomesticPackage';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/services" element={<Service />} />
      {/* <Route path="/news" element={<News />} /> */}
      {/* <Route path="/admin" element={<Admin />} /> */}
      <Route path='/package-card' element={<PackageCard/>} />
      <Route path='/holidays' element={<Holidays/>} />
      <Route path='/testimonial' element={<Testimonial/>} />
      <Route path='/contact' element={<Contects/>} />
      <Route path='/featured-packages' element={<FeaturedPackages/>} />
      <Route path="/special-packages" element={<SpecialPackages />} />
      <Route path="/package-details" element={<PackageDetails />} />
      <Route path="/fixed/:destination" element={<FixDeparture />} />
      <Route path="/safari/:destination" element={<TigerSafari/>} />
      <Route path="/domestic/:destination" element={<Domestic/>} />
      <Route path="/international/:destination" element={<International/>} />
      <Route path="/support" element={<Support />} />
      <Route path='/why-choose-us' element={<WhyChooseUs />} />
      <Route path='/domestic-packages' element={<DomesticPackage />} />



    </Routes>
    
  );
};

export default MainRoutes;
