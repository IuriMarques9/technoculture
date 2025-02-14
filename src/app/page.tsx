"use client"
import NextEvents from "../components/Home/NextEvents";
import GalleryCollections from "../components/Home/GalleryCollections";
import BestSellers from "@/components/Home/BestSellers";
import Image from "next/image";


export default function page() {  

  return (
    <main>

      <section className="h-screen mx-auto w-full text-center px-4">
        <h1 className="h-full content-center xl:text-7xl">Welcome to the portal of Techno Music</h1>
      </section>

      <section className="p-4 bg-[rgba(13,13,13,0.1)] backdrop-blur-sm">
        <div className="max-w-screen-2xl mx-auto py-4 text-center">
          <h2 className="font-semibold xl:text-6xl">Next Events</h2>

          <div className="mx-auto my-7 px-16">
            <NextEvents />
          </div>
          
        </div>
      </section>

      <section className="bg-mediumRed">

        <div className="max-w-screen-2xl py-8 mx-auto w-full p-4 sm:px-12 sm:py-12 w-full flex flex-col sm:flex-row gap-6 justify-between items-center">
          
          <div>
              <h3 className="text-center font-bold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">+129.090</h3>
              <h3 className="text-center font-bold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">Followers on social media</h3>
          </div>
          <div>
              <h3 className="text-center font-bold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">+100</h3>
              <h3 className="text-center font-bold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">Dj&apos;s Performed at our events</h3>
          </div>
          <div>
              <h3 className="text-center font-bold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">14</h3>
              <h3 className="text-center font-bold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">Partners/Sponsors</h3>
          </div>
          <div>
              <h3 className="text-center font-bold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">+200</h3>
              <h3 className="text-center font-bold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">Events Organized</h3>
          </div>

        </div>

      </section>

      <section className="p-4 bg-[rgba(13,13,13,0.1)] backdrop-blur-sm">
        <div className="max-w-screen-2xl mx-auto mb-3 py-4 text-center">
          <h2 className="font-semibold xl:text-6xl">Gallery</h2>

          <div className="mx-auto my-7 px-16">
            <GalleryCollections />
          </div>

        </div>
      </section>

      <section className="bg-mediumRed">
        <div className="max-w-screen-2xl py-8 mx-auto w-full p-4 sm:px-12 sm:py-12 flex flex-col sm:flex-row gap-8 sm:gap-0 justify-around items-center">
          
          <Image
            src={"/chroma.png"}
            alt={"Event Image"}
            height={180}
            width={180}
            className="max-w-[200px] object-contain"
          />
          <Image
            src={"/nomadas.png"}
            alt={"Event Image"}
            height={180}
            width={180}
            className="max-w-[200px] object-contain"
          />
          <Image
            src={"/logo_grande.png"}
            alt={"Event Image"}
            height={180}
            width={180}
            className="max-w-[200px] object-contain"
          />

        </div>
      </section>

      <section className="p-4 bg-[rgba(13,13,13,0.1)] backdrop-blur-sm">
        <div className="max-w-screen-2xl mx-auto mb-3 py-4 text-center">
          <h2 className="font-semibold xl:text-6xl">Best Sellers</h2>

          <div className="mx-auto my-7">
            <BestSellers />
          </div>

        </div>
      </section>
    </main>
  );
}
