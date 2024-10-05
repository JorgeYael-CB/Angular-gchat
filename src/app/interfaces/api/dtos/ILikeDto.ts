import { IDto } from "./IDto";
import { IUserPreviewDto } from "./IUserPreviewDto";


export interface ILikeDto extends IDto {
  user: IUserPreviewDto;
}
