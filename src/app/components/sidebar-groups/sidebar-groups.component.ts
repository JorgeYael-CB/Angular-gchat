import { Component, Input } from '@angular/core';
import { IServerPreviewDto } from '../../interfaces/api/dtos/IServerPeviewDto';
import { AvatarIconComponent } from "../avatar-icon/avatar-icon.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar-groups',
  standalone: true,
  imports: [AvatarIconComponent, RouterLink],
  templateUrl: './sidebar-groups.component.html',
  styleUrl: './sidebar-groups.component.css'
})
export class SidebarGroupsComponent {

  @Input({required: true})
  servers!: IServerPreviewDto[];

  onCopyLink( serverId: number ){
    console.log("Copiando el servidor con el id: " + serverId);
  }

}
