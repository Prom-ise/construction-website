import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";

const FAQItem = ({ question, answer, isOpen, onClick }) => (
  <div className="faqs border border-gray-300 mb-[2em]">
    <button
      onClick={onClick}
      className="w-full text-black flex justify-between items-center text-left py-4 px-2 md:px-4 transition"
    >
      <span className="text-lg font-medium text-[rgb(254,93,20)]">{question}</span>
      {isOpen ? <FaMinus size={20} /> : <FaPlus size={20} />}
    </button>
    <div
      className={`overflow-hidden transition-all duration-300 ${
        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      } px-2 md:px-4 text-gray-600`}
    >
      <p className="pb-4 text-[navy] border-t border-gray-300">{answer}</p>
    </div>
  </div>
);

const FAQSection = () => {
  const faqs = [
    {
      question: "What is this app about?",
      answer:
        "This app helps you manage your tasks efficiently with a simple, intuitive interface.",
    },
    {
      question: "Is it mobile-friendly?",
      answer: "Yes, it's fully responsive and works great on all devices.",
    },
    {
      question: "How can I get support?",
      answer: "You can contact us via the support page or email us anytime.",
    },
    {
        question: "Can I start a project?",
        answer: "You can contact us via the support page to start a project anytime.",
      },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="space-y-2">
      {faqs.map((faq, index) => (
  <div key={index} className="mb-[2em]">
    <FAQItem
      {...faq}
      isOpen={openIndex === index}
      onClick={() => handleClick(index)}
    />
  </div>
))}

      </div>
    </div>
  );
};

export default FAQSection;
