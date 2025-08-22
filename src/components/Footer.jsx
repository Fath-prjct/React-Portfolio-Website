const Footer = () => {
  return (
    <div className="mt-32 py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center ">
      <h1 className="text-2xl font-bold">Porfolio</h1>
      <div className="flex gap-7">
        <a href="#beranda">Home</a>
        <a href="#tentang">About</a>
        <a href="#proyek">Project</a>
      </div>
      <div className="flex items-center gap-3">
        <a href="https://www.instagram.com/fathabdr_/">
          <i className="ri-instagram-fill ri-2x"></i>
        </a>
        <a href="https://www.behance.net/fathabdurra">
          <i className="ri-behance-fill ri-2x"></i>
        </a>
        <a href="https://id.linkedin.com/in/fath-abdurachman-robbani-0929352a7">
          <i className="ri-linkedin-fill ri-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
