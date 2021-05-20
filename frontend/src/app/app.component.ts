import { Component, ElementRef, ViewChild } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

let currId = 0;

export class CellImage {

  public src: string;
  public squares: number[];
  public error: string;
  public fileName: string;
  public file: File;
  public id: number;
  private sanitizer: DomSanitizer;

  constructor(src: string, fileName: string, error?: string, sanitizer?: DomSanitizer, file?: File) {

    this.src = src;
    this.fileName = fileName;
    this.id = currId;
    currId += 1;
    if (error && fileName)
      this.error = error;
    else {
      this.sanitizer = sanitizer;
      this.file = file;
    }

  }

  public isLoaded(): boolean {

    if (!this.squares)
      return false;
    else
      return true;

  }

  public getSrc(): SafeUrl {

    return this.sanitizer.bypassSecurityTrustUrl(this.src);

  }

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'app-frontend';

  images: CellImage[] = [];
  selectedImage: CellImage;
  http: HttpClient;
  sanitizer: DomSanitizer;

  constructor(http: HttpClient, sanitizer: DomSanitizer) {

    this.http = http;
    this.sanitizer = sanitizer;
    this.selectedImage = new CellImage("", "", undefined, sanitizer);

  }

  getDefaultSelectedImage() {

    return this.images.filter((val, i, arr) => {
      return !val.error;
    })[0];

  }

  onSelectFiles(event) {

    if (event.addedFiles.length == 0)
      return;

    var toLoad = [];

    for (var i = 0; i < event.addedFiles.length; i++) {

      const file = event.addedFiles[i];

      if (file.type.split('/').pop().toLowerCase() != "bmp") {
        this.images.push(new CellImage(undefined, file.name, "Incorrect file format."));
        this.images = [...this.images]; // Update Setter
        continue;
      }

      const img = new Image();
      img.src = URL.createObjectURL(file);

      img.onerror = () => {

        this.images.push(new CellImage(undefined, file.name, "Image is unreadable."));
        this.images = [...this.images]; // Update Setter


      };

      img.onload = () => {

        if (img.width != 2048 || img.height != 1536) {

          this.images.push(new CellImage(undefined, file.name, "Image resolutions incorrect."));
          this.images = [...this.images]; // Update Setter

        } else {

          const newImg = new CellImage(img.src, file.name, undefined, this.sanitizer, file);
          this.images.push(newImg);
          this.selectedImage = this.getDefaultSelectedImage();
          toLoad.push(newImg);
          if (file == event.addedFiles[event.addedFiles.length-1]) {
            this.images = [...this.images]; // Update Setter
            this.requestSquares(toLoad);
          }

        }

      };

    }

  }

  requestSquares(toLoad) {

    const formData = new FormData();

    setTimeout(() => {

      for (const image of toLoad) {

        formData.append(image.id.toString(), image.file);

      }

      this.http.post('/api/inference', formData).subscribe(res => {

        for (const index of Object.keys(res))
          this.images.filter((img, i, arr) => {
            return img.id === parseInt(index);
          })[0].squares = res[index];

        this.images = [...this.images]; // Update Setter */

      });

    }, 2000);

  }

  removeImage(id) {

    if (this.images.length == 1)
      this.removeAll();
    else {

      this.images = this.images.filter((img, i, arr) => {
        return img.id != id;
      });
      if (!this.images.includes(this.selectedImage))
        this.selectedImage = this.getDefaultSelectedImage();

    }

  }

  removeAll() {

    this.images = [];
    this.selectedImage = new CellImage("", "", undefined, this.sanitizer);

  }

  selectImage(id) {

    this.selectedImage = this.images.filter((img, i, arr) => {
      return img.id == id;
    })[0];

  }

}
