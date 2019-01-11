export interface CVStoreType {
  user: IUser;
  workExperience: IWorkExperience[];
  programExperience: IProgramExperience[];
  getUserData: () => void;
  getWorkExperienceData: () => void;
  getProgramExperienceData: () => void;
}

export interface ICVProps {
  cvStore: CVStoreType;
}

export interface IUser {
  avatar: string;
  city: string;
  position: string;
  self_introduction: string;
  user_name: string;
  __v?: number;
  _id?: string;
}

export interface IWorkExperience {
  enterprise_name: string;
  in_service: string[];
  position: string;
  work_content: string;
  work_technology_stack: string[];
  __v: number;
  _id: string;
}

export interface IProgramExperience {
  program_content: string;
  program_name: string;
  program_technology_stack: string[];
  program_url: string;
  __v: number;
  _id: string;
}