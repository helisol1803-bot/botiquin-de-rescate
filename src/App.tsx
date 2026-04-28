/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  Clock, 
  CheckCircle2, 
  XCircle, 
  Star, 
  ShieldCheck, 
  BookOpen, 
  Download, 
  ChevronDown, 
  ChevronUp,
  Brain,
  Sparkles,
  Users,
  Smile,
  MessageCircle,
  Home,
  Zap,
  Gift,
  AlertCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Section = ({ children, className = "", id = "" }: { children: React.ReactNode, className?: string, id?: string }) => (
  <section id={id} className={`py-8 px-6 md:py-12 ${className}`}>
    <div className="max-w-5xl mx-auto">
      {children}
    </div>
  </section>
);

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 py-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left font-semibold text-lg hover:text-orange-600 transition-colors"
      >
        <span>{question}</span>
        {isOpen ? <ChevronUp className="text-orange-500" /> : <ChevronDown className="text-gray-400" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="mt-4 text-gray-600 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(19 * 60 + 47); // 19:47 in seconds

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="flex gap-4 justify-center font-mono text-4xl md:text-6xl font-bold text-red-600">
      <div className="flex flex-col items-center">
        <span>{minutes.toString().padStart(2, '0')}</span>
        <span className="text-xs uppercase font-sans text-gray-500">Minutos</span>
      </div>
      <span>:</span>
      <div className="flex flex-col items-center">
        <span>{seconds.toString().padStart(2, '0')}</span>
        <span className="text-xs uppercase font-sans text-gray-500">Segundos</span>
      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [showStickyCta, setShowStickyCta] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyCta(window.scrollY > 800);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-orange-200">
      
      {/* 1 & 2. Hero Section */}
      <header className="pt-10 pb-4 px-6 text-center bg-gradient-to-b from-blue-50 to-white overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center text-left"
        >
          <div className="order-2 md:order-1">
            <div className="flex justify-start mb-6">
              <span className="bg-orange-100 text-orange-700 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                Guía Digital de Intervención Inmediata
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-brand-dark leading-tight mb-6">
              ¿Te duele ver a tu hijo frustrado, ansioso o con rabietas y no sabes cómo ayudarlo? <span className="inline-block">💔</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-10">
              Ayuda a tu hijo a recuperar la calma, gestionar sus emociones y fortalecer su autoestima de forma <span className="text-orange-600 font-bold">INMEDIATA</span> con actividades prácticas.
            </p>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="order-1 md:order-2 relative"
          >
            <div className="absolute inset-0 bg-orange-500/20 blur-3xl rounded-full animate-pulse" />
            <div className="relative">
              <img 
                src="https://i.postimg.cc/W16WphrN/mama.jpg" 
                alt="Madre abrazando tiernamente a su hijo que llora, brindando consuelo y calma" 
                className="relative rounded-[3rem] shadow-2xl border-8 border-white object-cover w-full aspect-square z-10"
                referrerPolicy="no-referrer"
                crossOrigin="anonymous"
              />
              {/* Botiquín visual element */}
              <motion.div 
                initial={{ rotate: -10, scale: 0.8 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ delay: 0.5, type: 'spring' }}
                className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl z-20 border-2 border-red-100 flex items-center gap-3"
              >
                <div className="bg-red-500 p-2 rounded-lg">
                  <Heart className="w-6 h-6 text-white fill-white" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-tighter">Rescate</p>
                  <p className="text-sm font-black text-brand-dark">EMOCIONAL</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </header>

      {/* 3. Historia */}
      <Section className="bg-white !pt-0">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://i.postimg.cc/3Rv7cX4N/cosmos-image-1775665531043.jpg" 
              alt="Niño expresando frustración y necesidad de apoyo emocional" 
              className="rounded-3xl shadow-2xl object-cover w-full aspect-[4/5]"
              referrerPolicy="no-referrer"
              crossOrigin="anonymous"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-brand-dark">Imagina este escenario...</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Son las 7 de la mañana, tu hijo tiene una rabieta porque no encuentra su juguete favorito, tú ya estás llegando tarde al trabajo, y sientes cómo la ansiedad te invade...
            </p>
            <p className="text-xl font-bold text-brand-dark italic">¿Te suena familiar?</p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Como madre, sabes que detrás de cada rabieta, cada "no quiero" y cada lágrima, hay emociones reales que tu hijo no sabe cómo expresar. Y lo más frustrante es que, aunque tu corazón de madre quiere ayudarlo, muchas veces <strong>no sabes exactamente qué decir o qué hacer</strong>.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* 4. UVP */}
      <Section className="bg-blue-50 rounded-[3rem] my-6">
        <div className="text-center mb-8">
          <h2 className="text-sm font-bold text-orange-600 uppercase tracking-widest mb-4">Presentamos la Guía:</h2>
          <h3 className="text-4xl md:text-5xl font-black text-brand-dark mb-6">
            EL BOTIQUÍN DE RESCATE EMOCIONAL
          </h3>
          <div className="flex justify-center mb-10">
            <img 
              src="https://i.postimg.cc/q78XpY36/botiquin.jpg" 
              alt="Botiquín de Rescate Emocional" 
              className="max-w-2xl w-full rounded-3xl shadow-xl border-4 border-white"
              referrerPolicy="no-referrer"
              crossOrigin="anonymous"
            />
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            El método que funciona como un botiquín de primeros auxilios emocionales porque va directo al grano.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-4 md:gap-8">
          {[
            { icon: <Zap className="w-8 h-8 text-orange-500" />, title: "Acceso Directo", desc: "Vas directo a la página exacta según la emoción que tu hijo está viviendo." },
            { icon: <Clock className="w-8 h-8 text-blue-500" />, title: "Sin Teorías", desc: "Sin leer de principio a fin. Actividades que funcionan en 5-10 minutos." },
            { icon: <Users className="w-8 h-8 text-green-500" />, title: "Especializado", desc: "Diseñado específicamente para niños de 5 a 12 años." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white p-5 md:p-8 rounded-2xl md:rounded-3xl shadow-sm border border-blue-100"
            >
              <div className="mb-4">{item.icon}</div>
              <h4 className="text-xl font-bold mb-2">{item.title}</h4>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* 5. Benefits */}
      <Section>
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">✨ Lo que lograrás con tu hijo:</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { icon: <Brain className="text-purple-500" />, title: "Dominio emocional inmediato", desc: "Tu hijo reconocerá y gestionará 8 emociones intensas." },
            { icon: <Sparkles className="text-yellow-500" />, title: "Calma instantánea", desc: "Técnicas que devuelven la paz en momentos de crisis." },
            { icon: <Home className="text-orange-500" />, title: "Ambiente armonioso", desc: "Transforma tu hogar en un espacio de tranquilidad." },
            { icon: <ShieldCheck className="text-green-500" />, title: "Autoestima sólida", desc: "Actividades que fortalecen la confianza en sí mismo." },
            { icon: <MessageCircle className="text-blue-500" />, title: "Comunicación fluida", desc: "Mejora el diálogo y la resolución de conflictos familiares." }
          ].map((benefit, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`flex gap-4 p-4 md:p-6 bg-gray-50 rounded-2xl border border-gray-100 ${i === 2 ? "md:col-span-2 md:mx-auto md:max-w-xl w-full" : ""}`}
            >
              <div className="shrink-0">{benefit.icon}</div>
              <div>
                <h4 className="font-bold text-lg mb-1">{benefit.title}</h4>
                <p className="text-gray-600">{benefit.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <motion.a 
            href="#pricing"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary inline-block text-lg md:text-xl px-12 py-5"
          >
            SÍ, QUIERO EL BOTIQUÍN AHORA
          </motion.a>
        </div>
      </Section>

      {/* 6. Prueba Social */}
      <Section className="bg-brand-dark text-white rounded-[3rem]">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">👥 Madres como tú ya están viendo resultados:</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { 
              name: "María Elena", 
              role: "Madre de 2 niños", 
              text: "En solo una semana, mi hijo de 7 años ya me dice 'mamá, siento que tengo rabia' en lugar de explotar. ¡Es increíble!",
              img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150"
            },
            { 
              name: "Fabiola", 
              role: "Madre de 1 niña", 
              text: "El botiquín me salvó las mañanas. Antes eran gritos, ahora aplicamos la técnica de los 5 minutos y todo fluye mejor.",
              img: "https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&q=80&w=150&h=150"
            }
          ].map((testimonial, i) => (
            <motion.div 
              key={i}
              className="bg-white/10 p-8 rounded-3xl backdrop-blur-sm border border-white/10"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
              </div>
              <p className="text-lg italic mb-6">"{testimonial.text}"</p>
              <div className="flex items-center gap-4">
                <img src={testimonial.img} alt={testimonial.name} className="w-12 h-12 rounded-full" referrerPolicy="no-referrer" />
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* 7. Garantía */}
      <Section>
        <div className="bg-green-50 p-10 md:p-16 rounded-[3rem] border-2 border-green-100 text-center">
          <ShieldCheck className="w-20 h-20 text-green-600 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-green-900 mb-4">🛡️ Garantía de Tranquilidad Total - 7 Días</h2>
          <p className="text-lg text-green-800 max-w-2xl mx-auto leading-relaxed">
            Si después de aplicar los ejercicios sientes que el material no se adapta a las necesidades de tu familia, te entregaremos el <strong>100% de tu dinero</strong>. Sin preguntas, sin complicaciones. Tu satisfacción es nuestra prioridad.
          </p>
        </div>
      </Section>

      {/* 8. No es para ti si */}
      <Section className="bg-sky-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">⚠️ Este método NO es para ti si:</h2>
          <div className="space-y-4">
            {[
              "Buscas una solución mágica sin participación del adulto",
              "Tu hijo tiene menos de 5 años o más de 12",
              "Prefieres solo teoría sin actividades prácticas",
              "No tienes 10-15 minutos al día para dedicar a tu hijo"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm">
                <XCircle className="text-red-500 shrink-0" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 9. Entregables */}
      <Section>
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">📚 Todo lo que recibes hoy:</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <div className="lg:col-span-2 bg-blue-50 p-4 md:p-8 rounded-3xl border border-blue-100">
            <div className="flex gap-4 items-start mb-6">
              <BookOpen className="w-10 h-10 text-blue-600 shrink-0" />
              <div>
                <h3 className="text-2xl font-bold mb-2">Guía Principal: El Botiquín de Rescate Emocional</h3>
                <p className="text-gray-600">Libro digital de +190 páginas con +150 actividades prácticas organizadas por emociones. Acceso directo a cada emoción según la crisis.</p>
              </div>
            </div>
            <img src="https://i.postimg.cc/BvMb5BWV/libros.jpg" alt="Guía Digital El Botiquín de Rescate Emocional" className="rounded-2xl shadow-lg w-full object-cover h-48" referrerPolicy="no-referrer" />
          </div>
          
          <div className="space-y-4">
            {[
              { title: "Checklists específicas", desc: "Guía rápida de acción para cada emoción." },
              { title: "Tarjetas imprimibles", desc: "Gestión emocional inmediata." },
              { title: "Yoga de las Emociones", desc: "Técnicas cuerpo-mente para niños." },
              { title: "Escudo de la Valentía", desc: "Herramienta contra miedos nocturnos." }
            ].map((item, i) => (
              <div key={i} className="p-5 bg-sky-50 border border-sky-100 rounded-2xl shadow-sm flex gap-3">
                <CheckCircle2 className="text-green-500 shrink-0" />
                <div>
                  <h4 className="font-bold text-sm">{item.title}</h4>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 10. Bonificaciones */}
      <Section className="bg-orange-50 rounded-[3rem]">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">🎁 BONOS EXCLUSIVOS</h2>
          <p className="text-orange-600 font-bold uppercase tracking-widest text-sm">(Por tiempo limitado)</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { 
              title: "Bono #1: Guía de Autocuidado Familiar", 
              value: "$15 USD", 
              desc: "Plan completo para que TÚ también mantengas el equilibrio emocional. Porque no puedes dar lo que no tienes." 
            },
            { 
              title: "Bono #2: 50 Mandalas para colorear", 
              value: "$8 USD", 
              desc: "Actividades que tu hijo puede hacer solo para calmarse mientras tú recuperas energías." 
            }
          ].map((bono, i) => (
            <div key={i} className="bg-white p-5 md:p-8 rounded-3xl shadow-sm relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">GRATIS</div>
              <h4 className="text-xl font-bold mb-2">{bono.title}</h4>
              <p className="text-gray-400 line-through mb-4">Valor: {bono.value}</p>
              <p className="text-gray-600 leading-relaxed">{bono.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <p className="text-xl font-bold text-brand-dark">Valor total de los bonos: <span className="text-orange-600">$23 USD</span></p>
          <p className="text-2xl font-black text-orange-600 mt-1 uppercase">Hoy totalmente gratis</p>
        </div>
      </Section>

      {/* 11 & 12. Pricing & CTA 1 */}
      <Section id="pricing" className="text-center bg-sky-50 !py-6">
        <div className="max-w-2xl mx-auto bg-white p-6 md:p-8 rounded-[3rem] shadow-2xl border border-sky-100">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">💰 El valor real de tu tranquilidad y la de tu hijo:</h2>
          <p className="text-gray-600 mb-6">Entendemos que invertir en la educación emocional no tiene precio, pero si comparamos costos:</p>
          
          <div className="space-y-4 mb-8 text-left bg-gray-50/50 p-5 rounded-3xl border border-gray-100/50">
            <div className="flex justify-between items-center py-2 border-b border-gray-100 border-dashed text-sm md:text-base">
              <span className="text-gray-500 italic">Una sesión con psicólogo infantil:</span>
              <span className="text-gray-400 font-medium whitespace-nowrap">$50 - $80 USD</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-100 border-dashed text-sm md:text-base">
              <span className="text-gray-500 italic">Un curso presencial de crianza:</span>
              <span className="text-gray-400 font-medium whitespace-nowrap">$200 - $300 USD</span>
            </div>
            <div className="flex justify-between items-center py-2 text-sm md:text-base">
              <span className="text-gray-500 italic">Libros especializados:</span>
              <span className="text-gray-400 font-medium whitespace-nowrap">$25 - $40 USD c/u</span>
            </div>
            <div className="pt-3 mt-1 border-t-2 border-gray-200">
              <div className="flex justify-between items-center py-1">
                <span className="font-black text-gray-700 uppercase tracking-tighter">Valor total del paquete:</span>
                <span className="text-red-600 font-black text-xl line-through decoration-2">+$300 USD</span>
              </div>
            </div>
          </div>
          
          <div className="mb-6 p-6 bg-orange-50 rounded-3xl border border-orange-100">
            <p className="text-orange-600 font-black text-xl mb-2">🚀 ¡OFERTA DE LANZAMIENTO!</p>
            <p className="text-gray-600 mb-2">Hoy no pagarás $300, ni siquiera los <span className="line-through">$15.90</span> habituales...</p>
            <p className="text-5xl md:text-6xl font-black text-brand-dark">Solo $7.90 USD</p>
          </div>

          <motion.a 
            href="#" 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary w-full text-lg md:text-xl py-6 mb-6 block leading-tight"
          >
            ¡SÍ, QUIERO TRANSFORMAR LA VIDA EMOCIONAL DE MI HIJO!
          </motion.a>
          
          <div className="flex flex-col gap-3 text-left max-w-sm mx-auto">
            <div className="flex items-center gap-3 text-gray-700">
              <span className="text-2xl">✅</span>
              <div>
                <p className="font-bold">Descarga instantánea:</p>
                <p className="text-sm text-gray-500">Empieza hoy mismo.</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <span className="text-2xl">🖨️</span>
              <div>
                <p className="font-bold">Impresión ilimitada:</p>
                <p className="text-sm text-gray-500">Úsalo las veces que necesites.</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <span className="text-2xl">🛡️</span>
              <div>
                <p className="font-bold">Garantía total:</p>
                <p className="text-sm text-gray-500">7 días de satisfacción asegurada.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 13. FAQ */}
      <Section className="bg-white !py-4">
        <h2 className="text-3xl font-bold mb-6 text-center">❓ Preguntas Frecuentes:</h2>
        <div className="max-w-3xl mx-auto">
          <FAQItem 
            question="¿Necesito ser psicólogo para aplicarlo?" 
            answer="No. Está diseñado para madres sin experiencia previa. Cada actividad tiene instrucciones paso a paso sencillas y claras." 
          />
          <FAQItem 
            question="¿Mi hijo de 5 años podrá entenderlo?" 
            answer="Sí, las actividades están adaptadas por edades dentro del rango 5-12 años, utilizando lenguaje y dinámicas apropiadas para cada etapa." 
          />
          <FAQItem 
            question="¿Qué pasa si no funciona?" 
            answer="Tienes 7 días de garantía. Si no ves resultados o sientes que no es para ti, te devolvemos el 100% de tu dinero sin preguntas." 
          />
          <FAQItem 
            question="¿Necesito imprimir todo?" 
            answer="No. Puedes usarlo digitalmente desde tu tablet o móvil, o imprimir solo las tarjetas y checklists que necesites en cada momento." 
          />
        </div>
      </Section>

      {/* 14. Urgency */}
      <Section className="bg-red-50 text-center !py-6">
        <div className="max-w-3xl mx-auto">
          <AlertCircle className="w-12 h-12 text-red-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-red-900 mb-2">⏰ ATENCIÓN: Oferta por tiempo limitado</h2>
          <p className="text-lg text-red-800 mb-6">El descuento del 50% termina pronto. Después de este tiempo, el precio vuelve a $15.90 USD.</p>
          <CountdownTimer />
        </div>
      </Section>

      {/* 15. CTA 2 */}
      <Section className="text-center !py-8">
        <h2 className="text-2xl font-bold mb-6">🎯 No dejes que esta oportunidad se escape</h2>
        <motion.a 
          href="#pricing"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="btn-primary inline-block text-xl px-12 py-6 shadow-2xl"
        >
          QUIERO MI BOTIQUÍN DE RESCATE EMOCIONAL AHORA
        </motion.a>
        <p className="mt-4 text-lg font-bold text-gray-500">Solo $7.90 USD - Descarga Inmediata</p>
      </Section>

      {/* 16. Análisis Profundo */}
      <Section className="bg-blue-900 text-white rounded-[4rem] my-8 !py-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-8">🔍 ¿Por qué funciona El Botiquín de Rescate Emocional?</h2>
            <p className="text-lg text-blue-100 leading-relaxed mb-8">
              La neurociencia nos enseña que los niños procesan las emociones de manera diferente a los adultos. Nuestro método traduce esta ciencia en "píldoras" lúdicas y corporales que:
            </p>
            <ul className="space-y-6">
              {[
                { title: "Rompen el patrón de crisis", desc: "Intervención inmediata cuerpo-mente que detiene la escalada emocional." },
                { title: "Crean nuevos hábitos", desc: "Repetición positiva que se automatiza en el cerebro del niño." },
                { title: "Fortalecen la conexión", desc: "El juego une y sana la relación madre-hijo de forma natural." }
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 shrink-0" />
                  <div>
                    <h4 className="font-bold text-xl">{item.title}</h4>
                    <p className="text-blue-200">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-10 text-xl font-bold text-orange-400 italic">No es solo un libro, es un sistema de transformación familiar.</p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-orange-500/20 blur-3xl rounded-full" />
            <img 
              src="https://i.postimg.cc/3Rv7cX4N/cosmos-image-1775665531043.jpg" 
              alt="Neurociencia infantil y equilibrio emocional" 
              className="relative rounded-[3rem] shadow-2xl"
              referrerPolicy="no-referrer"
              crossOrigin="anonymous"
            />
          </div>
        </div>
      </Section>

      {/* 17. Final Closure */}
      <Section className="text-center pb-16">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Smile className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-8">✨ Tu hijo merece crecer emocionalmente fuerte y seguro</h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Imagina a tu hijo dentro de 30 días: expresando sus emociones con palabras, no con rabietas. Calmándose solo cuando se siente abrumado. Llegando a ti con confianza cuando necesita apoyo. Siendo ese niño feliz que siempre soñaste.
          </p>
          <p className="text-2xl font-bold text-brand-dark mb-12">Todo comienza con una decisión hoy.</p>
          <motion.a 
            href="#pricing"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary text-2xl px-16 py-8 hidden md:inline-block"
          >
            OBTENER EL BOTIQUÍN DE RESCATE EMOCIONAL - $7.90
          </motion.a>
          <p className="mt-12 text-lg italic text-gray-500">Con amor y dedicación a tu familia ❤️</p>
        </motion.div>
      </Section>

      {/* Sticky Mobile CTA */}
      <AnimatePresence>
        {showStickyCta && (
          <motion.div 
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="fixed bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-md border-t border-gray-200 md:hidden z-50"
          >
            <a 
              href="#pricing"
              className="btn-primary w-full block text-center py-4"
            >
              ¡COMPRAR AHORA POR $7.90!
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="py-12 text-center text-gray-400 text-sm border-t border-gray-100 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 space-y-4">
          <p>© {new Date().getFullYear()} El Botiquín de Rescate Emocional. Todos los derechos reservados.</p>
          <div className="pt-4 border-t border-gray-200">
            <p className="leading-relaxed">
              Descargo de responsabilidad: Este sitio y “El Botiquín de Rescate Emocional” no están afiliados, patrocinados ni administrados por Facebook/Meta; 
              Facebook no avala esta oferta y cualquier referencia a su nombre o plataforma se usa únicamente con fines informativos.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
