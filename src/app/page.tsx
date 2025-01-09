export default function page() {
  
  return (
    <main>

        <section className="h-screen mx-auto w-full text-center px-4">
          <h1 className="h-full content-center">Welcome to the portal of Techno Music</h1>
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

    </main>
  );
}
