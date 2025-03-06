const Accordion = ({ exp }) => {
  const { title, position, timeframe, description, logo } = exp;

  return (
    <div className=" join-vertical w-full">
      <div className="collapse collapse-arrow join-item border-base-300 text-dark">
        <input type="radio" name="my-accordion-4" defaultChecked />
        <div className="collapse-title flex  gap-4 items-center justify-between">
          <div className="flex gap-2">
            <img src={logo} alt={title} className="h-9" />
            <div className="text-xs flex flex-col">
              <h1 className="font-bold">{title}</h1>
              <p>{position}</p>
            </div>
          </div>
          <div>
            <div className="text-xs text-gray-600">{timeframe}</div>
          </div>
        </div>
        <div className="collapse-content text-xs tracking-wide">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
