import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, combineLatest, map } from 'rxjs';

interface WorkItem {
  id: string;
  title: string;
  team: string;
  status: 'Open' | 'In Progress' | 'Complete';
  priority: 'High' | 'Medium' | 'Low';
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private readonly items$ = new BehaviorSubject<WorkItem[]>([
    { id: 'UI-241', title: 'Improve account search accessibility', team: 'Experience', status: 'In Progress', priority: 'High' },
    { id: 'API-118', title: 'Review customer profile integration', team: 'Platform', status: 'Open', priority: 'Medium' },
    { id: 'UI-236', title: 'Optimize dashboard rendering', team: 'Experience', status: 'Complete', priority: 'Medium' },
    { id: 'QA-084', title: 'Expand regression coverage', team: 'Quality', status: 'In Progress', priority: 'Low' }
  ]);
  private readonly filter$ = new BehaviorSubject<string>('All');

  readonly visibleItems$ = combineLatest([this.items$, this.filter$]).pipe(
    map(([items, filter]) => filter === 'All' ? items : items.filter(item => item.status === filter))
  );

  readonly summary$ = this.items$.pipe(map(items => ({
    total: items.length,
    open: items.filter(item => item.status === 'Open').length,
    progress: items.filter(item => item.status === 'In Progress').length,
    complete: items.filter(item => item.status === 'Complete').length
  })));

  activeFilter = 'All';

  setFilter(filter: string): void {
    this.activeFilter = filter;
    this.filter$.next(filter);
  }
}
