import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID XfXBEhjBxoz2WeO9Ao8DCzXfCWwYTiYBerP9H-2KyBc"
  }
});
