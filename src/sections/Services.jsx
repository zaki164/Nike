import { services } from "../constants";
import { ServiceCard } from "../components";

import AOS from "aos";
AOS.init({
  once: true,
});

const Services = () => {
  return (
    <section
      className="flex justify-center flex-wrap gap-9 section_padding"
      data-aos={"flip-right"}
    >
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </section>
  );
};

export default Services;
