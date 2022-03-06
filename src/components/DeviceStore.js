import { makeAutoObservable } from "mobx";
import img1 from '../images/img1.jpg'

 class DeviceStore {
  constructor() {
    this._types = [
        {id: 1, name: 'комбенизон'},
        {id: 2, name: 'куртка'}
    ]
     this._brands = [
         {id:1, name: 'H&M'},
         {id:2, name: 'H&M'},
         {id:3, name: 'H&M'},
     ]
     this._devices = [
        {
            id: 1,
            name: 'Комбинезон',
            
            price: 150,
            imgSrc: img1
        },
        {
            id: 2,
            name: 'Комбинезон',
       
            price: 150,
            imgSrc: img1
        },
        {
            id: 3,
            name: 'Комбинезон',
    
            price: 150,
            imgSrc: img1
        },
        {
            id: 4,
            name: 'Комбинезон',
         
            price: 150,
            imgSrc: img1
        },
        {
            id: 5,
            name: 'Комбинезон',
        
            price: 150,
            imgSrc: img1
        },
        {
            id: 6,
            name: 'Комбинезон',
         
            price: 150,
            imgSrc: img1
        }
     ]



    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types
  }

  setBrands(brands) {
      this._brands = brands
  }

  setDevices(devices) {
      this._devices = devices
  }

  get Types() {
    return this._types
  }

  get Brands() {
      return this._brands
  }

  get Devices() {
      return this._devices
  }
}

export default DeviceStore