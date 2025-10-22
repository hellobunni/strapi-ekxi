import type { Schema, Struct } from '@strapi/strapi';

export interface PageSectionsAboutSection extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_about_sections';
  info: {
    description: 'About section with features and badges';
    displayName: 'About Section';
    icon: 'information';
  };
  attributes: {
    badges: Schema.Attribute.Component<'shared.badge', true>;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    features: Schema.Attribute.Component<'shared.feature', true>;
    image: Schema.Attribute.Media<'images'>;
    subtitle: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PageSectionsHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_hero_sections';
  info: {
    description: 'Hero section with title, subtitle, and CTAs';
    displayName: 'Hero Section';
    icon: 'landscape';
  };
  attributes: {
    carousel_images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    hero_image: Schema.Attribute.Media<'images'>;
    highlightedWord: Schema.Attribute.String;
    subtitle: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PageSectionsMenuPreviewSection extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_menu_preview_sections';
  info: {
    description: 'Menu preview section with CTAs';
    displayName: 'Menu Preview Section';
    icon: 'restaurant';
  };
  attributes: {
    badges: Schema.Attribute.Component<'shared.badge', true>;
    ctaButtons: Schema.Attribute.Component<'shared.cta-button', true>;
    description: Schema.Attribute.Text;
    highlightedWord: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedBadge extends Struct.ComponentSchema {
  collectionName: 'components_shared_badges';
  info: {
    description: 'Decorative badge component';
    displayName: 'Badge';
    icon: 'award';
  };
  attributes: {
    color: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'bg-yellow-400'>;
    text: Schema.Attribute.String & Schema.Attribute.Required;
    textColor: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'text-black'>;
  };
}

export interface SharedCoordinates extends Struct.ComponentSchema {
  collectionName: 'components_shared_coordinates';
  info: {
    description: 'Geographic coordinates';
    displayName: 'Coordinates';
    icon: 'pin-map';
  };
  attributes: {
    lat: Schema.Attribute.Decimal & Schema.Attribute.Required;
    lng: Schema.Attribute.Decimal & Schema.Attribute.Required;
  };
}

export interface SharedCtaButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_cta_buttons';
  info: {
    description: 'Call-to-action button';
    displayName: 'CTA Button';
    icon: 'cursor';
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.Required;
    icon: Schema.Attribute.String;
    text: Schema.Attribute.String & Schema.Attribute.Required;
    variant: Schema.Attribute.Enumeration<['primary', 'secondary']> &
      Schema.Attribute.DefaultTo<'primary'>;
  };
}

export interface SharedFeature extends Struct.ComponentSchema {
  collectionName: 'components_shared_features';
  info: {
    description: 'Feature card with icon and description';
    displayName: 'Feature';
    icon: 'star';
  };
  attributes: {
    bgColor: Schema.Attribute.String & Schema.Attribute.DefaultTo<'bg-red-100'>;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.String & Schema.Attribute.Required;
    iconColor: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'text-red-500'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedHoursDisplay extends Struct.ComponentSchema {
  collectionName: 'components_shared_hours_displays';
  info: {
    description: 'Display hours for a day or range of days';
    displayName: 'Hours Display';
    icon: 'clock';
  };
  attributes: {
    day: Schema.Attribute.String & Schema.Attribute.Required;
    time: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedImageData extends Struct.ComponentSchema {
  collectionName: 'components_shared_image_data';
  info: {
    description: 'Image with metadata';
    displayName: 'Image Data';
    icon: 'picture';
  };
  attributes: {
    alt: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SharedNavigationItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_navigation_items';
  info: {
    description: 'Navigation menu item';
    displayName: 'Navigation Item';
    icon: 'bulletList';
  };
  attributes: {
    comingSoon: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedSocialMediaLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_social_media_links';
  info: {
    description: 'Social media profile link';
    displayName: 'Social Media Link';
    icon: 'link';
  };
  attributes: {
    handle: Schema.Attribute.String & Schema.Attribute.Required;
    platform: Schema.Attribute.Enumeration<
      ['instagram', 'facebook', 'twitter', 'tiktok']
    > &
      Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'page-sections.about-section': PageSectionsAboutSection;
      'page-sections.hero-section': PageSectionsHeroSection;
      'page-sections.menu-preview-section': PageSectionsMenuPreviewSection;
      'shared.badge': SharedBadge;
      'shared.coordinates': SharedCoordinates;
      'shared.cta-button': SharedCtaButton;
      'shared.feature': SharedFeature;
      'shared.hours-display': SharedHoursDisplay;
      'shared.image-data': SharedImageData;
      'shared.navigation-item': SharedNavigationItem;
      'shared.social-media-link': SharedSocialMediaLink;
    }
  }
}
