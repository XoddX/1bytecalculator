export default function Header({ title }) {
  return (
      <div className="flex flex-col justify-between p-6">
            <img src="/logo.png" width='100rem' className="mx-auto"/>
            <h1 className="text-2xl font-large font-bold">{title}</h1>
            <span className="text-sm text-right">Based on
                <a href="https://theshiftproject.org/lean-ict/" target="_blank" className="pl-1 italic underline underline-offset-1">Shift Project works</a>
            </span>
      </div>
  )
}
