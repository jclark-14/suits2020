// FormalCasualGrid.tsx
import Card from './Card';

interface Category {
  id: number;
  title: string;
  description: string;
  image: string;
  span: 'thirds' | 'twoThirds' | 'third';
  hasOverlay?: boolean;
  overlayText?: string;
  overlayPosition?: 'left' | 'right'; // Specify the literal types here
}

export default function FormalCasualGrid() {
  const categories: Category[] = [
    {
      id: 1,
      title: 'DRESS & CASUAL SHOES',
      description:
        "When sneakers don't cut it, stop in to see our full selection of shoes to top off your personal style.",
      image: '/images/grid/formal-shoes.png',
      span: 'thirds', // Adjust spans to control layout
    },
    {
      id: 2,
      title: 'DESIGNER ACCESSORIES',
      description:
        'Suits 20/20 offers a giant selection of Neck Ties, Belts, Socks, Cuff Links, Hankercheifs, Hats and more. New merchandise is coming in all the time, so stop in at Suits 20/20 to see the latest trends and styles.',
      image: '/images/grid/suits-ties1.jpg',
      span: 'twoThirds',
    },
    {
      id: 3,
      title: 'CASUAL LOOKS',
      description: 'CASUAL LOOKS',
      image: '/images/grid/suits-man-sitting1.png',
      span: 'twoThirds',
      hasOverlay: true,
      overlayText: "THE\nLOOKS\nYOU'RE\nLOOKING\nFOR",
      overlayPosition: 'right', // Add this line
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
      title: 'BUSINESS CASUAL',
      description: 'KEEPING CURRENT & LOOKING COOL',
      image: '/images/grid/business-casual.png',
      span: 'twoThirds',
      hasOverlay: true,
      overlayText: 'THE\nNEW\nBUSINESS\nCASUAL',
      overlayPosition: 'left', // Add this line
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-8xl font-semibold text-primary-dark my-7 tracking-wider">
          FROM FORMAL TO CASUAL
        </h2>
        <p className="text-4xl text-primary-dark tracking-wider">
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
