import Link from "next/link"



const AboutCTA=()=>{
    return (
        <>
        
        <section className="w-full bg-gradient-to-r from-blue-600 to-blue-400 text-center py-16">
  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
    Not Outsourcing—Building Growth
  </h2>
  <p className="text-lg md:text-xl text-white/90 mb-6 max-w-2xl mx-auto">
    Build your growth capability with precision, clarity, and accountability. Ready to
    experience the difference?
  </p>
<Link href="/schedule-meeting">
  <button className="px-6 py-3 rounded-xl bg-white text-[#4348F9] font-semibold shadow-md hover:shadow-lg transition cursor-pointer">
    Start Your Growth Journey →
  </button>
</Link>
</section>
        </>
    )
}
export default AboutCTA