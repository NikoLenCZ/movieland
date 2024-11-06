export interface RegionsResponse {
  results: RegionsListItem[];
}

export interface RegionsListItem {
  iso_3166_1: string;
  english_name: string;
  native_name: string;
}
