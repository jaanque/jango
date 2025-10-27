import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

export default async function DashboardPage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return redirect('/login')
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold">Bienvenido/a, {user.email}</h1>
      <p className="text-lg text-muted-foreground">
        Este es tu `dashboard`. Aquí puedes ver tus estadísticas, problemas
        recientes y más.
      </p>
      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border bg-card text-card-foreground shadow dashboard-card">
          <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 className="tracking-tight text-sm font-medium">
              Problemas resueltos
            </h3>
          </div>
          <div className="p-6 pt-0">
            <div className="text-2xl font-bold">0</div>
            <p className="text-xs text-muted-foreground">
              +0% desde la semana pasada
            </p>
          </div>
        </div>
        <div className="rounded-xl border bg-card text-card-foreground shadow dashboard-card">
          <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 className="tracking-tight text-sm font-medium">
              Envíos
            </h3>
          </div>
          <div className="p-6 pt-0">
            <div className="text-2xl font-bold">0</div>
            <p className="text-xs text-muted-foreground">
              +0% desde la semana pasada
            </p>
          </div>
        </div>
        <div className="rounded-xl border bg-card text-card-foreground shadow dashboard-card">
          <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 className="tracking-tight text-sm font-medium">
              Ranking
            </h3>
          </div>
          <div className="p-6 pt-0">
            <div className="text-2xl font-bold">#0</div>
            <p className="text-xs text-muted-foreground">
              +0% desde la semana pasada
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
