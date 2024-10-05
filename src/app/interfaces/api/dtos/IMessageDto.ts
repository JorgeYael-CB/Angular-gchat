import { IDto } from "./IDto";
import { IUserPreviewDto } from "./IUserPreviewDto";


export interface IMessageDto extends IDto {

  content: string;
  edited: Boolean;
  serverMessage: Boolean;
  user: IUserPreviewDto;

}
