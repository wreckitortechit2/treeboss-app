import { useState } from "react";
import styles from "./EstimateForm.module.css";

const services = [
  "Tree Removal",
  "Trimming & Pruning",
  "Stump Grinding",
  "Land Clearing",
  "Emergency / Storm",
  "Commercial / Other",
];

export default function EstimateForm() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    // Wire this to your endpoint, Typeform, or email service.
    // For now it simulates a successful submit.
    await new Promise((r) => setTimeout(r, 800));
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className={styles.success}>
        <h3>Request received</h3>
        <p>
          Thanks — we'll call or text you shortly to schedule your free estimate.
          For immediate help, call (267) 810-0031.
        </p>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.row}>
        <label>
          Name
          <input name="name" type="text" required placeholder="Your name" />
        </label>
        <label>
          Phone
          <input name="phone" type="tel" required placeholder="(267) 555-0100" />
        </label>
      </div>
      <div className={styles.row}>
        <label>
          Email
          <input name="email" type="email" placeholder="you@email.com" />
        </label>
        <label>
          Service needed
          <select name="service" defaultValue="">
            <option value="" disabled>
              Select a service
            </option>
            {services.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label>
        Project details
        <textarea
          name="details"
          rows={4}
          placeholder="Tree size, location, urgency, access notes..."
        />
      </label>
      <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
        {status === "sending" ? "Sending..." : "Request Free Estimate"}
      </button>
    </form>
  );
}
