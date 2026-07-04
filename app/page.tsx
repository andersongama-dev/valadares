"use client";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SideRays from "@/components/SideRays";
import {
  BarChart3,
  Briefcase,
  Database,
  Handshake,
  InspectionPanelIcon,
  LucideKanbanSquareDashed,
  Mail,
  MessageCircle,
  Phone,
  Quote,
  Rocket,
  ShoppingBag,
  Star,
  Target,
  TrendingUp,
  Zap,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import Solutions from "@/components/Solutions";
import Methodology from "@/components/Methodology";
import Differentiators from "@/components/Differentiators";
import Statistics from "@/components/Statistics";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/Faq";
import CTA from "@/components/Cta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Header />

      <Hero />

      <PainPoints />

      <Solutions />

      <Methodology />

      <Differentiators />

      <Statistics />

      <Testimonials />

      <FAQ />

      <CTA />

      <Footer />
    </div>
  );
}
