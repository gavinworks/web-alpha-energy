"use client";

import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const team = [
  {
    name: "Mathew Reed",
    role: "Company Director",
    bio: "Ten years in energy efficiency, joining during the early CERT & CESP schemes before transitioning to ECO management. Previously worked for both installers and managing agents, specializing in operational excellence, scheme management, and contract delivery.",
    expertise: ["Operational Excellence", "Scheme Management", "Contract Delivery"],
  },
  {
    name: "Ian Beedham",
    role: "Company Director",
    bio: "Over four years at director level in the ECO industry. Previously held middle/senior management positions in the Water & Sewerage Industry for 10+ years, providing regulatory expertise. Specializes in business, commercial, financial, contract, and operational management.",
    expertise: ["Financial Management", "Regulatory Expertise", "Business Development"],
  },
  {
    name: "Marc Stevens",
    role: "Operations Director",
    bio: "Ten years in energy efficiency, beginning with installation work focusing on surveys and EPCs. Extensive ECO knowledge with qualifications as a DEA/GDA and Retrofit Coordinator, managing energy efficiency schemes and SWI projects.",
    expertise: ["DEA/GDA Qualified", "Retrofit Coordinator", "SWI Projects"],
  },
];

export function Leadership() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 mb-6">
            <span className="text-sm font-medium text-primary">Our Team</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
            Meet Our{" "}
            <span className="text-primary">Leadership Team</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our experienced team brings decades of combined expertise in energy
            efficiency and ECO scheme management.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl p-8 border-2 border-border hover:border-primary/30 transition-all shadow-sm hover:shadow-lg"
            >
              {/* Avatar */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                  <p className="text-primary font-medium">{member.role}</p>
                </div>
              </div>

              {/* Bio */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {member.bio}
              </p>

              {/* Expertise Tags */}
              <div className="flex flex-wrap gap-2">
                {member.expertise.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Company Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground">
            Company Number: <span className="font-semibold text-foreground">12082507</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
