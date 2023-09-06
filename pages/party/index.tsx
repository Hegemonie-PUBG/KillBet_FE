import { useRouter } from 'next/router';
import * as S from './styles';
import partyLogo from '@/public/party.jpg';
import PartyCard from '@/components/party/PartyCard';

const partyList = [
  {
    id: 1,
    image: partyLogo,
    title: '트위치 스트리머 파티11',
    name: '김복남',
    currentPeople: '75',
    totalPeople: '100',
    description:
      '파티 설명글 입니다.파티 설명글 입니다.파티 설명글 입니다.파티 설명글 입니다.파티 설명글 입니다.파티 설명글 입니다.',
  },
  {
    id: 2,
    image: partyLogo,
    title: '트위치 스트리머 파티22',
    name: '김복남',
    currentPeople: '75',
    totalPeople: '100',
    description:
      '파티 설명글 입니다.파티 설명글 입니다.파티 설명글 입니다.파티 설명글 입니다.파티 설명글 입니다.파티 설명글 입니다.',
  },
  {
    id: 3,
    image: partyLogo,
    title: '트위치 스트리머 파티33',
    name: '김복남',
    currentPeople: '75',
    totalPeople: '100',
    description:
      '파티 설명글 입니다.파티 설명글 입니다.파티 설명글 입니다.파티 설명글 입니다.파티 설명글 입니다.파티 설명글 입니다.',
  },
  {
    id: 4,
    image: partyLogo,
    title: '트위치 스트리머 파티44',
    name: '김복남',
    currentPeople: '75',
    totalPeople: '100',
    description:
      '파티 설명글 입니다.파티 설명글 입니다.파티 설명글 입니다.파티 설명글 입니다.파티 설명글 입니다.파티 설명글 입니다.',
  },
  {
    id: 5,
    image: partyLogo,
    title: '트위치 스트리머 파티55',
    name: '김복남',
    currentPeople: '75',
    totalPeople: '100',
    description:
      '파티 설명글 입니다.파티 설명글 입니다.파티 설명글 입니다.파티 설명글 입니다.파티 설명글 입니다.파티 설명글 입니다.',
  },
  {
    id: 6,
    image: partyLogo,
    title: '트위치 스트리머 파티66',
    name: '김복남',
    currentPeople: '75',
    totalPeople: '100',
    description:
      '파티 설명글 입니다.파티 설명글 입니다.파티 설명글 입니다.파티 설명글 입니다.파티 설명글 입니다.파티 설명글 입니다.',
  },
];

const Party = () => {
  const router = useRouter();

  const handleClickParty = (id: number) => {
    router.push(`/party/${id}`);
  };

  return (
    <div>
      <S.PartyContainer>
        {partyList.map((party) => (
          <PartyCard party={party} onClickParty={handleClickParty} />
        ))}
      </S.PartyContainer>
      <S.MoreButton>더 보기</S.MoreButton>
    </div>
  );
};

export default Party;
