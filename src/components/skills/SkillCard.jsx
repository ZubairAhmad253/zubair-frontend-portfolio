const SkillCard = ({ name, icon }) => (
  <div
    className="flex flex-col items-center text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md w-32"
    data-aos="zoom-in"
  >
    <img src={icon} alt={name} className="h-12 w-12 object-contain mb-2" />
    <p className="text-sm text-gray-700 dark:text-gray-300">{name}</p>
  </div>
);

export default SkillCard;
