import { IDto } from "./IDto";
import { IPhotoPreviewDto } from "./IPhotoPreviewDto";
import { IRoleDto } from "./IRoleDto";
import { IServerPreviewDto } from "./IServerPeviewDto";


export interface IUserDto extends IDto {
  roles: IRoleDto[];
  age: number;
  country:string;
  city:string;
  email:string;
  description:string;
  name:string;
  images: IPhotoPreviewDto[];
  profileImage: IPhotoPreviewDto;
  servers: IServerPreviewDto[];
}
