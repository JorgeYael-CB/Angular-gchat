import { Component, OnInit } from '@angular/core';
import { SidebarGroupsComponent } from "../../components/sidebar-groups/sidebar-groups.component";
import { AuthService } from '../../services/auth.service';
import { IUserDto } from '../../interfaces/api/dtos/IUserDto';
import { JoinServerComponent } from "../../components/join-server/join-server.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SidebarGroupsComponent, JoinServerComponent],
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
