"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import AboutFeature from '@/components/sections/about/AboutFeature';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { ChefHat, Clock, Cookie, Heart, Instagram, Facebook, Leaf, MapPin, MessageCircle, Star } from "lucide-react";

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
      contentWidth="medium"
      sizing="small"
      background="gradientBars"
      cardStyle="solid-bordered"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="minimal"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "About", id: "about" },
            { name: "Products", id: "products" },
            { name: "Testimonials", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Sweet Dreams Cookies"
          button={{ text: "Order Now", href: "contact" }}
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroBillboardCarousel
          title="Dallas's Sweetest Cookie Shop"
          description="Freshly baked cookies made with love and the finest ingredients. From classic chocolate chip to unique seasonal flavors, we create moments of joy one cookie at a time."
          tag="Est. 2020"
          tagIcon={Cookie}
          buttons={[
            { text: "Order Now", href: "contact" },
            { text: "View Menu", href: "products" }
          ]}
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32fyUI1AepMVfxIUkQhrdGSZ2DN/uploaded-1763139216356-ie618i6w.jpg",
              imageAlt: "Fresh cookies in bakery display"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32fyUI1AepMVfxIUkQhrdGSZ2DN/uploaded-1763139217122-o35kg6l9.png",
              imageAlt: "Chocolate chip cookies"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32fyUI1AepMVfxIUkQhrdGSZ2DN/uploaded-1763139218060-f2idisk4.jpg",
              imageAlt: "Decorated sugar cookies"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32fyUI1AepMVfxIUkQhrdGSZ2DN/uploaded-1763139218961-9p9fnx3r.jpg",
              imageAlt: "Oatmeal cookies"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32fyUI1AepMVfxIUkQhrdGSZ2DN/uploaded-1763139219700-2hetnjaa.jpg",
              imageAlt: "Double chocolate cookies"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32fyUI1AepMVfxIUkQhrdGSZ2DN/uploaded-1763139220459-w2r7fynz.jpg",
              imageAlt: "Cinnamon sugar cookies"
            }
          ]}
        />
      </div>
      
      <div id="products" data-section="products">
        <ProductCardTwo
          title="Our Signature Cookies"
          description="Each cookie is handcrafted with premium ingredients and baked fresh daily. Taste the difference quality makes."
          tag="Bestsellers"
          tagIcon={Star}
          textboxLayout="default"
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          products={[
            {
              id: "1",
              brand: "Sweet Dreams",
              name: "Classic Chocolate Chip",
              price: "$2.50",
              rating: 5,
              reviewCount: "450+",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32fyUI1AepMVfxIUkQhrdGSZ2DN/uploaded-1763139221311-v70zwwoc.jpg",
              imageAlt: "Classic chocolate chip cookie"
            },
            {
              id: "2",
              brand: "Sweet Dreams",
              name: "Decorated Sugar Cookies",
              price: "$3.25",
              rating: 5,
              reviewCount: "325+",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32fyUI1AepMVfxIUkQhrdGSZ2DN/uploaded-1763139222379-gl9nr3bs.jpg",
              imageAlt: "Decorated sugar cookies"
            },
            {
              id: "3",
              brand: "Sweet Dreams",
              name: "Oatmeal Raisin",
              price: "$2.75",
              rating: 4,
              reviewCount: "280+",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32fyUI1AepMVfxIUkQhrdGSZ2DN/uploaded-1763139222981-v6c5yxqq.jpg",
              imageAlt: "Oatmeal raisin cookies"
            },
            {
              id: "4",
              brand: "Sweet Dreams",
              name: "Double Chocolate Fudge",
              price: "$3.00",
              rating: 5,
              reviewCount: "390+",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32fyUI1AepMVfxIUkQhrdGSZ2DN/uploaded-1763139223659-e58dd5pa.jpg",
              imageAlt: "Double chocolate fudge cookies"
            },
            {
              id: "5",
              brand: "Sweet Dreams",
              name: "Cinnamon Snickerdoodle",
              price: "$2.75",
              rating: 5,
              reviewCount: "310+",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32fyUI1AepMVfxIUkQhrdGSZ2DN/uploaded-1763139224321-iw6bxzn5.jpg",
              imageAlt: "Cinnamon snickerdoodle cookies"
            },
            {
              id: "6",
              brand: "Sweet Dreams",
              name: "Peanut Butter Dreams",
              price: "$2.85",
              rating: 4,
              reviewCount: "265+",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32fyUI1AepMVfxIUkQhrdGSZ2DN/uploaded-1763139225087-88faxldn.jpg",
              imageAlt: "Peanut butter cookies"
            }
          ]}
        />
      </div>
      
      <div id="about" data-section="about">
        <AboutFeature
          title="We believe every cookie should bring joy, comfort, and create lasting memories. Our Dallas bakery has been crafting happiness since 2020."
          features={[
            {
              icon: ChefHat,
              title: "Artisan Crafted",
              description: "Every cookie is hand-rolled and baked by our experienced bakers using traditional techniques passed down through generations."
            },
            {
              icon: Leaf,
              title: "Premium Ingredients",
              description: "We source only the finest organic flour, real butter, and Belgian chocolate to ensure exceptional taste and quality."
            },
            {
              icon: Clock,
              title: "Fresh Daily",
              description: "Our cookies are baked fresh every morning, ensuring you get the perfect texture and flavor with every bite."
            },
            {
              icon: Heart,
              title: "Made with Love",
              description: "Each batch is prepared with care and attention to detail, because we believe love is the secret ingredient."
            }
          ]}
        />
      </div>
      
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="What Our Customers Say"
          description="Don't just take our word for it - hear from Dallas cookie lovers who've experienced our sweet creations"
          tag="Reviews"
          tagIcon={MessageCircle}
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Local Food Blogger",
              testimonial: "Sweet Dreams Cookies has the best chocolate chip cookies in Dallas! The perfect balance of crispy edges and soft centers. I order a dozen every week.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32fyUI1AepMVfxIUkQhrdGSZ2DN/uploaded-1763139226877-zlgwtgdb.jpg",
              imageAlt: "Sarah Johnson portrait"
            },
            {
              id: "2",
              name: "Mike Rodriguez",
              role: "Regular Customer",
              testimonial: "I've tried cookie shops all over Texas, but nothing compares to Sweet Dreams. Their snickerdoodles remind me of my grandmother's baking.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32fyUI1AepMVfxIUkQhrdGSZ2DN/uploaded-1763139227528-roajpe42.jpg",
              imageAlt: "Mike Rodriguez portrait"
            },
            {
              id: "3",
              name: "Jennifer Chen",
              role: "Mom of Three",
              testimonial: "My kids absolutely love the decorated sugar cookies! Perfect for birthday parties and special occasions. The staff is always so friendly too.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32fyUI1AepMVfxIUkQhrdGSZ2DN/uploaded-1763139228179-v3sls2nw.jpg",
              imageAlt: "Jennifer Chen with family"
            },
            {
              id: "4",
              name: "Robert Williams",
              role: "Retired Teacher",
              testimonial: "At 78, I've had my share of cookies, but Sweet Dreams takes me back to the good old days. Quality you just don't find anymore.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32fyUI1AepMVfxIUkQhrdGSZ2DN/uploaded-1763139228888-0wmyehy6.jpg",
              imageAlt: "Robert Williams portrait"
            },
            {
              id: "5",
              name: "Emma Davis",
              role: "High School Student",
              testimonial: "These cookies are literally the best thing ever! I stop by after school every Friday. The double chocolate fudge is my absolute favorite!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32fyUI1AepMVfxIUkQhrdGSZ2DN/uploaded-1763139229757-znv9842m.jpg",
              imageAlt: "Emma Davis portrait"
            }
          ]}
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Visit Us"
          title="Sweet Dreams Awaits You"
          description="Come visit our cozy Dallas bakery or place an order for pickup. We're open daily and always happy to help you find the perfect cookie for any occasion."
          tagIcon={MapPin}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32fyUI1AepMVfxIUkQhrdGSZ2DN/uploaded-1763139230724-7zzmmsl1.jpg"
          imageAlt="Sweet Dreams Cookie Shop storefront"
          inputPlaceholder="Enter your email for updates"
          buttonText="Get Updates"
          termsText="By signing up, you'll receive updates on new flavors, special offers, and seasonal treats. Unsubscribe anytime."
          mediaPosition="right"
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="Sweet Dreams Cookies"
          copyrightText="© 2024 Sweet Dreams Cookies | Dallas, TX"
          columns={[
            {
              title: "Menu",
              items: [
                { label: "Signature Cookies", href: "products" },
                { label: "Seasonal Specials", href: "products" },
                { label: "Custom Orders", href: "contact" }
              ]
            },
            {
              title: "About",
              items: [
                { label: "Our Story", href: "about" },
                { label: "Quality Promise", href: "about" },
                { label: "Reviews", href: "testimonials" }
              ]
            },
            {
              title: "Visit",
              items: [
                { label: "Location", href: "contact" },
                { label: "Hours", href: "contact" },
                { label: "Contact Us", href: "contact" }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Instagram,
              href: "https://instagram.com/sweetdreamscookies",
              ariaLabel: "Follow us on Instagram"
            },
            {
              icon: Facebook,
              href: "https://facebook.com/sweetdreamscookies",
              ariaLabel: "Follow us on Facebook"
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}