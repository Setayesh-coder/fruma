'use client';

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Rocket, Check, X, Users, Briefcase, Target, Zap } from "lucide-react";

export default function App() {
  return (
    <>
      <div className="min-h-screen bg-background text-foreground ">
        {/* Hero Section - Minimal & Bold */}
        <section className="container mx-auto px-6 pt-20 pb-32 text-center">
          <Badge variant="secondary" className="mb-6 text-sm tracking-wider">
            🚀 ورود واقعی به دنیای فروش و مارکتینگ
          </Badge>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-12 leading-tight">
            اگر آماده‌ای که<br />
            واقعی بفروشی و درآمد بسازی...
          </h1>
          <div className="max-w-3xl mx-auto space-y-5 text-xl md:text-2xl text-muted-foreground">
            <p className="flex items-center justify-center gap-4">
              <Check className="w-6 h-6 text-primary" />
              علاقه‌مند به فروش، مارکتینگ و مذاکره
            </p>
            <p className="flex items-center justify-center gap-4">
              <Check className="w-6 h-6 text-primary" />
              می‌خوای روی پروژه‌های واقعی کار کنی
            </p>
            <p className="flex items-center justify-center gap-4">
              <Check className="w-6 h-6 text-primary" />
              دنبال یادگیری درآمدسازی هستی، نه فقط مدرک
            </p>
            <p className="flex items-center justify-center gap-4">
              <Check className="w-6 h-6 text-primary" />
              تعهد و زمان جدی می‌ذاری
            </p>
          </div>
          <p className="text-4xl md:text-6xl font-bold mt-16 mb-10">
            فروما برای تو ساخته شده.
          </p>
          <Button size="lg" className="text-lg px-10 py-7 rounded-full shadow-lg">
            ثبت‌نام کن و شروع کن
            <ArrowRight className="mr-2 h-5 w-5" />
          </Button>
        </section>

        <Separator className="container mx-auto max-w-4xl" />

        {/* فروما چیه؟ */}
        <section className="container mx-auto px-6 py-24">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">فروما چیه؟</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-6">
              <div className="flex gap-5">
                <Rocket className="w-8 h-8 text-primary flex-shrink-0" />
                <p className="text-lg">آموزش + اجرا همزمان</p>
              </div>
              <div className="flex gap-5">
                <Briefcase className="w-8 h-8 text-primary flex-shrink-0" />
                <p className="text-lg">کار روی برندها و پروژه‌های واقعی</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex gap-5">
                <Zap className="w-8 h-8 text-primary flex-shrink-0" />
                <p className="text-lg">ورود مستقیم به فضای واقعی فروش</p>
              </div>
              <div className="flex gap-5">
                <Target className="w-8 h-8 text-primary flex-shrink-0" />
                <p className="text-lg">مسیر رشد شفاف (بدون وعده‌های توخالی)</p>
              </div>
            </div>
          </div>
        </section>

        <Separator className="container mx-auto max-w-4xl" />

        {/* مهارت‌ها */}
        <section className="container mx-auto px-6 py-24">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">
            چی یاد می‌گیری؟
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              "اصول فروش حرفه‌ای (B2B & B2C)",
              "مذاکره و بستن قرارداد",
              "اسکریپت‌نویسی فروش",
              "لیدگیری و پیگیری",
              "مارکتینگ عملی و قیف فروش",
              "کار با KPI و پروژه واقعی"
            ].map((item) => (
              <Card key={item} className="p-8 text-center border-0 shadow-md hover:shadow-xl transition-shadow">
                <p className="text-lg font-medium">{item}</p>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="container mx-auto max-w-4xl" />

        {/* ساختار همکاری - Timeline Style */}
        <section className="container mx-auto px-6 py-24">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-20">ساختار همکاری</h2>
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-6">۱</div>
              <h3 className="text-2xl font-bold mb-4">بوتکمپ آموزشی</h3>
              <p className="text-muted-foreground">۲-۳ ماه • پروژه‌محور • منتورینگ • شهریه قسطی</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-6">۲</div>
              <h3 className="text-2xl font-bold mb-4">همکاری پروژه‌ای</h3>
              <p className="text-muted-foreground">پورسانت از فروش • بدون حقوق ثابت</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-6">۳</div>
              <h3 className="text-2xl font-bold mb-4">تیم هسته‌ای</h3>
              <p className="text-muted-foreground">فقط نفرات برتر • قرارداد درصدی</p>
            </div>
          </div>
        </section>

        {/* مناسب کیست / نیست */}
        <section className="container mx-auto px-6 py-24 bg-muted/30">
          <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
            <div>
              <h3 className="text-3xl font-bold mb-10 flex items-center gap-4">
                <X className="w-8 h-8 text-destructive" />
                مناسب این افراد نیست
              </h3>
              <ul className="space-y-5 text-lg text-muted-foreground">
                <li>• دنبال حقوق ثابت از روز اول</li>
                <li>• فقط مدرک می‌خوان</li>
                <li>• تعهد زمانی ندارن</li>
              </ul>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-10 flex items-center gap-4">
                <Check className="w-8 h-8 text-primary" />
                مناسب این افراد هست
              </h3>
              <ul className="space-y-5 text-lg">
                <li>• دانشجوها</li>
                <li>• علاقه‌مندان واقعی به فروش و مارکتینگ</li>
                <li>• کسانی که می‌خوان وارد بازار کار واقعی بشن</li>
                <li>• آماده یادگیری عملی و سخت‌کوشی</li>
              </ul>
            </div>
          </div>
        </section>

        <Separator className="container mx-auto max-w-4xl" />

        {/* خروجی */}
        <section className="container mx-auto px-6 py-24">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">بعد از فروما چی داری؟</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-5xl mx-auto text-center">
            <div>
              <div className="text-5xl mb-4">💼</div>
              <p className="text-xl font-medium">تجربه واقعی فروش</p>
            </div>
            <div>
              <div className="text-5xl mb-4">📄</div>
              <p className="text-xl font-medium">رزومه اجرایی قوی</p>
            </div>
            <div>
              <div className="text-5xl mb-4">🤝</div>
              <p className="text-xl font-medium">شبکه ارتباطی ارزشمند</p>
            </div>
            <div>
              <div className="text-5xl mb-4">💰</div>
              <p className="text-xl font-medium">درآمدزایی پایدار</p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="container mx-auto px-6 py-24 text-center">
          <div className="max-w-3xl mx-auto">
            <p className="text-2xl mb-4">ظرفیت محدود • پذیرش پس از مصاحبه کوتاه</p>
            <h3 className="text-4xl md:text-6xl font-bold mb-12">
              آماده‌ای وارد دنیای واقعی فروش بشی؟
            </h3>
            <Button size="lg" className="text-xl px-12 py-8 rounded-full shadow-2xl">
              همین حالا ثبت‌نام کن
              <ArrowRight className="mr-3 h-6 w-6" />
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}