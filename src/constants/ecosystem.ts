import { ReactComponent as HeartIcon } from "@/assets/svgs/ecosystem/heart.svg"
import { ReactComponent as NoteIcon } from "@/assets/svgs/ecosystem/note.svg"
import { ReactComponent as SettingsIcon } from "@/assets/svgs/ecosystem/settings.svg"

export const ECOSYSTEM_PAGE_SYMBOL = "ecosystem"

export const DIVERGENT_CATEGORY_MAP = {
  Community: ["Community", "DAO", "Governance"],
  DeFi: ["DEX", "DeFi", "Launchpad", "Lending", "Marketplace", "Payment"],
  Gaming: ["Gaming"],
  Infra: ["Bridge", "Gateway", "Indexer", "Infrastructure", "Node Provider", "Oracle"],
  NFT: ["NFT"],
  Privacy: ["Privacy", "Identity"],
  Social: ["Social"],
  Tooling: ["Tooling"],
  Wallet: ["Wallet", "Hardware Wallet"],
}

export const GET_IN_TOUCH_LINK = "https://tally.so/r/waxLBW"

export const REQUEST_A_DAPP_LINK = "https://tally.so/r/3jlj59"

export const LEARN_BUILD_LINK = "https://docs.scroll.io/en/getting-started/overview/"

export const ECOSYSTEM_EXPLORER_LIST = [
  {
    icon: NoteIcon,
    href: GET_IN_TOUCH_LINK,
    title: "Get in touch",
    content: "Reach out directly if you need more support for your project.",
  },
  {
    icon: HeartIcon,
    href: REQUEST_A_DAPP_LINK,
    title: "Request a dApp",
    content: "Can’t find the application you’re looking for? We want to know!",
  },
  {
    icon: SettingsIcon,
    href: LEARN_BUILD_LINK,
    title: "Learn how to build with Scroll",
    content: "For a walkthrough, start with the User Guide's Setup page.",
  },
]

export const TWITTER_ORIGIN = "https://twitter.com/"

export const ECOSYSTEM_NETWORK_LIST = ["All networks", "Mainnet", "Testnet"]

export const NORMAL_HEADER_HEIGHT = "6.5rem"
