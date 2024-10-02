export interface Person {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  credit_id: string;
}

export interface Actor extends Person {
  cast_id: number;
  character: string;
  order: number;
}

export interface Crew extends Person {
  department: string;
  job: string;
}

export interface PersonResponse {
  cast: Actor[];
  crew: Crew[];
}