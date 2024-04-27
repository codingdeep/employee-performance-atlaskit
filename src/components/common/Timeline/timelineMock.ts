export interface ReviewCycleStageForTimeline {
  id: string;
  applicableFor: string;
  hardEndDate: string;
  reviewCycleId: string;
  softEndDate: string;
  stageLabel: string;
  startDate: string;
}

const TimelineData: Array<ReviewCycleStageForTimeline> = [
  {
    id: '#1',
    applicableFor: 'Abu Raihan',
    hardEndDate: new Date().toISOString(),
    reviewCycleId: '1',
    softEndDate: new Date().toISOString(),
    stageLabel: 'Sample Stage Label',
    startDate: new Date().toISOString(),
  },
  {
    id: '#2',
    applicableFor: 'Abu Raihan',
    hardEndDate: new Date().toISOString(),
    reviewCycleId: '1',
    softEndDate: new Date().toISOString(),
    stageLabel: 'Sample Stage Label',
    startDate: new Date().toISOString(),
  },
];
export default TimelineData;
