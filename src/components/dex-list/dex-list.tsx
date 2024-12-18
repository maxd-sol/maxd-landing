import birdeyeLogo from './assets/birdeye-logo.png'
import pumpSantaLogo from './assets/pump-santa.webp'
import dexScreenLogo from './assets/dexscreener-logo.jpg'
import photonSolLogo from './assets/photon-sol-logo.png'
import styles from './dex-list.module.scss'
import { TIcon } from '../../shared/logo'

const ICON_SIZE = 40

const DEX_LIST: TIcon[] = [
  {
    href: 'https://pump.fun/coin/AemSWemq719nNvkZPWAPDzRzpPJ3C49vkYaLiFNmpump',
    logo: pumpSantaLogo,
    alt: 'pumpfun',
  },
  {
    href: 'https://dexscreener.com/solana/dywsj5xp57d9x65dnodxkkm1pgfjzafbam5oif7jxc3e',
    logo: dexScreenLogo,
    alt: 'dexscreener',
  },
  {
    href: 'https://www.birdeye.so/token/AemSWemq719nNvkZPWAPDzRzpPJ3C49vkYaLiFNmpump?chain=solana&utm_source=rugcheck&tab=trades',
    logo: birdeyeLogo,
    alt: 'birdeye',
  },
  {
    href: 'https://photon-sol.tinyastro.io/en/lp/DyWsj5xp57D9x65DNodXkkM1pGFjZAfBAm5oif7JXc3E',
    logo: photonSolLogo,
    alt: 'photonsol',
  },
]

export const DexList = () => (
  <div className={styles.container}>
    <h4 className={styles.header}>DEX</h4>
    <ul className={styles.list}>
      {DEX_LIST.map((item) => (
        <li>
          <a target="_blank" href={item.href}>
            <img src={item.logo} height={ICON_SIZE} alt={item.alt} />
          </a>
        </li>
      ))}
    </ul>
  </div>
)
