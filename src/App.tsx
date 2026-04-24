/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ReactNode } from 'react';
import { motion } from 'motion/react';
import { 
  Rocket, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Gift, 
  Award, 
  MessageCircle, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Send,
  Music2,
  Star as StarIcon,
  ChevronRight,
  Sparkles,
  Target
} from 'lucide-react';

// --- Background Components ---
const BackgroundEffects = () => (
  <div className="nebula-container">
    <div className="star-grid" />
    <div className="nebula-purple" />
    <div className="nebula-blue" />
    <div className="noise fixed inset-0 z-[100]" />
  </div>
);

// --- UI Components ---
const GlassCard = ({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number; key?: any }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay }}
    className={`glass rounded-2xl overflow-hidden glass-hover ${className}`}
  >
    {children}
  </motion.div>
);

const Badge = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <span className={`px-3 py-1 rounded-full text-[10px] font-display uppercase tracking-[0.2em] font-bold border ${className}`}>
    {children}
  </span>
);

export default function App() {
  return (
    <div className="relative min-h-screen selection:bg-tiktok-pink/30">
      <BackgroundEffects />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/[0.05] backdrop-blur-xl bg-space-black/50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-tiktok-pink to-tiktok-cyan flex items-center justify-center shadow-lg shadow-tiktok-pink/20">
              <Rocket className="w-6 h-6 text-white" />
            </div>
            <span className="font-display text-xl font-black tracking-[0.3em] uppercase">PLANETA</span>
          </motion.div>
          
          <div className="hidden md:flex items-center gap-8">
            {['Inicio', 'Nosotros', 'Beneficios', 'Requisitos'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-[11px] font-display uppercase tracking-widest text-gray-400 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <motion.a 
            href="#contact"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="px-6 py-2.5 rounded-lg border border-white/10 text-[10px] font-display uppercase tracking-widest font-bold hover:bg-white/5 transition-all"
          >
            Unirse Ahora
          </motion.a>
        </div>
      </nav>

      <main>
        {/* HERO SECTION */}
        <section id="inicio" className="pt-48 pb-24 px-6 relative">
          <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative z-10 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6"
              >
                <Badge className="border-tiktok-pink/50 text-tiktok-pink bg-tiktok-pink/10">
                  Agencia Oficial TikTok 2025
                </Badge>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl lg:text-8xl font-display font-black leading-[0.95] mb-8"
              >
                IMPULSA TU <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-tiktok-pink via-tiktok-cyan to-tiktok-pink bg-[length:200%_auto] animate-gradient">
                  STREAMING
                </span> <br />
                AL NIVEL ELITE
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-gray-400 text-lg md:text-xl max-w-xl mb-12 leading-relaxed"
              >
                La plataforma líder en reclutamiento para streamers de Liga C. 
                Soporte técnico, financiero y comunidad en un solo lugar.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <a 
                  href="#contact"
                  className="px-10 py-5 bg-white text-space-black rounded-xl font-display text-xs font-black tracking-widest hover:bg-tiktok-cyan hover:text-white transition-all shadow-xl shadow-white/5"
                >
                  EMPEZAR AHORA
                </a>
                <a 
                  href="#nosotros"
                  className="px-10 py-5 glass border-white/20 rounded-xl font-display text-xs font-black tracking-widest hover:bg-white/5 transition-all text-white flex items-center justify-center gap-2 group"
                >
                  CONOCER MÁS <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            </div>

            {/* Visual Element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="absolute inset-0 bg-tiktok-pink/20 blur-[120px] rounded-full animate-pulse" />
              <div className="relative z-10 p-4">
                <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl relative group">
                  <img 
                    src="https://images.unsplash.com/photo-1598550476439-6847785fce66?q=80&w=1000&auto=format&fit=crop" 
                    alt="Professional Streamer" 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-space-black via-transparent to-transparent opacity-80" />
                  
                  {/* Floating Identity Card */}
                  <div className="absolute bottom-10 left-10 right-10">
                    <GlassCard className="!bg-white/10 backdrop-blur-md border-white/20 p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full border-2 border-tiktok-cyan p-0.5">
                          <img 
                            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" 
                            alt="Avatar" 
                            className="w-full h-full rounded-full bg-space-dark"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <div>
                          <div className="text-white font-display text-sm font-black uppercase">Elite Streamer</div>
                          <div className="text-tiktok-cyan text-[10px] font-bold tracking-widest uppercase">Verified Talent</div>
                        </div>
                      </div>
                    </GlassCard>
                  </div>

                  {/* Decorative Neon Elements */}
                  <div className="absolute top-8 right-8">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-tiktok-pink animate-ping" />
                      <Badge className="bg-tiktok-pink/20 border-tiktok-pink text-tiktok-pink !text-[8px]">Live Now</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* STATS SECTION */}
        <section className="py-12 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Streamers Activos', val: '500+' },
                { label: 'Liga C Division', val: 'Tier 1' },
                { label: 'Puntos Diarios', val: '1.2M+' },
                { label: 'Soporte', val: '24/7' },
              ].map((stat, i) => (
                <GlassCard key={i} className="text-center p-8 bg-transparent border-white/[0.03]" delay={i * 0.1}>
                  <div className="text-3xl md:text-4xl font-display font-black mb-2 text-white">{stat.val}</div>
                  <div className="text-[10px] font-display uppercase tracking-widest text-gray-500">{stat.label}</div>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="nosotros" className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <Badge className="border-tiktok-cyan/50 text-tiktok-cyan mb-6">Nuestra Misión</Badge>
                <h2 className="text-4xl md:text-6xl font-display font-black mb-10 leading-[0.95]">
                  TRANSFORMAMOS EL CONTENIDO EN <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-tiktok-pink to-tiktok-cyan">LEGADO DIGITAL</span>
                </h2>
                <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                  <p>
                    Planeta nació con una visión clara: Profesionalizar el streaming en TikTok. 
                    No somos solo una agencia de representación, somos una incubadora de alto rendimiento.
                  </p>
                  <p>
                    Creemos en el talento de Liga C y sabemos que con la dirección correcta, 
                    cada live se convierte en una oportunidad de crecimiento masivo.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-5 grid grid-cols-1 gap-6">
                {[
                  { icon: <Target />, title: 'Estrategia', desc: 'Análisis de métricas y optimización de contenido.' },
                  { icon: <ShieldCheck />, title: 'Seguridad', desc: 'Protección de cuenta y pagos garantizados.' },
                ].map((item, i) => (
                  <GlassCard key={i} className="p-8 flex gap-6" delay={0.2 + (i * 0.1)}>
                    <div className="w-12 h-12 rounded-xl bg-tiktok-pink/10 flex items-center justify-center flex-shrink-0 text-tiktok-pink">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-display uppercase mb-2">{item.title}</h4>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  </GlassCard>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* BENEFITS SECTION - Bento Layout */}
        <section id="beneficios" className="py-32 px-6 bg-white/[0.01]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <Badge className="mb-4 border-white/10">Beneficios Premium</Badge>
              <h2 className="text-4xl md:text-6xl font-display font-black">LA FUERZA DE PLANETA</h2>
            </div>
            
            <div className="grid md:grid-cols-6 gap-4">
              <GlassCard className="md:col-span-3 p-10 flex flex-col justify-end min-h-[300px]">
                <DollarSign className="w-12 h-12 text-yellow-400 mb-6" />
                <h3 className="text-2xl font-display uppercase mb-4">Ganancias Reales</h3>
                <p className="text-gray-500">Supera los $100 USD mensuales con nuestro sistema de incentivos y soporte en lives de alto impacto.</p>
              </GlassCard>
              
              <GlassCard className="md:col-span-3 p-10 flex flex-col justify-end min-h-[300px] border-tiktok-pink/20">
                <Users className="w-12 h-12 text-tiktok-pink mb-6" />
                <h3 className="text-2xl font-display uppercase mb-4">Comunidad Elite</h3>
                <p className="text-gray-500">Únete a un ecosistema privado de streamers donde compartimos estrategias y raids constantes.</p>
              </GlassCard>

              <GlassCard className="md:col-span-2 p-8">
                <TrendingUp className="w-8 h-8 text-tiktok-cyan mb-4" />
                <h4 className="font-display uppercase mb-2">Escalabilidad</h4>
                <p className="text-xs text-gray-500">Sube de nivel más rápido con nuestro coaching personalizado.</p>
              </GlassCard>
              
              <GlassCard className="md:col-span-2 p-8">
                <Gift className="w-8 h-8 text-pink-500 mb-4" />
                <h4 className="font-display uppercase mb-2">Welcome Gift</h4>
                <p className="text-xs text-gray-500">Diamantes o USD inmediatos al unirte a nuestras filas.</p>
              </GlassCard>
              
              <GlassCard className="md:col-span-2 p-8">
                <Award className="w-8 h-8 text-orange-400 mb-4" />
                <h4 className="font-display uppercase mb-2">Reconocimiento</h4>
                <p className="text-xs text-gray-500">Premios especiales por consistencia y calidad de contenido.</p>
              </GlassCard>
            </div>
          </div>
        </section>

        {/* LEVELS SECTION */}
        <section id="niveles" className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <Badge className="mb-4 border-yellow-500/50 text-yellow-500">Programa de Bienvenida</Badge>
              <h2 className="text-4xl md:text-6xl font-display font-black">PROGRAMA DE IMPULSO</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                { tier: 'LEGACY', level: 'C1 - C2', gift: '4,888 Puntos', sub: 'O $50 USD (Negociable)', accent: 'border-yellow-500/30' },
                { tier: 'PRIME', level: 'C3', gift: '3,000 Puntos', sub: 'O $20 USD (Negociable)', accent: 'border-tiktok-cyan/30' },
                { tier: 'ELITE', level: 'C4', gift: '1,000 Puntos', sub: 'Soporte Premium', accent: 'border-tiktok-pink/30' },
                { tier: 'CORE', level: 'C5', gift: '500 - 1,000 Puntos', sub: 'Asignación Inicial', accent: 'border-white/10' },
              ].map((item, i) => (
                <GlassCard key={i} className={`p-8 group text-center ${item.accent}`} delay={i * 0.1}>
                  <div className="text-[9px] font-display font-bold tracking-[0.4em] opacity-30 mb-6 uppercase">{item.tier} Division</div>
                  <h4 className="text-4xl font-display font-black mb-8 group-hover:scale-110 transition-transform">{item.level}</h4>
                  <div className="bg-white/5 p-6 rounded-xl border border-white/5">
                    <div className="text-sm font-display text-white mb-1 uppercase tracking-wider">{item.gift}</div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-tighter">{item.sub}</div>
                  </div>
                </GlassCard>
              ))}
            </div>
            
            <GlassCard className="p-8 border-gradient">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center flex-shrink-0 animate-float shadow-xl shadow-orange-500/20">
                  <StarIcon className="text-white w-8 h-8 fill-white" />
                </div>
                <div className="text-center md:text-left flex-1">
                  <h4 className="text-xl font-display font-black mb-2 flex items-center justify-center md:justify-start gap-3">
                    <Sparkles className="w-5 h-5 text-yellow-400" />
                    BONO ESPECIAL DE TALENTO
                  </h4>
                  <p className="text-gray-400 leading-relaxed max-w-3xl">
                    Si eres un streamer destacado (+25 días live), mantienes una comunicación fluida y <span className="text-white font-bold underline decoration-tiktok-pink">NO solicitas boletos dorados</span>, podemos aumentar significativamente tu regalo. 
                    Buscamos socios estratégicos, no solicitudes temporales.
                  </p>
                </div>
                <Badge className="border-tiktok-pink/50 text-tiktok-pink animate-pulse">Update Now</Badge>
              </div>
            </GlassCard>
          </div>
        </section>

        {/* JOIN SECTION */}
        <section id="requisitos" className="py-32 px-6">
          <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { step: '01', title: 'CONTACTO', desc: 'Conecta vía Telegram o TikTok.' },
                  { step: '02', title: 'AUDICIÓN', desc: 'Evaluamos tu nivel actual en Liga C.' },
                  { step: '03', title: 'ACUERDO', desc: 'Negociamos tu bono de bienvenida.' },
                  { step: '04', title: 'ONBOARDING', desc: '¡Bienvenido a la flota Planeta!' },
                ].map((item, i) => (
                  <GlassCard key={i} className="p-8 group hover:bg-tiktok-pink/5">
                    <div className="text-xs font-display font-black text-tiktok-pink mb-4 group-hover:translate-x-2 transition-transform">STEP {item.step}</div>
                    <h5 className="text-lg font-display uppercase mb-2">{item.title}</h5>
                    <p className="text-sm text-gray-500 leading-tight">{item.desc}</p>
                  </GlassCard>
                ))}
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <Badge className="border-tiktok-pink/50 text-tiktok-pink mb-6">Requisitos de Ingreso</Badge>
              <h2 className="text-4xl md:text-6xl font-display font-black mb-10 leading-[0.95]">¿CUMPLES CON EL <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-tiktok-pink to-tiktok-cyan">ESTÁNDAR?</span></h2>
              <ul className="space-y-6">
                {[
                  'Streamer con actividad diaria',
                  'Posición comprobable en Liga C',
                  'Ética de trabajo y buena actitud',
                  'Disponibilidad horaria estable',
                  'Cero tolerancia a boletos dorados',
                  'No estar afiliado a ninguna otra agencia',
                  'Más de 7 días de directos en el mes actual',
                ].map((item, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 text-gray-300"
                  >
                    <CheckCircle2 className="w-5 h-5 text-tiktok-pink" />
                    <span className="text-lg">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section id="contact" className="py-32 px-6 relative overflow-hidden">
          <div className="max-w-5xl mx-auto rounded-[3rem] border-gradient relative overflow-hidden p-12 md:p-24 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-tiktok-pink/20 via-transparent to-tiktok-cyan/10 -z-10" />
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-8xl font-display font-black mb-10 text-white leading-none">EL FUTURO <br/>ES AHORA</h2>
              <p className="text-gray-400 text-xl md:text-2xl mb-16 max-w-2xl mx-auto italic">
                "No solo buscamos streamers, forjamos leyendas."
              </p>
              
              <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                <motion.a
                  href="https://t.me/EBMG360"
                  target="_blank"
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full md:w-auto flex items-center justify-center gap-4 px-12 py-6 bg-[#0088cc] rounded-2xl font-display text-xs font-black tracking-widest shadow-2xl shadow-blue-500/20"
                >
                  <Send className="w-5 h-5" /> TELEGRAM CEO
                </motion.a>
                
                <motion.a
                  href="https://www.tiktok.com/@ntl171999"
                  target="_blank"
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full md:w-auto flex items-center justify-center gap-4 px-12 py-6 bg-black border border-white/20 rounded-2xl font-display text-xs font-black tracking-widest hover:border-tiktok-pink/50 transition-colors"
                >
                  <Music2 className="w-5 h-5" /> TIKTOK OFFICIAL
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="py-20 px-6 border-t border-white/5 relative z-10 bg-space-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                <Rocket className="text-tiktok-pink w-6 h-6" />
              </div>
              <div>
                <div className="font-display text-xl font-black tracking-[0.2em]">PLANETA</div>
                <div className="text-[8px] font-display uppercase tracking-[0.3em] text-gray-500">Elite Agency Division</div>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8">
              {['Inicio', 'Nosotros', 'Niveles', 'Telegram'].map((link) => (
                <a key={link} href="#" className="text-[10px] font-display uppercase tracking-widest text-gray-400 hover:text-white transition-colors">{link}</a>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/[0.03]">
            <p className="text-[9px] font-display uppercase tracking-[0.3em] text-gray-600">
              © {new Date().getFullYear()} Planeta Agency - Todos los derechos reservados.
            </p>
            <div className="flex gap-4">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[9px] font-display uppercase tracking-widest text-gray-600">Server Status: Operational</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
