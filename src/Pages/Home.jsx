import React from 'react'
import ProCards from '../Components/ProCards';
import Header from '../Components/Header';
import Footer from '../Components/Footer';


const Home = () => {
  return (
    <div >
       <Header/>
    <section className=" bg-violet-200 ">
      <h1 className="text-center text-3xl font-extrabold text-purple-800 pt-4">Our Products</h1>
      <ProCards/>
      <Footer/>
    </section>
    </div>
  );
}
     
export default Home
