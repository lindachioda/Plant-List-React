
export type PlantFormData = {
  name: string;
  description: string;
  imgUrl: string;
  alreadyHave: boolean;
};

//type con id Plant
export type Plant = PlantFormData & {
  id: number;
};