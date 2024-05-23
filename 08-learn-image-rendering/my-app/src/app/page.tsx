import Image from "next/image";
import nature from "../../image/nature.jpeg"
export default function Home() {
  return (
   <>
   <h1 className="text-center pt-5 text-[24px] font-bold 
">Images in next js</h1>
<Image className="rounded-full" src={nature} alt="nature"/>
<br />
<Image className="rounded-full" src={require("../../image/river.jpeg")} alt="river"/>
   </>
  );
}
