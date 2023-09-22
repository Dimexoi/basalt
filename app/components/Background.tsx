import Image from 'next/image'
import backgroundimage from '@/public/images/imgbg.jpg'
 
export default function Background() {
  return (
    <Image
      alt="Mountains"
      src={backgroundimage}
      placeholder="blur"
      quality={100}
      fill
      sizes="100vw"
      style={{
        objectFit: 'cover',
      }}
      priority
    />
  )
}