import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { GetAllStoresUseCase } from 'src/app/core/application/get-all-stores.usecase';
import { StoreModel } from 'src/app/core/domain/store.model';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss'],
})
export class StoresComponent implements OnInit {
  stores: StoreModel[] = [];
  constructor(private getAllStoresUseCase: GetAllStoresUseCase,
    private router:Router) {}

  ngOnInit(): void {
    this.getAllStoresUseCase.execute().subscribe((stores: StoreModel[]) => {
      this.stores = stores;
    });
  }

  handleStorageClicked(storeId: number) {
    this.router.navigate(['/stores', storeId]);
    console.log(storeId);
  }
}
