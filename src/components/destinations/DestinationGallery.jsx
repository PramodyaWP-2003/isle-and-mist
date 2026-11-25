
import { useState, useEffect, useRef } from 'react'
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Camera,
} from 'lucide-react'

import destinationGallery from '../../data/destinationGallery'
import SectionHeading from '../ui/SectionHeading'

function DestinationGallery({ destination }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const dialogRef = useRef(null)

  const images = [
    {
      src: destination.image,
      alt: `${destination.name} main photograph`,
    },
    ...(destinationGallery[destination.id] || []),
  ]

  const totalImages = images.length

  function openGallery(index) {
    setActiveIndex(index)
    setIsOpen(true)
  }

  function closeGallery() {
    setIsOpen(false)
  }

  function nextImage() {
    setActiveIndex(
      (previous) => (previous + 1) % totalImages
    )
  }

  function previousImage() {
    setActiveIndex(
      (previous) =>
        (previous - 1 + totalImages) % totalImages
    )
  }

  // Open the accessible image viewer

  useEffect(() => {
    const dialog = dialogRef.current

    if (!dialog || !isOpen) return

    if (!dialog.open) {
      dialog.showModal()
    }

    const previousOverflow = document.body.style.overflow

    document.body.style.overflow = 'hidden'

    return () => {
      if (dialog.open) {
        dialog.close()
      }

      document.body.style.overflow = previousOverflow
    }
  }, [isOpen])

  // Keyboard navigation

  function handleKeyDown(event) {
    if (event.key === 'ArrowRight') {
      event.preventDefault()
      nextImage()
    }

    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      previousImage()
    }
  }

  return (
    <section className="section-padding bg-white">

      <div className="section-container">

        <SectionHeading
          subtitle="Explore Through Photographs"
          title={`${destination.name} Photo Gallery`}
          description={`Discover the beauty of ${destination.name} through unforgettable views.`}
        />

        {/* Image Gallery */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">

          {images.map((image, index) => (

            <button
              key={image.src}
              type="button"
              onClick={() => openGallery(index)}
              aria-label={`Enlarge ${image.alt}`}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer ${
                index === 0
                  ? 'sm:col-span-2 lg:row-span-2 h-64 sm:h-80 lg:h-full lg:min-h-[420px]'
                  : 'lg:col-span-2 h-52'
              }`}
            >

              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors" />

              <div className="absolute bottom-4 right-4 bg-white/90 text-primary rounded-full p-3 shadow-md group-hover:scale-110 transition-transform">

                <Maximize2 size={20} />

              </div>

            </button>

          ))}

        </div>

        {/* Gallery Information */}

        <div className="flex flex-wrap items-center justify-center gap-2 mt-6 text-muted text-sm">

          <Camera size={18} className="text-secondary" />

          <span>
            {totalImages} photographs
          </span>

          <span>·</span>

          <span>
            Click any image to enlarge
          </span>

        </div>

      </div>

      {/* Fullscreen Image Viewer */}

      <dialog
        ref={dialogRef}
        aria-label={`${destination.name} photo viewer`}
        onKeyDown={handleKeyDown}
        onCancel={(event) => {
          event.preventDefault()
          closeGallery()
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            closeGallery()
          }
        }}
        className="fixed inset-0 m-auto w-screen max-w-none h-screen max-h-none bg-black/95 text-white p-0 backdrop:bg-black/90"
      >

        {isOpen && (

          <div className="relative w-full h-full flex flex-col items-center justify-center px-12 md:px-20 py-20">

            {/* Close Button */}

            <button
              type="button"
              onClick={closeGallery}
              aria-label="Close image viewer"
              className="absolute top-5 right-5 z-20 bg-white/10 hover:bg-white/25 rounded-full p-3 transition-colors"
            >

              <X size={26} />

            </button>

            {/* Image Counter */}

            <div
              aria-live="polite"
              className="absolute top-6 left-1/2 -translate-x-1/2 bg-white/10 rounded-full px-5 py-2 text-sm"
            >

              {activeIndex + 1} / {totalImages}

            </div>

            {/* Previous Button */}

            <button
              type="button"
              onClick={previousImage}
              aria-label="Previous image"
              className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/25 rounded-full p-2 md:p-4 transition-colors z-10"
            >

              <ChevronLeft size={28} />

            </button>

            {/* Selected Image */}

            <img
              key={images[activeIndex].src}
              src={images[activeIndex].src}
              alt={images[activeIndex].alt}
              className="max-w-full max-h-[72dvh] object-contain rounded-lg"
            />

            {/* Next Button */}

            <button
              type="button"
              onClick={nextImage}
              aria-label="Next image"
              className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/25 rounded-full p-2 md:p-4 transition-colors z-10"
            >

              <ChevronRight size={28} />

            </button>

            {/* Image Caption */}

            <p className="text-white/80 text-center text-sm mt-5">

              {images[activeIndex].alt}

            </p>

            {/* Navigation Dots */}

            <div className="flex items-center gap-3 mt-5">

              {images.map((image, index) => (

                <button
                  key={image.src}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`View image ${index + 1}`}
                  aria-pressed={activeIndex === index}
                  className={`h-3 rounded-full transition-all ${
                    activeIndex === index
                      ? 'w-8 bg-accent'
                      : 'w-3 bg-white/40 hover:bg-white'
                  }`}
                />

              ))}

            </div>

          </div>

        )}

      </dialog>

    </section>
  )
}

export default DestinationGallery
