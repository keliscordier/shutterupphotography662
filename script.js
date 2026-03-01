const config = window.siteConfig || {};

const text = (id, value) => {
  const el = document.getElementById(id);
  if (el && value) el.textContent = value;
};

const link = (id, href, label) => {
  const el = document.getElementById(id);
  if (!el || !href) return;
  el.href = href;
  if (label) el.textContent = label;
};

const applyTheme = () => {
  const theme = config.theme || {};
  const root = document.documentElement;
  const map = {
    bg: "--bg",
    surface: "--surface",
    text: "--text",
    muted: "--muted",
    primary: "--primary",
    primaryContrast: "--primary-contrast",
    accent: "--accent",
    border: "--border",
    heroImage: "--hero-image",
  };

  Object.entries(map).forEach(([key, cssVar]) => {
    if (theme[key]) root.style.setProperty(cssVar, theme[key]);
  });
};

const renderCards = (id, items, mapFn) => {
  const container = document.getElementById(id);
  if (!container || !Array.isArray(items)) return;
  container.innerHTML = items.map(mapFn).join("");
};

const initNavigation = () => {
  const toggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  if (!toggle || !navLinks) return;

  toggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
};

const initSite = () => {
  applyTheme();

  const business = config.business || {};
  const hero = config.hero || {};
  const about = config.about || {};
  const portfolio = config.portfolio || {};

  text("brandName", business.name);
  text("heroEyebrow", business.tagline);
  text("heroHeadline", business.headline);
  text("heroSubtext", business.subtext);
  text("heroCtaPrimary", hero.primaryCtaText || "Book a Session");
  text("heroCtaSecondary", hero.secondaryCtaText || "View Portfolio");
  text("aboutHeadline", about.headline);
  text("aboutText", about.text);
  text("portfolioIntro", portfolio.intro);

  if (about.image) {
    const aboutImage = document.getElementById("aboutImage");
    aboutImage.src = about.image;
  }

  renderCards("servicesGrid", config.services, (item) => {
    return `<article class="card"><h3>${item.title || ""}</h3><p>${item.description || ""}</p></article>`;
  });

  renderCards("portfolioGrid", portfolio.items, (item) => {
    return `<figure class="portfolio-item"><img src="${item.image || ""}" alt="${item.alt || ""}"/><figcaption>${item.caption || ""}</figcaption></figure>`;
  });

  renderCards("pricingGrid", config.pricing, (item) => {
    return `<article class="card"><h3>${item.title || ""}</h3><p><strong>${item.price || ""}</strong></p><p>${item.details || ""}</p></article>`;
  });

  renderCards("testimonialGrid", config.testimonials, (item) => {
    return `<article class="testimonial"><blockquote>"${item.quote || ""}"</blockquote><p>${item.author || ""}</p></article>`;
  });

  text("contactHeadline", `Let's Create Something Beautiful`);
  text(
    "contactText",
    "Share your vision and date, and I will send package details, availability, and next steps."
  );

  const emailHref = business.email ? `mailto:${business.email}` : "";
  const phoneHref = business.phone
    ? `tel:${business.phone.replace(/[^+\d]/g, "")}`
    : "";

  link("emailLink", emailHref, business.email);
  link("phoneLink", phoneHref, business.phone);
  text("locationText", business.location);
  link("bookingLink", business.bookingUrl || "#", "Book Now");

  const socialLinks = document.getElementById("socialLinks");
  if (socialLinks && Array.isArray(config.social)) {
    socialLinks.innerHTML = config.social
      .map((item) => `<a href="${item.url}" target="_blank" rel="noreferrer">${item.label}</a>`)
      .join("");
  }

  text(
    "footerText",
    config.footerNote || `© ${new Date().getFullYear()} ${business.name || "Photography Studio"}`
  );

  initNavigation();
};

initSite();
