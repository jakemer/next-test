"use client";

import { useRef, useEffect } from "react";

import styles from "./page.module.css";
import "@justifi/webcomponents/dist/module/justifi-tokenize-payment-method"
import { TokenizePaymentMethodSubmitEvent } from "@justifi/webcomponents/dist/types/components/tokenize-payment-method/tokenize-payment-method-events";
import { JustifiTokenizePaymentMethod } from "@justifi/webcomponents/dist/module/justifi-tokenize-payment-method";

export default function Home() {
  const tokenizePaymentMethodComponent = useRef<JustifiTokenizePaymentMethod>(null);

  useEffect(() => {
    const tokenizeComponent = tokenizePaymentMethodComponent.current;
    tokenizeComponent?.addEventListener('submit-event', handleTokenizePaymentMethodSubmit);

    return () => {
      tokenizeComponent?.removeEventListener('submit-event', handleTokenizePaymentMethodSubmit);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });

  const handleTokenizePaymentMethodSubmit = (event: TokenizePaymentMethodSubmitEvent) => {
    const { response } = event;
    console.log("Tokenized Payment Method:", response);
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <justifi-tokenize-payment-method
          ref={tokenizePaymentMethodComponent}
        />
      </main>
    </div>
  );
}
