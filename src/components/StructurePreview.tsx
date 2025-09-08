import libraryImage from '@/assets/library.jpg';
import playgroundImage from '@/assets/playground.jpg';
import studentsLearning from '@/assets/students-learning.jpg';

const StructurePreview = () => {
  const images = [
    { src: studentsLearning, alt: "Sala de aula moderna" },
    { src: libraryImage, alt: "Biblioteca escolar" },
    { src: playgroundImage, alt: "Quadra esportiva" }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Nossa Estrutura
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StructurePreview;