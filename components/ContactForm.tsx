"use client";

import { useActionState, useEffect, useRef } from "react";
import { toast } from "sonner";
import { submitInquiry, type InquiryState } from "@/app/contact/actions";
import { occasions } from "@/lib/data";
import { Button } from "@/components/Button";

const initialState: InquiryState = { status: "idle", message: "" };

const fieldClasses =
  "focus-ring peer w-full border-0 border-b border-line bg-transparent py-3 text-charcoal placeholder:text-charcoal-faint focus:border-gold";
const labelClasses = "text-label mb-2 block text-charcoal-soft";

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitInquiry, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === "success") {
      toast.success(state.message);
      formRef.current?.reset();
    } else if (state.status === "error") {
      toast.error(state.message);
    }
  }, [state]);

  return (
    <form ref={formRef} action={formAction} className="space-y-8" noValidate>
      {/* Honeypot field — hidden from sighted users and screen readers, bots tend to fill it */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input type="text" id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClasses}>
            Name
          </label>
          <input id="name" name="name" type="text" required className={fieldClasses} placeholder="Your full name" />
        </div>
        <div>
          <label htmlFor="email" className={labelClasses}>
            Email
          </label>
          <input id="email" name="email" type="email" required className={fieldClasses} placeholder="you@email.com" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className={labelClasses}>
            Phone <span className="normal-case text-charcoal-faint">(optional)</span>
          </label>
          <input id="phone" name="phone" type="tel" className={fieldClasses} placeholder="(604) 000-0000" />
        </div>
        <div>
          <label htmlFor="eventDate" className={labelClasses}>
            Event Date
          </label>
          <input id="eventDate" name="eventDate" type="date" className={fieldClasses} />
        </div>
      </div>

      <div>
        <label htmlFor="eventType" className={labelClasses}>
          Event Type
        </label>
        <select id="eventType" name="eventType" required defaultValue="" className={fieldClasses}>
          <option value="" disabled>
            Select an occasion
          </option>
          {occasions.map((o) => (
            <option key={o.slug} value={o.title}>
              {o.title}
            </option>
          ))}
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelClasses}>
          Tell us about your vision
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={fieldClasses}
          placeholder="Venue, guest count, colour palette, anything that helps us picture it."
        />
      </div>

      <Button type="submit" size="lg" disabled={isPending} withArrow className="w-full sm:w-auto">
        {isPending ? "Sending…" : "Send Inquiry"}
      </Button>
    </form>
  );
}
