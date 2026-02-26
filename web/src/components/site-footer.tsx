export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black/90">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} Kisam Technologies. All rights reserved.</p>
        <p>Professional CCTV, Alarms, Smart Gates, Car Security & GPS Tracking.</p>
      </div>
    </footer>
  );
}
