
import React from 'react';
import { NavItem, ServiceItem, Trainer, PricingPlan } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#' },
  { label: 'Classes', href: '#classes' },
  { label: 'Services', href: '#services' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: '01',
    title: 'STRENGTH TRAINING',
    description: 'Build raw power and muscle density with our expert-led heavy lifting programs designed for peak performance.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800',
    number: '01'
  },
  {
    id: '02',
    title: 'FUNCTIONAL FITNESS',
    description: 'Optimize your movement patterns for real-world strength. Our functional zones challenge every muscle group.',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800',
    number: '02'
  },
  {
    id: '03',
    title: 'BODYBUILDING',
    description: 'Sculpt your physique with isolation movements and hypertrophy protocols used by professionals.',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2adfcd?auto=format&fit=crop&q=80&w=800',
    number: '03'
  }
];

export const TRAINERS: Trainer[] = [
  { name: 'Alexandra Hayes', role: 'Strength Coach', image: 'https://images.unsplash.com/photo-1548691905-57c36cc8d93f?auto=format&fit=crop&q=80&w=400' },
  { name: 'Nathaniel Montgomery', role: 'HIIT Specialist', image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&q=80&w=400' },
  { name: 'Victoria Kensington', role: 'Spin & Yoga Expert', image: 'https://images.unsplash.com/photo-1518611012118-2969c636020a?auto=format&fit=crop&q=80&w=400' },
  { name: 'Emerson Anderson', role: 'Performance Coach', image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&q=80&w=400' },
];

export const PRICING: PricingPlan[] = [
  {
    name: 'BASIC',
    price: '29',
    features: ['Access to gym equipment', 'Locker facility', '1 Free assessment', 'Open gym access']
  },
  {
    name: 'STANDARD',
    price: '49',
    features: ['All Basic features', 'Group fitness classes', '2 Personal training sessions', 'Nutrition consultation'],
    isPopular: true
  },
  {
    name: 'PREMIUM',
    price: '107',
    features: ['All Standard features', 'Unlimited PT sessions', 'Priority equipment access', 'Private spa & recovery']
  }
];
