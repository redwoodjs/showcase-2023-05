import { useCallback, useState } from 'react'
import Confetti from 'src/components/Confetti'

const Header = () => {
  const [showConfetti, setShowConfetti] = useState(false)

  const toggleConfetti = useCallback(() => {
    setShowConfetti(!showConfetti)
  }, [showConfetti])

  return (
    <div className="p-0 bg-bottom bg-cover bg-forest">
      <div className="bg-gradient-to-b from-transparent via-[#00000044] to-black bg-opacity-10 m-0 p-4 flex-y items-center justify-center">
        <button
          className="flex w-16 h-16 p-0 mx-auto mt-6 transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:shadow-2xl"
          onClick={toggleConfetti}
        >
          <div className="w-full h-full bg-cover bg-icon" />
        </button>
        <div className="mb-24 text-center">
          <h1 className="text-5xl font-bold md:text-6xl">
            RedwoodJS
            <br />
            <span className="font-bold text-9xl shimmer">Showcase</span>
          </h1>
        </div>
      </div>
      {showConfetti && <Confetti />}
    </div>
  )
}

export default Header
