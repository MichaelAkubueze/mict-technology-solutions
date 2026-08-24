export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/2348038721296?text=Hello%20MICT%2C%20I%20would%20like%20to%20discuss%20a%20technology%20project."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact MICT on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-green-600 px-4 py-3 text-sm font-bold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-green-700 hover:shadow-2xl sm:bottom-6 sm:right-6"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-lg">
        ☎
      </span>

      <span className="hidden sm:inline">
        Chat with us
      </span>
    </a>
  );
}