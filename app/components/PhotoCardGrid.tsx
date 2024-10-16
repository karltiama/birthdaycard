import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image'

interface PhotoCardProps {
  title: string
  description: string
  imageUrl: string
}

function PhotoCard({ title, description, imageUrl }: PhotoCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col h-full">
      <div className="relative h-48 sm:h-64">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}

export default function PhotoCardGrid() {
  const cards: PhotoCardProps[] = [
    {
      title: "Pre-Running Selfie",
      description: "Hardcore Runners about to hit the pavement!",
      imageUrl: "/images/IMG_7415.jpg"
    },
    {
      title: "Magnus Omandam?!",
      description: "I love how silly this picture is, I was laughing so damn hard.",
      imageUrl: "/images/IMG_2763.jpg"
    },
    {
      title: "What does home mean to you?",
      description: "",
      imageUrl: "/images/IMG_2644.jpg"
    },
    {
      title: "Forest Trail",
      description: "A serene path winding through a lush, green forest dappled with sunlight.",
      imageUrl: "/placeholder.svg?height=400&width=600&text=Forest"
    },
    {
      title: "Desert Dunes",
      description: "Endless waves of golden sand dunes stretching to the horizon.",
      imageUrl: "/placeholder.svg?height=400&width=600&text=Desert"
    },
    {
      title: "Waterfall",
      description: "A powerful cascade of water tumbling down moss-covered rocks.",
      imageUrl: "/placeholder.svg?height=400&width=600&text=Waterfall"
    }
  ]

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">MY ABSOLUTE FAVORITE PICTURES OF YOU AND I</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <PhotoCard key={index} title={card.title} description={card.description} imageUrl={card.imageUrl} />
        ))}
      </div>
    </div>
  )
}
