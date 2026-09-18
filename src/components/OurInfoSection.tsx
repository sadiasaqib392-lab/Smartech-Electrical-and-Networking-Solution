import React from 'react';
import { User, Cpu, Wrench, Shield, Sparkles, PhoneCall, ArrowUpRight } from 'lucide-react';
import { RevealHeading, RevealText, RevealCard } from './MotionReveal';
import directorImg from '../assets/images/director_sayyam_1789705520147.jpg';
import ceoImg from '../assets/images/regenerated_image_1789708416142.png';
import technicianImg from '../assets/images/smartech_technician_1789705553613.jpg';
import { COMPANY_INFO } from '../data/companyData';

interface OurInfoSectionProps {
  onOpenQuoteModal?: (itemOrService?: string, category?: string) => void;
}

export const OurInfoSection: React.FC<OurInfoSectionProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="our-info" className="py-16 lg:py-24 bg-[#FFFFFF] border-b border-[#E8E5DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 lg:mb-16">
          <RevealText delay={0.05}>
            <div className="inline-flex items-center gap-2 bg-[#1C1917] text-white text-[10px] sm:text-[11px] px-3.5 py-1.5 font-bold uppercase tracking-widest rounded-md shadow-xs border border-stone-800">
              <Sparkles className="w-3.5 h-3.5 text-[#E14D2A]" />
              <span>Leadership & Engineering Force</span>
            </div>
          </RevealText>

          <RevealHeading delay={0.1}>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1C1917] tracking-tight">
              Our <span className="text-[#E14D2A]">Info</span>
            </h2>
          </RevealHeading>

          <RevealText delay={0.16}>
            <p className="text-[#57534E] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              Meet the executive leadership and certified technical team driving Smartech&apos;s reliable electrical, solar, networking, and industrial automation solutions in Sialkot and across Pakistan.
            </p>
          </RevealText>
        </div>

        {/* 3 Columns Single Horizontal Line Layout */}
        <div className="overflow-x-auto pb-4 sm:pb-2">
          <div className="grid grid-cols-3 gap-4 sm:gap-6 min-w-[800px] lg:min-w-0 items-stretch">

          {/* CARD 1: DIRECTOR (Sayyam Mughal) */}
          <RevealCard delay={0.06} className="h-full">
            <div className="h-full flex flex-col group relative bg-[#FAF8F5] border border-[#E8E5DF] hover:border-[#E14D2A]/60 rounded-2xl overflow-hidden p-5 sm:p-6 shadow-xs hover:shadow-xl transition-all duration-300">
              
              {/* Horizontal / Landscape Format Image */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-stone-900 border border-stone-300 shadow-sm group-hover:shadow-md transition-transform duration-500 mb-5 flex-shrink-0">
                <img
                  src={directorImg}
                  alt="Sayyam Mughal - Director at Smartech"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-2.5 left-2.5 bg-[#1C1917]/90 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-1 rounded-md border-l-2 border-[#E14D2A] flex items-center gap-1.5 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E14D2A] animate-pulse"></span>
                  DIRECTOR
                </div>
                <div className="absolute bottom-2.5 right-2.5 bg-white/95 text-[#1C1917] text-[9.5px] font-bold px-2 py-0.5 rounded shadow-sm">
                  Sayyam Mughal
                </div>
              </div>

              {/* Title & Role */}
              <div className="mb-3">
                <div className="text-[11px] font-bold text-[#E14D2A] uppercase tracking-wider mb-1">
                  Executive Leadership
                </div>
                <h3 className="font-heading text-2xl font-extrabold text-[#1C1917] tracking-tight">
                  Director
                </h3>
                <p className="text-xs font-semibold text-[#57534E] mt-0.5">
                  Sayyam Mughal &mdash; Director, Smartech
                </p>
              </div>

              {/* About Me Box */}
              <div className="flex-grow p-4 bg-white border border-[#E8E5DF] rounded-xl shadow-2xs space-y-2 mb-4">
                <div className="flex items-center gap-1.5 text-xs font-extrabold text-[#E14D2A] uppercase tracking-wider">
                  <User className="w-3.5 h-3.5 text-[#E14D2A]" />
                  <span>About Me</span>
                </div>
                <p className="text-[#3D3A37] text-xs sm:text-[13px] leading-relaxed font-normal">
                  Sayyam Mughal is the Director at Smartech, with a strong engineering background in Electrical Engineering, Embedded Systems, IoT, and Communication Technologies. He leads the development and execution of technology-driven solutions, combining technical expertise with strategic leadership, project management, and business-focused innovation. His experience spans IoT deployments, LoRaWAN, embedded systems, industrial automation, wireless communication, PCB development, smart monitoring, and renewable energy solutions. At Smartech, his vision is to deliver reliable, scalable, and innovative engineering solutions that create long-term value for clients and industries.
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap items-center gap-1.5 pt-1 mt-auto">
                <span className="px-2 py-0.5 text-[10px] font-semibold bg-[#F0EDE8] text-[#1C1917] rounded border border-[#E2DFD8]">
                  Electrical Eng.
                </span>
                <span className="px-2 py-0.5 text-[10px] font-semibold bg-[#F0EDE8] text-[#1C1917] rounded border border-[#E2DFD8]">
                  IoT &amp; LoRaWAN
                </span>
                <span className="px-2 py-0.5 text-[10px] font-semibold bg-[#F0EDE8] text-[#1C1917] rounded border border-[#E2DFD8]">
                  Embedded Systems
                </span>
                <span className="px-2 py-0.5 text-[10px] font-semibold bg-[#F0EDE8] text-[#1C1917] rounded border border-[#E2DFD8]">
                  Solar PV &amp; Energy
                </span>
              </div>

            </div>
          </RevealCard>

          {/* CARD 2: CEO */}
          <RevealCard delay={0.12} className="h-full">
            <div className="h-full flex flex-col group relative bg-[#FAF8F5] border border-[#E8E5DF] hover:border-[#1C1917]/60 rounded-2xl overflow-hidden p-5 sm:p-6 shadow-xs hover:shadow-xl transition-all duration-300">
              
              {/* Horizontal / Landscape Format Image */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-stone-900 border border-stone-300 shadow-sm group-hover:shadow-md transition-transform duration-500 mb-5 flex-shrink-0">
                <img
                  src={ceoImg}
                  alt="Chief Executive Officer (CEO) - Smartech"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-2.5 left-2.5 bg-[#1C1917]/90 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-1 rounded-md border-l-2 border-emerald-400 flex items-center gap-1.5 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  CEO
                </div>
                <div className="absolute bottom-2.5 right-2.5 bg-white/95 text-[#1C1917] text-[9.5px] font-bold px-2 py-0.5 rounded shadow-sm">
                  Chief Executive Officer
                </div>
              </div>

              {/* Title & Role */}
              <div className="mb-3">
                <div className="text-[11px] font-bold text-stone-600 uppercase tracking-wider mb-1">
                  Corporate Governance
                </div>
                <h3 className="font-heading text-2xl font-extrabold text-[#1C1917] tracking-tight">
                  CEO
                </h3>
                <p className="text-xs font-semibold text-[#57534E] mt-0.5">
                  Chief Executive Officer &mdash; Smartech
                </p>
              </div>

              {/* Leadership Overview */}
              <div className="flex-grow p-4 bg-white border border-[#E8E5DF] rounded-xl shadow-2xs space-y-2 mb-4">
                <div className="flex items-center gap-1.5 text-xs font-extrabold text-[#1C1917] uppercase tracking-wider">
                  <Shield className="w-3.5 h-3.5 text-[#E14D2A]" />
                  <span>Strategic Vision &amp; Direction</span>
                </div>
                <p className="text-[#3D3A37] text-xs sm:text-[13px] leading-relaxed font-normal">
                  Providing high-level governance, strategic growth roadmaps, and client-centric leadership across Smartech&apos;s full spectrum of operations. The CEO drives our commitment to uncompromising engineering quality, transparent turnkey pricing, tier-1 global equipment partnerships, and long-term customer relationships across residential, industrial, and commercial sectors in Pakistan.
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap items-center gap-1.5 pt-1 mt-auto">
                <span className="px-2 py-0.5 text-[10px] font-semibold bg-[#F0EDE8] text-[#1C1917] rounded border border-[#E2DFD8]">
                  Strategic Growth
                </span>
                <span className="px-2 py-0.5 text-[10px] font-semibold bg-[#F0EDE8] text-[#1C1917] rounded border border-[#E2DFD8]">
                  Tier-1 Vendor Alliances
                </span>
                <span className="px-2 py-0.5 text-[10px] font-semibold bg-[#F0EDE8] text-[#1C1917] rounded border border-[#E2DFD8]">
                  Corporate Governance
                </span>
                <span className="px-2 py-0.5 text-[10px] font-semibold bg-[#F0EDE8] text-[#1C1917] rounded border border-[#E2DFD8]">
                  Client Trust &amp; Integrity
                </span>
              </div>

            </div>
          </RevealCard>

          {/* CARD 3: OUR TECHNICIAN */}
          <RevealCard delay={0.18} className="h-full">
            <div className="h-full flex flex-col group relative bg-[#FAF8F5] border border-[#E8E5DF] hover:border-amber-600/60 rounded-2xl overflow-hidden p-5 sm:p-6 shadow-xs hover:shadow-xl transition-all duration-300">
              
              {/* Horizontal / Landscape Format Image */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-stone-900 border border-stone-300 shadow-sm group-hover:shadow-md transition-transform duration-500 mb-5 flex-shrink-0">
                <img
                  src={technicianImg}
                  alt="Our Technician - Certified Smartech Technical Specialists"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-2.5 left-2.5 bg-[#1C1917]/90 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-1 rounded-md border-l-2 border-amber-500 flex items-center gap-1.5 shadow-sm">
                  <Wrench className="w-3 h-3 text-amber-400" />
                  OUR TECHNICIAN
                </div>
                <div className="absolute bottom-2.5 right-2.5 bg-white/95 text-[#1C1917] text-[9.5px] font-bold px-2 py-0.5 rounded shadow-sm">
                  Field &amp; Lab Certified
                </div>
              </div>

              {/* Title & Role */}
              <div className="mb-3">
                <div className="text-[11px] font-bold text-amber-700 uppercase tracking-wider mb-1">
                  Field Operations
                </div>
                <h3 className="font-heading text-2xl font-extrabold text-[#1C1917] tracking-tight">
                  Our Technician
                </h3>
                <p className="text-xs font-semibold text-[#57534E] mt-0.5">
                  Certified Technical Specialists &mdash; Smartech
                </p>
              </div>

              {/* Technician Overview */}
              <div className="flex-grow p-4 bg-white border border-[#E8E5DF] rounded-xl shadow-2xs space-y-2 mb-4">
                <div className="flex items-center gap-1.5 text-xs font-extrabold text-[#E14D2A] uppercase tracking-wider">
                  <Cpu className="w-3.5 h-3.5 text-[#E14D2A]" />
                  <span>Assembly, Diagnostics &amp; Installation</span>
                </div>
                <p className="text-[#3D3A37] text-xs sm:text-[13px] leading-relaxed font-normal">
                  Our skilled technicians are the backbone of Smartech&apos;s physical project execution. Trained in strict safety protocols and precision tooling, our field team performs circuit board repairs, inverter diagnostics, optical fiber fusion splicing, solar array mounting, high-voltage panel wiring, and clean structured cabling across residential and industrial sites in Sialkot.
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap items-center gap-1.5 pt-1 mt-auto">
                <span className="px-2 py-0.5 text-[10px] font-semibold bg-[#F0EDE8] text-[#1C1917] rounded border border-[#E2DFD8]">
                  Solar Array Wiring
                </span>
                <span className="px-2 py-0.5 text-[10px] font-semibold bg-[#F0EDE8] text-[#1C1917] rounded border border-[#E2DFD8]">
                  Inverter Diagnostics
                </span>
                <span className="px-2 py-0.5 text-[10px] font-semibold bg-[#F0EDE8] text-[#1C1917] rounded border border-[#E2DFD8]">
                  Fiber Splicing
                </span>
                <span className="px-2 py-0.5 text-[10px] font-semibold bg-[#F0EDE8] text-[#1C1917] rounded border border-[#E2DFD8]">
                  24/7 Field Support
                </span>
              </div>

            </div>
          </RevealCard>

          </div>
        </div>

        {/* Quick Contact / Quote Strip */}
        <div className="mt-12 lg:mt-16 p-6 sm:p-8 bg-[#1C1917] rounded-2xl text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-stone-800">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-heading text-xl sm:text-2xl font-bold tracking-tight">
              Ready to collaborate with Smartech&apos;s engineering team?
            </h4>
            <p className="text-stone-400 text-sm">
              Speak directly with our Director, technical specialists, or request an on-site evaluation in Sialkot.
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent('Hello Smartech, I would like to consult with your engineering team.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold rounded-lg transition-colors flex items-center gap-2 shadow-md cursor-pointer"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Direct WhatsApp</span>
            </a>
            {onOpenQuoteModal && (
              <button
                onClick={() => onOpenQuoteModal('Team Consultation', 'General Inquiry')}
                className="px-4 py-2.5 bg-[#E14D2A] hover:bg-[#C83B1B] text-white text-xs sm:text-sm font-bold rounded-lg transition-colors flex items-center gap-2 shadow-md cursor-pointer"
              >
                <span>Request Quotation</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};
