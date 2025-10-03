export interface GridArea {
  column: string;
  row: string;
}

export interface Project {
  id: number;
  title: string;
  tags: string[];
  image: string;
  link: string;
  gridArea: GridArea;
  rotation: number;
  type?: 'featured' | 'secondary';
}

export interface PortfolioItemProps {
  id: number;
  title: string;
  tags?: string[];
  image: string;
  link?: string;
  index?: number;
  gridArea?: GridArea;
  rotation?: number;
  onProjectClick?: (project: Project) => void;
}

export interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export interface AnimatedCounterProps {
  end: number;
  duration?: number;
  className?: string;
}

export interface MarqueeProps {
  children: React.ReactNode;
  speed?: number;
  direction?: 'left' | 'right';
  className?: string;
}

export interface HeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
}

export interface AboutProps {
  title?: string;
  description?: string;
  skills?: string[];
}

export interface ContactProps {
  email?: string;
  phone?: string;
  socialLinks?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  };
}

export interface NavbarProps {
  isScrolled?: boolean;
  onMenuToggle?: () => void;
  isMenuOpen?: boolean;
}

export interface FooterProps {
  showMarquee?: boolean;
}

export interface BrandsProps {
  brands?: Array<{
    name: string;
    logo: string;
    url?: string;
  }>;
}

export interface CameraFrameProps {
  children: React.ReactNode;
  className?: string;
}

export interface PortfolioProps {
  title?: string;
  description?: string;
}

export interface PortfolioTitleProps {
  title?: string;
  description?: string;
}

export interface PortfolioProjectsProps {
  projects?: Project[];
}
