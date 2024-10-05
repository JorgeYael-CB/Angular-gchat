import { IDto } from "./IDto";
import { IPhotoPreviewDto } from "./IPhotoPreviewDto";
import { IUserPreviewDto } from "./IUserPreviewDto";


export interface IServerDto extends IDto {
  usersLimit: number;
  description: string;
  users: IUserPreviewDto[];
  owner?: IUserPreviewDto;
  image?: IPhotoPreviewDto;
}
