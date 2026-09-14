import { useEffect, useRef, useState } from 'react'
import { Button } from '../design-system/Button'
import { BackChevronIcon, CheckIcon } from '../design-system/icons'
import './InquiryScreen.css'

type InquiryScreenProps = {
  onBack: () => void
  onComplete: () => void
}

export function InquiryScreen({ onBack, onComplete }: InquiryScreenProps) {
  const [text, setText] = useState('')
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const canComplete = text.trim().length > 0

  useEffect(() => {
    textareaRef.current?.focus()
  }, [])

  return (
    <div className="inquiry-screen">
      <div className="inquiry-screen__scroll">
        <button
          type="button"
          className="inquiry-screen__back"
          onClick={onBack}
          aria-label="ย้อนกลับ"
        >
          <BackChevronIcon />
        </button>

        <div className="inquiry-screen__chat">
          <div className="inquiry-screen__bubble" role="status">
            มีปัญหาเกี่ยวกับอะไรหรือมีเรื่องที่อยากจะเล่ามั้ย อธิบายให้มูก้าฟังหน่อย
          </div>

          <label className="inquiry-screen__field">
            <span className="inquiry-screen__label">อธิบายปัญหาของคุณ</span>
            <textarea
              ref={textareaRef}
              className="inquiry-screen__input"
              lang="th"
              rows={5}
              value={text}
              onChange={(event) => setText(event.target.value)}
              placeholder="พิมพ์เล่าให้มูก้าฟังได้เลย..."
              enterKeyHint="done"
              autoComplete="off"
            />
          </label>
        </div>
      </div>

      <div className="inquiry-screen__cta-wrap">
        <Button
          className="inquiry-screen__cta"
          onClick={onComplete}
          disabled={!canComplete}
        >
          <CheckIcon />
          อธิบายเสร็จแล้ว
        </Button>
      </div>
    </div>
  )
}
