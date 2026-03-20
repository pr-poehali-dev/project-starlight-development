export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="/images/woman-horse.jpg"
          alt="Woman on horse in countryside"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-widest text-neutral-500" id="poem">Мой гений · строфа I</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-snug italic font-light">
          О, память сердца! ты сильней<br />
          рассудка памяти печальной<br />
          и часто сладостью своей<br />
          меня в стране пленяешь дальной.
        </p>
        <p className="text-base text-neutral-600 mb-8 leading-relaxed max-w-md">
          Батюшков написал элегию в 1815 году — в период расцвета русского романтизма. 
          Стихотворение стало одним из самых нежных лирических признаний в русской поэзии.
        </p>
        <button className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
          Читать полностью
        </button>
      </div>
    </div>
  );
}