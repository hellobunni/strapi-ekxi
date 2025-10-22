# The Red Tent Detroit - Data Schema Documentation

This document describes the complete data schema for The Red Tent Detroit website, implemented in Strapi CMS.

## Overview

The schema is organized into:
- **Components**: Reusable data structures
- **Single Types**: Unique content (one instance only)
- **Collection Types**: Repeatable content (multiple instances)

---

## Components

### Shared Components (`components/shared/`)

#### 1. Badge
Decorative badge for UI elements
- `text` (string, required)
- `color` (string, default: "bg-yellow-400")
- `textColor` (string, default: "text-black")

#### 2. CTA Button
Call-to-action button
- `text` (string, required)
- `icon` (string)
- `variant` (enum: "primary" | "secondary")
- `href` (string, required)

#### 3. Feature
Feature card with icon and description
- `icon` (string, required)
- `title` (string, required)
- `description` (text, required)
- `iconColor` (string, default: "text-red-500")
- `bgColor` (string, default: "bg-red-100")

#### 4. Social Media Link
Social media profile information
- `platform` (enum: "instagram" | "facebook" | "twitter" | "tiktok")
- `handle` (string, required)
- `url` (string, required)

#### 5. Coordinates
Geographic location coordinates
- `lat` (decimal, required)
- `lng` (decimal, required)

#### 6. Hours Display
Operating hours for a day or range of days
- `day` (string, required)
- `time` (string, required)

#### 7. Navigation Item
Navigation menu item
- `title` (string, required)
- `url` (string, required)
- `comingSoon` (boolean, default: false)

#### 8. Image Data
Image with metadata
- `url` (string)
- `title` (string)
- `description` (text)
- `alt` (string)
- `image` (media, single image)

### Page Sections Components (`components/page-sections/`)

#### 1. Hero Section
Hero section with title, subtitle, and CTAs
- `title` (string, required)
- `highlightedWord` (string)
- `subtitle` (text, required)
- `ctaButtons` (component: shared.cta-button, repeatable)
- `badges` (component: shared.badge, repeatable)
- `backgroundImage` (media, single image)

#### 2. About Section
About section with features and badges
- `title` (string, required)
- `subtitle` (string, required)
- `description` (text, required)
- `features` (component: shared.feature, repeatable)
- `badges` (component: shared.badge, repeatable)
- `image` (media, single image)

#### 3. Menu Preview Section
Menu preview section with CTAs
- `title` (string, required)
- `subtitle` (string)
- `highlightedWord` (string)
- `description` (text)
- `ctaButtons` (component: shared.cta-button, repeatable)
- `badges` (component: shared.badge, repeatable)

---

## Single Types

### 1. Restaurant (`api/restaurant`)
Basic restaurant information
- `name` (string, required)
- `tagline` (string, required)
- `description` (text, required)
- `founded` (integer, required)
- `rating` (decimal, 0-5)
- `totalReviews` (integer, default: 0)
- `totalServed` (integer, default: 0)
- `logo` (media, single image)

**API Endpoint**: `/api/restaurant`

### 2. Contact (`api/contact`)
Contact information and social media
- `email` (email, required)
- `phone` (string, required)
- `serviceArea` (string, required)
- `serviceAreaDescription` (string)
- `socialMedia` (component: shared.social-media-link, repeatable)

**API Endpoint**: `/api/contact`

### 3. Location (`api/location`)
Current location and service area
- `currentLocationName` (string, required)
- `currentLocationAddress` (string, required)
- `status` (string)
- `coordinates` (component: shared.coordinates)
- `serviceArea` (string, required)

**API Endpoint**: `/api/location`

### 4. Operating Hours (`api/operating-hours`)
Restaurant operating hours
- `mondayFriday` (string, required)
- `saturday` (string, required)
- `sunday` (string, required)
- `dailyHours` (string)
- `displayHours` (component: shared.hours-display, repeatable)

**API Endpoint**: `/api/operating-hours`

### 5. Navigation (`api/navigation`)
Site navigation menu
- `items` (component: shared.navigation-item, repeatable, required)

**API Endpoint**: `/api/navigation`

### 6. SEO (`api/seo`)
Site-wide SEO settings
- `title` (string, required)
- `description` (text, required)
- `keywords` (json, default: [])
- `ogImage` (media, single image)
- `twitterHandle` (string)
- `favicon` (media, single image)

**API Endpoint**: `/api/seo`

### 7. Home Page (`api/home-page`)
Home page content and sections
- `hero` (component: page-sections.hero-section)
- `about` (component: page-sections.about-section)
- `menuPreview` (component: page-sections.menu-preview-section)
- `marqueeItems` (json, default: [])
- `featuredMenuItems` (relation: oneToMany to menu-item)
- `carouselImages` (relation: oneToMany to carousel-image)

**API Endpoint**: `/api/home-page`

### 8. Contact Page (`api/contact-page`)
Contact page content
- `title` (string, required)
- `subtitle` (text)
- `contactInfoTitle` (string, default: "Contact Information")
- `funFactsTitle` (string, default: "Fun Facts")
- `backgroundImage` (media, single image)
- `funFacts` (relation: oneToMany to fun-fact)

**API Endpoint**: `/api/contact-page`

### 9. Find Us Page (`api/find-us-page`)
Find Us page content
- `title` (string, required)
- `highlightedWord` (string)
- `subtitle` (text)
- `locationHoursTitle` (string, default: "Location & Hours")
- `currentLocationTitle` (string, default: "Current Location")
- `operatingHoursTitle` (string, default: "Operating Hours")
- `followUsTitle` (string, default: "Follow for Live Locations")
- `backgroundImage` (media, single image)

**API Endpoint**: `/api/find-us-page`

### 10. Menu Page (`api/menu-page`)
Menu page content
- `title` (string, required)
- `highlightedWord` (string)
- `subtitle` (text)
- `backgroundImage` (media, single image)
- `menuCategories` (relation: oneToMany to menu-category)

**API Endpoint**: `/api/menu-page`

### 11. Privacy Page (`api/privacy-page`)
Privacy policy page content
- `title` (string, required)
- `highlightedWord` (string)
- `subtitle` (text)
- `lastUpdated` (string)
- `content` (richtext)

**API Endpoint**: `/api/privacy-page`

---

## Collection Types

### 1. Menu Item (`api/menu-item`)
Individual menu items
- `name` (string, required)
- `description` (text)
- `price` (decimal)
- `category` (enum: "hotdogs" | "hamburgers" | "sides" | "drinks")
- `tags` (json)
- `available` (boolean, default: true)
- `featured` (boolean, default: false)
- `image` (media, multiple types allowed)

**API Endpoint**: `/api/menu-items`

### 2. Menu Category (`api/menu-category`)
Menu categories grouping menu items
- `name` (string, required)
- `description` (text)
- `displayOrder` (integer, default: 0)
- `menuItems` (relation: oneToMany to menu-item)
- `icon` (string)
- `image` (media, single image)

**API Endpoint**: `/api/menu-categories`

### 3. Fun Fact (`api/fun-fact`)
Fun facts about the restaurant
- `icon` (string, required)
- `text` (text, required)
- `iconColor` (string, default: "text-blue-600")
- `bgColor` (string, default: "bg-blue-100")
- `displayOrder` (integer, default: 0)

**API Endpoint**: `/api/fun-facts`

### 4. Carousel Image (`api/carousel-image`)
Images for carousel displays
- `title` (string, required)
- `description` (text)
- `alt` (string)
- `image` (media, single image, required)
- `displayOrder` (integer, default: 0)

**API Endpoint**: `/api/carousel-images`

---

## API Usage

### Basic Requests

#### Get Single Type
```bash
GET /api/restaurant
GET /api/contact
GET /api/location
GET /api/operating-hours
GET /api/navigation
GET /api/seo
GET /api/home-page
GET /api/contact-page
GET /api/find-us-page
GET /api/menu-page
GET /api/privacy-page
```

#### Get Collection Type (All Items)
```bash
GET /api/menu-items
GET /api/menu-categories
GET /api/fun-facts
GET /api/carousel-images
```

#### Get Single Item from Collection
```bash
GET /api/menu-items/:id
GET /api/menu-categories/:id
GET /api/fun-facts/:id
GET /api/carousel-images/:id
```

### Populate Relations

To include related data, use the `populate` parameter:

```bash
# Get home page with all relations
GET /api/home-page?populate=*

# Get menu page with categories and their items
GET /api/menu-page?populate[menuCategories][populate]=menuItems

# Get home page with featured menu items
GET /api/home-page?populate[featuredMenuItems][populate]=image
```

### Filtering

```bash
# Get only available menu items
GET /api/menu-items?filters[available][$eq]=true

# Get featured menu items
GET /api/menu-items?filters[featured][$eq]=true

# Get items by category
GET /api/menu-items?filters[category][$eq]=hotdogs
```

### Sorting

```bash
# Sort by display order
GET /api/fun-facts?sort=displayOrder:asc

# Sort by price
GET /api/menu-items?sort=price:desc
```

---

## Data Relationships

### Home Page
- Has many **Featured Menu Items** (from Menu Item collection)
- Has many **Carousel Images** (from Carousel Image collection)

### Contact Page
- Has many **Fun Facts** (from Fun Fact collection)

### Menu Page
- Has many **Menu Categories** (from Menu Category collection)

### Menu Category
- Has many **Menu Items** (from Menu Item collection)

---

## Next Steps

1. **Start Strapi**: `npm run develop` in the `strapi-ekxi` directory
2. **Create Admin User**: Follow the setup wizard at http://localhost:1337/admin
3. **Configure Permissions**: Go to Settings > Roles > Public and enable:
   - All `find` and `findOne` permissions for all content types
4. **Add Content**: Start populating your content types through the admin panel
5. **Test API**: Use the API endpoints documented above

---

## Frontend Integration

To fetch data in your Next.js app:

```typescript
// Example: Fetch restaurant info
const response = await fetch('http://localhost:1337/api/restaurant');
const { data } = await response.json();

// Example: Fetch home page with all relations
const response = await fetch('http://localhost:1337/api/home-page?populate=*');
const { data } = await response.json();

// Example: Fetch menu items by category
const response = await fetch('http://localhost:1337/api/menu-items?filters[category][$eq]=hotdogs&populate=*');
const { data } = await response.json();
```

---

## Schema Version
- Created: October 2025
- Strapi Version: 5.18.1
- Status: Complete and ready for use

