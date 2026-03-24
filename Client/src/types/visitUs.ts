
export interface ScheduleInfo {
  day: string;
  times: string[];
}

export interface VisitDetails {
  title: string;
  schedules: ScheduleInfo[];
  address: {
    street: string;
    city: string;
    country: string;
  };
}