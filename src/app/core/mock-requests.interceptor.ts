import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  JsonpClientBackend
} from '@angular/common/http';
import { map, Observable, of, timer } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserPreferencesService } from './user-preferences/user-preferences.service';

const mockedUrls = [
  {
    url: environment.baseUrl + 'users/1',
    json: '{"address":{"geolocation":{"lat":"-37.3159","long":"81.1496"},"city":"kilcoole","street":"new road","number":7682,"zipcode":"12926-3874"},"id":1,"email":"john@gmail.com","username":"johnd","password":"m38rmF$","name":{"firstname":"john","lastname":"doe"},"phone":"1-570-236-7033","__v":0}',
  },
  {
    url: environment.baseUrl + 'products?limit=3',
    json: '[{"id":1,"title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops","price":109.95,"description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday","category":"men\'s clothing","image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg","rating":{"rate":3.9,"count":120}},{"id":2,"title":"Mens Casual Premium Slim Fit T-Shirts ","price":22.3,"description":"Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.","category":"men\'s clothing","image":"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg","rating":{"rate":4.1,"count":259}},{"id":3,"title":"Mens Cotton Jacket","price":55.99,"description":"great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.","category":"men\'s clothing","image":"https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg","rating":{"rate":4.7,"count":500}}]',
  },
  {
    url: environment.baseUrl + 'products/1',
    json: '{"id":1,"title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops","price":109.95,"description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday","category":"men\'s clothing","image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg","rating":{"rate":3.9,"count":120}}'
  },
  {
    url: environment.baseUrl + 'products/2',
    json: '{"id":2,"title":"Mens Casual Premium Slim Fit T-Shirts ","price":22.3,"description":"Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.","category":"men\'s clothing","image":"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg","rating":{"rate":4.1,"count":259}}'
  },
  {
    url: environment.baseUrl + 'products/3',
    json: '{"id":3,"title":"Mens Cotton Jacket","price":55.99,"description":"great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.","category":"men\'s clothing","image":"https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg","rating":{"rate":4.7,"count":500}}'
  },
  {
    url: environment.baseUrl + 'products/5',
    json: '{"id":5,"title":"John Hardy Women\'s Legends Naga Gold & Silver Dragon Station Chain Bracelet","price":695,"description":"From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean\'s pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.","category":"jewelery","image":"https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg","rating":{"rate":4.6,"count":400}}'
  },
  {
    url: environment.baseUrl + 'products/7',
    json: '{"id":7,"title":"White Gold Plated Princess","price":9.99,"description":"Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine\'s Day...","category":"jewelery","image":"https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg","rating":{"rate":3,"count":400}}'
  },
  {
    url: environment.baseUrl + 'products/8',
    json: '{"id":8,"title":"Pierced Owl Rose Gold Plated Stainless Steel Double","price":10.99,"description":"Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel","category":"jewelery","image":"https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg","rating":{"rate":1.9,"count":100}}'
  },
  {
    url: environment.baseUrl + 'products/9',
    json: '{"id":9,"title":"WD 2TB Elements Portable External Hard Drive - USB 3.0 ","price":64,"description":"USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user???s hardware configuration and operating system","category":"electronics","image":"https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg","rating":{"rate":3.3,"count":203}}'
  },
  {
    url: environment.baseUrl + 'products/10',
    json: '{"id":10,"title":"SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s","price":109,"description":"Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5??? hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)","category":"electronics","image":"https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg","rating":{"rate":2.9,"count":470}}'
  },
  {
    url: environment.baseUrl + 'products/12',
    json: '{"id":12,"title":"WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive","price":114,"description":"Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer\'s limited warranty","category":"electronics","image":"https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg","rating":{"rate":4.8,"count":400}}'
  },
  {
    url: environment.baseUrl + 'products/18',
    json: '{"id":18,"title":"MBJ Women\'s Solid Short Sleeve Boat Neck V ","price":9.85,"description":"95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem","category":"women\'s clothing","image":"https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg","rating":{"rate":4.7,"count":130}}'
  },
  {
    url: environment.baseUrl + 'carts',
    json: '[{"id":1,"userId":1,"date":"2020-03-02T00:00:02.000Z","products":[{"productId":1,"quantity":4},{"productId":2,"quantity":1},{"productId":3,"quantity":6}],"__v":0},{"id":2,"userId":1,"date":"2020-01-02T00:00:02.000Z","products":[{"productId":2,"quantity":4},{"productId":1,"quantity":10},{"productId":5,"quantity":2}],"__v":0},{"id":3,"userId":2,"date":"2020-03-01T00:00:02.000Z","products":[{"productId":1,"quantity":2},{"productId":9,"quantity":1}],"__v":0},{"id":4,"userId":3,"date":"2020-01-01T00:00:02.000Z","products":[{"productId":1,"quantity":4}],"__v":0},{"id":5,"userId":3,"date":"2020-03-01T00:00:02.000Z","products":[{"productId":7,"quantity":1},{"productId":8,"quantity":1}],"__v":0},{"id":6,"userId":4,"date":"2020-03-01T00:00:02.000Z","products":[{"productId":10,"quantity":2},{"productId":12,"quantity":3}],"__v":0},{"id":6,"userId":8,"date":"2020-03-01T00:00:02.000Z","products":[{"productId":18,"quantity":1}],"__v":0}]'
  },
  {
    url: environment.baseUrl + 'users',
    json: '[{"address":{"geolocation":{"lat":"-37.3159","long":"81.1496"},"city":"kilcoole","street":"new road","number":7682,"zipcode":"12926-3874"},"id":1,"email":"john@gmail.com","username":"johnd","password":"m38rmF$","name":{"firstname":"john","lastname":"doe"},"phone":"1-570-236-7033","__v":0},{"address":{"geolocation":{"lat":"-37.3159","long":"81.1496"},"city":"kilcoole","street":"Lovers Ln","number":7267,"zipcode":"12926-3874"},"id":2,"email":"morrison@gmail.com","username":"mor_2314","password":"83r5^_","name":{"firstname":"david","lastname":"morrison"},"phone":"1-570-236-7033","__v":0},{"address":{"geolocation":{"lat":"40.3467","long":"-30.1310"},"city":"Cullman","street":"Frances Ct","number":86,"zipcode":"29567-1452"},"id":3,"email":"kevin@gmail.com","username":"kevinryan","password":"kev02937@","name":{"firstname":"kevin","lastname":"ryan"},"phone":"1-567-094-1345","__v":0},{"address":{"geolocation":{"lat":"50.3467","long":"-20.1310"},"city":"San Antonio","street":"Hunters Creek Dr","number":6454,"zipcode":"98234-1734"},"id":4,"email":"don@gmail.com","username":"donero","password":"ewedon","name":{"firstname":"don","lastname":"romer"},"phone":"1-765-789-6734","__v":0},{"address":{"geolocation":{"lat":"40.3467","long":"-40.1310"},"city":"san Antonio","street":"adams St","number":245,"zipcode":"80796-1234"},"id":5,"email":"derek@gmail.com","username":"derek","password":"jklg*_56","name":{"firstname":"derek","lastname":"powell"},"phone":"1-956-001-1945","__v":0},{"address":{"geolocation":{"lat":"20.1677","long":"-10.6789"},"city":"el paso","street":"prospect st","number":124,"zipcode":"12346-0456"},"id":6,"email":"david_r@gmail.com","username":"david_r","password":"3478*#54","name":{"firstname":"david","lastname":"russell"},"phone":"1-678-345-9856","__v":0},{"address":{"geolocation":{"lat":"10.3456","long":"20.6419"},"city":"fresno","street":"saddle st","number":1342,"zipcode":"96378-0245"},"id":7,"email":"miriam@gmail.com","username":"snyder","password":"f238&@*$","name":{"firstname":"miriam","lastname":"snyder"},"phone":"1-123-943-0563","__v":0},{"address":{"geolocation":{"lat":"50.3456","long":"10.6419"},"city":"mesa","street":"vally view ln","number":1342,"zipcode":"96378-0245"},"id":8,"email":"william@gmail.com","username":"hopkins","password":"William56$hj","name":{"firstname":"william","lastname":"hopkins"},"phone":"1-478-001-0890","__v":0},{"address":{"geolocation":{"lat":"40.12456","long":"20.5419"},"city":"miami","street":"avondale ave","number":345,"zipcode":"96378-0245"},"id":9,"email":"kate@gmail.com","username":"kate_h","password":"kfejk@*_","name":{"firstname":"kate","lastname":"hale"},"phone":"1-678-456-1934","__v":0},{"address":{"geolocation":{"lat":"30.24788","long":"-20.545419"},"city":"fort wayne","street":"oak lawn ave","number":526,"zipcode":"10256-4532"},"id":10,"email":"jimmie@gmail.com","username":"jimmie_k","password":"klein*#%*","name":{"firstname":"jimmie","lastname":"klein"},"phone":"1-104-001-4567","__v":0}]'
  }
];

@Injectable()
export class MockRequestsInterceptor implements HttpInterceptor {
  constructor(private userPrefs: UserPreferencesService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (!this.userPrefs.offlineMode) {
      return next.handle(request);
    }

    for (const element of mockedUrls) {
      if (request.url === element.url) {
        console.log('Loaded from json : ' + request.url);

        return timer(1000).pipe(
          map(() => {
            return new HttpResponse({
              status: 200,
              body: JSON.parse(element.json as any),
            });
          })
        );
      }
    }
    return next.handle(request);
  }
}
