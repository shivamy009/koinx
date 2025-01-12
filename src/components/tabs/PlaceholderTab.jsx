const PlaceholderTab = ({ tabName }) => (
    <div className="text-center py-10">
      <h3 className="text-lg font-semibold">No data available for {tabName} yet.</h3>
      <p className="text-gray-600">Integrate APIs or add relevant data here.</p>
    </div>
  );
  
  export default PlaceholderTab;
  