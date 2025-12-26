import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', contact: '', subject: '', message: '' });
  };

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

      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Наши услуги и товары
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Больше, чем просто кофейня — целый мир эко-культуры и вкуса
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-border bg-card hover:shadow-xl transition-all duration-300 animate-scale-in">
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="Coffee" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">Авторский кофе</h3>
                <p className="text-muted-foreground text-sm">
                  Свежая обжарка, альтернативные методы заваривания (V60, аэропресс, кемекс)
                </p>
                <div className="pt-2">
                  <span className="text-2xl font-bold text-primary">от 250₽</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border bg-card hover:shadow-xl transition-all duration-300 animate-scale-in" style={{animationDelay: '0.1s'}}>
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="Cake" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">Домашние десерты</h3>
                <p className="text-muted-foreground text-sm">
                  Эклеры, капкейки, чизкейки. Минимум сахара, органическая мука
                </p>
                <div className="pt-2">
                  <span className="text-2xl font-bold text-primary">от 180₽</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border bg-card hover:shadow-xl transition-all duration-300 animate-scale-in" style={{animationDelay: '0.2s'}}>
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="ShoppingBag" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">Эко-мерч</h3>
                <p className="text-muted-foreground text-sm">
                  Многоразовые кружки с логотипом, термокружки, эко-сумки
                </p>
                <div className="pt-2">
                  <span className="text-2xl font-bold text-primary">от 600₽</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border bg-card hover:shadow-xl transition-all duration-300 animate-scale-in" style={{animationDelay: '0.3s'}}>
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="GraduationCap" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">Мастер-классы</h3>
                <p className="text-muted-foreground text-sm">
                  Латте-арт и выпечка. Научим создавать кофейное искусство
                </p>
                <div className="pt-2">
                  <span className="text-sm text-muted-foreground">По записи</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border bg-card overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/ad266b6e-f253-4c70-82fa-bb0067c7143a/files/e21ff3ee-08d0-48d7-9d20-3b13967acb62.jpg"
                  alt="Альтернативные методы"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Альтернативное заваривание</h3>
                  <p className="text-sm">V60, аэропресс, кемекс — выбирайте свой способ</p>
                </div>
              </div>
            </Card>

            <Card className="border-border bg-card overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/ad266b6e-f253-4c70-82fa-bb0067c7143a/files/f0790efb-42af-433b-a810-f7d789c3943e.jpg"
                  alt="Домашние десерты"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Натуральные десерты</h3>
                  <p className="text-sm">Свежая выпечка каждый день</p>
                </div>
              </div>
            </Card>

            <Card className="border-border bg-card overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/ad266b6e-f253-4c70-82fa-bb0067c7143a/files/e1de870a-21c7-48d9-bf29-3c86737ff7e6.jpg"
                  alt="Мастер-классы"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Обучение</h3>
                  <p className="text-sm">Мастер-классы по латте-арту</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Наша команда
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Люди, которые создают атмосферу Clover каждый день
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border bg-card overflow-hidden hover:shadow-xl transition-all duration-300 animate-scale-in">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/ad266b6e-f253-4c70-82fa-bb0067c7143a/files/fda85003-0b18-4350-9b4e-0bf5f661c96e.jpg"
                  alt="Анна"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6 text-center space-y-3">
                <h3 className="text-2xl font-semibold text-card-foreground">Анна</h3>
                <p className="text-sm text-primary font-medium">Главный бариста и соучредитель</p>
                <p className="text-muted-foreground italic">"Кофе — это диалог вкусов"</p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card overflow-hidden hover:shadow-xl transition-all duration-300 animate-scale-in" style={{animationDelay: '0.1s'}}>
              <div className="relative h-80 overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/ad266b6e-f253-4c70-82fa-bb0067c7143a/files/6ea6529c-3898-42d0-acd0-6840ed212920.jpg"
                  alt="Максим"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6 text-center space-y-3">
                <h3 className="text-2xl font-semibold text-card-foreground">Максим</h3>
                <p className="text-sm text-primary font-medium">Шеф-кондитер</p>
                <p className="text-muted-foreground italic">"Сладость должна быть натуральной"</p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card overflow-hidden hover:shadow-xl transition-all duration-300 animate-scale-in" style={{animationDelay: '0.2s'}}>
              <div className="relative h-80 overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/ad266b6e-f253-4c70-82fa-bb0067c7143a/files/c298803b-9ac5-4352-bcde-9850c0540456.jpg"
                  alt="Елена"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6 text-center space-y-3">
                <h3 className="text-2xl font-semibold text-card-foreground">Елена</h3>
                <p className="text-sm text-primary font-medium">Менеджер по экологии</p>
                <p className="text-muted-foreground italic">"Наша планета заслуживает вкусного кофе без вреда"</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8 animate-fade-in">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Контакты
                </h2>
                <p className="text-lg text-muted-foreground">
                  Свяжитесь с нами любым удобным способом
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Адрес</h3>
                    <p className="text-muted-foreground">ул. Зеленая, д. 10, г. Экогород</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Телефон</h3>
                    <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <p className="text-muted-foreground">hello@clover-coffee.ru</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Share2" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Социальные сети</h3>
                    <div className="flex gap-3">
                      <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                        <Icon name="Instagram" size={20} className="text-primary" />
                      </a>
                      <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                        <Icon name="Send" size={20} className="text-primary" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-lg h-[300px]">
                <iframe
                  src="https://yandex.ru/map-widget/v1/?z=16&ol=biz&oid=1234567890"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  className="w-full h-full"
                  title="Карта расположения Clover"
                />
              </div>
            </div>

            <Card className="border-border bg-card animate-scale-in">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-card-foreground mb-6">
                  Форма обратной связи
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Имя *</Label>
                    <Input 
                      id="name" 
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      className="bg-background"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact">Email или телефон *</Label>
                    <Input 
                      id="contact" 
                      placeholder="example@mail.ru или +7 (999) 123-45-67"
                      value={formData.contact}
                      onChange={(e) => setFormData({...formData, contact: e.target.value})}
                      required
                      className="bg-background"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Тема обращения *</Label>
                    <Select 
                      value={formData.subject}
                      onValueChange={(value) => setFormData({...formData, subject: value})}
                      required
                    >
                      <SelectTrigger className="bg-background">
                        <SelectValue placeholder="Выберите тему" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="partnership">Предложение о сотрудничестве</SelectItem>
                        <SelectItem value="menu">Вопрос по меню</SelectItem>
                        <SelectItem value="feedback">Отзыв</SelectItem>
                        <SelectItem value="other">Другое</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Сообщение *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Напишите ваше сообщение..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                      className="min-h-[150px] bg-background"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить
                  </Button>
                </form>
              </CardContent>
            </Card>
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