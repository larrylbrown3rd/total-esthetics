'use client';

import { useCallback, useState } from 'react';
import {
  STUDIO_PHONE_DISPLAY,
  STUDIO_PHONE_RAW,
  STUDIO_SMS_PREFILL,
} from '@/lib/data';

const SMS_HREF = `sms:${STUDIO_PHONE_RAW}?body=${encodeURIComponent(STUDIO_SMS_PREFILL)}`;

async function copyPhoneToClipboard() {
  if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(STUDIO_PHONE_RAW);
    return;
  }

  if (typeof document === 'undefined') {
    throw new Error('Clipboard unavailable');
  }

  const textarea = document.createElement('textarea');
  textarea.value = STUDIO_PHONE_RAW;
  textarea.setAttribute('readonly', '');
  textarea.setAttribute('aria-hidden', 'true');
  textarea.style.position = 'fixed';
  textarea.style.top = '0';
  textarea.style.left = '0';
  textarea.style.opacity = '0';
  textarea.style.pointerEvents = 'none';
  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();

  const copied = document.execCommand('copy');
  document.body.removeChild(textarea);

  if (!copied) {
    throw new Error('Copy command failed');
  }
}

export default function ContactSmsActions() {
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);

  const handleCopy = useCallback(async () => {
    setCopyError(false);
    try {
      await copyPhoneToClipboard();
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2800);
    } catch {
      setCopied(false);
      setCopyError(true);
      window.setTimeout(() => setCopyError(false), 3200);
    }
  }, []);

  const desktopLabel = copied
    ? 'Number Copied to Clipboard'
    : copyError
      ? `Text us at ${STUDIO_PHONE_DISPLAY}`
      : 'Copy Studio Number';

  return (
    <div className="mx-auto w-full max-w-md">
      <a
        href={SMS_HREF}
        className="btn-gold block w-full text-center md:hidden"
      >
        Text the Studio to Book
      </a>

      <button
        type="button"
        onClick={handleCopy}
        aria-live="polite"
        aria-label={
          copied
            ? 'Phone number copied to clipboard'
            : `Copy studio phone number ${STUDIO_PHONE_DISPLAY}`
        }
        className="btn-gold hidden min-h-[52px] w-full items-center justify-center transition-all duration-300 md:flex"
      >
        <span className="inline-block transition-opacity duration-300">
          {desktopLabel}
        </span>
      </button>

      <p className="mt-5 text-center font-sans-dm text-sm tracking-wide text-[#8B8B7A]">
        Studio line ·{' '}
        <span className="text-[#F5F0E8]">{STUDIO_PHONE_DISPLAY}</span>
      </p>
    </div>
  );
}
