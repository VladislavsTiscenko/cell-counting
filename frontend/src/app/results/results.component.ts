import { Component, Input, OnInit } from '@angular/core';
import { CellImage } from '../app.component';
import { FormControl, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';


// Validator function to make sure input is float
export function floatValidator(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    return (Number.isNaN(parseFloat(control.value)) || control.value.includes(',')) ? {notfloat: {value: control.value}} : null;
  };
}

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})

export class ResultsComponent implements OnInit {

  public _images: CellImage[] = [];
  public squares: number[] = [];

  public conc: number;
  public max: number;
  public min: number;
  public avg: number;
  public stdev: number;

  public errors: boolean;
  public loading: boolean;

  public usedVials: number;
  public dilutantVolume: number;
  public dilutantPerVial: string;

  vialForm: FormGroup;

  private nx: number = 4;
  private ny: number = 4;

  @Input() set images(images: CellImage[]) {

    this._images = images;
    if (images.length > 0) {

      this.errors = images.some((image) => {
        return image.error;
      });
      this.loading = !images.every((image) => {
        return image.isLoaded();
      });
      if (!this.errors && !this.loading)
        this.updateSquares();

    }

  }

  ngOnInit() {

    this.vialForm = new FormGroup({

      volSusp: new FormControl('', [Validators.required, floatValidator()]),
      vialSize: new FormControl('10', [Validators.required, floatValidator()]),
      maxConc: new FormControl('50000', [Validators.required, floatValidator()]),

    });

    // Add form change handler
    this.vialForm.valueChanges.subscribe((x) => {
      if (this.vialForm.valid) {

          const numcells = this.conc * parseFloat(x.volSusp); // Find number of cells in suspension
          const maxcells = parseFloat(x.maxConc) * parseFloat(x.vialSize); // Maximum cell number in each vial
          
          // Find minimum number of vials
          var vials = Math.ceil(parseFloat(x.volSusp)/parseFloat(x.vialSize));
          while (numcells/vials > maxcells)
            vials += 1

          this.usedVials = vials; // Minimum number of vials
          this.dilutantVolume =  vials*parseFloat(x.vialSize)-parseFloat(x.volSusp); // Find total dilutant necessary to fill each vial
          this.dilutantPerVial = (this.dilutantVolume/this.usedVials).toFixed(2); // Find dilutant per vial necessary to fill each vial

        }
    });

  }

  constructor() {}

  // Find rectangle where the bounding box coordinate belongs
  checkArea(x, y) {

    const width = 2048;
    const height = 1536;

    // Width and height of each rectangle
    const aw = Math.floor(width/this.nx);
    const ah = Math.floor(height/this.ny);

    // Loop over rectangles
    for (let i = 0; i < this.ny*this.nx; i++) {

      // Column and row index of each rectangle
      const ix = i%this.nx
      const iy = Math.floor(i/this.nx);

      // Determine if bounding box is in the bounds of the current rectangle.
      if (ix*aw <= x && (ix+1)*aw > x && iy*ah <= y && (iy+1)*ah > y)
          return i
    }

    // Return 0 by default
    return 0;

  }


  updateSquares() {

    this.squares = [];

    // Determoine number of bounding boxes in each rectangle
    for (const image of this._images) {

      const a = Array(this.nx*this.ny).fill(0);
      for (const [x,y] of image.squares)
          a[this.checkArea(x,y)] += 1
      this.squares.push(...a);

    }

    const multiplier = 11040;

    // Average, min, max
    this.avg = this.squares.reduce((a,b)=>a+b)/this.squares.length;
    this.max = Math.max(...this.squares);
    this.min = Math.min(...this.squares);

    // Find standard deviatio n
    const squareD = this.squares.map((value) => {
      var diff = value - this.avg;
      return diff * diff;
    });
    const avgSquareD = squareD.reduce((a,b)=>a+b)/(squareD.length-1);
    this.stdev = parseFloat(Math.sqrt(avgSquareD).toFixed(2));

    // Finally, find concentration and format the average
    this.conc = Math.round(this.avg*multiplier);
    this.avg = parseFloat(this.avg.toFixed(2));

  }

  get volSusp() { return this.vialForm.get('volSusp'); }
  get vialSize() { return this.vialForm.get('vialSize'); }
  get maxConc() { return this.vialForm.get('maxConc'); }


}
