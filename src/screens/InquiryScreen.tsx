import { Button } from '../design-system/Button'
import { BackChevronIcon, CheckIcon } from '../design-system/icons'
import './InquiryScreen.css'

type InquiryScreenProps = {
  onBack: () => void
  onComplete: () => void
}

export function InquiryScreen({ onBack, onComplete }: InquiryScreenProps) {
  return (
    <div className="inquiry-screen">
      <div className="inquiry-screen__top">
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
        </div>

        <div className="inquiry-screen__cta-wrap">
          <Button className="inquiry-screen__cta" onClick={onComplete}>
            <CheckIcon />
            อธิบายเสร็จแล้ว
          </Button>
        </div>
      </div>

      <ThaiKeyboardChrome />
    </div>
  )
}

function ThaiKeyboardChrome() {
  const row1 = ['ๅ', '/', '-', 'ภ', 'ถ', 'ุ', 'ึ', 'ค', 'ต', 'จ', 'ข', 'ช']
  const row2 = ['ๆ', 'ไ', 'ำ', 'พ', 'ะ', 'ั', 'ี', 'ร', 'น', 'ย', 'บ', 'ล']
  const row3 = ['ฟ', 'ห', 'ก', 'ด', 'เ', '้', '่', 'า', 'ส', 'ว', 'ง']
  const row4 = ['ผ', 'ป', 'แ', 'อ', 'ิ', 'ื', 'ท', 'ม', 'ใ', 'ฝ']

  return (
    <div className="thai-keyboard" aria-hidden="true">
      <div className="thai-keyboard__suggest">
        <span>สวัสดี</span>
        <span>ขอบคุณ</span>
        <span>ช่วยด้วย</span>
      </div>
      <div className="thai-keyboard__keys">
        <div className="thai-keyboard__row">
          {row1.map((key) => (
            <span key={key} className="thai-keyboard__key">
              {key}
            </span>
          ))}
        </div>
        <div className="thai-keyboard__row">
          {row2.map((key) => (
            <span key={key} className="thai-keyboard__key">
              {key}
            </span>
          ))}
        </div>
        <div className="thai-keyboard__row">
          <span className="thai-keyboard__key thai-keyboard__key--wide">⇧</span>
          {row3.map((key) => (
            <span key={key} className="thai-keyboard__key">
              {key}
            </span>
          ))}
          <span className="thai-keyboard__key thai-keyboard__key--wide">⌫</span>
        </div>
        <div className="thai-keyboard__row">
          <span className="thai-keyboard__key thai-keyboard__key--mod">123</span>
          {row4.map((key) => (
            <span key={key} className="thai-keyboard__key">
              {key}
            </span>
          ))}
          <span className="thai-keyboard__key thai-keyboard__key--done">เสร็จ</span>
        </div>
        <div className="thai-keyboard__row thai-keyboard__row--bottom">
          <span className="thai-keyboard__key thai-keyboard__key--mod">🌐</span>
          <span className="thai-keyboard__key thai-keyboard__key--space">space</span>
          <span className="thai-keyboard__key thai-keyboard__key--mod">.</span>
        </div>
      </div>
    </div>
  )
}
