import Image from 'next/image'
import { icons } from 'public/assets'

interface ImageAssetProps {
  objectFit?: 'cover' | 'contain'
  className?: string
  src: string
  onClick?: React.MouseEventHandler<HTMLImageElement> | undefined
  style?: React.CSSProperties | undefined
  width?: number
  height?: number
  sizes?: string
  type?: 'SVG' | 'IMG'
  opacity?: number
  fill?: string
}

const ImageAsset: React.FC<ImageAssetProps> = (props) => {
  const { objectFit = 'contain', src, width, height, className = '', sizes, onClick, style, type = 'IMG', opacity, fill } = props
  const SVGImage = icons[src]

  return type === 'IMG' ? (
    <Image
      onClick={onClick}
      src={icons[src]}
      alt="image-asset"
      width={width}
      height={height}
      sizes={sizes}
      className={`${className}`}
      style={{ objectFit: objectFit, ...style }}
    />
  ) : (
    <SVGImage {...props} />
  )
}

export default ImageAsset
