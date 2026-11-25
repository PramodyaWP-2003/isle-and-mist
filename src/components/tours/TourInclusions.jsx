
import {
  CheckCircle,
  XCircle,
  PackageCheck,
} from 'lucide-react'

function TourInclusions({ included, excluded }) {
  return (
    <section className="mb-12">

      <div className="flex items-center gap-3 mb-6">

        <PackageCheck size={28} className="text-secondary" />

        <h2 className="font-heading text-3xl font-semibold text-primary">
          Package Inclusions
        </h2>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        <article className="bg-white border border-primary/10 rounded-2xl p-6">

          <h3 className="font-heading text-2xl font-semibold text-primary mb-5">
            What's Included
          </h3>

          <ul className="space-y-4">

            {included.map((item) => (

              <li
                key={item}
                className="flex items-start gap-3 text-muted text-sm"
              >

                <CheckCircle
                  size={19}
                  className="text-green-600 shrink-0"
                />

                {item}

              </li>

            ))}

          </ul>

        </article>

        <article className="bg-white border border-primary/10 rounded-2xl p-6">

          <h3 className="font-heading text-2xl font-semibold text-primary mb-5">
            What's Not Included
          </h3>

          <ul className="space-y-4">

            {excluded.map((item) => (

              <li
                key={item}
                className="flex items-start gap-3 text-muted text-sm"
              >

                <XCircle
                  size={19}
                  className="text-red-500 shrink-0"
                />

                {item}

              </li>

            ))}

          </ul>

        </article>

      </div>

    </section>
  )
}

export default TourInclusions
