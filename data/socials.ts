export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  handle: string;
  actionText: string;
}

export const socialsData = {
  email: "tabassum.aktar24@gmail.com",
  phone: "+880 1632798502",
  location: "Dhaka, Bangladesh",
  github: "https://github.com/SadiaTabas",
  linkedin: "https://www.linkedin.com/in/tabassum-aktar-sadia20044/",
  links: [
    {
      name: "GitHub",
      url: "https://github.com/SadiaTabas",
      icon: "Github",
      handle: "@SadiaTabas",
      actionText: "Browse Repositories"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/tabassum-aktar-sadia20044/",
      icon: "Linkedin",
      handle: "tabassum-aktar-sadia",
      actionText: "Connect on LinkedIn"
    },
    {
      name: "Email",
      url: "mailto:tabassum.aktar24@gmail.com",
      icon: "Mail",
      handle: "tabassum.aktar24@gmail.com",
      actionText: "Send an Email"
    },
    {
      name: "Phone",
      url: "tel:+8801632798502",
      icon: "Phone",
      handle: "+880 1632798502",
      actionText: "Call or WhatsApp"
    }
  ] as SocialLink[]
};
