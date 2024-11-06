import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProvidersService } from '../../../../services/providers.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss'
})
export class DropdownComponent {

  providersService = inject(ProvidersService);

  regions$ = this.providersService.getRegions().pipe(
    map(regions => regions.results)
  );

  onRegionChange(event: Event) {
    const selectedRegion = (event.target as HTMLSelectElement).value;
    this.providersService.setSelectedRegion(selectedRegion);
  }

}
