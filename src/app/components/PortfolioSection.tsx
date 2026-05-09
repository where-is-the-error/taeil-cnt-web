import { motion } from 'motion/react';
import { Calendar, Building2, Filter } from 'lucide-react';
import { useState } from 'react';

interface Project {
  title: string;
  client: string;
  contractor: string;
  period: string;
  status: string;
  image: string;
}

interface PortfolioSectionProps {
  projects: Project[];
}

export function PortfolioSection({ projects }: PortfolioSectionProps) {
  const [selectedFilter, setSelectedFilter] = useState('전체');
  const filters = ['전체', '진행', '완료'];

  const filteredProjects = selectedFilter === '전체'
    ? projects
    : projects.filter(p => p.status === selectedFilter);

  return (
    <section id="portfolio" className="py-40 bg-[#F3F5F8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-sm text-[#1A5CB8] tracking-[0.2em] mb-6">PORTFOLIO</div>
            <h2 className="text-5xl lg:text-6xl text-[#0E2D5E] mb-12">
              공사 수주현황
            </h2>
          </motion.div>

          {/* Filters */}
          <div className="flex items-center gap-4">
            <Filter className="w-5 h-5 text-[#374151]/50" />
            <div className="flex gap-3">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-6 py-2 text-sm transition-all ${
                    selectedFilter === filter
                      ? 'bg-[#0E2D5E] text-white'
                      : 'bg-white text-[#374151] hover:bg-[#F3F5F8]'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white overflow-hidden hover:shadow-2xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#F3F5F8]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 text-xs tracking-wider ${
                    project.status === '진행'
                      ? 'bg-[#1A5CB8] text-white'
                      : 'bg-[#374151] text-white'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 space-y-6">
                <h3 className="text-xl text-[#0E2D5E] leading-tight">
                  {project.title}
                </h3>

                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <Building2 className="w-4 h-4 text-[#374151]/50 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-[#374151]/60">발주처</div>
                      <div className="text-[#374151]">{project.client}</div>
                    </div>
                  </div>

                  {project.contractor !== '무' && (
                    <div className="flex items-start gap-3">
                      <Building2 className="w-4 h-4 text-[#374151]/50 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-[#374151]/60">원도급사</div>
                        <div className="text-[#374151]">{project.contractor}</div>
                      </div>
                    </div>
                  )}

                  <div className="flex items-start gap-3">
                    <Calendar className="w-4 h-4 text-[#374151]/50 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-[#374151]/60">공사기간</div>
                      <div className="text-[#374151]">{project.period}</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}