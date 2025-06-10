export interface MissionItem {
  description: string;
  icon?: string;
}

export interface MissionSection {
  title: string;
  missions: MissionItem[];
}
