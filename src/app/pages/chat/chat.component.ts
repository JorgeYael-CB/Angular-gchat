import { Component, OnInit } from '@angular/core';
import { IUserDto } from '../../interfaces/api/dtos/IUserDto';
import { AuthService } from '../../services/auth.service';
import { ServerService } from '../../services/server.service';
import { SidebarGroupsComponent } from "../../components/sidebar-groups/sidebar-groups.component";
import { UserDetailsComponent } from "../../components/user-details/user-details.component";
import { IServerDto } from '../../interfaces/api/dtos/IServerDto';
import { ActivatedRoute } from '@angular/router';
import { LoadingPageComponent } from "../../components/loading-page/loading-page.component";
import { AvatarIconComponent } from "../../components/avatar-icon/avatar-icon.component";
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [SidebarGroupsComponent, UserDetailsComponent, LoadingPageComponent, AvatarIconComponent, MatIconModule, MatInputModule, MatFormFieldModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent implements OnInit {
  ngOnInit(): void {
    this.showCurrentUser = this.authService.getUser!;
    this.user = this.authService.getUser!;

    this.activatedRoute.params.subscribe( params => {
      const id = params['id'];
      console.log(params);

      this.serverService.getServerById(+id)
        .subscribe( server => {
          this.server = server;
          this.isLoadingPage = false;
        });
    });
  }

  protected showCurrentUser!: IUserDto;
  protected user!: IUserDto;
  protected server!: IServerDto;
  protected isLoadingPage = true;

  constructor(
    private authService: AuthService,
    private serverService: ServerService,
    private activatedRoute: ActivatedRoute,
  ){}


}
