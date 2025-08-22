import DataImage from "./data";
import { listTools, listProyek } from "./data";
import Quotes from "./components/Quotes";

function App() {
  return (
    <>
      <div className="hero md:h-160 h-screen flex items-center justify-center pt-20 sm:pt-30 lg:pt-10 2xl:pt-50">
        <div className="grid md:grid-cols-2 items-center gap-8 md:gap-12 lg:gap-16 max-w-7xl w-full px-6 md:px-8 lg:px-10">
          <img
            src={DataImage.HeroImage}
            alt="Hero Image"
            className="w-full max-w-[500px] mx-auto md:mx-0 md:mr-auto animate__animated animate__fadeInUp animate__delay-3s"
            loading="lazy"
          />
          <div className="animate__animated animate__fadeInUp animate__delay-4s text-center md:text-left">
            <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl mx-auto md:mx-0">
              <img
                src={DataImage.HeroImage}
                alt="Hero Image"
                className="w-10 rounded-md"
                loading="lazy"
              />
              <Quotes />
            </div>
            <h1 className="text-5xl/tight font-bold mb-6">
              Hi, Saya Fath A.R.
            </h1>
            <p className="text-base/loose mb-6 opacity-50 ">
              I am a UI/UX design and Frontend Development enthusiast based in
              Indonesia, with a strong interest in building websites and
              creating impactful digital experiences. I also enjoy graphic
              design, including posters, vector illustrations, and infographics.
            </p>
            <div className="flex items-center justify-center md:justify-start sm:gap-4 gap-2 ">
              <a
                href="/assets/CV_Fath.pdf"
                className="bg-orange-500 p-4 rounded-2xl hover:bg-orange-400 flex items-center justify-center gap-2"
              >
                Download CV
              </a>
              <a
                href="#proyek"
                className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600 flex items-center justify-center gap-2"
              >
                Lihat Project
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        className="tentang min-h-screen flex flex-col justify-center py-20 pt-100 md:pt-0 "
        id="tentang"
      >
        <div className="w-full max-w-7xl mx-auto px-6 md:px-8 lg:px-10">
          <div
            className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img
              src={DataImage.HeroImage}
              alt="Image"
              className="w-12 rounded-md mb-10 sm:hidden "
              loading="lazy"
            />
            <p className="text-base/loose mb-10">
              The individual possesses a diverse set of skills, including public
              speaking and leadership in team settings, as well as creative
              visual design. Currently, he is re-entering the world of
              programming, continuing to sharpen his technical abilities
              alongside his creative expertise
            </p>
            <div className="flex items-center justify-between ">
              <img
                src={DataImage.HeroImage}
                alt="Image"
                className="w-12 rounded-md sm:block hidden"
                loading="lazy"
              />
              <div className="flex items-center gap-6">
                <div>
                  <h1 className="text-4xl md-1">
                    15<span className="text-orange-500">+</span>
                  </h1>
                  <p>Design Project</p>
                </div>
                <div>
                  <h1 className="text-4xl md-1">
                    2<span className="text-orange-500">+</span>
                  </h1>
                  <p>Program Project</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="tools-section min-h-screen flex flex-col justify-center py-20"
        id="tools"
      >
        <div className="w-full max-w-7xl mx-auto px-6 md:px-8 lg:px-10">
          <div className="tools">
            <h1
              className="text-4xl/snug font-bold mb-4"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Tools yang dipakai
            </h1>
            <p
              className="xl:w-2/5 lg:w-2/4 md:w-3/4 w-full text-base/loose opacity-50"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              These are some of the tools I use for my projects:
            </p>
            <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
              {listTools.map((tool) => (
                <div
                  className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group"
                  key={tool.id}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay={tool.dad}
                >
                  <img
                    src={tool.gambar}
                    alt="Tools Image"
                    className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900"
                  />
                  <div>
                    <h4 className="font-bold">{tool.nama}</h4>
                    <p className="opacity-50 ">{tool.ket}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className="proyek-design min-h-screen flex flex-col justify-center py-20"
        id="proyek"
      >
        <div className="w-full max-w-7xl mx-auto px-6 md:px-8 lg:px-10">
          <h1
            className="text-center text-4xl font-bold mb-2"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Project Design
          </h1>
          <p
            className="text-base/loose text-center opacity-50"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            Here are a few design projects I’ve worked on
          </p>

          <div
            className="w-full max-w-4xl mx-auto my-14 aspect-[4/3] rounded-lg overflow-hidden"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="500"
          >
            <iframe
              className="w-full h-full border-0"
              src="https://www.behance.net/embed/project/188381123?ilo0=1"
              allowFullScreen
              lazyload="true"
              frameBorder="0"
              allow="clipboard-write"
              referrerPolicy="strict-origin-when-cross-origin"
              scrolling="no"
            ></iframe>
          </div>
        </div>
      </div>

      <div
        className="proyek-web min-h-screen flex flex-col justify-center py-20"
        id="proyek-web"
      >
        <div className="w-full max-w-7xl mx-auto px-6 md:px-8 lg:px-10">
          <h2
            className="text-center text-4xl font-bold mb-2"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Project Web & Program
          </h2>
          <p
            className="text-base/loose text-center opacity-50"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            Here are a few websites and programs I’ve worked on
          </p>

          <div className="proyek-box mt-14 grid lg:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-4">
            {listProyek.map((proyek) => (
              <div
                key={proyek.id}
                className="p-4 bg-zinc-800 rounded-md"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={proyek.dad}
              >
                <img
                  src={proyek.gambar}
                  alt="Proyek Image"
                  loading="lazy"
                  className="rounded-md"
                />
                <div>
                  <h1 className="text-2xl font-bold my-4 ">{proyek.nama}</h1>
                  <p className="text-base/loose mb-4 ">{proyek.desk}</p>
                  <div className="flex flex-wrap gap-2">
                    {proyek.tools.map((tool, index) => (
                      <p
                        className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold"
                        key={index}
                      >
                        {tool}
                      </p>
                    ))}
                  </div>
                  <div className="mt-8 text-center">
                    <a
                      href={proyek.link}
                      className="bg-orange-500 p-3 rounded-lg block border border-zinc-600 hover:bg-orange-400"
                    >
                      Lihat Project
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className="kontak min-h-screen flex flex-col justify-center py-20"
        id="kontak"
      >
        <div className="w-full max-w-7xl mx-auto px-6 md:px-8 lg:px-10">
          <h1
            className="text-4xl mb-2 font-bold text-center"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Contact
          </h1>
          <p
            className="text-base/loose text-center mb-10 opacity-50"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
          ></p>
          <form
            action="https://formsubmit.co/eyesfath@gmail.com"
            method="POST"
            className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md max-w-lg"
            autoComplete="off"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="500"
          >
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-semibold">Name</label>
                <input
                  type="text"
                  name="nama"
                  placeholder="Enter your name..."
                  className="border border-zinc-500 p-2 rounded-md"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-semibold">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email..."
                  className="border border-zinc-500 p-2 rounded-md"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="pesan" className="font-semibold">
                  Message
                </label>
                <textarea
                  name="pesan"
                  id="pesan"
                  cols="45"
                  rows="7"
                  placeholder="Enter your message..."
                  className="border border-zinc-500 p-2 rounded-md"
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-orange-500 p-3 rounded-lg w-full cursor-pointer border border-zinc-600 hover:bg-orange-400"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
