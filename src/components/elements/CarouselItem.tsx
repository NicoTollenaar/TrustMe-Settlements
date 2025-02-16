import Image, { StaticImageData } from "next/image"

type CarouselItemProps = {
  image: StaticImageData
  title: string
  description: string
}

const CarouselItem = (props: CarouselItemProps) => {
  const { image, title, description } = props
  return (
    <div className="py-3 px-4 w-[300px] rounded bg-bg-light border-[0.1px] border-secondary-800 hover:shadow-sm hover:shadow-secondary-800">
      <div className="relative h-[300px] flex flex-col items-center">
        <div className="w-[100px] h-[100px]">
          <Image src={image} alt="Picture of the author" />
        </div>

        <hr className="w-10 border-[0.1px] border-secondary-900 my-3" />

        <h3 className="my-3 text-xl capitalize font-semibold tracking-wide leading-5">{title}</h3>
        <p className="text-center leading-7 font-light">{description}</p>
      </div>
    </div>
  )
}

export default CarouselItem
