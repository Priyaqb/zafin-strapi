import type { Schema, Struct } from '@strapi/strapi';

export interface SectionBanner extends Struct.ComponentSchema {
  collectionName: 'components_section_banners';
  info: {
    displayName: 'Banner';
  };
  attributes: {
    BannerButton: Schema.Attribute.Component<'share.button', true>;
    MainTitle: Schema.Attribute.String;
    SubTitle: Schema.Attribute.String;
  };
}

export interface ShareButton extends Struct.ComponentSchema {
  collectionName: 'components_share_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    href: Schema.Attribute.String;
    Label: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'section.banner': SectionBanner;
      'share.button': ShareButton;
    }
  }
}
