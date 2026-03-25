# Backend Remaining Work

## Current API coverage
- Auth
  - POST /sign-up
  - POST /login
- Agencies
  - POST /agencies
  - GET /agencies
  - GET /agencies/:id
- Properties
  - POST /properties
  - GET /properties
  - GET /properties/rent
  - GET /properties/sell
  - GET /properties/sold
  - GET /properties/:id

---

## Priority 1: Core missing backend features
- Add update and delete endpoints
  - Agencies: PATCH/PUT /agencies/:id, DELETE /agencies/:id
  - Properties: PATCH/PUT /properties/:id, DELETE /properties/:id
  - Users: GET /users/:id, PATCH/PUT /users/:id, DELETE /users/:id (or admin-only)
- Add authorization and role checks
  - Protect write routes with JWT middleware
  - Restrict admin actions to admin role
  - Ensure agency can only edit its own properties
- Add request validation
  - Validate body, params, and query for every endpoint
  - Return consistent 400 errors with field-level messages
- Handle duplicate and conflict cases
  - Email already exists
  - Phone already exists
  - License number already exists
- Add pagination, sorting, and filtering
  - GET /properties with page, limit, sort, minPrice, maxPrice, status, location, featured
  - GET /agencies with page and search

---

## Priority 2: Domain features implied by your schema
- Favorites module
  - POST /favorites
  - GET /favorites/me
  - DELETE /favorites/:propertyId
- Property images module
  - POST /properties/:id/images
  - GET /properties/:id/images
  - DELETE /properties/:id/images/:imageId
- Agency verification workflow
  - Admin endpoint to approve/reject agency verification status
- Property lifecycle workflow
  - Explicit status transitions (for-sale, for-rent, sold, unavailable, active) with rules

---

## Priority 3: Security and reliability
- Password/auth hardening
  - Replace manual HMAC password hashing with bcrypt or argon2
  - Add token expiry and refresh-token flow
  - Add logout/token revocation strategy if needed
- Security middleware
  - CORS configuration
  - Helmet
  - Rate limiting for login and signup
- Error handling
  - Centralized error middleware
  - Standard response shape for success and failure
- Data integrity checks
  - Validate UUID params
  - Verify foreign keys exist before insert where business logic needs clearer error messages

---

## Priority 4: Dev quality and operations
- Testing
  - Unit tests for services
  - Integration tests for routes and auth
  - Seed data for test environment
- API documentation
  - OpenAPI/Swagger spec
  - Example requests/responses
- Migrations and seed strategy
  - Ensure migration flow is stable and reproducible
  - Add seed scripts for local and staging
- Logging and observability
  - Request logging with correlation id
  - Structured logs for errors and auth failures
- Environment and config checks
  - Validate required environment variables at boot
  - Fail fast with clear startup messages

---

## Suggested implementation order
1. Auth middleware and role authorization
2. Validation layer for all existing endpoints
3. Update/delete endpoints for agencies and properties
4. Favorites and property-images APIs
5. Pagination/filtering on list endpoints
6. Tests and Swagger docs
7. Security middleware and production hardening
