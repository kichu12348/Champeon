import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import styles from '../styles/FAQ.module.css';

const faqData = [
  {
    question: "How can colleges register for the tournament?",
    answer: "Colleges can register through our online portal. The registration process includes team details submission and payment of registration fees. Early bird registrations get special discounts."
  },
  {
    question: "What are the eligibility criteria for participants?",
    answer: "Participants must be current students of the registered college with valid ID cards. Age limit is under 25 years. Each participant can participate in multiple sports events."
  },
  {
    question: "Are there any accommodation facilities available?",
    answer: "Yes, we provide accommodation facilities for outstation teams. Accommodation requests must be made during registration. Charges are separate from registration fees."
  },
  {
    question: "What is the format of the tournament?",
    answer: "Each sport follows a different format. Generally, we follow league stages followed by knockouts. Detailed rules and formats will be shared post registration."
  },
  {
    question: "Is there a medical facility available during the events?",
    answer: "Yes, we have a dedicated medical team and first-aid facilities available throughout the tournament. Emergency services are on standby."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection}>
      <div className={styles.faqContainer}>
        <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
        <div className={styles.accordion}>
          {faqData.map((faq, index) => (
            <div 
              key={index} 
              className={`${styles.accordionItem} ${activeIndex === index ? styles.active : ''}`}
            >
              <div 
                className={styles.accordionHeader}
                onClick={() => toggleAccordion(index)}
              >
                <h3 className={styles.accordionTitle}>{faq.question}</h3>
                <ChevronDown size={20} className={styles.icon} />
              </div>
              <div className={styles.accordionContent}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
