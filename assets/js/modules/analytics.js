function trackEvent(eventName, payload) {
  if (typeof gtag === "function") {
    gtag("event", eventName, payload);
  }
}

export function initAnalyticsTracking() {
  const trackableLinks = document.querySelectorAll("[data-track]");
  trackableLinks.forEach((link) => {
    link.addEventListener("click", () => {
      trackEvent("click", {
        event_category: "engagement",
        event_label: link.getAttribute("data-track"),
      });
    });
  });

  const inquiryForm = document.querySelector('[data-track-form="inquiry_form"]');
  if (inquiryForm) {
    inquiryForm.addEventListener("submit", () => {
      trackEvent("generate_lead", { method: "form_submit" });
    });
  }
}
