import React from "react";
import aboutImg from "../../assets/images/about.png";
import aboutCardImg from "../../assets/images/about-card.png";
import { Link } from "react-router-dom";


function About() {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
          {/* ============ about img ========================*/}
          <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
            <img src={aboutImg} alt="" />
            <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]">
            <img src={aboutCardImg}/>
            </div>
          </div>

          {/* ========== about content ===========================*/}
          <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
          <h2 className="heading">Proud to be one of the nations best</h2>
          <p className="text_para">For 20 years in a row India. News @ world report has recognized us one of the best publics hospitals in the nation and #1 in Texas.Examples include the general hospital, the specialized hospital, the short-stay hospital, and the long-term-care facility. </p>

          <p className="text_para mt-[30px]">Our best is something we strive for each day, caring fir our patients-not looking back at what we accompluished but towards what we can do tomorrow. Provinding the best. Examples include the general hospital, the specialized hospital, the short-stay hospital, and the long-term-care facility.</p>

          <Link to='/'>
                 <button className="btn">Learn more</button>
                 </Link>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
