# Quick Start Guide - The Red Tent Detroit CMS

## 🚀 Getting Started

### 1. Start Strapi
```bash
cd strapi-ekxi
npm run develop
```

This will start Strapi at `http://localhost:1337`

### 2. Create Your Admin Account
1. Visit `http://localhost:1337/admin`
2. Fill in your admin credentials
3. Click "Let's Start"

### 3. Configure API Permissions
To make your content accessible to the frontend:

1. Go to **Settings** (⚙️) > **Roles** > **Public**
2. Enable the following permissions:
   - **Restaurant**: `find`
   - **Contact**: `find`
   - **Location**: `find`
   - **Operating Hours**: `find`
   - **Navigation**: `find`
   - **SEO**: `find`
   - **Home Page**: `find`
   - **Contact Page**: `find`
   - **Find Us Page**: `find`
   - **Menu Page**: `find`
   - **Privacy Page**: `find`
   - **Menu Items**: `find`, `findOne`
   - **Menu Categories**: `find`, `findOne`
   - **Fun Facts**: `find`, `findOne`
   - **Carousel Images**: `find`, `findOne`
3. Click **Save**

### 4. Add Your Content

#### Priority Order (Add in this sequence):

1. **Restaurant** - Basic info about The Red Tent
2. **Contact** - Email, phone, social media
3. **Location** - Current location and service area
4. **Operating Hours** - Operating hours
5. **SEO** - Site-wide SEO settings
6. **Navigation** - Site navigation menu
7. **Fun Facts** - Create 3-4 fun facts
8. **Carousel Images** - Upload 4-5 food images
9. **Menu Items** - Add your menu items
10. **Menu Categories** - Group menu items into categories
11. **Home Page** - Configure home page sections
12. **Contact Page** - Contact page content
13. **Find Us Page** - Location page content
14. **Menu Page** - Menu page content
15. **Privacy Page** - Privacy policy content

---

## 📝 Sample Data Reference

You already have sample data in:
```
the-red-tent/src/data/data.json
```

Use this as a reference when populating content in Strapi!

---

## 🔌 API Endpoints

### Single Types (One instance only)
- `GET /api/restaurant`
- `GET /api/contact`
- `GET /api/location`
- `GET /api/operating-hours`
- `GET /api/navigation`
- `GET /api/seo`
- `GET /api/home-page`
- `GET /api/contact-page`
- `GET /api/find-us-page`
- `GET /api/menu-page`
- `GET /api/privacy-page`

### Collection Types (Multiple instances)
- `GET /api/menu-items` - All menu items
- `GET /api/menu-items/:id` - Single menu item
- `GET /api/menu-categories` - All categories
- `GET /api/fun-facts` - All fun facts
- `GET /api/carousel-images` - All carousel images

---

## 🧪 Testing Your API

Once you've added content, test it with:

```bash
# Get restaurant info
curl http://localhost:1337/api/restaurant

# Get menu items
curl http://localhost:1337/api/menu-items

# Get home page with all relations
curl "http://localhost:1337/api/home-page?populate=*"
```

---

## 🎨 Frontend Integration

In your Next.js app (`the-red-tent`), create an API service:

```typescript
// lib/strapi.ts
const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

export async function fetchAPI(path: string) {
  const response = await fetch(`${STRAPI_URL}/api${path}`);
  const json = await response.json();
  return json.data;
}

// Usage in your pages
const restaurant = await fetchAPI('/restaurant');
const menuItems = await fetchAPI('/menu-items?populate=*');
```

---

## 📚 Full Documentation

See `DATA_SCHEMA.md` for complete schema documentation, including:
- All content types and their fields
- Component structures
- API usage examples
- Relationship mappings

---

## 🐛 Troubleshooting

### "Column must appear in GROUP BY clause" error
This is a known issue with Strapi v5 and PostgreSQL. If you encounter this:
1. Make sure you're on the latest Strapi version
2. Try restarting the server
3. Check the database connection settings

### Can't access API endpoints
- Make sure you've enabled Public permissions in Settings > Roles > Public
- Verify Strapi is running at http://localhost:1337

### Media not uploading
- Check the `public/uploads` directory has write permissions
- Consider setting up Cloudinary for production (already configured in plugins.js)

---

## 🚢 Production Deployment

### Environment Variables Needed:
```env
# Database
DATABASE_CLIENT=postgres
DATABASE_HOST=your-db-host
DATABASE_PORT=5432
DATABASE_NAME=your-db-name
DATABASE_USERNAME=your-db-user
DATABASE_PASSWORD=your-db-password
DATABASE_SSL=true

# Strapi
HOST=0.0.0.0
PORT=1337
APP_KEYS=generate-with-strapi
API_TOKEN_SALT=generate-with-strapi
ADMIN_JWT_SECRET=generate-with-strapi
JWT_SECRET=generate-with-strapi

# Cloudinary (optional, for media storage)
CLOUDINARY_NAME=your-cloud-name
CLOUDINARY_KEY=your-api-key
CLOUDINARY_SECRET=your-api-secret
```

### Build Command:
```bash
npm run build
npm start
```

---

## ✅ Checklist

- [ ] Strapi server started
- [ ] Admin account created
- [ ] API permissions configured
- [ ] Sample content added
- [ ] API endpoints tested
- [ ] Frontend integration working

---

## 📞 Need Help?

Refer to:
- [Strapi Documentation](https://docs.strapi.io)
- [DATA_SCHEMA.md](./DATA_SCHEMA.md) - Complete schema reference
- Your sample data: `the-red-tent/src/data/data.json`

