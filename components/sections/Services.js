// import Link from 'next/link'
import SVG from 'react-inlinesvg'
export default function Services() {
  return (
    <div id="services" className="container mt-24 ">
      <p className="py-4 text-center md:text-left md:py-4 text-orange-500">
        Shërbimet më të kerkuara
      </p>
      <h2 className="text-center md:leading-tight md:text-left text-3xl md:text-4xl font-bold text-gray-800">
        Shërbimet tona
      </h2>
      <div className="flex justify-center md:justify-start">
        <SVG src="/svg/line.svg" className="w-36 h-6 text-black rounded-md " alt="house icon" />
      </div>
      <p className="lg:col-5 md:col-6 py-8 text-center text-base md:text-left text-gray-600">
        Ne mund ta personalizojmë planin tuaj të pastrimit për t&apos;iu përshtatur nevojave tuaja,
        shumica e klientëve planifikojnë shërbime të rregullta pastrimi:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  ">
        <div className=" px-6 border-2 rounded-lg py-8 space-x-4 text-gray-600 bg-white">
          <div>
            <div className="bg-gray-950 inline-flex justify-start p-2 rounded-lg mb-4">
              <SVG src="/svg/repeat.svg" className="w-12 h-12  text-white" alt="check icon" />
            </div>
            <div>
              <p className="text-xl font-semibold font-jost"> Pastrim Mujor</p>
              <p className="mt-4 text-base font-medium">
                Ne kujdesemi për pastrimin e rregullt të sipërfaqeve në mënyrë që ato të mos ndoten
                shumë.
              </p>
              {/* <Link href="#contact" aria-label="Contact">
                <a>
                  <button className="flex items-center mt-6 space-x-4 ">
                    <div className="text-gray-950 hover:border-b border-gray-950">Learn More.</div>
                    <SVG
                      src="/svg/arrow.svg"
                      className="text-white w-5 fill-current"
                      alt="button"
                    />
                  </button>
                </a>
              </Link> */}
            </div>
          </div>
        </div>
        <div className=" px-6 border-2 rounded-lg py-8 space-x-4 text-gray-600 bg-white">
          <div>
            <div className="bg-gray-950 inline-flex justify-start p-2 rounded-lg mb-4">
              <SVG src="/svg/house.svg" className="w-12 h-12" alt="check icon" />
            </div>
            <div>
              <p className="text-xl font-semibold font-jost">Pastrim i rastit / njëhershëm</p>
              <p className="mt-4 text-base font-medium">
                Nevojat që nuk nënkuptojnë domosdoshmërisht se keni një festë të planifikuar ose në
                pritje të një rasti të veçantë, ose në pritje të mysafirëve.
              </p>
              {/* <Link href="#contact" aria-label="Contact">
                <a>
                  <button className="flex items-center mt-6 space-x-4 ">
                    <div className="text-gray-950 hover:border-b border-gray-950">Learn More.</div>
                    <SVG
                      src="/svg/arrow.svg"
                      className="text-white w-5 fill-current"
                      alt="button"
                    />
                  </button>
                </a>
              </Link> */}
            </div>
          </div>
        </div>
        <div className=" px-6 border-2 rounded-lg py-8 space-x-4 text-gray-600 bg-white">
          <div>
            <div className="bg-gray-950 inline-flex justify-start p-2 rounded-lg mb-4">
              <SVG src="/svg/house.svg" className="w-12 h-12" alt="check icon" />
            </div>
            <div>
              <p className="text-xl font-semibold font-jost">Pastrimi Gjeneral</p>
              <p className="mt-4 text-base font-medium">
                Pastrimi i dritareve, pastrimi i horoletave dhe ballkonave, pastrimi i korridorit,
                pastrimi i dhomave të fjetjes, pastrimi i banjos, pastrimi i kuzhinës, pastrimi i
                dhomës së ndenjës dhe dhomave tjera, pastrimi i podrumit.
              </p>
              {/* <Link href="#contact" aria-label="Contact">
                <a>
                  <button className="flex items-center mt-6 space-x-4 ">
                    <div className="text-gray-950 hover:border-b border-gray-950">Learn More.</div>
                    <SVG
                      src="/svg/arrow.svg"
                      className="text-white w-5 fill-current"
                      alt="button"
                    />
                  </button>
                </a>
              </Link> */}
            </div>
          </div>
        </div>
        <div className=" px-6 border-2 rounded-lg py-8 space-x-4 text-gray-600 bg-white">
          <div>
            <div className="bg-gray-950 inline-flex justify-start p-2 rounded-lg mb-4">
              <SVG
                src="/svg/pressurewash.svg"
                className="w-12 h-12 p-1 text-white fill-current"
                alt="check icon"
              />
            </div>
            <div>
              <p className="text-xl font-semibold font-jost">Larja e oborrit</p>
              <p className="mt-4 text-base font-medium">
                Pjesa e oborrit tuaj me begatona është një sipërfaqe që bie në sy shumë,të cilën ju
                do të dëshironit që gjithmonë ta shihnit të pastër,pa kullosa dhe myshk të formuar.
                Ne bëjmë pastrimin e tyre gjate pastrimit gjeneral me makina me shtypje të lartë të
                ujit që është në gjendje të pastrojë kullosat dhe myshkun më të vështirë për tu
                pastruar. Gjithashtu ne përdorim kimikale për djegien paraprake të kullosave nëpër
                begatona,duke pasur një kujdes të madh ndaj bimëve tjera në mos vrasjen e tyre,me
                qëllim mbajtjen nën kontroll të kullosave te keqija dhe pastrimin sa më të mirë.
              </p>
              {/* <Link href="#contact" aria-label="Contact">
                <a>
                  <button className="flex items-center mt-6 space-x-4 ">
                    <div className="text-gray-950 hover:border-b border-gray-950">Learn More.</div>
                    <SVG
                      src="/svg/arrow.svg"
                      className="text-white w-5 fill-current"
                      alt="button"
                    />
                  </button>
                </a>
              </Link> */}
            </div>
          </div>
        </div>
        <div className=" px-6 border-2 rounded-lg py-8 space-x-4 text-gray-600 bg-white">
          <div>
            <div className="bg-gray-950 inline-flex justify-start p-2 rounded-lg mb-4">
              <SVG
                src="/svg/vacum.svg"
                className="w-12 h-12 text-white fill-current"
                alt="check icon"
              />
            </div>
            <div>
              <p className="text-xl font-semibold font-jost">
                Pastrim Kimik i mobiljeve dhe tepihave
              </p>
              <p className="mt-4 text-base font-medium">
                Mobiljet tuaja marin një pamje të re duke mos u dëmtuar gjatë pastrimit, dhe duke
                mos lënë lagështi të tepërt pas mbarimit të pastrimit.
              </p>
              {/* <Link href="#contact" aria-label="Contact">
                <a>
                  <button className="flex items-center mt-6 space-x-4 ">
                    <div className="text-gray-950 hover:border-b border-gray-950">Learn More.</div>
                    <SVG
                      src="/svg/arrow.svg"
                      className="text-white w-5 fill-current"
                      alt="button"
                    />
                  </button>
                </a>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
