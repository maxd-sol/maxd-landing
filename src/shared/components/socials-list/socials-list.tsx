import { TIcon } from '../../logo'
import tgLogo from './assets/telegram.png'
import discordLogo from './assets/discord.png'
import xLogo from './assets/twitter.png'
import styles from './socials-list.module.scss'

const ICON_SIZE = 40

const SOCIALS_LIST: TIcon[] = [
  {
    alt: 'discord',
    href: 'https://discord.gg/6ZeDzE4G',
    logo: discordLogo,
  },
  {
    alt: 'telegram',
    href: 'https://t.me/maximusdegenus',
    logo: tgLogo,
  },
  {
    alt: 'X',
    href: 'https://x.com/MaxD_onSol',
    logo: xLogo,
  },
]

export const SocialsList = () => {
  return (
    <div className={styles.container}>
      <h4 className={styles.header}>Socials</h4>
      <ul className={styles.list}>
        {SOCIALS_LIST.map((item) => (
          <li>
            <a target="_blank" href={item.href}>
              <img src={item.logo} height={ICON_SIZE} alt={item.alt} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
