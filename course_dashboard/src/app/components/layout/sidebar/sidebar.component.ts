import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
  activeSection: string = 'dashboard';

  constructor(private router: Router) { }
  ngOnInit(): void { }

  navigateTo(section: string): void {
    this.activeSection = section;
    this.router.navigate([section]);
  }

}
