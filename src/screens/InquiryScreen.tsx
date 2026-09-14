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
  const rootRef = useRef<HTMLDivElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const canComplete = text.trim().length > 0

  useEffect(() => {
    textareaRef.current?.focus()
  }, [])

  useEffect(() => {
    const root = rootRef.current
    const vv = window.visualViewport
    if (!root || !vv) {
      return
    }

    const updateKeyboardInset = () => {
      const inset = Math.max(0, window.innerHeight - vv.height - vv.offsetTop)
      root.style.setProperty('--keyboard-inset', `${inset}px`)
    }

    updateKeyboardInset()
    vv.addEventListener('resize', updateKeyboardInset)
    vv.addEventListener('scroll', updateKeyboardInset)
    return () => {
      vv.removeEventListener('resize', updateKeyboardInset)
      vv.removeEventListener('scroll', updateKeyboardInset)
      root.style.removeProperty('--keyboard-inset')
    }
  }, [])

  return (
    <div className="inquiry-screen" ref={rootRef}>
      <div className="inquiry-screen__scroll">
        <button
          type="button"
          className="inquiry-screen__back"
          onClick={onBack}
          aria-label="ย้อนกลับ"
        >
          <BackChevronIcon />
        </button>

        <div className="inquiry-screen__body">
          <p className="inquiry-screen__prompt" role="status">
            มีปัญหาเกี่ยวกับอะไรหรือมีเรื่องที่อยากจะเล่ามั้ย อธิบายให้มูก้าฟังหน่อย
          </p>

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
