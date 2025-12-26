import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl">
              ☘️
            </div>
            <span className="text-2xl font-bold text-foreground">Clover</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-foreground hover:text-primary transition-colors">О нас</a>
            <a href="#menu" className="text-foreground hover:text-primary transition-colors">Меню</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Заказать
          </Button>
        </nav>
      </header>

      <section className="pt-24 pb-12 md:pt-32 md:pb-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-accent px-4 py-2 rounded-full text-sm text-accent-foreground">
                <Icon name="Leaf" size={16} />
                <span>Экологично и вкусно</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Кофе, который заботится о планете
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                В Clover мы верим, что каждая чашка кофе может изменить мир. Органические зёрна, переработанная упаковка и уютная атмосфера для вас и вашей семьи.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Icon name="Coffee" size={20} className="mr-2" />
                  Посмотреть меню
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-3xl"></div>
              <img 
                src="https://cdn.poehali.dev/projects/ad266b6e-f253-4c70-82fa-bb0067c7143a/files/e21ff3ee-08d0-48d7-9d20-3b13967acb62.jpg"
                alt="Кофе Clover"
                className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Наша философия
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Clover — это не просто кофейня. Это место, где встречаются природа и современность. Мы работаем только с фермерами, которые используют органические методы выращивания, поддерживаем местных производителей и минимизируем отходы на каждом этапе.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <Card className="border-border bg-card hover:shadow-lg transition-all duration-300 animate-fade-in">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="Sprout" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">Органические зёрна</h3>
                <p className="text-muted-foreground">
                  100% органический кофе из Южной Америки, выращенный без пестицидов
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card hover:shadow-lg transition-all duration-300 animate-fade-in" style={{animationDelay: '0.1s'}}>
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="Recycle" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">Ноль отходов</h3>
                <p className="text-muted-foreground">
                  Многоразовые стаканы, компостируемая упаковка и переработка кофейной гущи
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card hover:shadow-lg transition-all duration-300 animate-fade-in" style={{animationDelay: '0.2s'}}>
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="Heart" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">С любовью</h3>
                <p className="text-muted-foreground">
                  Каждая чашка приготовлена вручную с заботой о вас и окружающей среде
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="menu" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Наши напитки
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Выберите свой идеальный напиток из нашей коллекции органического кофе
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border bg-card overflow-hidden group hover:shadow-xl transition-all duration-300 animate-scale-in">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/ad266b6e-f253-4c70-82fa-bb0067c7143a/files/6754c4e1-b19f-4cba-acf7-5e12a5310568.jpg"
                  alt="Эспрессо"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-semibold text-card-foreground">Эспрессо</h3>
                  <span className="text-xl font-bold text-primary">150₽</span>
                </div>
                <p className="text-muted-foreground">
                  Классический крепкий эспрессо из зёрен арабики средней обжарки
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon name="Coffee" size={16} />
                  <span>30 мл</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border bg-card overflow-hidden group hover:shadow-xl transition-all duration-300 animate-scale-in" style={{animationDelay: '0.1s'}}>
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/ad266b6e-f253-4c70-82fa-bb0067c7143a/files/e21ff3ee-08d0-48d7-9d20-3b13967acb62.jpg"
                  alt="Капучино"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-semibold text-card-foreground">Капучино</h3>
                  <span className="text-xl font-bold text-primary">220₽</span>
                </div>
                <p className="text-muted-foreground">
                  Идеальный баланс эспрессо и воздушной молочной пены с латте-артом
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon name="Coffee" size={16} />
                  <span>250 мл</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border bg-card overflow-hidden group hover:shadow-xl transition-all duration-300 animate-scale-in" style={{animationDelay: '0.2s'}}>
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/ad266b6e-f253-4c70-82fa-bb0067c7143a/files/6754c4e1-b19f-4cba-acf7-5e12a5310568.jpg"
                  alt="Латте"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-semibold text-card-foreground">Латте</h3>
                  <span className="text-xl font-bold text-primary">240₽</span>
                </div>
                <p className="text-muted-foreground">
                  Нежный кофейный напиток с овсяным или миндальным молоком
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon name="Coffee" size={16} />
                  <span>350 мл</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/ad266b6e-f253-4c70-82fa-bb0067c7143a/files/d1fa9d2b-a285-4f1e-a6a5-a11539249426.jpg"
                alt="Интерьер Clover"
                className="rounded-3xl shadow-2xl w-full h-[400px] object-cover"
              />
            </div>
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Приходите к нам
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Мы находимся в самом сердце города. Уютная атмосфера, быстрый Wi-Fi и самый вкусный органический кофе ждут вас каждый день.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Адрес</h3>
                    <p className="text-muted-foreground">ул. Зелёная, 15, Москва</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Время работы</h3>
                    <p className="text-muted-foreground">Пн-Пт: 8:00 - 22:00</p>
                    <p className="text-muted-foreground">Сб-Вс: 9:00 - 23:00</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Телефон</h3>
                    <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  </div>
                </div>
              </div>

              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground mt-6">
                <Icon name="Navigation" size={20} className="mr-2" />
                Построить маршрут
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground/5 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl">
                  ☘️
                </div>
                <span className="text-2xl font-bold text-foreground">Clover</span>
              </div>
              <p className="text-muted-foreground">
                Экологичный кофе для тех, кому небезразлична планета
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Меню</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Горячие напитки</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Холодные напитки</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Десерты</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Закуски</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">О нас</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Наша история</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Команда</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Вакансии</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Партнёры</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Контакты</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>ул. Зелёная, 15</li>
                <li>+7 (495) 123-45-67</li>
                <li>hello@clover.coffee</li>
              </ul>
              <div className="flex gap-4 mt-4">
                <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <Icon name="Instagram" size={20} className="text-primary" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <Icon name="Facebook" size={20} className="text-primary" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <Icon name="Mail" size={20} className="text-primary" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
            <p>© 2024 Clover Coffee. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
