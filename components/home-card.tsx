import { CardData } from "@/types/card"

const HomeCard = ({ title, icon, description }: CardData) => {
  return (
    <div className="relative overflow-hidden rounded-lg border bg-background p-2">
      <div className="float-right pr-5 pt-5">{icon} </div>
      <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
        <div className="space-y-2">
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default HomeCard
