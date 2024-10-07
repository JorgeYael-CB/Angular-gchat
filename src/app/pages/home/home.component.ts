import { Component, OnInit } from '@angular/core';
import { SidebarGroupsComponent } from "../../components/sidebar-groups/sidebar-groups.component";
import { AuthService } from '../../services/auth.service';
import { IUserDto } from '../../interfaces/api/dtos/IUserDto';
import { JoinServerComponent } from "../../components/join-server/join-server.component";
import { AvatarIconComponent } from "../../components/avatar-icon/avatar-icon.component";
import { UserDetailsComponent } from "../../components/user-details/user-details.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SidebarGroupsComponent, JoinServerComponent, AvatarIconComponent, UserDetailsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    this.user = this.authService.getUser!;
  }

  protected user!:IUserDto;

  constructor(
    private authService: AuthService,
  ){}

}
