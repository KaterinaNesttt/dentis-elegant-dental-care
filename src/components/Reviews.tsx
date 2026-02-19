import { Star } from "lucide-react";

const reviews = [
  {
    name: "Ольга К.",
    rating: 5,
    text: "Неймовірно задоволена! Нарешті знайшла клініку, де до тебе ставляться як до людини. Олександр Олександрович — справжній професіонал. Рекомендую всім!",
    service: "Протезування",
  },
  {
    name: "Михайло Д.",
    rating: 5,
    text: "Робив імплантацію — все пройшло чудово, без болю та ускладнень. Зуб встановлено ідеально. Персонал доброзичливий та уважний. Спасибі команді!",
    service: "Імплантація",
  },
  {
    name: "Тетяна В.",
    rating: 5,
    text: "Привела дитину вперше до стоматолога — боялася жахливого стресу. Але лікар знайшла підхід миттєво! Дочка вийшла задоволена і вже сама хоче приходити. Дякую!",
    service: "Дитяча стоматологія",
  },
  {
    name: "Андрій С.",
    rating: 5,
    text: "Зробив відбілювання — результат вражаючий! Зуби стали набагато світлішими, посмішка ідеальна. Сучасне обладнання, комфортна обстановка. Все чітко та якісно.",
    service: "Відбілювання",
  },
  {
    name: "Інна М.",
    rating: 5,
    text: "Завжди боялася стоматологів, але тут все інакше. Заспокоїли, пояснили кожен крок. Лікування пройшло швидко та без болю. Тепер це моя постійна клініка.",
    service: "Лікування карієсу",
  },
  {
    name: "Василь П.",
    rating: 5,
    text: "Відмінна клініка з чудовим персоналом! Ціни адекватні, якість на висоті. Головний лікар — справжній майстер своєї справи. Щиро рекомендую!",
    service: "Терапія",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-gold font-body text-sm tracking-[0.3em] uppercase font-medium mb-3">Відгуки</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-navy gold-line-center">
            Що кажуть пацієнти
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((rev) => (
            <div
              key={rev.name}
              className="bg-card border border-border rounded-2xl p-6 shadow-card-custom hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: rev.rating }).map((_, i) => (
                  <Star key={i} size={14} className="fill-gold text-gold" />
                ))}
              </div>

              <p className="font-body text-foreground/80 text-sm leading-relaxed mb-5 italic">
                «{rev.text}»
              </p>

              <div className="flex items-center justify-between mt-auto">
                <div>
                  <div className="font-display font-semibold text-custom-dark text-sm">{rev.name}</div>
                  <div className="font-body text-xs text-muted-foreground mt-0.5">{rev.service}</div>
                </div>
                <div className="w-9 h-9 rounded-full bg-navy/8 flex items-center justify-center font-display font-bold text-custom-dark text-sm">
                  {rev.name[0]}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
