import { createPortal } from 'react-dom';

export default function Footer() {
  return createPortal(
    <footer className="fixed bottom-0 left-0 w-full bg-black py-4 border-t border-gray-800 text-center z-50">
      <p className="text-gray-300 font-bold text-sm">
        © {new Date().getFullYear()} Théo Stradiot. Tous droits réservés.
      </p>
    </footer>,
    document.body
  );
}