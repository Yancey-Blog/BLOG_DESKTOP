export interface CVStoreType {
  user: IUser;
  workExperience: IWorkExperience[];
  programExperience: IProgramExperience[];
  getUser: () => void;
  getWorkExperience: () => void;
  getProgramExperience: () => void;
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

export interface ICardProps {
  type: string;
  name: string;
  position: string;
  inService: string[];
  programLink: string;
  detail: string;
  techStack: string[];
}
