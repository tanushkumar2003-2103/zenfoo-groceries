# Zenfoo Groceries

ZENFOO — PREMIUM GROCERY E-COMMERCE FRONTEND

Build a complete, production-quality frontend-only grocery e-commerce website called "Zenfoo".

Zenfoo is a modern Indian online grocery shopping platform inspired by the usability and quick-commerce experience of platforms such as Zepto, Blinkit, and Instamart, but it must have its own unique branding, UI identity, layout, components, and visual language.

The website should feel like a real commercial grocery application rather than a simple demo project.

1. CORE OBJECTIVE

Create a polished grocery e-commerce frontend where users can:

Browse grocery categories

Navigate from categories → subcategories

Browse products within a subcategory

Search for products

Filter and sort products

View product details

Select product quantity

Add products to cart

Update cart quantities

Remove products from cart

View cart subtotal and estimated total

Continue shopping

Login / sign up

Sign in with Google UI

View responsive pages across desktop, tablet and mobile

Everything must work using mock frontend data only.

There must be:

NO backend

NO database

NO authentication server

NO payment gateway

NO API dependency

Use local mock data / JavaScript or TypeScript objects.

2. TECHNOLOGY STACK

Use:

React.js

Vite

Tailwind CSS

React Router DOM

Lucide React or another lightweight icon library

JavaScript or TypeScript

Local mock data

React Context or Zustand for cart state if needed

LocalStorage for persisting cart state if useful

Do NOT create a backend.

Do NOT create MongoDB integration.

Do NOT create Express APIs.

Do NOT use Firebase authentication.

The entire application must run locally as a frontend application.

3. BRAND IDENTITY

Brand name:

Zenfoo

Brand personality:

Fresh

Clean

Friendly

Modern

Fast

Trustworthy

Minimal

Premium but affordable

The primary visual concept should communicate:

Fresh groceries + cleanliness + convenience + speed

4. COLOR SYSTEM

Use a grocery-inspired green and white visual system.

Primary:

Fresh vegetable green

Deep green for important actions

White backgrounds

Supporting colors:

Very light green

Soft gray

Dark charcoal text

Muted gray text

Light borders

Suggested palette:

Primary Green: #16A34A
Dark Green: #15803D
Light Green: #F0FDF4
Soft Green: #DCFCE7
Background: #FFFFFF
Secondary Background: #F8FAFC
Text: #172018
Muted Text: #64748B
Border: #E5E7EB
Success: #22C55E
Warning: #F59E0B
Danger: #EF4444


Do not overuse green.

Use plenty of white space.

The UI should feel:

minimal + premium + fresh

Avoid making the entire website green.

5. GLOBAL DESIGN LANGUAGE

The design must look like a professionally designed modern Indian grocery application.

Use:

Large clean whitespace

Rounded cards

Subtle shadows

Soft borders

Modern typography

High-quality product imagery

Consistent spacing

Clear hierarchy

Smooth hover states

Micro-interactions

Responsive layouts

Avoid:

Excessive gradients

Excessive animations

Huge text

Cluttered cards

Very dark UI

Too many colors

Generic dashboard-style layouts

The design should be closer to a premium consumer e-commerce product.

6. HEADER

Create a highly polished responsive header.

Desktop header should contain:

Left

Zenfoo logo / wordmark

Use a simple fresh grocery-inspired logo treatment.

Center

Search bar:

"Search for fruits, vegetables, milk, snacks..."

Include search icon.

Search should actually filter the mock products.

Right

Location selector:

"Deliver to..."

Account/Login

Cart icon with item count

Example:

Zenfoo | Search groceries... | 📍 Deliver to Hyderabad | Account | 🛒 3


On mobile:

Top row:

Zenfoo + location + cart

Second row:

Full-width search bar

Make the header sticky where appropriate.

7. HOMEPAGE

Create a premium grocery homepage.

Sections should appear in this order:

Hero Section

Create a clean grocery-focused hero.

Example messaging:

Fresh groceries, delivered to your doorstep.

Supporting text:

"Everything you need for your kitchen, delivered fresh and fast."

CTA:

"Shop Now"

Secondary CTA:

"Explore Categories"

Use attractive grocery imagery.

Do not make the hero overly tall.

8. CATEGORY SECTION

Create a visually attractive category carousel/grid.

Example categories:

Fruits & Vegetables

Dairy, Bread & Eggs

Atta, Rice, Oil & Dals

Masala & Dry Fruits

Snacks & Munchies

Cold Drinks & Juices

Ice Creams

Chocolates

Breakfast & Cereals

Personal Care

Cleaning Essentials

Baby Care

Pet Care

Beverages

Each category should contain:

Image

Category name

Clean card design

Clicking a category must navigate to the appropriate category page.

9. CATEGORY → SUBCATEGORY FLOW

This is very important.

When the user clicks:

Fruits & Vegetables

navigate to:

/category/fruits-vegetables


The category page should show:

Breadcrumb

Category title

Category description

Subcategory navigation

Product sections

Product grid

Example subcategories:

Fruits & Vegetables:

Fresh Fruits

Fresh Vegetables

Leafy Vegetables

Exotic Fruits

Exotic Vegetables

Herbs & Seasonings

Dairy:

Milk

Curd & Yogurt

Butter

Cheese

Paneer

Eggs

Atta/Rice/Oil/Dals:

Atta

Rice

Cooking Oil

Dal

Pulses

Ghee

Ice Cream:

Ice Cream Tubs

Ice Cream Bars

Cones

Kulfi

Cold Drinks:

Soft Drinks

Juices

Energy Drinks

Soda

Water

Chocolates:

Milk Chocolates

Dark Chocolates

Chocolate Bars

Gift Chocolates

10. SUBCATEGORY → PRODUCTS FLOW

When the user clicks a subcategory, navigate to a product listing page.

Example:

/category/fruits-vegetables/fresh-fruits


The page should display:

Breadcrumb

Subcategory title

Product count

Search within category

Filter button

Sort dropdown

Product grid

Example:

Fresh Fruits

"24 products"

Filters:

Brand

Price

Availability

Discount

Rating

Sort:

Recommended

Price: Low to High

Price: High to Low

Rating

Discount

11. PRODUCT CARD

Create premium reusable product cards.

Each product card should contain:

Product image

Product name

Brand

Quantity / weight

Rating

Current price

Original price

Discount percentage

Add button

Example:

[ Product Image ]

Fresh Red Apples
Fresho
1 kg

★★★★☆ 4.5

₹149   ₹189
21% OFF

[ + ADD ]


The ADD button should actually work.

When clicked:

Add product to cart

Update cart count

Change button state to quantity controls

Example:

[ −  2  + ]


Use INR pricing everywhere.

Never use dollar pricing.

12. PRODUCT DETAILS PAGE

When a user clicks a product, navigate to:

/product/:productId


Create a premium product detail experience.

Desktop layout:

Left:

Large product image

Thumbnail images

Right:

Product name

Brand

Rating

Review count

Quantity/weight

Current price

MRP

Discount

Tax/inclusive pricing information

Quantity selector

Add to Cart button

Buy Now button

Delivery information

Below:

Product Description

Detailed description.

Product Information

Brand

Weight

Ingredients

Country of origin

Shelf life

Storage instructions

Delivery Information

Example:

"Delivery available to your location"

"Estimated delivery: 10–20 minutes"

Reviews

Create mock reviews.

Do not make the page overly complicated.

13. CART

Create a proper cart page.

Route:

/cart


Cart should contain:

Product image

Product name

Weight

Price

Quantity controls

Remove button

Individual item total

Right side / bottom on mobile:

Order Summary

Item total

Delivery fee

Handling fee

Discount

Grand total

Example:

Item Total       ₹420
Delivery         FREE
Handling         ₹5
Discount         -₹30
----------------------
Total            ₹395


CTA:

Proceed to Checkout

Since this is frontend-only, clicking checkout can display a professional placeholder:

"Checkout demo — backend/payment integration will be added later."

14. LOGIN / SIGN UP

Create a beautiful authentication UI.

Login modal/page should contain:

Mobile number / email

Password

Login button

Forgot password

Don't have an account?

Create account

Also provide:

Continue with Google

Use a Google icon.

Important:

This is only a frontend UI.

Do not implement real Google authentication.

When clicked, show a suitable demo message or simulated login state.

15. SEARCH EXPERIENCE

Search must be functional using mock data.

When users type:

milk


show matching products.

Support:

Product name

Brand

Category

Subcategory

Create a polished search result experience.

Show:

"24 results for milk"

Include empty state:

"No products found"

with a friendly illustration/message and:

"Browse Categories"

button.

16. PRODUCT FILTERS

Desktop:

Use a sidebar filter.

Mobile:

Use a bottom sheet / modal filter UI.

Filters:

Category

Brand

Price

Under ₹100

₹100–₹250

₹250–₹500

₹500+

Rating

4★ & above

3★ & above

Availability

In Stock

Out of Stock

Discount

10%+

20%+

30%+

Filters should actually affect the displayed mock products.

17. RESPONSIVE DESIGN

This is extremely important.

The website must be fully responsive.

Support:

Large desktop

Desktop

Tablet

Mobile

Small mobile

Desktop:

Multi-column product grids

Sidebar filters

Full navigation

Tablet:

Adaptive grid

Compact header

Mobile:

2-column product grid

Sticky bottom cart/action where appropriate

Mobile-friendly filters

Mobile search

Compact navigation

Touch-friendly buttons

Do not simply shrink the desktop design.

Design the mobile experience intentionally.

18. MOBILE NAVIGATION

Create a mobile bottom navigation bar.

Items:

Home

Categories

Search

Orders

Account

Cart can remain prominent in the header.

Use Lucide icons.

19. MOCK DATA

Create a structured mock data system.

Create separate files such as:

src/
  data/
    categories.js
    subcategories.js
    products.js
    reviews.js


Each product should contain:

{
  id,
  name,
  slug,
  brand,
  categoryId,
  subcategoryId,
  description,
  price,
  mrp,
  discount,
  rating,
  reviewCount,
  unit,
  images,
  inStock,
  tags
}


Create enough realistic mock products to make the application feel populated.

At minimum:

10+ categories

4–8 subcategories per major category

50+ products

Use realistic Indian grocery products.

Examples:

Apples

Bananas

Tomatoes

Potatoes

Onions

Milk

Curd

Paneer

Butter

Rice

Atta

Dal

Cooking Oil

Coca-Cola

Real Juice

Lays

Haldiram's

Dairy Milk

Ice Cream

Nescafé

Tata Tea

Colgate

Dove

etc.

Use INR.

20. PRODUCT IMAGES

Use high-quality grocery/product imagery.

For development, use reliable image URLs or suitable placeholder/product image sources.

Images should:

Have consistent aspect ratios

Look clean

Work well on white backgrounds

Load correctly

Have alt text

Do not use broken image URLs.

If an external image source is unreliable, provide a local fallback image/placeholder.

21. ZEPTO VISUAL REFERENCE

Use the following Zepto pages as UX inspiration/reference only:

https://www.zepto.com/

https://www.zepto.com/cn/fruits-vegetables/all/cid/64374cfe-d06f-4a01-898e-c07c46462c36/scid/e78a8422-5f20-4e4b-9a9f-22a0e53962e3

https://www.zepto.com/cn/dairy-bread-eggs/milk/cid/4b938e02-7bde-4479-bc0a-2b54cb6bd5f5/scid/22964a2b-0439-4236-9950-0d71b532b243

https://www.zepto.com/cn/atta-rice-oil-dals/oil/cid/2f7190d0-7c40-458b-b450-9a1006db3d95/scid/2b5e863c-9497-46ae-a7e9-85f6ef7380da

https://www.zepto.com/cn/ice-creams-more/tubs/cid/65ee1b69-4e24-45b9-ac84-aace3c0854d8/scid/21c1011a-c677-4007-ac20-abc1542cb89c

https://www.zepto.com/cn/cold-drinks-juices/top-picks/cid/947a72ae-b371-45cb-ad3a-778c05b64399/scid/7dceec53-78f9-4f06-83d7-c8edd9c2f71a

https://www.zepto.com/cn/sweet-cravings/chocolates/cid/adab2f81-7140-4fe9-b8cf-3d809f40e38a/scid/ca984d2d-70b8-464c-b182-41aa328b3d4b

Study the general:

Grocery browsing experience

Category organization

Product grid patterns

Search behavior

Product card structure

Quick commerce UX

Responsive behavior

BUT:

Do not copy Zepto's exact branding, logo, colors, proprietary graphics, exact layout, or exact UI.

Zenfoo must have its own premium identity.

22. HOMEPAGE PRODUCT SECTIONS

After categories, create sections such as:

Fresh Picks

Fresh fruits and vegetables.

Daily Essentials

Milk, bread, eggs, atta, rice, oil, etc.

Snacks & Munchies

Chips, namkeen, biscuits, etc.

Beverages

Juices, soft drinks, tea, coffee, etc.

Sweet Cravings

Chocolates and desserts.

Deals of the Day

Discounted products.

Each section should have:

Horizontal product carousel on desktop where appropriate

Responsive product grid on mobile

"View All" button

23. PROMOTIONAL BANNERS

Create 2–4 tasteful promotional banners.

Examples:

"Fresh Fruits & Vegetables"

"Up to 30% OFF"

"Daily Essentials Delivered Fast"

"Weekend Snack Deals"

Use grocery imagery.

Keep banners elegant and not visually overwhelming.

24. TRUST / VALUE PROPOSITION

Add a section communicating why users should choose Zenfoo.

Example cards:

Fresh Quality

Carefully selected products.

Fast Delivery

Get your essentials quickly.

Best Prices

Great prices on everyday products.

Secure Shopping

Safe and reliable shopping experience.

Use simple icons.

25. FOOTER

Create a professional footer.

Sections:

Zenfoo

About Zenfoo

Careers

Contact

Shop

Fruits & Vegetables

Dairy

Snacks

Beverages

Personal Care

Help

FAQs

Shipping

Returns

Contact Support

Legal

Privacy Policy

Terms & Conditions

Also include:

Social icons

Copyright

App download placeholders if appropriate

26. UI STATES

Every major feature should have proper states.

Implement:

Loading state

Skeleton loaders for product cards.

Empty state

When no search/filter results exist.

Error state

Friendly frontend error fallback.

Out-of-stock state

Show:

"Out of Stock"

Disable add button.

Cart empty state

Example:

"Your cart is waiting for some fresh picks."

Button:

"Start Shopping"

27. MICRO INTERACTIONS

Add subtle premium interactions:

Button hover

Card hover

Image scale on hover

Add-to-cart animation

Cart count animation

Smooth page transitions

Toast notification after adding product

Quantity increment/decrement feedback

Heart/favorite interaction

Do not over-animate.

Animations should feel fast and professional.

28. FAVORITES / WISHLIST

Add a heart icon to product cards.

Users should be able to toggle favorites locally.

Create a wishlist/favorites page or drawer.

Persist favorites using localStorage if convenient.

29. RECENTLY VIEWED PRODUCTS

Track recently viewed products using localStorage.

Display a:

Recently Viewed

section where appropriate.

This will make the application feel more like a real e-commerce product.

30. COMPONENT ARCHITECTURE

Create reusable components.

Suggested structure:

src/
  components/
    layout/
      Header
      Footer
      MobileBottomNav

    home/
      Hero
      CategorySection
      PromoBanner
      ProductSection
      TrustSection

    category/
      CategoryCard
      SubcategoryNav

    product/
      ProductCard
      ProductGrid
      ProductFilters
      ProductSort
      ProductGallery
      ProductInfo
      QuantitySelector
      ReviewSection

    cart/
      CartItem
      CartSummary

    ui/
      Button
      Badge
      Modal
      Toast
      Skeleton
      EmptyState

  pages/
    Home
    Categories
    Category
    ProductListing
    ProductDetails
    Cart
    Wishlist
    Login
    Signup
    NotFound

  data/
    categories
    subcategories
    products
    reviews

  context/
    CartContext
    WishlistContext

  utils/
    price
    filters


Keep components reusable and maintainable.

31. ROUTING

Implement proper React Router routes.

Required routes:

/
 /categories
 /category/:categorySlug
 /category/:categorySlug/:subcategorySlug
 /product/:productId
 /search
 /cart
 /wishlist
 /login
 /signup
 /account
 /orders


Create a proper 404 page.

32. ACCESSIBILITY

Use:

Semantic HTML

Accessible buttons

aria-labels where needed

Keyboard-friendly controls

Proper image alt text

Visible focus states

Good color contrast

33. PERFORMANCE

Keep the application lightweight.

Use:

Lazy loading where useful

Optimized images

Reusable components

Minimal dependencies

Avoid unnecessary re-renders

Avoid huge animation libraries

34. CODE QUALITY

Write clean production-quality React code.

Do not put everything into one file.

Avoid duplicate components.

Use reusable data-driven components.

Keep business logic separate from UI where possible.

Use meaningful variable and component names.

Do not hardcode product cards repeatedly.

35. IMPORTANT USER FLOW

The final application must support this complete flow:

HOME
 ↓
CATEGORY
 ↓
SUBCATEGORY
 ↓
PRODUCT LIST
 ↓
PRODUCT DETAILS
 ↓
ADD TO CART
 ↓
CART
 ↓
CHECKOUT DEMO


Also:

HOME
 ↓
SEARCH
 ↓
PRODUCT
 ↓
PRODUCT DETAILS
 ↓
ADD TO CART


And:

HOME
 ↓
LOGIN
 ↓
SIGN IN / GOOGLE UI
 ↓
ACCOUNT


Everything should feel connected.

No dead buttons.

No dead navigation links unless explicitly labeled as future/demo functionality.

36. PREMIUM UI REQUIREMENT

The most important requirement:

Do not make this look like an AI-generated generic e-commerce template.

The final UI should look like something designed by a professional product designer.

Prioritize:

Visual hierarchy

Consistency

Spacing

Typography

Product photography

Clean cards

Excellent mobile UI

Strong navigation

Professional empty states

Professional loading states

Smooth interactions

Think:

Modern Indian quick-commerce + premium grocery marketplace + minimal green/white design.

37. FINAL DESIGN DIRECTION

The overall visual feeling should be:

"Fresh groceries, beautifully presented."

Zenfoo should feel:

Fresh → Fast → Simple → Trustworthy → Premium

Do not make the website visually identical to Zepto.

Use Zepto only as a reference for modern grocery e-commerce UX patterns.

38. DEVELOPMENT REQUIREMENT

Build the complete frontend.

Do not stop after creating the homepage.

Implement:

Homepage

Category browsing

Subcategory browsing

Product listing

Product details

Search

Filters

Sorting

Cart

Wishlist

Login/signup UI

Responsive navigation

Footer

Loading states

Empty states

Error states

Mock data

Make every major interaction functional using frontend state.

39. FINAL QUALITY CHECK

Before considering the project complete, verify:

All routes work

Category navigation works

Subcategory navigation works

Products display correctly

Product details work

Search works

Filters work

Sorting works

Add to cart works

Quantity controls work

Cart totals update

Wishlist works

Login UI works

Google login UI works as a frontend demo

Responsive design works

Mobile navigation works

No broken images

No console errors

No dead primary buttons

No placeholder lorem ipsum

INR currency is used everywhere

UI is consistent

Website feels premium

Website is clearly branded as Zenfoo

Start by establishing the complete application architecture and design system, then implement the pages and reusable components.

The final result should be a portfolio-quality Zenfoo grocery e-commerce frontend that looks and feels like a real commercial product.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/b153108f-f9c4-49e7-975d-84375d1bd474).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
