function ConfirmEmailForm() {
  return (
    <div className="relative z-10">
      <div className="flex justify-center items-center min-h-screen py-8 sm:py-12">
        <div className="
                    flex 
                    flex-col 
                    rounded-2xl
                    shadow-[0_1px_3px_0_rgba(0,0,0,0.05),0_20px_25px_-5px_rgba(0,0,0,0.05),0_10px_10px_-5px_rgba(0,0,0,0.04)]
                  bg-[rgba(230,74,34,0.10)] 
                    border
                  border-[#E64A22]
                    justify-center 
                    items-center 
                    w-full
                    h-[534px]
                    sm:w-[90%]
                    md:w-119.5
                    px-4
                    sm:px-5.5
                    py-6
                    sm:py-8
                    backdrop-blur-[250px]
                    max-w-119.5">

          <div>
            <h1 className=" font-semibold leading-normal tracking-[-0.32px] text-[32px] text-[#333] ">Confirme ton e-mail</h1>
            <p className="text-[14px] leading-[24px] text-[#B3B3B3]">
              Code envoyé à
              <span className="text-[#8C8C8C]"> prenom@email.com · </span>
              <a href="#" className="text-[#4D4D4D] font-semibold">
                Modifier le mail
              </a>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ConfirmEmailForm;