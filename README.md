
````markdown
# 🇮🇳 Desi Jugaad App / Indian Jugaad API

A JSON‑powered RESTful API delivering creative “Desi Jugaads” — clever life‑hacks, budget solutions, and everyday tricks from Indian culture. Open‑source, easy to use, and powered by Node.js and Express.

---

## 🚀 Features

- **Fetch a random Jugaad** (`/jugaad`)  
- **Search by keyword** (tags, title, region) (`/jugaad/search/:query`)  
- **Fetch by unique ID** (`/jugaad/search/id/:id`)  
- **Paginated full dataset access** (`/jugaad/all/pages?page=&limit=`)  
- **Styled HTML landing page** with interactive demo & docs :contentReference[oaicite:1]{index=1}

---

## 🧱 Tech Stack

- Backend: **Node.js**, **Express.js**  
- Frontend: Simple HTML + Vanilla JS (demo UI)  
- Data: `JugaadData.js` (JSON array of hack entries)  
- Hosting: Render.com (live API) :contentReference[oaicite:2]{index=2}

---

## 🔧 Getting Started

### Clone the repo
```bash
git clone https://github.com/Sameersingh001/jugaad-api.git
cd jugaad-api
````

### Install dependencies

```bash
npm install
```

### Start the server

```bash
node Jugaad_Api.js
```


---

## 📡 Live API

Try the hosted version at:
**[https://indian-jugaad-api.onrender.com](https://indian-jugaad-api.onrender.com)** ([GitHub][1])

---

## 📘 API Endpoints

| Method | Endpoint                | Description                          |
| ------ | ----------------------- | ------------------------------------ |
| GET    | `/`                     | Interactive landing page             |
| GET    | `/jugaad`               | Return a random jugaad               |
| GET    | `/jugaad/all`           | Return all entries                   |
| GET    | `/jugaad/all/pages`     | Paginated data with `page` & `limit` |
| GET    | `/jugaad/search/:query` | Search by keyword                    |
| GET    | `/jugaad/search/id/:id` | Fetch specific entry by ID           |

---

## 🧪 Sample JSON Response

```json
{
  "id": 501,
  "title": "Mobile Hack",
  "jugaad": "Use a balloon to amplify your phone's sound.",
  "category": "Tech",
  "language": "Hindi",
  "difficulty": "Easy",
  "region": "India",
  "tags": ["sound", "mobile", "trick"]
}
```

---

## ⚡ Example Usage

### Fetch a random hack (curl):

```bash
curl https://indian-jugaad-api.onrender.com/jugaad
```

### Search by keyword:

```bash
curl https://indian-jugaad-api.onrender.com/jugaad/search/mobile
```

### Find by ID:

```bash
curl https://indian-jugaad-api.onrender.com/jugaad/search/id/501
```

### Paginated access:

```bash
curl "https://indian-jugaad-api.onrender.com/jugaad/all/pages?page=2&limit=20"
```

---

## 🖥️ Landing Page / UI Demo

Navigate to `/` in your browser to interactively:

* Try endpoints
* View JSON output
* Explore simple search UI
* Read API documentation

---

## 🙋 How to Contribute

Want your own jugaad included?

* Open **`JugaadData.js`**
* Add your entry (use the existing format)
* Submit a **Pull Request**

---

## 👤 About the Author

* **Author**: Sameer Singh (GitHub: @Sameersingh001) 
* License: **MIT** — free & open for collaboration

---

## 🧠 Philosophy

> *“Jugaad is not just a hack, it's a mindset.”*
> Embrace creativity, simplicity, and impact. 

---

## 💡 Want to customize?

Let me know the tech stack you used in your own Desi Jugaad app (React, mobile, Vite, etc.), and I can adapt this README further for build scripts, deployments, environment variables, or custom features like adding user submission forms or a rating system.

Cheers!


