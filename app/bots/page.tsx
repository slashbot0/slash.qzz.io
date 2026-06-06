import dataset from "../../data/bots.json"
import type { Dataset } from "../../lib/types"
import BotExplorer from "./BotExplorer"

export const metadata = {
  title: "Bot Index — Slash",
  description: "308 bots de trading open-source (Web3/DEX, Polymarket, ML/AI) classés par qualité, sécurité et performance backtest.",
}

export default function Page() {
  const data = dataset as Dataset
  return <BotExplorer data={data} />
}
