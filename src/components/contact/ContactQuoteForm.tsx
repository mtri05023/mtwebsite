"use client";

import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import { contact } from "@/data/site";

type FormState = {
  name: string;
  phone: string;
  websiteType: string;
  budget: string;
  message: string;
  currentWebsite: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;
type FieldName = keyof FormState;

const initialForm: FormState = {
  name: "",
  phone: "",
  websiteType: "",
  budget: "",
  message: "",
  currentWebsite: ""
};

const websiteTypeOptions = [
  "Website giới thiệu",
  "Website phục vụ quảng cáo",
  "Website bán hàng",
  "Website theo yêu cầu",
  "Chỉnh sửa website hiện có",
  "Chưa xác định"
];

const budgetOptions = ["Dưới 2 triệu", "2 – 4 triệu", "4 – 5 triệu", "5 – 7 triệu", "8 – 15 triệu", "Trên 15 triệu", "Chưa xác định"];
const phonePattern = /^0\d{9}$/;

export function ContactQuoteForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [phoneOverflow, setPhoneOverflow] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const fieldRefs = useRef<Partial<Record<FieldName, HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | null>>>({});
  const shouldShowCurrentWebsite = form.websiteType === "Chỉnh sửa website hiện có";
  const telHref = `tel:${contact.phone}`;
  const inputClass = "h-12 rounded-md border border-slate-200 px-4 text-sm font-medium text-slate-800 outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20";
  const errorInputClass = "border-red-400 focus:border-red-500 focus:ring-red-500/20";

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const requestedType = params.get("loai");

    if (requestedType && websiteTypeOptions.includes(requestedType)) {
      setForm((current) => ({ ...current, websiteType: requestedType }));
    }
  }, []);

  useEffect(() => {
    if (!shouldShowCurrentWebsite) {
      setForm((current) => (current.currentWebsite ? { ...current, currentWebsite: "" } : current));
      setErrors((current) => {
        if (!current.currentWebsite) return current;
        const next = { ...current };
        delete next.currentWebsite;
        return next;
      });
    }
  }, [shouldShowCurrentWebsite]);

  function updateField(field: FieldName, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setStatusMessage("");
    setErrors((current) => {
      if (!current[field]) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });
  }

  function updatePhone(event: ChangeEvent<HTMLInputElement>) {
    const digits = event.target.value.replace(/\D/g, "");
    const isTooLong = digits.length > 10;
    setPhoneOverflow(isTooLong);
    updateField("phone", digits.slice(0, 10));
    if (isTooLong) {
      setErrors((current) => ({
        ...current,
        phone: "Số điện thoại phải gồm 10 chữ số và bắt đầu bằng 0."
      }));
    }
  }

  function normalizeForm(current: FormState): FormState {
    return {
      name: current.name.trim().replace(/\s+/g, " "),
      phone: current.phone.replace(/\D/g, "").slice(0, 10),
      websiteType: current.websiteType,
      budget: current.budget || "Chưa xác định",
      message: current.message.trim(),
      currentWebsite: current.currentWebsite.trim()
    };
  }

  function isValidUrl(value: string) {
    try {
      const parsedUrl = new URL(value);
      return ["http:", "https:"].includes(parsedUrl.protocol) && parsedUrl.hostname.includes(".");
    } catch {
      return false;
    }
  }

  function validateForm(current: FormState) {
    const nextErrors: FormErrors = {};

    if (current.name.length < 2 || current.name.length > 60) {
      nextErrors.name = "Vui lòng nhập tên hợp lệ.";
    }

    if (!current.phone) {
      nextErrors.phone = "Vui lòng nhập số điện thoại/Zalo.";
    } else if (phoneOverflow || !phonePattern.test(current.phone)) {
      nextErrors.phone = "Số điện thoại phải gồm 10 chữ số và bắt đầu bằng 0.";
    }

    if (!current.websiteType) {
      nextErrors.websiteType = "Vui lòng chọn loại website.";
    }

    if (current.message.length < 10 || current.message.length > 1000) {
      nextErrors.message = "Vui lòng mô tả nhu cầu ít nhất 10 ký tự.";
    }

    if (current.websiteType === "Chỉnh sửa website hiện có" && !isValidUrl(current.currentWebsite)) {
      nextErrors.currentWebsite = "Vui lòng nhập đường dẫn website hợp lệ.";
    }

    return nextErrors;
  }

  function buildQuoteMessage(validForm: FormState) {
    return [
      "Xin chào MT WEBSITE,",
      "",
      "Tôi muốn được tư vấn thiết kế website.",
      "",
      `Tên khách hàng: ${validForm.name}`,
      `Số điện thoại/Zalo: ${validForm.phone}`,
      `Loại website: ${validForm.websiteType}`,
      `Ngân sách dự kiến: ${validForm.budget || "Chưa xác định"}`,
      validForm.currentWebsite ? `Website hiện tại: ${validForm.currentWebsite}` : null,
      "",
      "Yêu cầu:",
      validForm.message,
      "",
      "Nhờ MT WEBSITE tư vấn giúp tôi."
    ]
      .filter((line): line is string => line !== null)
      .join("\n");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const normalizedForm = normalizeForm(form);
    const nextErrors = validateForm(normalizedForm);
    setForm(normalizedForm);
    setErrors(nextErrors);

    const firstError = Object.keys(nextErrors)[0] as FieldName | undefined;
    if (firstError) {
      fieldRefs.current[firstError]?.focus();
      return;
    }

    const quoteMessage = buildQuoteMessage(normalizedForm);
    const zaloHref = `https://zalo.me/${contact.zalo}`;

    try {
      await navigator.clipboard.writeText(quoteMessage);
      setStatusMessage("Nội dung yêu cầu đã được sao chép. Hãy dán vào Zalo để gửi cho MT WEBSITE.");
    } catch {
      setStatusMessage("Không thể tự sao chép nội dung. Zalo đã được mở, bạn có thể copy lại nội dung từ form nếu cần.");
    }

    window.open(zaloHref, "_blank", "noopener,noreferrer");
  }

  return (
    <div id="form-bao-gia" className="scroll-mt-28 rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      <form onSubmit={handleSubmit} className="grid gap-5" noValidate>
        <div className="grid gap-5 md:grid-cols-2">
          <label className="grid gap-2 text-sm font-bold text-navy-900">
            Tên khách hàng
            <input
              ref={(element) => {
                fieldRefs.current.name = element;
              }}
              value={form.name}
              onChange={(event) => updateField("name", event.target.value)}
              className={`${inputClass} ${errors.name ? errorInputClass : ""}`}
              placeholder="Nhập tên của bạn"
              maxLength={60}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "quote-name-error" : undefined}
            />
            {errors.name ? <span id="quote-name-error" className="text-xs font-semibold text-red-600">{errors.name}</span> : null}
          </label>

          <label className="grid gap-2 text-sm font-bold text-navy-900">
            Số điện thoại/Zalo
            <input
              ref={(element) => {
                fieldRefs.current.phone = element;
              }}
              value={form.phone}
              onChange={updatePhone}
              className={`${inputClass} ${errors.phone ? errorInputClass : ""}`}
              placeholder="Ví dụ: 0901234567"
              type="tel"
              inputMode="numeric"
              maxLength={10}
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? "quote-phone-error" : undefined}
            />
            {errors.phone ? <span id="quote-phone-error" className="text-xs font-semibold text-red-600">{errors.phone}</span> : null}
          </label>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <label className="grid gap-2 text-sm font-bold text-navy-900">
            Loại website
            <select
              ref={(element) => {
                fieldRefs.current.websiteType = element;
              }}
              value={form.websiteType}
              onChange={(event) => updateField("websiteType", event.target.value)}
              className={`${inputClass} bg-white ${errors.websiteType ? errorInputClass : ""}`}
              aria-invalid={Boolean(errors.websiteType)}
              aria-describedby={errors.websiteType ? "quote-website-type-error" : undefined}
            >
              <option value="">Chọn loại website</option>
              {websiteTypeOptions.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            {errors.websiteType ? <span id="quote-website-type-error" className="text-xs font-semibold text-red-600">{errors.websiteType}</span> : null}
          </label>

          <label className="grid gap-2 text-sm font-bold text-navy-900">
            Ngân sách dự kiến
            <select value={form.budget} onChange={(event) => updateField("budget", event.target.value)} className={`${inputClass} bg-white`}>
              <option value="">Chọn ngân sách dự kiến</option>
              {budgetOptions.map((budget) => (
                <option key={budget} value={budget}>
                  {budget}
                </option>
              ))}
            </select>
          </label>
        </div>

        {shouldShowCurrentWebsite ? (
          <label className="grid gap-2 text-sm font-bold text-navy-900">
            Website hiện tại
            <input
              ref={(element) => {
                fieldRefs.current.currentWebsite = element;
              }}
              value={form.currentWebsite}
              onChange={(event) => updateField("currentWebsite", event.target.value)}
              className={`${inputClass} ${errors.currentWebsite ? errorInputClass : ""}`}
              placeholder="https://websitecuaban.vn"
              inputMode="url"
              aria-invalid={Boolean(errors.currentWebsite)}
              aria-describedby={errors.currentWebsite ? "quote-current-website-error" : undefined}
            />
            {errors.currentWebsite ? <span id="quote-current-website-error" className="text-xs font-semibold text-red-600">{errors.currentWebsite}</span> : null}
          </label>
        ) : null}

        <label className="grid gap-2 text-sm font-bold text-navy-900">
          Mô tả yêu cầu
          <textarea
            ref={(element) => {
              fieldRefs.current.message = element;
            }}
            value={form.message}
            onChange={(event) => updateField("message", event.target.value)}
            className={`min-h-36 resize-y rounded-md border border-slate-200 px-4 py-3 text-sm font-medium leading-6 text-slate-800 outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 ${errors.message ? errorInputClass : ""}`}
            placeholder="Bạn cần website để làm gì, có bao nhiêu trang, có cần form/Zalo/Google Maps không?"
            maxLength={1000}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "quote-message-error" : "quote-message-counter"}
          />
          <div className="flex items-center justify-between gap-3">
            {errors.message ? <span id="quote-message-error" className="text-xs font-semibold text-red-600">{errors.message}</span> : <span />}
            <span id="quote-message-counter" className="text-xs font-semibold text-slate-500">{form.message.length} / 1000</span>
          </div>
        </label>

        <button type="submit" className="min-h-12 rounded-md bg-accent-500 px-5 py-3 text-sm font-bold text-white hover:bg-accent-600">
          Gửi yêu cầu qua Zalo
        </button>
      </form>

      {statusMessage ? (
        <div className="mt-5 rounded-md border border-accent-500 bg-navy-50 px-4 py-3 text-sm font-semibold leading-6 text-navy-900" role="status" aria-live="polite">
          {statusMessage}
        </div>
      ) : null}

      <div className="mt-4">
        <a href={telHref} className="text-sm font-bold text-navy-900 hover:text-accent-600">
          Hoặc gọi trực tiếp: {contact.phone}
        </a>
      </div>
    </div>
  );
}
