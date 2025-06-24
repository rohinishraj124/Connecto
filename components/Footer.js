// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 py-6 mt-20 text-center border-t">
      <p className="text-sm">
        © {new Date().getFullYear()} <span className="font-semibold text-blue-600">Connecto</span>. All rights reserved.
      </p>
    </footer>
  );
}