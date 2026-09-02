export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-black py-4 border-t border-gray-800 text-center z-40">
      <p className="text-gray-300 font-bold text-sm">
        © {new Date().getFullYear()} Théo Stradiot. Tous droits réservés.
      </p>
    </footer>
  );
}