const TechnologyBadge = ({ iconSrc, name }) => {
  return (
    <div className="flex items-center border border-gray-300 rounded-xl p-3 bg-gray-50">
      <div className="border border-gray-300 rounded-xl p-1 bg-white mr-4">
        <img src={iconSrc} alt="Technology icon" className="h-8 w-8" />
      </div>
      <p className="font-medium text-gray-700 underline underline-offset-8 mb-2 decoration-gray-700">
        {name}
      </p>
    </div>
  );
};

export default TechnologyBadge;
