
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from 'framer-motion'

import DestinationCard from '../ui/DestinationCard'

function DestinationGrid({ destinations }) {
  const reduceMotion = useReducedMotion()

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 items-stretch">

      <AnimatePresence initial={false}>

        {destinations.map((destination) => (

          <motion.div
            key={destination.id}
            layout={!reduceMotion}
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.3 }}
            className="h-full min-w-0 flex flex-col [&>*]:flex-1"
          >

            <DestinationCard destination={destination} />

          </motion.div>

        ))}

      </AnimatePresence>

    </div>
  )
}

export default DestinationGrid
