import NumberedContentSection from "@/components/Reusable/NumberedContentSection/NumberedContentSection";

const WhyChooseUs = () => {
  const whyChooseUsDetails = [
    {
      id: "01",
      title: "Full-Service IP Expertise",
      description:
        "End-to-end legal solutions across all areas of Intellectual Property and allied legal domains.",
    },
    {
      id: "02",
      title: "Trusted by 40,000+ Clients Worldwide",
      description:
        "Representing individuals, startups, MSMEs, and large corporates across India and international jurisdictions.",
    },
    {
      id: "03",
      title: "Proven Industry Recognition",
      description:
        "Consistently ranked by the Government of India among the Top 15 trademark filing law firms, and recognized as the youngest firm to achieve this distinction.",
    },
    {
      id: "04",
      title: "Client-First Legal Strategies",
      description:
        "Every legal strategy is carefully customized to match your unique circumstances, objectives, and priorities, ensuring focused, effective, and client-centric legal solutions.",
    },
    {
      id: "05",
      title: "High-Volume, High-Precision Filings",
      description:
        "One of India’s leading IP filing and prosecution firms with strong operational scale and efficiency.",
    },
    {
      id: "06",
      title: "Global Reach & Cross-Border Expertise",
      description:
        "Protection, enforcement, and advisory services across 100+ countries, supported by a robust international network.",
    },
    {
      id: "07",
      title: "Strategic Litigation & Enforcement",
      description:
        "Comprehensive handling of prosecution, litigation, and enforcement before IP offices, courts, and tribunals.",
    },
    {
      id: "08",
      title: "International Treaty Advisory",
      description:
        "Regularly advising on cross-border IP matters, including TRIPS and the Madrid Protocol.",
    },
    {
      id: "09",
      title: "Experienced Leadership & Skilled Team",
      description:
        "Managed by seasoned partners and attorneys delivering reliable, ethical, and client-focused representation.",
    },
  ];
  return (
    <NumberedContentSection
      heading="Why Choose BlueInkk?"
      items={whyChooseUsDetails}
    />
  );
};

export default WhyChooseUs;
