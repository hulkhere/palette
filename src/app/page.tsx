import Image from "next/image";
import HeroImg from "./images/hero.png";
import ReviewBar from "./images/review-bar.png";
import UploadPictures from "./images/upload-pictures.png";

export default function Home() {
  return (
    <div className="max-w-sm p-6 bg-white">
      <div className="w-full h-auto">
        <Image src={HeroImg} alt="logo" />
      </div>
      <div className="text-[#333333] text-lg awesome">
        we’re a team of professional stylists — let us help you find colors that
        flatter you and bring out your natural features
      </div>
      <div className="text-[#333333] text-lg awesome">
        upload photos → in 🕐 24 hrs → get a personalised color palette that
        compliments your skin, hair, eyes & lips. specifically curated for
        indian skin tones
      </div>
      <button className="w-full text-xl py-4 awesome text-white rounded-md bg-[#00A14E]">
        get my color palette →
      </button>
      <div className="w-full h-auto mt-2.5">
        <Image src={ReviewBar} alt="logo" />
      </div>
      <div className="text-[#00A14E] text-6xl awesome w-full flex justify-center">
        how it works
      </div>
      <div className="w-full h-auto mt-2.5">
        <Image src={UploadPictures} alt="logo" />
      </div>
    </div>
  );
}
