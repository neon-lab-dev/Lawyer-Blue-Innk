const Heading = ({
  heading,
  description,
}: {
  heading: string;
  description?: string;
}) => {
  return (
    <div>
      <h3 className="title font-neue-montreal max-w-170.25">{heading}</h3>
      {description && (
        <p className="text-lg text-neutral-15 mt-3 font-work-sans max-w-170.25 leading-7">
          {description}
        </p>
      )}
    </div>
  );
};

export default Heading;
