import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { ShimmerButton } from '@/components/ui/shimmer-button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin } from 'lucide-react';
import heroImage from '@/assets/hero-school.jpg';

const Contato = () => {
  const contactInfo = [
    {
      type: "address",
      icon: MapPin,
      label: "Endereço",
      text: "Rua das Flores, 123 - Bairro Laranjeiras, Rio de Janeiro, RJ"
    },
    {
      type: "phone",
      icon: Phone,
      label: "Telefone",
      text: "(21) 1234-5678"
    },
    {
      type: "email",
      icon: Mail,
      label: "E-mail",
      text: "contato@colegioprototipo.com.br"
    }
  ];

  const socialLinks = [
    { 
      icon: Instagram, 
      label: "Instagram", 
      href: "https://instagram.com/colegioprototipo",
      color: "hover:text-pink-500"
    },
    { 
      icon: Facebook, 
      label: "Facebook", 
      href: "https://facebook.com/colegioprototipo",
      color: "hover:text-blue-600"
    },
    { 
      icon: Linkedin, 
      label: "LinkedIn", 
      href: "https://linkedin.com/company/colegioprototipo",
      color: "hover:text-blue-700"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Contato - Colégio Prototipo"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 slide-up">
            Entre em <span className="text-gradient">Contato</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto fade-in">
            Estamos prontos para atender você e sua família
          </p>
        </div>
      </section>

      <main className="pt-16">
        {/* Contact Information */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 slide-up">
              <h2 className="text-4xl font-bold mb-6">Informações de Contato</h2>
              <p className="text-xl text-muted-foreground">
                Entre em contato conosco através dos canais abaixo
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <Card 
                    key={info.type}
                    className="text-center hover-scale fade-in"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 bounce-in">
                        <IconComponent className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-4">{info.label}</h3>
                      <p className="text-muted-foreground">{info.text}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Social Media */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 slide-up">
              <h2 className="text-4xl font-bold mb-6">Nossas Redes</h2>
              <p className="text-xl text-muted-foreground">
                Acompanhe nosso dia a dia e novidades
              </p>
            </div>

            <div className="flex justify-center space-x-8">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex flex-col items-center p-6 rounded-lg transition-all duration-300 hover-scale fade-in ${social.color}`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors bounce-in">
                      <IconComponent className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="text-muted-foreground font-medium">{social.label}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="slide-up">
                <h2 className="text-4xl font-bold mb-6">Envie uma Mensagem</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Preencha o formulário para dúvidas, agendar visita ou solicitar informações. 
                  Retornaremos em breve!
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 fade-in">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Resposta em até 24 horas</span>
                  </div>
                  <div className="flex items-center space-x-3 fade-in" style={{ animationDelay: '0.1s' }}>
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Atendimento personalizado</span>
                  </div>
                  <div className="flex items-center space-x-3 fade-in" style={{ animationDelay: '0.2s' }}>
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Orientação especializada</span>
                  </div>
                </div>
              </div>

              <Card className="fade-in" style={{ animationDelay: '0.3s' }}>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="nome">Nome Completo *</Label>
                      <Input 
                        id="nome" 
                        name="nome" 
                        type="text" 
                        required 
                        placeholder="Digite seu nome completo"
                        className="h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail *</Label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        required 
                        placeholder="seu@email.com"
                        className="h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="telefone">Telefone</Label>
                      <Input 
                        id="telefone" 
                        name="telefone" 
                        type="tel" 
                        placeholder="(11) 99999-9999"
                        className="h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="mensagem">Mensagem *</Label>
                      <Textarea 
                        id="mensagem" 
                        name="mensagem" 
                        required 
                        placeholder="Descreva sua dúvida ou solicitação..."
                        rows={5}
                        className="resize-none"
                      />
                    </div>

                    <ShimmerButton 
                      type="submit" 
                      className="w-full bg-primary text-white hover:bg-primary/90 h-12"
                    >
                      Enviar Mensagem
                    </ShimmerButton>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 slide-up">
              <h2 className="text-4xl font-bold mb-6">Nossa Localização</h2>
              <p className="text-xl text-muted-foreground">
                Venha nos conhecer pessoalmente no coração do Rio de Janeiro
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="overflow-hidden fade-in hover-scale">
                <div className="aspect-video">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.2543184892!2d-43.18635368469924!3d-22.932654584289958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997f58a6a00a9d%3A0x3f251d85272aa76a!2sLaranjeiras%2C%20Rio%20de%20Janeiro%20-%20RJ!5e0!3m2!1spt-BR!2sbr!4v1635789012345!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização do Colégio Prototipo"
                  ></iframe>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto slide-up">
              <h2 className="text-4xl font-bold mb-6">Agende sua Visita</h2>
              <p className="text-xl mb-8 opacity-90">
                Conheça nossa estrutura, metodologia e equipe pedagógica. 
                Será um prazer receber você e sua família!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <ShimmerButton className="bg-white text-primary hover:bg-white/90">
                  Agendar Visita
                </ShimmerButton>
                <ShimmerButton className="bg-white/10 text-white border border-white/20 hover:bg-white/20">
                  Tour Virtual
                </ShimmerButton>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contato;