export function Footer() {
  const links = [
    { label: "Programs", href: "#programs" },
    { label: "Planner", href: "#planner" },
    { label: "Calculators", href: "#calculators" },
    { label: "Schedule", href: "#schedule" },
    { label: "FAQs", href: "#faqs" },
  ];

  return (
    <footer className="border-t border-zinc-200 bg-white py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="text-lg font-semibold text-brand">FitFlow</p>
        <nav className="flex flex-wrap items-center gap-4 text-sm text-zinc-500">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-brand">
              {link.label}
            </a>
          ))}
        </nav>
        <p className="text-xs text-zinc-400">
          © {new Date().getFullYear()} FitFlow Labs. Train smart, recover well.
        </p>
      </div>
    </footer>
  );
}

