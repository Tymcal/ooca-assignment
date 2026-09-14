import { Avatar } from '../design-system/Avatar';
import { Button } from '../design-system/Button';
import { Card } from '../design-system/Card';
import { Chip } from '../design-system/Chip';
import {
  CoinIcon,
  FilterIcon,
  GlobeIcon,
  SearchIcon,
  SortIcon,
  StarIcon,
} from '../design-system/icons';
import { MookaIllustration } from '../design-system/MookaIllustration';
import { Price } from '../design-system/Price';
import { Tag } from '../design-system/Tag';
import { listPsychologists } from '../domain/mockData';
import type { Psychologist } from '../domain/psychologist';
import { BottomNav } from '../shell/BottomNav';
import './PsychologistListScreen.css';

type PsychologistListScreenProps = {
  onStartMatching: () => void;
};

export function PsychologistListScreen({
  onStartMatching,
}: PsychologistListScreenProps) {
  return (
    <div className="list-screen">
      <div className="list-screen__scroll">
        <div className="list-screen__search-row">
          <label className="list-screen__search">
            <SearchIcon />
            <input
              type="search"
              placeholder="ค้นหาผู้ให้คำปรึกษา"
              aria-label="ค้นหาผู้ให้คำปรึกษา"
            />
          </label>
          <button type="button" className="list-screen__lang" aria-label="ภาษา">
            <GlobeIcon />
            <span>ภาษา</span>
          </button>
        </div>

        <div className="list-screen__chips" role="list">
          <Chip icon={<FilterIcon />}>ตัวกรอง</Chip>
          <Chip icon={<SortIcon />}>เรียงตาม</Chip>
          <Chip icon={<CoinIcon />}>ช่วงราคา</Chip>
        </div>

        <section className="list-screen__promo" aria-label="โปรโมชันมูก้า">
          <MookaIllustration
            variant="coins"
            className="list-screen__promo-art"
          />
          <div className="list-screen__promo-body">
            <p className="list-screen__promo-line list-screen__promo-line--dark">
              ไม่รู้จะเลือกคนไหนหรอ
            </p>
            <p className="list-screen__promo-line list-screen__promo-line--primary">
              ให้มูก้าช่วยหาให้มั้ย
            </p>
            <Button
              size="sm"
              className="list-screen__promo-cta"
              onClick={onStartMatching}
            >
              ช่วยหาให้หน่อย
            </Button>
          </div>
        </section>

        <ul className="list-screen__cards">
          {listPsychologists.map((psychologist) => (
            <li key={psychologist.id}>
              <PsychologistListCard psychologist={psychologist} />
            </li>
          ))}
        </ul>
      </div>
      <BottomNav activeTab={1} />
    </div>
  );
}

function PsychologistListCard({
  psychologist,
}: {
  psychologist: Psychologist;
}) {
  return (
    <Card className="psych-card">
      <Avatar src={psychologist.avatarUrl} alt={psychologist.name} size={72} />
      <div className="psych-card__body">
        <h2 className="psych-card__name">{psychologist.name}</h2>
        <div className="psych-card__role">
          <span>{psychologist.role}</span>
          {psychologist.rating != null ? (
            <span
              className="psych-card__rating"
              aria-label={`เรตติ้ง ${psychologist.rating}`}
            >
              <StarIcon />
            </span>
          ) : null}
        </div>
        {psychologist.tags.length > 0 ? (
          <div className="psych-card__tags">
            {psychologist.tags.map((tag) => (
              <Tag key={tag.label} label={tag.label} variant={tag.variant} />
            ))}
          </div>
        ) : null}
        <div className="psych-card__price">
          <Price
            amount={psychologist.priceBaht}
            durationMinutes={psychologist.durationMinutes}
          />
        </div>
      </div>
    </Card>
  );
}
