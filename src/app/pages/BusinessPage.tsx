import { PortfolioSection } from '../components/PortfolioSection';

const projects = [
  {
    title: '대전 L&B 경리단지역',
    client: '아스펠드건설(주)',
    contractor: '(주)천양건설',
    period: '2023.03 ~ 2024.07',
    status: '진행',
    image: 'https://images.unsplash.com/photo-1771834683942-a973fe0b5bf8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb25zdHJ1Y3Rpb24lMjBidWlsZGluZyUyMGNvbmNyZXRlfGVufDF8fHx8MTc3ODExOTUwN3ww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    title: 'BTC Ocean 2단계',
    client: '에스엘테크건설(주)',
    contractor: '무',
    period: '2022.08 ~ 2024.04',
    status: '진행',
    image: 'https://images.unsplash.com/photo-1739599211500-74e04a9ca175?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBjb25zdHJ1Y3Rpb24lMjBidWlsZGluZyUyMGNvbmNyZXRlfGVufDF8fHx8MTc3ODExOTUwN3ww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    title: 'Ansan Smart Fencs 지식산업센터',
    client: 'Green-P(주)',
    contractor: '무',
    period: '2021.11 ~ 2023.12',
    status: '완료',
    image: 'https://images.unsplash.com/photo-1691161372406-4c65ac71ccb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBvZmZpY2UlMjBidWlsZGluZyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzgxMTk1MDh8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    title: 'BTC Ocean 1단계 A-7',
    client: '에스엘테크건설(주)',
    contractor: '(주)기전종합건설',
    period: '2021.04 ~ 2022.10',
    status: '완료',
    image: 'https://images.unsplash.com/photo-1764499048254-82d78f9bc39a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwY2l0eSUyMGRldmVsb3BtZW50fGVufDF8fHx8MTc3ODExOTUwOHww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    title: 'LDCO 명학역 복합시설신축사업',
    client: '(주)목당건설',
    contractor: '무',
    period: '2020.08 ~ 2022.08',
    status: '완료',
    image: 'https://images.unsplash.com/photo-1759912497669-f2b90b1d3fec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwY2l0eSUyMGRldmVsb3BtZW50fGVufDF8fHx8MTc3ODExOTUwOHww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    title: '마석로드뷰 공장 업무시설',
    client: 'Seecon(주)',
    contractor: '무',
    period: '2021.01 ~ 2022.02',
    status: '완료',
    image: 'https://images.unsplash.com/photo-1641155049992-8cba3e42f632?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxjb3Jwb3JhdGUlMjBvZmZpY2UlMjBidWlsZGluZyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzgxMTk1MDh8MA&ixlib=rb-4.1.0&q=80&w=1080'
  }
];

export function BusinessPage() {
  return (
    <div className="pt-24 bg-[#F3F5F8]">
      <PortfolioSection projects={projects} />
    </div>
  );
}