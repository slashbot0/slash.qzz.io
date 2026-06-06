import dataset from "../../data/bots.json"
import type { Dataset } from "../../lib/types"
import BotExplorer from "./BotExplorer"

export const metadata = {
  title: "Web3 Bot Index — Slash",
  description: "253 bots de trading DEX open-source classés par qualité, sécurité et performance backtest.",
}

export default function Page() {
  const data = dataset as Dataset
  return <BotExplorer data={data} />
}
