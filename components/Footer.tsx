function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-gray-200 dark:border-gray-700 mt-12 py-6 text-center">
      <p className="text-sm text-gray-700 dark:text-gray-600">
        © {year} Diana Chukhrai · Built with React & Tailwind
      </p>
    </footer>
  );
}
export default Footer;