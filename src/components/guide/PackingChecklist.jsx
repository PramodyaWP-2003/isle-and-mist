
import { useState } from 'react'
import {
  Backpack,
  RotateCcw,
  CheckCircle,
  Check,
} from 'lucide-react'

import SectionHeading from '../ui/SectionHeading'
import { packingItems } from '../../data/travelGuideData'

const STORAGE_KEY = 'isle-and-mist-packing-checklist'

function loadChecklist() {
  try {
    const stored = JSON.parse(
      localStorage.getItem(STORAGE_KEY) || '[]'
    )

    if (!Array.isArray(stored)) return []

    return packingItems
      .filter((item) => stored.includes(item.id))
      .map((item) => item.id)

  } catch {
    return []
  }
}

function PackingChecklist() {
  const [checkedItems, setCheckedItems] = useState(loadChecklist)
  const [storageError, setStorageError] = useState(false)

  const progress = Math.round(
    (checkedItems.length / packingItems.length) * 100
  )

  function updateChecklist(items) {
    setCheckedItems(items)

    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(items)
      )

      setStorageError(false)

    } catch {
      setStorageError(true)
    }
  }

  function toggleItem(id) {
    const updatedItems = checkedItems.includes(id)
      ? checkedItems.filter((item) => item !== id)
      : [...checkedItems, id]

    updateChecklist(updatedItems)
  }

  function resetChecklist() {
    updateChecklist([])
  }

  function markAllPacked() {
    updateChecklist(
      packingItems.map((item) => item.id)
    )
  }

  return (
    <section className="section-padding bg-white">

      <div className="section-container">

        <SectionHeading
          subtitle="Prepare for Your Adventure"
          title="Travel Packing Checklist"
          description="Keep track of your travel essentials before beginning your Sri Lankan journey."
        />

        <div className="max-w-4xl mx-auto bg-cream border border-primary/10 rounded-3xl p-5 md:p-8 mt-12">

          <div className="flex flex-wrap items-center gap-4 mb-6">

            <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center">

              <Backpack size={28} className="text-accent" />

            </div>

            <div className="flex-1">

              <h3 className="font-heading text-2xl font-semibold text-primary">
                Your Packing Progress
              </h3>

              <p className="text-muted text-sm mt-1">
                {checkedItems.length} of {packingItems.length} items packed
              </p>

            </div>

            <p className="text-secondary text-3xl font-semibold">
              {progress}%
            </p>

          </div>

          <div
            role="progressbar"
            aria-label="Packing progress"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={progress}
            className="w-full h-3 bg-primary/10 rounded-full overflow-hidden mb-8"
          >

            <div
              className="h-full bg-secondary rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

            {packingItems.map((item) => {
              const isChecked = checkedItems.includes(item.id)

              return (
                <label
                  key={item.id}
                  className={`flex items-center gap-3 rounded-xl border p-4 cursor-pointer transition-colors ${
                    isChecked
                      ? 'bg-secondary/10 border-secondary/30'
                      : 'bg-white border-primary/10'
                  }`}
                >

                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => toggleItem(item.id)}
                    className="w-5 h-5 accent-secondary shrink-0"
                  />

                  <span
                    className={`text-sm ${
                      isChecked
                        ? 'line-through text-muted'
                        : 'text-primary'
                    }`}
                  >
                    {item.label}
                  </span>

                </label>
              )
            })}

          </div>

          {progress === 100 && (

            <div
              role="status"
              className="flex items-center gap-3 bg-green-100 text-green-800 rounded-xl p-4 mt-6"
            >

              <CheckCircle size={22} className="shrink-0" />

              <p className="text-sm font-medium">
                All checklist items completed!
              </p>

            </div>

          )}

          {storageError && (

            <p role="alert" className="text-amber-700 text-sm mt-4">
              Your checklist could not be saved to browser storage.
            </p>

          )}

          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-primary/10 pt-6 mt-8">

            <button
              type="button"
              onClick={resetChecklist}
              className="inline-flex items-center gap-2 border border-primary/20 text-primary rounded-full px-5 py-3 text-sm hover:bg-white"
            >
              <RotateCcw size={17} />
              Reset Checklist
            </button>

            <button
              type="button"
              onClick={markAllPacked}
              className="inline-flex items-center gap-2 bg-primary text-white rounded-full px-5 py-3 text-sm hover:bg-secondary"
            >
              <Check size={18} />
              Mark All Packed
            </button>

          </div>

          <p className="text-muted text-xs text-center mt-6">
            Your checklist is saved automatically in this browser
            when browser storage is available.
          </p>

        </div>

      </div>

    </section>
  )
}

export default PackingChecklist
