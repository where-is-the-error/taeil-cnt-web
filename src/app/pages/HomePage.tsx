import { motion } from 'motion/react';

export function HomePage() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/src/imports/Timelapse._Sun_setting__people_m__202605071312.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#0E2D5E]/70" />
      </div>

      
<div className="relative z-10 w-full h-screen flex items-center justify-center px-6 lg:px-12">
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: 'easeOut' }}
    
    className="max-w-5xl w-full flex flex-col items-center" 
  >
    <h1 className="mb-8 text-white tracking-tight leading-[0.95] text-center font-medium text-[100px]">
      더 나은 내일을 건설합니다
    </h1>

    <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl leading-relaxed text-center">
      1994년 설립 이래, 철근 콘크리트 전문기업으로서<br />
      대한민국 건설산업의 미래를 선도하고 있습니다.
    </p>
  </motion.div>
</div>

      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="text-xs text-white/50 tracking-widest">SCROLL</div>
        <div className="w-px h-16 bg-gradient-to-b from-white/50 to-transparent" />
      </motion.div>
    </section>
  );
}