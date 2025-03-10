import Image from "next/image";
import FormElements from "./_components/FormElements";
import bgGradient from "../../../../public/gradientcopy.svg";
import BgSvgDotGp from "@/ui/common/BgSvgDotGp";
import SnElements from "./_components/SnElements";

const page = () => {
  return (
    <section className="relative px-[20px] lg:px-[90px] xl:px-[170px] w-full">
      <Image
        className="absolute -right-[300px] -top-[200px] md:-right-[500px] md:-top-[700px] lg:-right-[750px] lg:-top-[700px] -z-30 w-full xl:-right-[750px] xl:-top-[700px]"
        alt="bgSvg"
        src={bgGradient}
      />
      <BgSvgDotGp />
      <div className="flex justify-center items-center pt-[100px]">
        <h4 className="text-white font-medium text-[30px]">
          <span className="font-bold text-[#FD660E]">ဘေထုပ်ကောစ်</span>မှ မသိ
          မရှင်းတာရှိရင် မေးမြန်းပါ (မရှက်ပါနဲ့)
        </h4>
      </div>
      <div className="flex justify-center items-center py-14 flex-col-reverse lg:flex-row md:px-[50px]">
        <div className="flex-[4] pt-10 lg:pt-0">
          <p className="text-white font-nunito font-semibold text-[20px] mb-5">
            follow or contact us with
          </p>
          <SnElements />
        </div>
        <div className="w-[1px] h-[350px] bg-[#2D333E] mx-14 hidden lg:block" />
        <div className="flex-[5] w-full">
          <FormElements />
        </div>
      </div>
    </section>
  );
};

export default page;
