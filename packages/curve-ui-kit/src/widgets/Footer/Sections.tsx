import BeenhereOutlinedIcon from '@mui/icons-material/BeenhereOutlined'
import BugReportOutlinedIcon from '@mui/icons-material/BugReportOutlined'
import GitHubIcon from '@mui/icons-material/GitHub'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import MonitorHeartOutlinedIcon from '@mui/icons-material/MonitorHeartOutlined'
import YouTubeIcon from '@mui/icons-material/YouTube'
import { t } from '@ui-kit/lib/i18n'
import { CrvHubIcon } from '@ui-kit/shared/icons/CrvHubIcon'
import { DiscordIcon } from '@ui-kit/shared/icons/DiscordIcon'
import { DocsIcon } from '@ui-kit/shared/icons/DocsIcon'
import { DuneIcon } from '@ui-kit/shared/icons/DuneIcon'
import { IntegrationsIcon } from '@ui-kit/shared/icons/IntegrationsIcon'
import { LAFIcon } from '@ui-kit/shared/icons/LAFIcon'
import { NewsIcon } from '@ui-kit/shared/icons/NewsIcon'
import { RiskDisclaimersIcon } from '@ui-kit/shared/icons/RiskDisclaimersIcon'
import { TelegramCNIcon } from '@ui-kit/shared/icons/TelegramCNIcon'
import { TelegramIcon } from '@ui-kit/shared/icons/TelegramIcon'
import { TelegramRUIcon } from '@ui-kit/shared/icons/TelegramRUIcon'
import { XIcon } from '@ui-kit/shared/icons/XIcon'
import { AppName } from '@ui-kit/shared/routes'

function getDisclaimersTab(appName: AppName) {
  if (appName === 'lend') {
    return '?tab=lend'
  }
  if (appName !== 'crvusd') {
    return ''
  }
  if (typeof window !== 'undefined' && window.location.href.toLocaleLowerCase().includes('scrvusd')) {
    return '?tab=scrvusd'
  }
  return '?tab=crvusd'
}

export const getSections = (appName: AppName) => [
  {
    title: t`Community`,
    links: [
      {
        label: t`Twitter`,
        href: 'https://twitter.com/curvefinance',
        icon: <XIcon />,
      },
      {
        label: t`Discord`,
        href: 'https://discord.gg/rgrfS7W',
        icon: <DiscordIcon />,
      },
    ],
  },
  {
    title: t`Documentation`,
    links: [
      {
        label: t`Technical Docs`,
        href: 'https://docs.curve.fi/',
        icon: <DocsIcon />,
      },
      {
        label: t`Github`,
        href: 'https://github.com/curvefi',
        icon: <GitHubIcon />,
      },
    ],
  },
  {
    title: t`Security`,
    links: [
      {
        label: t`Audits`,
        href: 'https://docs.curve.fi/security/security/#security-audits',
        icon: <BeenhereOutlinedIcon />,
      },
      {
        label: t`Dune Analytics`,
        href: 'https://dune.com/mrblock_buidl/Curve.fi',
        icon: <DuneIcon />,
      },
    ],
  },
]
