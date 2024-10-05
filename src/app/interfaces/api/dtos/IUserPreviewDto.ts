import { IPhotoPreviewDto } from "./IPhotoPreviewDto";
import { IRoleDto } from "./IRoleDto";


export interface IUserPreviewDto {
  profileImage?: IPhotoPreviewDto;
  name: string;
  id: number;
  roles: IRoleDto[];
}
