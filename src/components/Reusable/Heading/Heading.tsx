const Heading = ({
  heading,
  description,
}: {
  heading: string;
  description?: string;
}) => {
  return (
    <div>
      <h3 className="title font-neue-montreal">{heading}</h3>
      {description && (
        <p className="text-lg text-neutral-15 mt-3 font-work-sans">
          {description}
        </p>
      )}
    </div>
  );
};

export default Heading;
