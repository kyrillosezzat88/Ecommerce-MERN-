import {
  GuaranteeIcon,
  PhoneCellingIcon,
  ReturnIcon,
  ShippingIcon,
} from "@assets/icons";

const Features = () => {
  const data = [
    {
      icon: <PhoneCellingIcon />,
      title: "24/7 Customer Service",
      description:
        "We're here to help you with any questions or concerns you have, 24/7.",
    },
    {
      icon: <ReturnIcon />,
      title: "14-Day Money Back",
      description:
        "If you're not satisfied with your purchase, simply return it within 14 days for a refund.",
    },
    {
      icon: <GuaranteeIcon />,
      title: "Our Guarantee",
      description:
        "We stand behind our products and services and guarantee your satisfaction.",
    },
    {
      icon: <ShippingIcon />,
      title: "Our Guarantee",
      description:
        "We stand behind our products and services and guarantee your satisfaction.",
    },
  ];
  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-14">
        {data.map((benefit, idx) => (
          <div
            className="flex flex-col items-center gap-3 text-center"
            key={idx}
          >
            {benefit.icon}
            <h2 className=" font-bold">{benefit.title}</h2>
            <p className="text-sm">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
