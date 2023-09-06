import * as S from './styles';
import Image from 'next/image';

interface PartyCardProps {
  party: any;
  onClickParty: (id: number) => void;
}

const PartyCard = ({ party, onClickParty }: PartyCardProps) => {
  const { id, image, title, name, currentPeople, totalPeople, description } =
    party;

  return (
    <S.PartyCard onClick={() => onClickParty(id)}>
      <S.PartyCardWrapper>
        <Image src={image} alt="party logo" width={80} height={80} />
        <div>
          <p>{title}</p>
          <div>
            <span>{name}</span>
            <span>
              {currentPeople}/{totalPeople}
            </span>
          </div>
        </div>
      </S.PartyCardWrapper>
      <p>{description}</p>
    </S.PartyCard>
  );
};

export default PartyCard;
