import { Application } from "stimulus"
import * as Turbo from "@hotwired/turbo"
import Reveal from "./controllers/reveal_controller"

Turbo.setProgressBarDelay(1)
const application = Application.start()
application.register("reveal", Reveal)

window.addEventListener("turbo:before-cache", () => {
  document.querySelectorAll(".prose h1, .prose h2, .prose h3, .prose h4").forEach((headerEl) => {
    const linkEl = document.createElement("a")
    linkEl.setAttribute("href", "#" + headerEl.id)
    linkEl.innerText = " #"
    headerEl.appendChild(linkEl)
  })
})

// const env = document.querySelector("body").dataset.env

// // Check that service workers are supported
// if ("serviceWorker" in navigator && env === "production") {
//   // use the window load event to keep the page load performant
//   window.addEventListener("load", () => {
//     try {
//       navigator.serviceWorker.register("/sw.js")
//     } catch (error) {
//       console.error("Service worker registration failed: ", error)
//     }
//   })
// }
