
import {
  Activity,
  Map,
  UserPlus,
  Pencil,
} from 'lucide-react'

function DashboardActivity({
  trips = [],
  user,
}) {
  const activities = trips.flatMap((trip) => {

    const items = [
      {
        id: `${trip.id}-created`,
        title: 'Travel plan created',
        description: trip.name,
        date: trip.createdAt,
        icon: Map,
      },
    ]

    if (
      trip.updatedAt &&
      trip.updatedAt !== trip.createdAt
    ) {
      items.push({
        id: `${trip.id}-updated`,
        title: 'Travel plan updated',
        description: trip.name,
        date: trip.updatedAt,
        icon: Pencil,
      })
    }

    return items
  })

  if (user?.createdAt) {
    activities.push({
      id: 'account-created',
      title: 'Joined Isle & Mist',
      description: 'Your travel account was created.',
      date: user.createdAt,
      icon: UserPlus,
    })
  }

  const recentActivities = activities
    .filter(
      (item) =>
        item.date &&
        !Number.isNaN(new Date(item.date).getTime())
    )
    .sort(
      (a, b) =>
        new Date(b.date) - new Date(a.date)
    )
    .slice(0, 5)

  return (
    <section className="bg-white rounded-2xl border border-primary/10 p-5 sm:p-7">

      <div className="flex items-center gap-3 mb-6">

        <Activity
          size={23}
          className="text-secondary"
        />

        <h2 className="font-heading text-2xl text-primary font-semibold">

          Recent Activity

        </h2>

      </div>

      {recentActivities.length === 0 ? (

        <p className="text-muted text-sm">

          No recent activity available.

        </p>

      ) : (

        <div className="space-y-5">

          {recentActivities.map((item) => {

            const Icon = item.icon

            return (
              <div
                key={item.id}
                className="flex items-start gap-4"
              >

                <div className="w-10 h-10 bg-secondary/10 text-secondary rounded-full flex items-center justify-center shrink-0">

                  <Icon size={18} />

                </div>

                <div className="flex-1 min-w-0">

                  <p className="text-primary text-sm font-medium">

                    {item.title}

                  </p>

                  <p className="text-muted text-xs mt-1 break-words">

                    {item.description}

                  </p>

                  <p className="text-muted text-[11px] mt-2">

                    {new Date(item.date).toLocaleDateString(
                      'en-US',
                      {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      }
                    )}

                  </p>

                </div>

              </div>
            )
          })}

        </div>

      )}

    </section>
  )
}

export default DashboardActivity
