const Header = () => (
    <header className="bg-gray-100 p-4 shadow">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600 mb-2 md:mb-0">KoinX</h1>
        <nav className="flex space-x-4">
          <a href="#" className="text-gray-700 hover:underline">Crypto Taxes</a>
          <a href="#" className="text-gray-700 hover:underline">Free Tools</a>
        </nav>
      </div>
    </header>
  );
  
  export default Header;
  