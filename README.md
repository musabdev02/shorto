# Shorto - URL Shortener

A simple and efficient URL shortener that converts long URLs into short, shareable links. 

## 🚀 Features

- 🔗 Generate short links instantly
- 📌 Track and manage your shortened URLs (if registered)
- ⏳ Anonymous short links expire after 7 days
- 🛡️ Secure and reliable link handling

## 🛠️ Technologies Used

- **Frontend**: ReactJS, TailwindCSS
- **Backend**: Node.js, Express
- **Database**: MongoDB

## 📦 Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/musabdev02/shorto.git
   cd shorto
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
4. Start the server:
   ```sh
   npm start
   ```

## 🎯 Usage

- **Shorten a URL**: Submit a long URL, get a short link.
- **Access a short link**: Redirects automatically to the original URL.
- **Manage links**: Register an account to track your links.

## 📜 API Endpoints

- `POST /api/url/` - Generate a short link.
- `GET /:shortcode` - Redirect to the original URL.

## 💡 Future Enhancements

- ✅ Custom short URLs
- 📊 Link analytics (click count, location tracking)
- 🏷️ QR code generation
- 🔒 Authentication & user dashboards

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## 📜 License

This project is licensed under the MIT License.

---
💙 Built with passion by [Musab](https://github.com/musabdev02)