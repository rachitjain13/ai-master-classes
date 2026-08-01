// "use client";

// import { motion } from "framer-motion";
// import {
//   Globe,
//   Bot,
// //   Youtube,
//   FileText,
//   Package,
//   Building2,
//   Workflow,
//   Briefcase,
//   ArrowRight,
// } from "lucide-react";

// import Section from "../ui/Section";
// import Container from "../ui/Container";
// import Heading from "../ui/Heading";

// const projects = [
//   {
//     icon: Globe,
//     title: "AI Website",
//     description: "Create modern websites using AI tools.",
//   },
//   {
//     icon: Bot,
//     title: "AI Chatbot",
//     description: "Build smart assistants for businesses.",
//   },
// //   {
// //     icon: Youtube,
// //     title: "Faceless YouTube",
// //     description: "Create automated YouTube channels.",
// //   },
//   {
//     icon: FileText,
//     title: "AI Resume",
//     description: "Offer resume and LinkedIn services.",
//   },
//   {
//     icon: Package,
//     title: "Digital Products",
//     description: "Sell ebooks, templates and AI assets.",
//   },
//   {
//     icon: Building2,
//     title: "AI Agency",
//     description: "Launch AI-powered client services.",
//   },
//   {
//     icon: Workflow,
//     title: "AI Automation",
//     description: "Automate repetitive business tasks.",
//   },
//   {
//     icon: Briefcase,
//     title: "Freelance Services",
//     description: "Start earning with AI-powered skills.",
//   },
// ];

// export default function WhatYouWillBuild() {
//   return (
//     <Section className="bg-white py-28">
//       <Container>

//         <motion.div
//           initial={{ opacity: 0, y: 25 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="mx-auto mb-20 max-w-3xl text-center"
//         >
//           <span className="mb-5 inline-flex rounded-full border border-black/10 bg-neutral-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em]">
//             Build With AI
//           </span>

//           <Heading
//             title="After Reading This Book"
//             subtitle="Build practical AI-powered projects, services and business ideas using the skills you'll learn."
//             align="center"
//           />
//         </motion.div>
//                 {/* Projects Grid */}
//         <motion.div
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.2 }}
//           variants={{
//             hidden: {},
//             show: {
//               transition: {
//                 staggerChildren: 0.08,
//               },
//             },
//           }}
//           className="grid gap-6 md:grid-cols-2 xl:grid-cols-4"
//         >
//           {projects.map((project) => {
//             const Icon = project.icon;

//             return (
//               <motion.div
//                 key={project.title}
//                 variants={{
//                   hidden: {
//                     opacity: 0,
//                     y: 30,
//                   },
//                   show: {
//                     opacity: 1,
//                     y: 0,
//                   },
//                 }}
//                 whileHover={{
//                   y: -8,
//                   scale: 1.02,
//                 }}
//                 transition={{
//                   duration: 0.25,
//                 }}
//                 className="group rounded-[28px] border border-neutral-200 bg-white p-8 shadow-sm transition-all hover:border-black hover:shadow-xl"
//               >
//                 {/* Icon */}
//                 <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-neutral-200 bg-neutral-50 transition-all duration-300 group-hover:bg-black">
//                   <Icon
//                     className="h-8 w-8 text-black transition-colors duration-300 group-hover:text-white"
//                     strokeWidth={1.8}
//                   />
//                 </div>

//                 {/* Title */}
//                 <h3 className="text-2xl font-bold tracking-tight text-black">
//                   {project.title}
//                 </h3>

//                 {/* Description */}
//                 <p className="mt-4 min-h-[72px] leading-7 text-neutral-600">
//                   {project.description}
//                 </p>

//                 {/* Divider */}
//                 <div className="my-6 h-px bg-neutral-200" />

//                 {/* Footer */}
//                 <div className="flex items-center justify-between">
//                   <span className="text-sm font-medium text-neutral-500">
//                     Learn Inside
//                   </span>

//                   <motion.div
//                     whileHover={{ x: 4 }}
//                     transition={{ duration: 0.2 }}
//                     className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200"
//                   >
//                     <ArrowRight
//                       className="h-5 w-5"
//                       strokeWidth={2}
//                     />
//                   </motion.div>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </motion.div>
//                 {/* Bottom CTA */}
//         <motion.div
//           initial={{ opacity: 0, y: 25 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{
//             duration: 0.6,
//             delay: 0.2,
//           }}
//           className="mt-24"
//         >
//           <div className="overflow-hidden rounded-[36px] border border-neutral-200 bg-neutral-50 px-10 py-14 text-center">

//             <span className="inline-flex rounded-full border border-neutral-300 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-600">
//               Your Next Step
//             </span>

//             <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-bold tracking-tight text-black lg:text-5xl">
//               Learn AI.
//               <br />
//               Build Real Projects.
//               <br />
//               Create New Opportunities.
//             </h2>

//             <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-neutral-600">
//               This book is designed to help you move beyond theory. Follow the
//               roadmap, complete the practical chapters and apply AI to real
//               projects, freelancing, business workflows and digital products.
//             </p>

//             <motion.a
//               href="#pricing"
//               whileHover={{
//                 scale: 1.03,
//                 y: -2,
//               }}
//               whileTap={{
//                 scale: 0.98,
//               }}
//               className="mt-10 inline-flex items-center gap-3 rounded-full bg-black px-8 py-4 text-base font-semibold text-white transition"
//             >
//               Get Instant Access

//               <ArrowRight
//                 className="h-5 w-5"
//                 strokeWidth={2}
//               />
//             </motion.a>

//           </div>
//         </motion.div>

//       </Container>
//     </Section>
//   );
// }