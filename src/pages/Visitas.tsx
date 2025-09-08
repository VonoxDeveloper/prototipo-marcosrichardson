import Header from '@/components/Header';
import FooterMR from '@/components/FooterMR';
import { Card, CardContent } from '@/components/ui/card';
import { ButtonUI } from '@/components/ui/button-ui';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import heroSchool from '@/assets/hero-school.jpg';

const Visitas = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Formulário de agendamento enviado');
  };

  const highlights = [
    {
      icon: MapPin,
      title: "Estrutura Completa",
      description: "Conheça nossos laboratórios, biblioteca e espaços de convivência"
    },
    {
      icon: Users,
      title: "Equipe Pedagógica",
      description: "Converse com coordenadores e professores sobre nossa proposta"
    },
    {
      icon: Calendar,
      title: "Horário Flexível",
      description: "Agendamento conforme sua disponibilidade"
    },
    {
      icon: Clock,
      title: "Visita Guiada",
      description: "Tour completo com duração aproximada de 1 hora"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroSchool}
            alt="Estudantes em ambiente escolar"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Agende sua Visita
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Conheça nossos espaços e proposta pedagógica
          </p>
        </div>
      </section>

      <main>
        {/* Highlights Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                O que você conhecerá
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Durante a visita, você terá uma experiência completa de nossa estrutura e metodologia
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {highlights.map((item, index) => (
                <Card key={index} className="text-center border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <item.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Agendamento de Visitas
                </h2>
                <p className="text-lg text-muted-foreground">
                  Preencha o formulário abaixo e nossa equipe entrará em contato para confirmar sua visita
                </p>
              </div>

              <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="responsavel-nome">Nome do Responsável *</Label>
                        <Input 
                          id="responsavel-nome" 
                          name="responsavel-nome" 
                          required 
                          placeholder="Seu nome completo"
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
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="telefone">Telefone *</Label>
                        <Input 
                          id="telefone" 
                          name="telefone" 
                          required 
                          placeholder="(00) 00000-0000"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="aluno-nome">Nome do Aluno(a)</Label>
                        <Input 
                          id="aluno-nome" 
                          name="aluno-nome" 
                          placeholder="Nome do aluno"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="segmento">Segmento de Interesse *</Label>
                      <Select name="segmento" required>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o segmento" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="educacao-infantil">Educação Infantil</SelectItem>
                          <SelectItem value="fundamental-1">Ensino Fundamental I</SelectItem>
                          <SelectItem value="fundamental-2">Ensino Fundamental II</SelectItem>
                          <SelectItem value="ensino-medio">Ensino Médio</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="datas-preferidas">Datas Preferidas</Label>
                      <Input 
                        id="datas-preferidas" 
                        name="datas-preferidas" 
                        placeholder="Ex: Manhã da terça ou quinta-feira"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="mensagem">Mensagem</Label>
                      <Textarea 
                        id="mensagem" 
                        name="mensagem" 
                        placeholder="Conte-nos sobre suas expectativas ou dúvidas específicas"
                        rows={4}
                      />
                    </div>

                    <div className="text-sm text-muted-foreground bg-muted/50 p-4 rounded-lg">
                      <p>
                        <strong>Proteção de Dados:</strong> Seus dados são tratados conforme a LGPD 
                        exclusivamente para fins de contato e agendamento de visitas. 
                        Nossa equipe entrará em contato em até 24 horas.
                      </p>
                    </div>

                    <ButtonUI type="submit" size="lg" className="w-full">
                      Agendar Visita
                    </ButtonUI>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
                Dúvidas sobre a visita?
              </h2>
              <p className="text-lg text-primary-foreground/90 mb-8">
                Nossa equipe está pronta para esclarecer qualquer questão e ajudar no agendamento
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <ButtonUI 
                  variant="outline" 
                  size="lg"
                  className="bg-white/10 border-white/20 hover:bg-white/20 text-white"
                  asChild
                >
                  <a href="/contato">Falar com a escola</a>
                </ButtonUI>
                <ButtonUI 
                  variant="outline" 
                  size="lg"
                  className="bg-white/10 border-white/20 hover:bg-white/20 text-white"
                  asChild
                >
                  <a href="tel:+551100000000">Ligar agora</a>
                </ButtonUI>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FooterMR />
    </div>
  );
};

export default Visitas;