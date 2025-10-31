// Página principal para compatibilidad con el sistema de despliegue
// Este proyecto usa Vite + React Router, el punto de entrada real es src/main.tsx

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-foreground">VERLA</h1>
        <p className="mt-4 text-muted-foreground">Proyecto Vite + React Router</p>
        <p className="mt-2 text-sm text-muted-foreground">El punto de entrada principal es src/main.tsx</p>
      </div>
    </div>
  )
}
