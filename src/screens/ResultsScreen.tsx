import { Avatar } from '../design-system/Avatar';
import { Button } from '../design-system/Button';
import { Card } from '../design-system/Card';
import { BackChevronIcon, StarIcon } from '../design-system/icons';
import { MookaIllustration } from '../design-system/MookaIllustration';
import { Price } from '../design-system/Price';
import { matchedPsychologists } from '../domain/mockData';
import type { Psychologist } from '../domain/psychologist';
import { BottomNav } from '../shell/BottomNav';
import './ResultsScreen.css';

type ResultsScreenProps = {
  onBack: () => void;
  onFindAnother: () => void;
};

export function ResultsScreen({ onBack, onFindAnother }: ResultsScreenProps) {
  return (
    <div className="results-screen">
      <div className="results-screen__top">
        <button
          type="button"
          className="results-screen__back"
          onClick={onBack}
          aria-label="ย้อนกลับ"
        >
          <BackChevronIcon />
        </button>
      </div>

      <div className="results-screen__scroll">
        <div className="results-screen__header">
          <MookaIllustration
            variant="friends"
            className="results-screen__art"
          />
          <p className="results-screen__headline">
            มูก้าคัดนักจิตวิทยา
            <br />
            ที่เหมาะกับคุณมาให้แล้ว...
          </p>
        </div>

        <ul className="results-screen__cards">
          {matchedPsychologists.map((psychologist) => (
            <li key={psychologist.id}>
              <ResultCard psychologist={psychologist} />
            </li>
          ))}
        </ul>

        <div className="results-screen__cta-wrap">
          <Button className="results-screen__cta" onClick={onFindAnother}>
            หาผู้ให้คำปรึกษาคนอื่น
          </Button>
        </div>
      </div>

      <BottomNav activeTab={1} />
    </div>
  );
}

function ResultCard({ psychologist }: { psychologist: Psychologist }) {
  return (
    <Card className="result-card">
      <div className="result-card__main">
        <Avatar src={psychologist.avatarUrl} alt={psychologist.name} size={49} />
        <div className="result-card__info">
          <h2 className="result-card__name">{psychologist.name}</h2>
          <div className="result-card__meta">
            <span className="result-card__role">{psychologist.role}</span>
            {psychologist.rating != null ? (
              <span className="result-card__rating">
                <StarIcon />
                {psychologist.rating.toFixed(1)}
              </span>
            ) : null}
          </div>
        </div>
      </div>
      <div className="result-card__price">
        <Price
          amount={psychologist.priceBaht}
          durationMinutes={psychologist.durationMinutes}
        />
      </div>
    </Card>
  );
}
