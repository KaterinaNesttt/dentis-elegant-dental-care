
import type { FC } from 'react';

const FAQS: FC = () => {
  return (
    <section className="faq max-w-[900px] mx-auto px-5 py-20 md:py-24 lg:py-[80px]">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 md:mb-12 text-navy">
        Поширені запитання
      </h2>

      <div className="divide-y divide-gray-200">
        {faqItems.map((item, index) => (
          <details key={index} className="group">
            <summary className="flex items-center justify-between cursor-pointer py-5 text-lg md:text-xl font-semibold text-[#2b6f73] hover:text-[#1e5559] transition-colors duration-300">
              {item.question}
              <span className="ml-4 text-2xl font-bold transition-transform duration-300 group-open:rotate-180">
                {group.open ? '−' : '+'}
              </span>
            </summary>
            <div className="pb-6 pt-3 text-base md:text-lg text-[#444] leading-relaxed">
              {item.answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
};

const faqItems = [
  {
    question: 'Скільки коштує лікування зубів у Dentis?',
    answer:
      'Вартість лікування залежить від складності випадку та обраного методу. Остаточну ціну лікар визначає після огляду.',
  },
  {
    question: 'Чи боляче лікувати зуби?',
    answer:
      'У клініці Dentis застосовується сучасна анестезія, що робить лікування комфортним та безболісним.',
  },
  {
    question: 'Як записатися на прийом у Dentis?',
    answer: 'Запис можливий телефоном або під час особистого візиту до клініки.',
  },
  {
    question: 'Де знаходиться стоматологія Dentis?',
    answer:
      'Клініка Dentis знаходиться у місті Кропивницький. Контакти, адреса та графік роботи вказані у розділі контактів.',
  },
  {
    question: 'Які методи лікування зубів доступні?',
    answer:
      'У Dentis доступні сучасні методи лікування: терапія карієсу, пломбування, професійна гігієна, імплантація та ортопедія.',
  },
  {
    question: 'Чи є у клініці рентген та сучасне обладнання?',
    answer:
      'Так, Dentis оснащена сучасним цифровим рентгеном та іншим високотехнологічним обладнанням для точної діагностики та лікування.',
  },
];

export default FAQ;