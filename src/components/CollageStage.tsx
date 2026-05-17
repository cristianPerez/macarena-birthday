import { motion } from 'framer-motion'
import { assets } from '../config/assets'
import { float, slowSpin } from '../animations/variants'
import { LayerImage } from './LayerImage'
import { CupcakeEntrance } from './CupcakeEntrance'
import { useInvitationVersion } from '../hooks/useInvitationVersion'

export function CollageStage() {
  const { imageSrc } = useInvitationVersion()
  return (
    <div className="relative mx-auto w-full max-w-[430px] overflow-visible px-3 pt-1 pb-4">
      {/* Capas opcionales — se muestran cuando existan los PNG en /public/assets */}
      <LayerImage
        src={assets.bunting}
        alt=""
        className="absolute top-[2%] left-[8%] z-20 w-[38%]"
        motionProps={{ variants: float, animate: 'animate' }}
      />
      <LayerImage
        src={assets.discoBall}
        alt=""
        className="absolute top-[1%] right-[4%] z-20 w-[28%]"
        motionProps={{ variants: slowSpin, animate: 'animate' }}
      />
      <LayerImage
        src={assets.star}
        alt=""
        className="absolute top-[8%] right-[18%] z-[21] w-[12%]"
        motionProps={{ variants: float, animate: 'animate' }}
      />
      <LayerImage
        src={assets.balloonOne}
        alt=""
        className="absolute top-[12%] left-[2%] z-10 w-[32%]"
        motionProps={{ variants: float, animate: 'animate' }}
      />
      <LayerImage
        src={assets.lemonadeGlass}
        alt=""
        className="absolute top-[38%] left-[0%] z-30 w-[30%]"
        motionProps={{ variants: float, animate: 'animate' }}
      />
      <LayerImage
        src={assets.bow}
        alt=""
        className="absolute bottom-[18%] left-[4%] z-30 w-[14%]"
      />
      <LayerImage
        src={assets.bow}
        alt=""
        className="absolute bottom-[18%] right-[4%] z-30 w-[14%] scale-x-[-1]"
      />

      <motion.div
        className="relative overflow-visible"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src={imageSrc}
          alt="Invitación al primer cumpleaños de Maca — collage lemonade party"
          className="relative z-0 w-full"
          draggable={false}
        />
        <LayerImage
          src={assets.maca}
          alt="Maca con sombrero de fiesta"
          className="absolute inset-0 z-10 mx-auto w-[72%] object-contain"
        />
      </motion.div>

      <CupcakeEntrance />
    </div>
  )
}
