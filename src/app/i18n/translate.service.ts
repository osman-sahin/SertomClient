import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'

})
export class TranslateService {

  data: any = {};
  SelectedLanguage;
  constructor(
    private http: HttpClient, private route: ActivatedRoute, private router: Router
  ) { }

  use(lang: string): Promise<{}> {
    this.SelectedLanguage = lang;
    if (this.SelectedLanguage != localStorage.getItem("language")) {
      localStorage.setItem("language", lang);
      window.location.reload();
    }


    return new Promise<{}>((resolve, reject) => {
      const langPath = `assets/i18n/i18n.json`;

      this.http.get<{}>(langPath).subscribe(
        translation => {
          Object.keys(translation).forEach((key) => {
            translation[key] = translation[key][lang];
          });
          this.data = Object.assign({}, translation || {});
          resolve(this.data);
        },
        error => {
          console.log(error);
          this.data = {};
          resolve(this.data);
        }
      );
      this.router.navigate([this.route]);
    });
  }

}