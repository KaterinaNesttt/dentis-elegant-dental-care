import React from 'react';

// Визначаємо інтерфейс для даних
interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Скільки коштує лікування зубів у Dentis?",
    answer: "Вартість лікування залежить від складності випадку та обраного методу. Остаточну ціну лікар визначає після огляду."
  },
  {
    question: "Чи боляче лікувати зуби?",
    answer: "У клініці Dentis застосовується сучасна анестезія, що робить лікування комфортним та безболісним."
  },
  {
    question: "Як записатися на прийом у Dentis?",
    answer: "Запис можливий телефоном або під час особистого візиту до клініки."
  },
  {
    question: "Де знаходиться стоматологія Dentis?",
    answer: "Клініка Dentis знаходиться у місті Кропивницький. Контакти, адреса та графік роботи вказані у розділі контактів."
  },
  {
    question: "Які методи лікування зубів доступні?",
    answer: "У Dentis доступні сучасні методи лікування: терапія карієсу, пломбування, професійна гігієна, імплантація та ортопедія."
  },
  {
    question: "Чи є у клініці рентген та сучасне обладнання?",
    answer: "Так, Dentis оснащена сучасним цифровим рентгеном та іншим високотехнологічним обладнанням для точної діагностики та лікування."
  }
];

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-navy gold-line-center">
          Поширені запитання
        </h2>
        
        <div className="faq-list ax-w-5xl mx-auto">
          {faqData.map((item, index) => (
            <details 
              key={index} 
              style={{ 
                marginBottom: '15px', 
                borderBottom: '1px solid #eee', 
                paddingBottom: '10px' 
              }}
            >
              <summary 
                style={{ 
                  fontWeight: 'bold', 
                  cursor: 'pointer', 
                  listStyle: 'none',
                  outline: 'none'
                }}
              >
                {item.question}
              </summary>
              <p style={{ marginTop: '10px', color: '#555', lineHeight: '1.6' }}>
                {item.answer}
              </p>
            </details>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;