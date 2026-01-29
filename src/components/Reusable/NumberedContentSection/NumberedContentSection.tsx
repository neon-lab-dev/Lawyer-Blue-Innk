/* eslint-disable @typescript-eslint/no-explicit-any */
import Container from '../Container/Container';

const NumberedContentSection = ({heading, items} : {heading: string, items: any[]}) => {
    return (
        <div className="font-neue-montreal pt-14 pb-28 bg-secondary-05">
      <Container>
        <h2 className="title text-center">{heading}</h2>

        <div className="flex flex-col items-center mt-12">
          {items?.map((item?) => (
            <div
              key={item?.id}
              className="py-12 px-19.5 border-t border-neutral-20 min-w-230"
            >
              <div className="text-neutral-15 flex items-center gap-6">
                <h3 className="title">{item?.id}</h3>
                <div>
                  <h4 className="text-2xl font-medium">
                    {item?.title}
                  </h4>
                  <p className="mt-3 text-lg leading-7 max-w-176.5">
                    {item?.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
    );
};

export default NumberedContentSection;