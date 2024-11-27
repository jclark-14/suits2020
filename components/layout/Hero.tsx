import Image from 'next/image';

interface HeroProps {
  title: string;
  subtitle: string;
  imagePath: string;
  imageAlt: string;
  overlayOpacity?: number;
  titleSize?: string;
  subtitleSize?: string;
  className?: string;
  height?: 'small' | 'medium' | 'large' | 'custom';
  customHeight?: string;
}

const Hero = ({
  title,
  subtitle,
  imagePath,
  imageAlt,
  overlayOpacity = 45,
  className = 'object-cover',
  titleSize = 'text-4xl sm:text-5xl lg:text-7xl',
  subtitleSize = 'text-2xl lg:text-4xl',
  height = 'medium',
  customHeight,
}: HeroProps) => {
  const heightClasses = {
    small: 'h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] 2xl:h-[400px]',
    medium: 'h-[275px] sm:h-[350px] md:h-[400px] lg:h-[500px] 2xl:h-[600px]',
    large: 'h-[350px] sm:h-[450px] md:h-[550px] lg:h-[650px] 2xl:h-[700px]',
    custom: customHeight,
  };

  return (
    <section
      className={`relative w-full overflow-hidden ${heightClasses[height]}`}
      style={height === 'custom' ? { height: customHeight } : undefined}
    >
      {/* Image Container */}
      <div className="absolute inset-0">
        <picture>
          {/* Mobile devices */}
          <source
            media="(max-width: 640px)"
            srcSet={`${imagePath}?width=640&quality=80`}
          />
          {/* Tablets */}
          <source
            media="(max-width: 1024px)"
            srcSet={`${imagePath}?width=1024&quality=85`}
          />
          {/* Desktops */}
          <source
            media="(max-width: 1536px)"
            srcSet={`${imagePath}?width=1536&quality=90`}
          />
          {/* Large screens */}
          <source
            media="(min-width: 1537px)"
            srcSet={`${imagePath}?width=1920&quality=90`}
          />
          <Image
            src={imagePath}
            alt={imageAlt}
            fill
            priority
            sizes="100vw"
            quality={75}
            className={className}
          />
        </picture>
      </div>

      {/* Dark Overlay */}
      <div
        className="absolute inset-0 bg-black transition-opacity duration-300"
        style={{ opacity: overlayOpacity / 100 }}
      ></div>

      {/* Content Container */}
      <div className="relative h-full flex flex-col justify-end items-center text-center text-white z-10 px-4 md:px-6 lg:px-8 pb-6 sm:pb-14 md:pb-20">
        <div className="max-w-6xl mx-auto">
          <h1
            className={`${titleSize} font-semibold leading-[1.2] mb-0 sm:mb-2 lg:mb-4`}
          >
            {title}
          </h1>
          <h3
            className={`${subtitleSize} font-normal tracking-wide max-w-4xl mx-auto leading-snug sm:leading-normal md:leading-normal lg:leading-normal`}
          >
            {subtitle}
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Hero;
