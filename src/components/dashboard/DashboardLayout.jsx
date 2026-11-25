
import { Link } from 'react-router-dom'

import {
  ChevronRight,
  LayoutDashboard,
} from 'lucide-react'

import DashboardSidebar from './DashboardSidebar'

function DashboardLayout({
  children,
  activeTab,
  onTabChange,
}) {
  return (
    <section className="bg-cream min-h-screen py-8 md:py-12">

      <div className="section-container">

        <div className="flex items-center gap-2 text-muted text-xs sm:text-sm mb-6">

          <Link
            to="/"
            className="hover:text-primary"
          >

            Home

          </Link>

          <ChevronRight size={15} />

          <span className="text-primary font-medium">

            Dashboard

          </span>

        </div>

        <div className="flex items-center gap-3 mb-8">

          <div className="bg-primary/10 text-primary p-3 rounded-xl">

            <LayoutDashboard size={25} />

          </div>

          <div>

            <h1 className="font-heading text-3xl md:text-4xl text-primary font-semibold">

              My Dashboard

            </h1>

            <p className="text-muted text-xs sm:text-sm mt-1">

              Manage your Sri Lankan adventures.

            </p>

          </div>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[250px_minmax(0,1fr)] xl:grid-cols-[270px_minmax(0,1fr)] gap-6 lg:gap-8 items-start">

          <DashboardSidebar
            activeTab={activeTab}
            onTabChange={onTabChange}
          />

          <div className="min-w-0 space-y-8">

            {children}

          </div>

        </div>

      </div>

    </section>
  )
}

export default DashboardLayout
