
import {
  Wallet,
  Hotel,
  Utensils,
  Car,
  Compass,
  ShieldCheck,
  AlertCircle,
  CheckCircle,
} from 'lucide-react'

import { formatCurrency } from '../../utils/tripGenerator'

function CostSummary({ cost, budget, packageReference }) {

  const expenses = [
    {
      label: 'Accommodation',
      icon: Hotel,
      value: cost.accommodation,
      color: 'bg-primary',
    },
    {
      label: 'Food',
      icon: Utensils,
      value: cost.food,
      color: 'bg-secondary',
    },
    {
      label: 'Transportation',
      icon: Car,
      value: cost.transport,
      color: 'bg-green-400',
    },
    {
      label: 'Activities',
      icon: Compass,
      value: cost.activities,
      color: 'bg-accent',
    },
    {
      label: 'Contingency',
      icon: ShieldCheck,
      value: cost.contingency,
      color: 'bg-stone-400',
    },
  ]

  const hasBudget =
    budget !== '' &&
    Number.isFinite(Number(budget)) &&
    Number(budget) >= 0

  const difference = Number(budget) - cost.total

  return (
    <aside className="bg-white border border-primary/10 rounded-2xl p-6 shadow-sm lg:sticky lg:top-28">

      <div className="flex items-center gap-3 mb-5">

        <Wallet size={25} className="text-secondary" />

        <h3 className="font-heading text-2xl font-semibold text-primary">
          Estimated Trip Cost
        </h3>

      </div>

      <p className="text-muted text-xs mb-2">
        Total for all travelers
      </p>

      <p className="text-primary text-4xl font-semibold break-words">
        {formatCurrency(cost.total)}
      </p>

      <p className="text-muted text-sm mt-2 mb-6">
        {formatCurrency(cost.perPerson)} per person
      </p>

      <div
        aria-hidden="true"
        className="flex h-3 rounded-full overflow-hidden mb-6"
      >

        {expenses.map((item) => (

          <div
            key={item.label}
            className={item.color}
            style={{
              width: `${(item.value / cost.total) * 100}%`,
            }}
          />

        ))}

      </div>

      <div className="space-y-4">

        {expenses.map((item) => {
          const Icon = item.icon

          return (
            <div
              key={item.label}
              className="flex items-center justify-between gap-3 text-sm"
            >

              <span className="flex items-center gap-2 text-muted">

                <Icon
                  size={18}
                  className="text-secondary shrink-0"
                />

                {item.label}

              </span>

              <span className="font-semibold text-primary">
                {formatCurrency(item.value)}
              </span>

            </div>
          )
        })}

      </div>

      {hasBudget && (

        <div className={`rounded-xl p-4 mt-6 ${
          difference >= 0
            ? 'bg-green-50 text-green-800'
            : 'bg-amber-50 text-amber-800'
        }`}>

          <div className="flex items-center gap-2 font-medium text-sm mb-2">

            {difference >= 0
              ? <CheckCircle size={18} />
              : <AlertCircle size={18} />}

            {difference >= 0
              ? 'Within Your Budget'
              : 'Above Your Budget'}

          </div>

          <p className="text-xs leading-relaxed">

            {difference >= 0
              ? `${formatCurrency(difference)} remaining in your budget.`
              : `Estimated cost exceeds your budget by ${formatCurrency(Math.abs(difference))}.`}

          </p>

        </div>

      )}

      {packageReference && (

        <div className="bg-cream rounded-xl p-4 mt-6">

          <p className="text-primary font-semibold text-sm mb-2">
            Original Tour Package
          </p>

          <p className="text-muted text-xs mb-2">
            {packageReference.title} · {packageReference.originalDuration} Days
          </p>

          <p className="text-primary font-semibold">
            {formatCurrency(packageReference.estimatedTotal)}
          </p>

          <p className="text-muted text-xs mt-2">
            Reference package price only. Your custom trip
            estimate is calculated separately.
          </p>

        </div>

      )}

      <p className="text-muted text-xs leading-relaxed mt-6">
        Illustrative estimates in USD. Actual prices may vary.
        International flights and insurance are excluded.
      </p>

    </aside>
  )
}

export default CostSummary
