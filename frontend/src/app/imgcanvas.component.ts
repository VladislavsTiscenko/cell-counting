import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';

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