import styles from './me.module.scss'

type MeProps = Omit<
  React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >,
  'src'
>
export const Me = ({ ...imgProps }: MeProps) => (
  <img className={styles.me} src="../../public/me.png" {...imgProps} />
)
