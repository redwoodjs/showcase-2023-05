import Confetti from 'react-confetti'
import useWindowSize from 'src/hooks/UseWindowSize/UseWindowSize'

export default () => {
  const { width, height } = useWindowSize()
  return <Confetti width={width} height={height} />
}
