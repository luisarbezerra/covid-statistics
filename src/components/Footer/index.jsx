const Footer = () => (
  <footer className="fixed bottom-0 bg-gray-800 p-4 left-0 right-0 text-white text-center text-sm">
    {'Made with '}
    <span className="text-red-600">❤</span> {'by '}
    <a
      className="hover:text-red-400"
      href="https://github.com/luisarbezerra"
      target="_blank"
      rel="noreferrer"
    >
      {'Luísa'}
    </a>
    {' and '}
    <a
      className="hover:text-blue-300"
      href="https://github.com/phiter"
      target="_blank"
      rel="noreferrer"
    >
      {'Phiter'}
    </a>
  </footer>
);

export default Footer;
