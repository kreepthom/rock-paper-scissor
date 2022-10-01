import { IconPaper, IconLizard, IconRock, IconScissors, IconSpock } from './SVG/Icon'
import { Options } from './ThreeGameOptions'

interface IDataOptions {
  icon: JSX.Element
  key: number
}

export const FiveGameOptions = () => {

  const DataOptions: IDataOptions[] = [
    { icon: <IconScissors />, key: 0 },
    { icon: <IconPaper />, key: 2 },
    { icon: <IconRock />, key: 3 },
    { icon: <IconLizard />, key: 4 },
    { icon: <IconSpock />, key: 1 }
  ]
  return (
    <div className='container_fiveop'>
      {
        DataOptions.map(({ icon, key }: any) => (
          <Options value={0} key={key} size='Sizes' icon={icon} />
        ))
      }
    </div>
  )
}
