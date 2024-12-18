import styles from './me.module.scss'
import me from '../../../public/me.png'

type MeProps = Omit<
  React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >,
  'src'
>
export const Me = ({ ...imgProps }: MeProps) => (
  <img className={styles.me} src={me} {...imgProps} />
)
