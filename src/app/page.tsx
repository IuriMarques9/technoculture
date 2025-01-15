import Caroussel from "../components/Caroussel";
import Image from "next/image";
import GalleryImages from "../components/GalleryImages";
export default function page() {
  
  
  return (
    <main>

      <section className="h-screen mx-auto w-full text-center px-4">
        <h1 className="h-full content-center">Welcome to the portal of Techno Music</h1>
      </section>

      <section className="p-4 bg-[rgba(13,13,13,0.1)] backdrop-blur-sm">
        <div className="max-w-screen-2xl mx-auto py-4 text-center">
          <h2 className="font-semibold">Next Events</h2>
          <div className="mx-auto my-7 px-16">
            <Caroussel />
          </div>
        </div>
      </section>

      <section className="bg-mediumRed">

        <div className="max-w-screen-2xl mx-auto w-full p-4 sm:px-12 sm:py-20 w-full flex flex-col sm:flex-row gap-6 justify-between items-center">
          
          <div className="text-center font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">
              <h3>+129.090</h3>
              <h3>Followers on social media</h3>
          </div>
          <div className="text-center font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">
              <h3>+100</h3>
              <h3>DJ's Performed at our events</h3>
          </div>
          <div className="text-center font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">
              <h3>14</h3>
              <h3>Partners/Sponsors</h3>
          </div>
          <div className="text-center font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">
              <h3>+200</h3>
              <h3>Events Organized</h3>
          </div>

        </div>

      </section>

      <section className="p-4 bg-[rgba(13,13,13,0.1)] backdrop-blur-sm">
        <div className="max-w-screen-2xl mx-auto py-4 text-center">
          <h2 className="font-semibold">Gallery</h2>
            <GalleryImages />
            <div className="mx-auto my-7 px-16 flex justify-evenly gap-10">
              <Image 
                src={"/nextEvents/cartaz_1st_year.jpg"}
                alt={"Event Image"}
                height={300}
                width={300}
                className={"w-full"}
                objectFit="cover"
                priority 
              />
              <Image 
                src={"/nextEvents/cartaz_1st_year.jpg"}
                alt={"Event Image"}
                height={300}
                width={300}
                className={"w-full"}
                objectFit="cover"
                priority 
              />
              <Image 
                src={"/nextEvents/cartaz_1st_year.jpg"}
                alt={"Event Image"}
                height={300}
                width={300}
                className={"w-full"}
                objectFit="cover"
                priority 
              />
            </div>
        </div>
      </section>

    </main>
  );
}
