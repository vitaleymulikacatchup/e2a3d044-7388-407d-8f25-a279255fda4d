"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import TextAbout from '@/components/sections/about/TextAbout';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardFour from '@/components/sections/testimonial/TestimonialCardFour';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
      contentWidth="medium"
      sizing="large"
      background="dotGrid"
      cardStyle="gradient-bordered"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="outline"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="Medical Workshop"
          navItems={[
            { name: "About", id: "about" },
            { name: "Workshops", id: "workshops" },
            { name: "Testimonials", id: "testimonials" },
            { name: "FAQ", id: "faq" },
            { name: "Contact", id: "contact" }
          ]}
          button={{
            text: "Register Now",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogo
          logoText="Medical Workshop"
          description="Advanced clinical training and professional development for healthcare practitioners"
          buttons={[
            { text: "Explore Workshops", href: "workshops" },
            { text: "Learn More", href: "about" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763834909111-wzpzskd7.jpg"
          imageAlt="Medical workshop training environment"
          showDimOverlay={true}
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          title="Our mission is to advance healthcare excellence through comprehensive, hands-on training programs designed for medical professionals at every career stage"
          buttons={[
            { text: "View Programs", href: "workshops" }
          ]}
        />
      </div>

      <div id="workshops" data-section="workshops">
        <ProductCardThree
          title="Featured Workshops"
          description="Explore our comprehensive range of medical training programs"
          products={[
            {
              id: "1",
              name: "Advanced Cardiac Life Support",
              price: "$299",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763834909851-vug3dkig.jpg",
              imageAlt: "Emergency cardiac training"
            },
            {
              id: "2",
              name: "Clinical Assessment Mastery",
              price: "$249",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763834910364-j9fzqi0x.jpg",
              imageAlt: "Clinical skills training"
            },
            {
              id: "3",
              name: "Surgical Techniques Workshop",
              price: "$399",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763834911174-n01h6lb6.jpg",
              imageAlt: "Advanced surgical training"
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="three-columns-all-equal-width"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFour
          title="What Healthcare Professionals Say"
          description="Hear from doctors, nurses, and medical specialists who have transformed their practice"
          testimonials={[
            {
              id: "1",
              name: "Dr. Sarah Johnson",
              role: "Emergency Medicine Physician",
              company: "City Medical Center",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763834911672-9z9hw0c3.jpg",
              imageAlt: "Dr. Sarah Johnson"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Registered Nurse",
              company: "Riverside Hospital",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763834912172-a8thl2tu.jpg",
              imageAlt: "Michael Chen"
            },
            {
              id: "3",
              name: "Dr. Emily Rodriguez",
              role: "Surgeon",
              company: "Advanced Surgical Institute",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763834912696-8td09ehr.jpg",
              imageAlt: "Dr. Emily Rodriguez"
            },
            {
              id: "4",
              name: "Dr. David Kim",
              role: "Clinical Educator",
              company: "Medical Training Academy",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763834913212-dn7l0g51.jpg",
              imageAlt: "Dr. David Kim"
            }
          ]}
          textboxLayout="default"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Find answers to common questions about our medical workshops and training programs"
          faqs={[
            {
              id: "1",
              title: "What prerequisites are required for enrollment?",
              content: "Most of our workshops require current healthcare licensure and minimum 2 years of clinical experience. Specific requirements vary by program."
            },
            {
              id: "2",
              title: "How long are the training sessions?",
              content: "Workshops range from single-day intensive sessions to multi-week programs. Each course duration is clearly listed in the program description."
            },
            {
              id: "3",
              title: "Do you offer continuing education credits?",
              content: "Yes, all our programs are accredited and provide CME/CE credits recognized by major healthcare boards and professional organizations."
            },
            {
              id: "4",
              title: "What is your cancellation policy?",
              content: "We offer full refunds for cancellations made 14 days before the workshop start date. Late cancellations may incur a 25% administrative fee."
            },
            {
              id: "5",
              title: "Can I attend workshops remotely?",
              content: "Selected workshops offer hybrid options with hands-on components in-person and theory sessions available online. Check individual program details."
            }
          ]}
          textPosition="left"
          animationType="smooth"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Register for a Workshop"
          description="Join healthcare professionals advancing their clinical expertise. Fill out the form below to enroll in our programs."
          inputs={[
            { name: "fullName", type: "text", placeholder: "Full Name", required: true },
            { name: "email", type: "email", placeholder: "Email Address", required: true },
            { name: "license", type: "text", placeholder: "License Type & Number", required: true },
            { name: "hospital", type: "text", placeholder: "Institution/Organization", required: true }
          ]}
          textarea={{
            name: "message",
            placeholder: "Which workshop interests you? Tell us about your experience...",
            rows: 5,
            required: true
          }}
          buttonText="Register"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Medical Workshop"
          columns={[
            {
              items: [
                { label: "About Us", href: "about" },
                { label: "Our Workshops", href: "workshops" },
                { label: "Testimonials", href: "testimonials" }
              ]
            },
            {
              items: [
                { label: "FAQ", href: "faq" },
                { label: "Contact", href: "contact" },
                { label: "Register", href: "contact" }
              ]
            },
            {
              items: [
                { label: "Terms of Service", href: "#" },
                { label: "Privacy Policy", href: "#" },
                { label: "Code of Conduct", href: "#" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}