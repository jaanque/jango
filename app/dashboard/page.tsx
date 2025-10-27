import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import DashboardCard from './components/DashboardCard'
import './dashboard.css'

export default async function DashboardPage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return redirect('/login')
  }

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1 className="text-4xl font-bold">Bienvenido/a, {user.email}</h1>
        <p className="text-lg text-muted-foreground">
          Este es tu `dashboard`. Aquí puedes ver tus estadísticas, problemas
          recientes y más.
        </p>
      </header>
      <div className="dashboard-grid">
        <DashboardCard
          title="Problemas resueltos"
          value="0"
          change="+0% desde la semana pasada"
        />
        <DashboardCard
          title="Envíos"
          value="0"
          change="+0% desde la semana pasada"
        />
        <DashboardCard
          title="Ranking"
          value="#0"
          change="+0% desde la semana pasada"
        />
      </div>
    </div>
  )
}
