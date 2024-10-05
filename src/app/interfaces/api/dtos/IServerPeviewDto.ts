import { IDto } from "./IDto";
import { IPhotoPreviewDto } from './IPhotoPreviewDto';


export interface IServerPreviewDto extends IDto {
  image?: IPhotoPreviewDto;
}
