import React from 'react'
import { Footer } from '../../Components/Footer/Footer';
import { Loader } from "../../Components/Loader/Loader";
import { Navigation } from '../../Components/Navigation/Navigation';
import { useProduct } from '../../Contexts/Product-context';
import { SingleProductCard } from './Componets/SingleProductCard';

const SingleProductPage = () => {
    const {Loading}= useProduct();
    let hideMenu = true;
  return (
    <>
    <div className="big-wrapper dark">
      {Loading && <Loader/>}
      <Navigation hideMenu={hideMenu} />
      <SingleProductCard/>
      <Footer />
    </div>
  </>
  )
}

export default SingleProductPage