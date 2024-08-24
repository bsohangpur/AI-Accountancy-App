'use client'
import { LandingCTA } from '@/designSystem/landing/LandingCTA'
import { LandingContainer } from '@/designSystem/landing/LandingContainer'
import LandingFAQ from '@/designSystem/landing/LandingFAQ'
import { LandingFeatures } from '@/designSystem/landing/LandingFeatures'
import { LandingHero } from '@/designSystem/landing/LandingHero'
import { LandingHowItWorks } from '@/designSystem/landing/LandingHowItWorks'
import { LandingPainPoints } from '@/designSystem/landing/LandingPainPoints'
import { LandingPricing } from '@/designSystem/landing/LandingPricing'
import { LandingSocialProof } from '@/designSystem/landing/LandingSocialProof'
import { LandingSocialRating } from '@/designSystem/landing/LandingSocialRating'
import { LandingTestimonials } from '@/designSystem/landing/LandingTestimonials'
import {
  EditOutlined,
  FileTextOutlined,
  DollarOutlined,
  SafetyOutlined,
  LineChartOutlined,
  SyncOutlined,
} from '@ant-design/icons'

export default function LandingPage() {
  const features = [
    {
      heading: 'AI-Powered Insights',
      description:
        'Get real-time recommendations and insights to make well-informed financial decisions.',
      icon: <LineChartOutlined />,
    },
    {
      heading: 'Automated Invoicing',
      description:
        'Create and send invoices automatically, reducing manual effort and errors.',
      icon: <FileTextOutlined />,
    },
    {
      heading: 'Expense Tracking',
      description:
        'Monitor and categorize expenses effortlessly to keep your finances in check.',
      icon: <DollarOutlined />,
    },
    {
      heading: 'Bank Reconciliation',
      description:
        'Automate bank reconciliation to ensure your books are always accurate.',
      icon: <SyncOutlined />,
    },
    {
      heading: 'Inventory Management',
      description:
        'Track stock levels in real-time to avoid overstocking or stockouts.',
      icon: <EditOutlined />,
    },
    {
      heading: 'Robust Security',
      description:
        'Protect sensitive financial data with top-notch security features.',
      icon: <SafetyOutlined />,
    },
  ]

  const testimonials = [
    {
      name: 'John Doe',
      designation: 'CEO, TechCorp',
      content:
        'This app has revolutionized our financial management. The AI insights are a game-changer!',
      avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      name: 'Jane Smith',
      designation: 'Accountant, FinExperts',
      content:
        'Automating invoicing and expense tracking has saved us countless hours. Highly recommend!',
      avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
    {
      name: 'Michael Johnson',
      designation: 'CFO, RetailHub',
      content:
        'Real-time inventory management has helped us reduce costs and improve efficiency.',
      avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
    },
    {
      name: 'Emily Davis',
      designation: 'Financial Manager, BizSolutions',
      content:
        'The security features give us peace of mind knowing our data is protected.',
      avatar: 'https://randomuser.me/api/portraits/men/12.jpg',
    },
    {
      name: 'Robert Brown',
      designation: 'Owner, SmallBiz Inc.',
      content:
        'The comprehensive dashboard makes it easy to stay on top of our finances.',
      avatar: 'https://randomuser.me/api/portraits/men/17.jpg',
    },
    {
      name: 'Linda Wilson',
      designation: 'Manager, ShopSmart',
      content:
        'The app’s automation features have drastically reduced our manual workload.',
      avatar: 'https://randomuser.me/api/portraits/women/27.jpg',
    },
  ]

  const navItems = [
    {
      title: 'Features',
      link: '#features',
    },
    {
      title: 'Pricing',
      link: '#pricing',
    },
    {
      title: 'Testimonials',
      link: '#testimonials',
    },
  ]

  const packages = [
    {
      title: 'Basic',
      description: 'Essential features for small businesses',
      monthly: 9,
      yearly: 69,
      features: ['Automated Invoicing', 'Expense Tracking'],
    },
    {
      title: 'Pro',
      description: 'Advanced features for growing businesses',
      monthly: 19,
      yearly: 149,
      features: [
        'Automated Invoicing',
        'Expense Tracking',
        'AI-Powered Insights',
        'Inventory Management',
      ],
      highlight: true,
    },
    {
      title: 'Enterprise',
      description: 'All features for large businesses',
      monthly: 29,
      yearly: 229,
      features: [
        'Automated Invoicing',
        'Expense Tracking',
        'AI-Powered Insights',
        'Inventory Management',
        'Bank Reconciliation',
        'Robust Security',
      ],
    },
  ]

  const questionAnswers = [
    {
      question: 'How does the AI-powered insights feature work?',
      answer:
        'Our AI analyzes your financial data in real-time to provide actionable insights and recommendations.',
    },
    {
      question: 'Is my financial data secure?',
      answer:
        'Yes, we use top-notch security features to ensure your data is protected at all times.',
    },
    {
      question: 'Can I track my inventory in real-time?',
      answer:
        'Absolutely! Our app allows you to monitor stock levels and manage inventory efficiently.',
    },
    {
      question: 'How does the automated invoicing feature save time?',
      answer:
        'By automating invoice creation and sending, you reduce manual effort and minimize errors.',
    },
  ]

  const logos = [
    { url: 'https://i.imgur.com/afwBIFK.png' },
    { url: 'https://i.imgur.com/LlloOPa.png' },
    { url: 'https://i.imgur.com/j8jPb4H.png' },
    { url: 'https://i.imgur.com/mJ1sZFv.png' },
  ]

  const steps = [
    {
      heading: 'Sign Up',
      description: 'Create an account to get started with our app.',
    },
    {
      heading: 'Connect Your Accounts',
      description:
        'Link your bank and financial accounts for seamless integration.',
    },
    {
      heading: 'Automate Tasks',
      description: 'Set up automated invoicing, expense tracking, and more.',
    },
    {
      heading: 'Gain Insights',
      description: 'Access real-time insights and recommendations from our AI.',
    },
  ]

  const painPoints = [
    {
      emoji: '😫',
      title: 'Manual Invoicing is Time-Consuming',
    },
    {
      emoji: '📉',
      title: 'Inaccurate Financial Tracking',
    },
    {
      emoji: '🔒',
      title: 'Security Concerns with Financial Data',
    },
  ]

  const avatarItems = [
    {
      src: 'https://randomuser.me/api/portraits/men/51.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/9.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/52.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
  ]

  return (
    <LandingContainer navItems={navItems}>
      <LandingHero
        title="Transform Your Business with AI-Powered Financial Management"
        subtitle="Streamline your operations, reduce errors, and make informed decisions with our innovative app."
        buttonText="Get Started"
        buttonLink="/register"
        pictureUrl="https://marblism-dashboard-api--production-public.s3.us-west-1.amazonaws.com/wF11i5-aipoweredrealtimechataccountancymanagementsystem-yRsN"
        socialProof={
          <LandingSocialRating
            avatarItems={avatarItems}
            numberOfUsers={1000}
            suffixText="from happy users"
          />
        }
      />
      <LandingSocialProof logos={logos} title="Featured on" />
      <LandingPainPoints
        title="The Struggles of Financial Management"
        painPoints={painPoints}
      />
      <LandingHowItWorks title="How It Works" steps={steps} />
      <LandingFeatures
        id="features"
        title="Achieve Your Business Goals with These Features"
        subtitle="Our app provides a comprehensive suite of tools to help you manage your finances and inventory effortlessly."
        features={features}
      />
      <LandingTestimonials
        title="Success Stories from Our Users"
        subtitle="Hear how our app has helped businesses like yours achieve their financial goals."
        testimonials={testimonials}
      />
      <LandingPricing
        id="pricing"
        title="Choose the Right Plan for Your Business"
        subtitle="Our flexible pricing plans are designed to meet the needs of businesses of all sizes."
        packages={packages}
      />
      <LandingFAQ
        id="faq"
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our app."
        questionAnswers={questionAnswers}
      />
      <LandingCTA
        title="Ready to Transform Your Business?"
        subtitle="Sign up today and start managing your finances more efficiently."
        buttonText="Get Started"
        buttonLink="/register"
      />
    </LandingContainer>
  )
}
