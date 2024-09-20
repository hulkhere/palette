import Image from "next/image";
import HeroImg from "./images/hero.png";
import ReviewBar from "./images/review-bar.png";
import UploadPictures from "./images/upload-pictures.png";
import Stylists from "./images/stylists.png";
import StepTwo from "./images/step-two.png";
import Example from "./images/example.png";
import StepThree from "./images/step-three.png";
import Difference from "./images/difference.png";
import Logo from "./images/logo.png";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="max-w-sm p-6 bg-white">
        <div className="w-full h-auto">
          <Image src={HeroImg} alt="logo" />
        </div>
        <div className="text-[#333333] text-lg awesome">
          we’re a team of professional stylists — let us help you find colors
          that flatter you and bring out your natural features
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
        <div className="w-full h-auto mt-2.5">
          <Image src={Stylists} alt="logo" />
        </div>
        <div className="text-[#333333] text-sm text-center awesome">
          our team of professional stylists will create a personalised color
          palette, that compliments the color of your skin (undertone &
          overtone), lips, eyes & hair
        </div>
        <div className="w-full flex justify-center">
          <div className="w-7 mt-2.5">
            <Image src={StepTwo} alt="logo" />
          </div>
        </div>
        <div className="w-full h-auto mt-2.5">
          <Image src={Example} alt="logo" />
        </div>
        <div className="text-[#333333] text-sm text-center awesome">
          use your palette as a style guide when purchasing clothing, lipstick &
          jewellery
        </div>
        <div className="text-[#333333] text-sm text-center awesome">
          use your palette as a style guide when purchasing clothing, lipstick &
          jewellery
        </div>
        <div className="text-[#333333] text-sm text-center awesome">
          you’ll see a transformation in your style, your skin will start to
          glow & your natural features will stand out
        </div>
        <div className="w-full flex justify-center">
          <div className="w-7 mt-2.5">
            <Image src={StepThree} alt="logo" />
          </div>
        </div>
        <div className="text-[#00A14E] text-6xl awesome w-full flex justify-center">
          color science
        </div>
        <div className="flex flex-col items-center">
          <div className="text-[#333333] text-sm text-center awesome">
            yes, there’s a science to colors
          </div>
          <div className="text-[#333333] text-sm text-center awesome">
            colors have different hue, warmness & saturation levels that
            determine how they reflect light
          </div>
          <div className="text-[#333333] text-sm text-center awesome">
            when colors you wear are in harmony with the colors of your body’s
            pigments, they’ll make your skin glow & highlight your facial
            features
          </div>
          <div className="text-[#333333] text-sm text-center awesome">
            but..
          </div>
          <div className="text-[#333333] text-sm text-center awesome">
            some colors make you look washed out and unflattering
          </div>
        </div>
        <div className="w-full h-auto mt-2.5">
          <Image src={Difference} alt="logo" />
        </div>
      </div>
      <div className="py-6 bg-[#00A14E] flex flex-col p-6">
        <div className="w-24">
          <Image src={Logo} alt="logo" />
        </div>
        <div className="w-full flex justify-between">
          <div>
            <div className="text-white text-base awesome font-light mt-6">
              helping people find <br />
              their style
            </div>
            <div className="text-white text-base awesome font-light mt-2">
              since 2024
            </div>
          </div>
          <div className="flex flex-col items-end gap-y-1 mt-6">
            <Link href="/terms-and-conditions">
              <div className="uppercase text-lg text-white underline awesome font-extralight">
                Terms and conditions
              </div>
            </Link>
            <Link href="/terms-and-conditions">
              <div className="uppercase text-lg text-white underline awesome font-extralight">
                privacy policy
              </div>
            </Link>
            <Link href="/terms-and-conditions">
              <div className="uppercase text-lg text-white underline awesome font-extralight">
                refund policy
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
