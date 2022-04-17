import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

let currId = 0;

export class CellImage {

  public src: string;
  public squares: number[][];
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

    // Bypass Angular's sanitization
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

  getStyle() {

    return 
    
  }

  getDefaultSelectedImage() {

    // The default selected image is the first one without any validation errors

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

      // Extension check

      if (file.type.split('/').pop().toLowerCase() != "bmp") {
        this.images.push(new CellImage(undefined, file.name, "Incorrect file format."));
        this.images = [...this.images]; // Render changes
        continue;
      }

      // Instantiate image, check for readability

      const img = new Image();
      img.src = URL.createObjectURL(file);

      img.onerror = () => {

        this.images.push(new CellImage(undefined, file.name, "Image is unreadable."));
        this.images = [...this.images]; // Render changes

      };

      img.onload = () => {

        // Check for image size

        if (img.width != 2048 || img.height != 1536) {

          this.images.push(new CellImage(undefined, file.name, "Image resolutions incorrect."));
          this.images = [...this.images]; // Render changes

        } else {

          const newImg = new CellImage(img.src, file.name, undefined, this.sanitizer, file);
          this.images.push(newImg);
          this.selectedImage = this.getDefaultSelectedImage();
          toLoad.push(newImg);

          // If image is the last one in the list of files to add...
          if (file == event.addedFiles[event.addedFiles.length-1]) {
            this.images = [...this.images]; // Render changes
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

          // Choose image that matches index and set its bounding boxes
          this.images.filter((img, i, arr) => {
            return img.id === parseInt(index);
          })[0].squares = res[index];

        this.images = [...this.images]; // Render changes

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

@Component({
  selector: 'img-canvas',
  template: '<canvas #imgCanvas class="canvas" width="533" height="400"></canvas>',
  styles: ['.canvas { width: 100%; height: 100%; }'],
})
export class imgCanvas implements AfterViewInit {
 
 @ViewChild('imgCanvas')
 canvas: ElementRef<HTMLCanvasElement>;

 public context: CanvasRenderingContext2D;
 private _image: CanvasImageSource;
 private squares: any;

 private nx: number = 4;
 private ny: number = 4;

 private width: number = 533;
 private height: number = 400;

 renderImage() {
  if (this.context) {

    this.context.drawImage(this._image, 0, 0, this.width, this.height);
    if (this.squares) {
      this.context.strokeStyle = "lime";

      // Draw each bounding box
      for (const square of this.squares) {
        this.context.beginPath();
        const x = square[0]/2048*533;
        const y = square[1]/1536*400;
        this.context.rect(x, y, 7, 7);
        this.context.stroke();
      }

      const aw = Math.floor(this.width/this.nx);
      const ah = Math.floor(this.height/this.ny);
      this.context.strokeStyle = "lightgray";

      // Draw the rectangles where the bounding boxes are distributed
      for (let i = 0; i < this.ny*this.nx; i++) {
        const ix = i%this.nx
        const iy = Math.floor(i/this.nx);

        //if (ix*aw <= x && (ix+1)*aw > x && iy*ah <= y && (iy+1)*ah > y)
        //    return i

        this.context.beginPath();
        this.context.rect(ix*aw, iy*ah, aw, ah);
        this.context.stroke();
      }
    }
  }
 }

 ngAfterViewInit(): void {
  this.context = this.canvas.nativeElement.getContext('2d');
  this.renderImage();
 }

 @Input() set image([image, squares]: any) {
    const realImage = new Image();
    realImage.src = (image.changingThisBreaksApplicationSecurity);
    this._image = realImage;
    this.squares = squares;
    this.renderImage();
 }

}