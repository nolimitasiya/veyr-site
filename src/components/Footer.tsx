export default function Footer() {
  return (
    <footer className="border-t">
      <div className="max-w-6xl mx-auto px-4 py-10 text-sm text-gray-500 flex flex-col sm:flex-row gap-3 items-center justify-between">
        <div>© {new Date().getFullYear()} VEYR. All rights reserved.</div>
        <div className="flex gap-4">
          <a href="/privacy" className="hover:opacity-80">Privacy</a>
          <a href="/terms" className="hover:opacity-80">Terms</a>
        </div>
      </div>
    </footer>
  );
}
