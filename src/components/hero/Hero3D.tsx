"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Bot,
  Headphones,
  LayoutDashboard,
  LineChart,
  MessageSquare,
  Zap,
  Sparkles
} from "lucide-react";

export default function Hero3D() {
  const [isHovered, setIsHovered] = useState(false);
  const [activeSatellite, setActiveSatellite] = useState<number | null>(null); // Track clicked satellite

  // The 6 orbiting icons + their popup content
  const satellites = [
    { icon: Bot, color: "text-blue-500", bg: "bg-blue-100", border: "border-blue-200", title: "Автоматизация ИИ", desc: "Внедрение нейросетей для рутины. Боты закроют до 80% типовых обращений.", angle: -90 },
    { icon: LineChart, color: "text-emerald-500", bg: "bg-emerald-100", border: "border-emerald-200", title: "Управление продажами", desc: "Ведение CRM, сбор аналитики и оформление КП без вашего участия.", angle: -30 },
    { icon: MessageSquare, color: "text-cyan-500", bg: "bg-cyan-100", border: "border-cyan-200", title: "Клиентский сервис", desc: "Вежливые и оперативные ответы вашим клиентам в чатах 24/7.", angle: 30 },
    { icon: LayoutDashboard, color: "text-indigo-500", bg: "bg-indigo-100", border: "border-indigo-200", title: "Бизнес-рутина", desc: "Оформление документов, создание таблиц и презентаций по вашему ТЗ.", angle: 90 },
    { icon: Zap, color: "text-amber-500", bg: "bg-amber-100", border: "border-amber-200", title: "Оперативные задачи", desc: "Быстрые поручения: купить билеты, забронировать стол, найти отель.", angle: 150 },
    { icon: Headphones, color: "text-rose-500", bg: "bg-rose-100", border: "border-rose-200", title: "Личный секретарь", desc: "Планирование вашего календаря, организация встреч и напоминания.", angle: 210 },
  ];

  const radius = 240; // Distance of satellites from the core

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex flex-col items-center justify-center lg:justify-end lg:flex-row xl:pr-[15%]">
      {/* Container for the interactive core */}
      <div
        className="relative pointer-events-auto w-96 h-96 flex items-center justify-center translate-y-[390px] sm:translate-y-[350px] lg:-translate-y-10 scale-[0.60] sm:scale-75 lg:scale-100 opacity-90 lg:opacity-100 origin-center lg:origin-right cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setActiveSatellite(null); // Close popups on mouse leave
        }}
        onClick={(e) => {
          e.stopPropagation();
          if (!isHovered) {
            setIsHovered(!isHovered);
          } else {
            // If already hovered and clicked on empty space of core, close open popups
            setActiveSatellite(null);
          }
        }}
      >
        {/* Connection Lines (Visible only on hover) */}
        {satellites.map((sat, index) => {
          const angleInRads = (sat.angle * Math.PI) / 180;
          const x = Math.cos(angleInRads) * radius;
          const y = Math.sin(angleInRads) * radius;

          return (
            <motion.svg
              key={`line-${index}`}
              className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
              style={{ zIndex: 5 }}
            >
              <motion.line
                x1="50%"
                y1="50%"
                x2={`calc(50% + ${x}px)`}
                y2={`calc(50% + ${y}px)`}
                stroke="url(#gradient-line)"
                strokeWidth="2"
                strokeDasharray="4 4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: isHovered ? 1 : 0,
                  opacity: isHovered ? 0.4 : 0
                }}
                transition={{
                  duration: 0.5,
                  delay: isHovered ? index * 0.05 : 0,
                  ease: "easeOut"
                }}
              />
              <defs>
                <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
            </motion.svg>
          );
        })}

        {/* Orbit Rings (External) */}
        <motion.div
          animate={{ scale: isHovered ? 1 : 0.8, opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
          className="absolute w-[480px] h-[480px] border-[1px] border-slate-200 rounded-full z-0"
        />
        <motion.div
          animate={{ scale: isHovered ? 1 : 0.6, opacity: isHovered ? 0.6 : 0, rotate: isHovered ? 180 : 0 }}
          transition={{ duration: 1.5, type: "spring", bounce: 0.4, delay: 0.1 }}
          className="absolute w-[600px] h-[600px] border-[1px] border-slate-200 rounded-full border-dashed z-0"
        />

        {/* The Central Core */}
        <motion.div
          animate={{
            scale: isHovered ? 1.05 : [1, 1.05, 1],
            rotate: isHovered ? 90 : 360,
          }}
          transition={{
            scale: { duration: isHovered ? 0.4 : 4, repeat: isHovered ? 0 : Infinity, ease: "easeInOut" },
            rotate: { duration: 25, repeat: Infinity, ease: "linear" }
          }}
          className="relative z-10 w-48 h-48 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-500 to-cyan-400 p-[2px] shadow-[0_0_60px_rgba(59,130,246,0.25)] cursor-pointer group"
        >
          <div className="w-full h-full rounded-full bg-slate-50 border-4 border-white flex items-center justify-center overflow-hidden relative shadow-inner">

            {/* Ambient inner glow */}
            <motion.div
              animate={{ opacity: isHovered ? 0.9 : 0.5, scale: isHovered ? 1.2 : 1 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 bg-blue-100 blur-2xl rounded-full"
            />

            {/* Core rotating abstract rings */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="absolute w-36 h-36 border-[3px] border-blue-500/20 rounded-full border-dashed"
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className="absolute w-24 h-24 border-[2px] border-cyan-500/30 rounded-full border-dotted"
            />

            {/* Core icon */}
            <motion.div
              animate={{ rotate: isHovered ? -90 : -360 }} // Counter-rotate so it stays upright
              transition={{ rotate: { duration: 25, repeat: Infinity, ease: "linear" } }}
              className="relative z-20 flex flex-col items-center justify-center p-2"
            >
              <svg
                viewBox="0 0 65 65"
                className="w-16 h-16 drop-shadow-[0_0_12px_rgba(59,130,246,0.5)]"
                fill="url(#goldfish-gradient)"
              >
                <defs>
                  <linearGradient id="goldfish-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" /> {/* blue-500 */}
                    <stop offset="50%" stopColor="#06b6d4" /> {/* cyan-500 */}
                    <stop offset="100%" stopColor="#1e40af" /> {/* blue-800 */}
                  </linearGradient>
                </defs>
                <path fillRule="evenodd" clipRule="evenodd" d="M52.8931 14.5305C45.2632 3.73855 30.8996 2.33655 22.9496 5.37489C16.3939 7.88018 11.5479 12.4311 11.5479 12.4311C16.0844 11.5109 16.4995 14.1677 16.9567 14.969C19.9026 12.8187 27.5958 8.3455 35.1737 8.34047C42.5102 8.33578 47.377 9.49808 52.8931 14.5305ZM38.5097 12.3105C33.2514 13.3333 29.2304 16.8289 29.2304 16.8289C29.2304 16.8289 28.6632 15.4809 27.3229 14.8161C25.9826 14.1513 24.1002 14.107 24.1002 14.107C24.1002 14.107 30.56 10.2805 35.1737 9.92585C42.004 9.40052 49.3874 11.8425 51.6279 15.9596C47.9955 12.1244 41.8122 11.6681 38.5097 12.3105ZM33.2514 22.7095C31.3284 23.1919 28.1828 23.0407 28.1828 23.0407C28.1828 23.0407 29.385 22.2817 29.7973 20.7476C30.0035 19.9805 29.849 18.6 29.849 18.6C29.849 18.6 32.8682 16.0404 35.1737 15.0467C37.3273 14.1184 38.5888 13.5747 40.9329 13.4355C44.9719 13.1958 48.5111 13.9652 50.6761 17.2379C48.3049 14.5305 44.8402 14.4979 42.3516 15.4557C38.4983 16.9392 37.5921 21.6202 33.2514 22.7095ZM19.5623 55.0376C23.3341 56.6481 28.0638 57.7645 28.0638 57.7645C28.0638 57.7645 31.8702 60.7478 35.3718 61.8977C37.9646 62.7492 43.2179 62.1522 43.2179 62.1522C43.2179 62.1522 41.1163 61.074 40.9768 59.912C40.7777 58.2539 37.8258 57.8855 37.8258 57.8855C37.8258 57.8855 39.0327 58.5369 39.1889 59.5402C39.324 60.4089 39.9298 60.7253 39.9298 60.7253C39.9298 60.7253 38.0316 60.6824 36.8449 60.198C35.5411 59.6663 33.6647 57.5998 33.6647 57.5998C33.6647 57.5998 39.3448 56.4241 40.778 55.7932C49.0552 52.1504 53.6913 48.806 57.7391 40.095C61.8408 30.6856 61.6383 14.5707 46.4068 4.53342C42.2293 1.78038 32.5453 -2.14703 21.7487 1.43172C11.4238 4.85391 1.90755 14.4108 0 28.4874C0.659094 27.3063 8.7469 17.0508 12.6006 18.3895C14.1886 19.016 14.8692 22.5291 14.8692 22.5291C14.8692 22.5291 18.4489 18.1156 21.1825 17.2322C22.3998 16.8383 23.3325 16.9104 24.3409 17.6912C26.8257 19.6188 24.0982 22.9186 22.4595 24.1889L20.0444 25.787C20.0444 25.787 26.6561 27.8803 33.3476 26.084C36.3963 25.266 38.0192 23.9378 39.7471 22.0956C41.8092 19.8971 42.8354 17.7595 45.7272 17.6087C49.4605 17.4206 52.1458 21.1449 52.8931 25.1125C53.7694 29.766 53.6789 32.0427 51.6279 37.3111C48.442 45.4961 38.685 50.0092 33.3476 50.5778C28.0933 51.1393 26.182 50.8879 22.2134 49.7085C18.929 48.3933 16.6483 46.8881 14.2788 44.4093C13.2918 43.375 13.1416 42.9476 12.3639 41.7766C13.6532 40.9616 18.0815 37.649 22.6325 36.9638C32.4897 35.48 43.8083 42.6536 43.8083 42.6536C43.8083 42.6536 35.4442 31.6867 23.3123 31.4976C15.1072 31.3699 4.69445 39.6307 4.65489 40.2331C4.21907 40.4078 5.70757 44.2517 8.02311 46.8572C11.3471 50.5966 14.4763 52.8655 19.5623 55.0376Z" />
              </svg>
            </motion.div>
          </div>
        </motion.div>

        {/* Hover hint (appears when not hovered) */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isHovered ? 0 : 1, y: isHovered ? 10 : 0 }}
          transition={{ duration: 0.4 }}
          className="absolute -bottom-16 z-10 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-slate-100 text-sm font-medium text-slate-500 pointer-events-none"
        >
          Наведите курсор
        </motion.div>

        {/* Satellites */}
        {satellites.map((sat, index) => {
          // Calculate ending position on the circle based on angle
          const angleInRads = (sat.angle * Math.PI) / 180;
          const x = Math.cos(angleInRads) * radius;
          const y = Math.sin(angleInRads) * radius;

          const Icon = sat.icon;

          return (
            <motion.div
              key={index}
              className="absolute z-20 flex"
              animate={{
                x: isHovered ? x : 0,
                y: isHovered ? y : 0,
                scale: isHovered ? 1 : 0,
                opacity: isHovered ? (activeSatellite === null || activeSatellite === index ? 1 : 0.5) : 0,
              }}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 18,
                mass: 1.2,
                delay: isHovered ? index * 0.05 : 0, // staggered entrance
              }}
            >
              <div
                className={`flex items-center justify-center w-14 h-14 rounded-full shadow-lg ${sat.bg} border-2 ${sat.border} backdrop-blur-sm hover:scale-110 hover:shadow-xl transition-all duration-300 cursor-pointer relative group`}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveSatellite(activeSatellite === index ? null : index);
                }}
              >
                <Icon size={24} className={sat.color} strokeWidth={2} />

                {/* Tooltip-like label (visible on hover if not clicked) */}
                {activeSatellite !== index && (
                  <div className="absolute top-[115%] px-3 py-1.5 rounded-lg bg-white shadow-lg border border-slate-100 text-xs font-bold text-slate-700 opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap -translate-y-2 group-hover:translate-y-0 pointer-events-none">
                    {sat.title}
                  </div>
                )}
              </div>

              {/* Popup Card (visible when clicked) */}
              {activeSatellite === index && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  className="absolute top-16 left-1/2 -translate-x-1/2 w-48 p-3 rounded-xl glass bg-white/90 shadow-2xl z-40 text-left pointer-events-none"
                >
                  <h4 className={`text-sm font-bold mb-1 ${sat.color}`}>{sat.title}</h4>
                  <p className="text-xs text-slate-600 leading-tight">{sat.desc}</p>
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div >
  );
}
