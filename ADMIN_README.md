# Admin Dashboard

## Access

The admin dashboard is accessible at `/admin` with the following authentication:

- **Password**: `admin123`
- **Keyboard Shortcut**: Press `Ctrl + Shift + A` from anywhere on the site

## Features

### 📊 Dashboard Overview
- **Total Submissions**: Shows the total number of contact submissions
- **Brands Count**: Number of brand submissions
- **Creators Count**: Number of creator submissions  
- **Recent (24h)**: Submissions from the last 24 hours

### 🔍 Search & Filter
- **Search**: Search by name or email
- **Category Filter**: Filter by brands only, creators only, or all
- **Sort Options**: Sort by date, name, or category (ascending/descending)

### 📋 Contact Management
- **View Details**: Click the eye icon to view detailed contact information
- **Delete Contacts**: Click the trash icon to delete contacts
- **Export to CSV**: Download filtered results as CSV file

### 🔐 Security
- Simple password protection (for production, implement proper authentication)
- Session persistence using localStorage
- Logout functionality

## API Endpoints

### GET `/api/contact`
Fetches all contact submissions

### POST `/api/contact`
Creates a new contact submission

### DELETE `/api/contact`
Deletes a contact submission by ID

## Usage Instructions

1. **Access the Dashboard**:
   - Navigate to `/admin` or press `Ctrl + Shift + A`
   - Enter password: `admin123`

2. **View Submissions**:
   - All submissions are displayed in a table format
   - Use search and filters to find specific contacts
   - Click the eye icon to view detailed information

3. **Manage Contacts**:
   - Delete contacts using the trash icon
   - Export data using the "Export CSV" button
   - Refresh data using the "Refresh" button

4. **Contact Details Modal**:
   - Shows comprehensive contact information
   - Displays submission date and time
   - Shows category-specific information
   - Provides action buttons for email and deletion

## Production Considerations

For production deployment, consider:

1. **Authentication**: Implement proper authentication (JWT, OAuth, etc.)
2. **Environment Variables**: Store admin password in environment variables
3. **Rate Limiting**: Add rate limiting to prevent brute force attacks
4. **Logging**: Add proper logging for admin actions
5. **Backup**: Implement data backup before deletion operations
6. **Audit Trail**: Track admin actions for security purposes

## Technical Details

- Built with Next.js 14 and TypeScript
- Uses MongoDB for data storage
- Framer Motion for animations
- Lucide React for icons
- Tailwind CSS for styling
- Responsive design for mobile and desktop
