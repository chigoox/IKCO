import { ArrowBigRightDash, CheckCheckIcon } from "lucide-react";
import Image from "next/image";
import QuoteForm from "./GlobalComponets/QuoteCollector/QuoteForm";
import Link from "next/link";
import { sendEmail } from "./apiCalls/Email";



export const Checklist = ({ title, desc }) => {
  return (
    <div className="p-2 lg:w-96">
      <div className="center gap-2">
        <CheckCheckIcon className="flex-shrink-0" size={24} />
        <div>
          <h1 className="text-xl lg:text-2xl font-extrabold border-b">{title}</h1>
          <p className="text-sm lg:text-base">{desc}</p>
        </div>
      </div>

    </div>
  )
}




export default function Home() {

  const checklist = [
    {
      title: ' 100% Solid Wood', desc: 'All solid wood doors, drawers and frames, with full plywood interior boxes.'
    },
    { title: 'Dovetailed Drawer Box', desc: 'Hardwood dovetailed drawer boxes provide an exquisite look while sustaining maximum durability.' },
    { title: 'Color Matched Interior', desc: 'Fully finished interiors that are meticulously color matched to the exterior.' },
    { title: 'Uncompromised Durability', desc: 'Strategically placed metal brackets are expertly installed at each of the four corners, meticulously designed to provide unparalleled structural rigidity and stability.' },
    { title: 'Soft-Closing Door Hinges', desc: 'Concealed European style soft-close, 6-way adjustable, easy to access and adjust.' },
    { title: 'Soft-Closing Drawer Slides', desc: 'Undermount, full extension, heavy-duty, and with smooth and fluid operation. The lock-in mechanisms provide effortless performance with the ease of adjustability.' },
    { title: 'CARB2 Compliant', desc: 'Our products undergo rigorous testing for NAF and ULEF certification, ensuring formaldehyde levels well within safety limits.' },
    { title: 'TSCA Title VI Compliant', desc: 'Certified by an EPA TSCA Title VI TPC with all of the required accreditations. Our products meet the requirement of numerical formaldehyde emission standards.' },
    { title: 'Certified Member of NKBA', desc: 'Member of the National Kitchen & Bath Association, promoting professionalism in the Kitchen and Bath industry.' },
  ]


  return (
    <main className="flex min-h-screen relative  w-full overflow-hidden flex-col items-center    lg:py-24">
      <QuoteForm />

      <div className="h-96 w-full relative">
        <div className="absolute m-auto text-center h-full text-white p-2 w-full center-col bg-black trans lg:bg-opacity-0 bg-opacity-[0.3] lg:hover:bg-opacity-25">
          <h1 className="text-4xl font-extrabold">WELCOME TO IKCO</h1>
          <h3 className="text-lg font-bold ">Wholesaler of Refined Cabinetry in New Jersey. High Quality Solid Wood Cabinets When You Need Them!</h3>
        </div>
        <img className=" object-cover w-full h-full" src={'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=876&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} alt="" />
      </div>

      <Link href={'/Catalog'} className="mb-20 text-2xl center group  text-white">
        <h1 className="border-b-2">See All catalog</h1> <ArrowBigRightDash size={32} className="group-hover:text-orange-600 trans h-full" />
      </Link>

      <div className="h-auto px-4 text-white ">
        <div className="center-col mt-4">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold">Cabinet designs</h1>
            <h1>Provide design ideas and suggestions</h1>
            <h1>Three-dimensional (3D) design</h1>
          </div>
          <div className="center p-2 gap-2">
            <img className="object-cover rounded-full w-1/3 h-40" src={'https://images.unsplash.com/photo-1631048498692-af6262577031?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} alt="" />
            <img className="object-cover rounded-full w-1/3 h-52" src={'https://images.unsplash.com/photo-1610210244369-3cca4be84722?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} alt="" />
            <img className="object-cover rounded-full w-1/3 h-64" src={'https://images.unsplash.com/photo-1591208824584-1de04f9b0664?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} alt="" />
          </div>

        </div>
        <div>
          <img className="object-cover h-24 w-full rounded-full" src={'https://images.unsplash.com/photo-1614976523626-d598aafd4fda?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} alt="" />
          <div className=" p-2">
            <h1 className="text-3xl font-bold">Fast Delivery</h1>
            <h1>Delivery to NY, NJ</h1>
            <h1>Domestic shipping available for the United States</h1>
          </div>

        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 mt-4 text-white">
        {checklist.map((item) => {
          return (<Checklist key={item.title} title={item.title} desc={item.desc} />)
        })}

      </div>
    </main >
  );
}
