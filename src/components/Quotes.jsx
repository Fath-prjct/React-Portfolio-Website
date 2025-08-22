import { useState, useEffect } from "react";

const quotes = [
  "Setiap pilihan ada konsekuensinya.",
  "Sadar bahwa dunia adalah game yang besar.",
  "Di mana saja, kapan saja, dengan siapa saja.",
  "Better questioning than stupid all day long.",
];

export default function Quotes() {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [startTyping, setStartTyping] = useState(false);

  // delay 4s
  useEffect(() => {
    const timer = setTimeout(() => setStartTyping(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!startTyping) return; // mulai setelah delay

    let timeout;

    if (!deleting) {
      // ketik quotes / 1
      if (subIndex < quotes[quoteIndex].length) {
        timeout = setTimeout(() => setSubIndex(subIndex + 1), 100);
      } else {
        // delay 3s setelah selesai
        timeout = setTimeout(() => setDeleting(true), 3000);
      }
    } else {
      // hapus quotes / 1
      if (subIndex > 0) {
        timeout = setTimeout(() => setSubIndex(subIndex - 1), 50);
      } else {
        // selesai? lanjut array quotes berikutnya
        setDeleting(false);
        setQuoteIndex((quoteIndex + 1) % quotes.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, quoteIndex, startTyping]);

  return (
    <q style={{ fontFamily: "monospace", fontSize: "1.2rem" }}>
      {quotes[quoteIndex].substring(0, subIndex)}
      <span className="blink">|</span>
      <style>{`
        .blink {
          display: inline-block;
          width: 1ch;
          animation: blink 1s step-start infinite;
        }
        @keyframes blink {
          50% { opacity: 0; }
        }
      `}</style>
    </q>
  );
}
