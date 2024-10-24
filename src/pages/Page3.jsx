import { useTransform,motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { fullMaskBottom, fullMaskRight } from "../utils/mask";

const Page3 = ({ progress, size }) => {
  const workSec = useRef(null);
  const mask0 = useTransform(progress, [20, 40], [0, 45]);
  const mask1 = useTransform(progress, [40, 60], [0, 45]);
  const mask2 = useTransform(progress, [60, 80], [0, 45]);
  const mask3 = useTransform(progress, [80, 100], [0, 45]);
  const translateImage = useTransform(progress, [42, 58, 62, 80], ['0%', '-100%', '-100%', '-200%']);
  
  const scale1=useTransform(progress, [20, 40], [1.7, 1]);
  const scale2=useTransform(progress, [40, 60], [1.7, 1]);
  const scale3=useTransform(progress, [60, 80], [1.7, 1]);
  
  mask0.on("change", (lat) => {
    if (workSec.current) {
      workSec.current.style.setProperty( "--mask0", size > 640 ? fullMaskRight[Math.round(lat)] : fullMaskBottom[Math.round(lat)] );
    }
  });
  mask1.on("change", (lat) => {
    if (workSec.current) {
      workSec.current.style.setProperty( "--mask1", size > 640 ? fullMaskRight[Math.round(lat)] : fullMaskBottom[Math.round(lat)] );
    }
  });
  mask2.on("change", (lat) => {
    if (workSec.current) {
      workSec.current.style.setProperty( "--mask2", size > 640 ? fullMaskRight[Math.round(lat)] : fullMaskBottom[Math.round(lat)] );
    }
  });
  mask3.on("change", (lat) => {
    if (workSec.current) {
      workSec.current.style.setProperty( "--mask3", size > 640 ? fullMaskRight[Math.round(lat)] : fullMaskBottom[Math.round(lat)] );
    }
  });

  return (
    <div ref={workSec} className="bg-inherit page stop  relative w-screen h-screen shrink-0 z-10 flex items-center justify-center" >
      <div className="layer layer3 w-screen h-screen absolute top-0 left-0 overflow-hidden" style={{ mask: "var(--mask3)" }} >
        <motion.img style={{scale:scale3}} className="object-cover w-full h-full " src="https://images.pexels.com/photos/28759661/pexels-photo-28759661/free-photo-of-minimalistic-urban-tree-and-street-lamp-scene.jpeg" alt="" /> </div>
      <div className="layer layer2 w-screen h-screen absolute top-0 left-0 overflow-hidden" style={{ mask: "var(--mask2)" }} >
        <motion.img style={{scale:scale2}} className="object-cover w-full h-full" src="https://images.pexels.com/photos/20248990/pexels-photo-20248990/free-photo-of-kangaroos-on-meadow.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      </div>

      <div className="layer layer1 w-screen h-screen absolute top-0 left-0 overflow-hidden" style={{ mask: "var(--mask1)" }} >
        <motion.img style={{scale:scale1}} className="object-cover w-full h-full " src="https://cdn.sanity.io/images/qa41whrn/prod/7b5747b392d279cc9bf9beeb81c839405627c05c-2000x694.png?w=2160&q=80&auto=format" alt="" />
      </div>

      <div className="layer layer0 w-screen h-screen absolute top-0 left-0 bg-[var(--bg-color)]" style={{ mask: "var(--mask0)" }} ></div>

      



      <div className="projectWrapper w-[600px] max-w-[90%] shadow-lg flex flex-col  bg-bg-light rounded-sm relative z-30 overflow-hidden px-2 pb-2">
        <h5 className="py-1 font-semibold">Projects</h5>
        <div className="overflow-hidden">
        <motion.div className="imageContainer  flex " style={{x:translateImage}}>
          <div className="imageBox w-full h-full shrink-0 overflow-hidden relative" onClick={()=>{window.location.href = 'https://pratap-ui.vercel.app/'}}>
              <img className="w-full h-full" src="https://res.cloudinary.com/dhoha33eh/image/upload/v1729596376/pratapUI_s00qsd.png" alt="" />
              <div className="absolute bg-black border border-white text-white font-semibold  bottom-5 left-5 px-8 py-2 rounded-3xl">Link</div>
          </div>
          <div className="imageBox w-full h-full shrink-0 overflow-hidden relative" onClick={()=>{window.location.href = 'https://puma-six.vercel.app/'}}>
              <img className="w-full h-full" src="https://res.cloudinary.com/dhoha33eh/image/upload/v1729596402/PUMA2_hhr6lb.png" alt="" />
              <div className="absolute bg-black border border-white text-white font-semibold bottom-5 left-5 px-8 py-2 rounded-3xl">Link</div>
          </div>
          <div className="imageBox w-full h-full shrink-0 overflow-hidden relative">
              <img className="w-full h-full" src="https://res.cloudinary.com/dhoha33eh/image/upload/v1729596401/chatapp_hgihha.png" alt="" />
              <div className="absolute bg-black border border-white text-white font-semibold bottom-5 left-5 px-8 py-2 rounded-3xl">Link</div>
          </div>
          </motion.div>
          </div>
      </div>
    </div>
  );
};

export default Page3;
