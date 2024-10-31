// FormalCasualGrid.tsx
import Card from './Card';

interface Category {
  id: number;
  title: string;
  subTitle?: string | undefined;
  description: string;
  image: string;
  span: 'thirds' | 'twoThirds' | 'third';
  hasOverlay?: boolean;
  overlayText?: string;

  overlayPosition?: 'left' | 'right';
}

export default function FormalCasualGrid() {
  const categories: Category[] = [
    {
      id: 1,
      title: 'DRESS & CASUAL SHOES',
      description:
        "When sneakers don't cut it, stop in to see our full selection of shoes to top off your personal style.",
      image: '/images/grid/formal-shoes.png',
      span: 'thirds',
    },
    {
      id: 2,
      title: 'DESIGNER ACCESSORIES',
      description:
        'Suits 20/20 offers a giant selection of Neck Ties, Belts, Socks, Cuff Links, Hankercheifs, Hats and more. New merchandise is coming in all the time, so stop in at Suits 20/20 to see the latest trends and styles.',
      image: '/images/grid/accessories3.png',
      span: 'twoThirds',
    },
    {
      id: 3,
      title: 'CASUAL LOOKS',
      subTitle: 'CASUAL LOOKS',
      description: `From laid-back weekends to effortless everyday outfits, our collection of casual wear ensures you stay comfortable without compromising on style. Whether you're stepping out or staying in, these pieces are designed to fit every moment seamlessly.`,
      image: '/images/grid/suits-man-sitting1.png',
      span: 'twoThirds',
      hasOverlay: true,
      overlayText: "THE\nLOOKS\nYOU'RE\nLOOKING\nFOR",
      overlayPosition: 'right',
    },
    {
      id: 4,
      title: "MEN'S OUTERWEAR",
      description:
        'Stay ahead of the season with our selection of coats, jackets, and blazers designed to keep you looking sharp and comfortable.',
      image: '/images/grid/outerwear4.png',
      span: 'third',
    },
    {
      id: 5,
      title: "BOY'S SUITS",
      description:
        'Perfect for weddings and formal events, our finely tailored suits bring charm and confidence to your little one’s wardrobe, ensuring he looks his best.',
      image: '/images/grid/boys-suits1.png',
      span: 'third',
    },
    {
      id: 6,
      title: 'KEEPING CURRENT & LOOKING COOL',
      subTitle: 'BUSINESS CASUAL',
      description: `Strike the perfect balance between professional and relaxed with our business casual collection. Ideal for the modern workspace or a polished weekend look, these versatile outfits keep you sharp, stylish, and ready for anything.`,
      image: '/images/grid/business-casual3.png',
      span: 'twoThirds',
      hasOverlay: true,
      overlayText: 'THE\nNEW\nBUSINESS\nCASUAL',
      overlayPosition: 'left',
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 pt-4 pb-10 sm:pb-10 sm:pt-6">
      <div className="text-center mb-6 sm:mb-12">
        <h2 className="text-4xl sm:text-6xl font-semibold text-primary-dark my-3 sm:my-7 sm:tracking-wider">
          FROM FORMAL TO CASUAL
        </h2>
        <p className="text-2xl md:text-3xl text-primary-dark sm:tracking-wider">
          EVERYTHING IN MEN&apos;S & BOY&apos;S FASHION IN ONE PLACE.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map(category => (
          <div
            key={category.id}
            className={`relative ${
              category.span === 'twoThirds' ? 'md:col-span-2' : 'md:col-span-1'
            }`}
            style={{
              paddingBottom: category.span === 'twoThirds' ? '56.25%' : '75%', // 16:9 vs 4:3
            }}
          >
            <div className="absolute inset-0">
              <Card
                key={category.id}
                title={category.title}
                subTitle={category.subTitle}
                description={category.description}
                imageSrc={category.image}
                hasOverlay={category.hasOverlay}
                overlayText={category.overlayText}
                overlayPosition={
                  category.overlayPosition as 'left' | 'right' | undefined
                }
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
