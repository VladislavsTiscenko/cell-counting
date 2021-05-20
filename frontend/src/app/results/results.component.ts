import { Component, Input, OnInit } from '@angular/core';
import { CellImage } from '../app.component';
import { FormControl, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';

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
    this.vialForm.valueChanges.subscribe((x) => {
      if (this.vialForm.valid) {

          const numcells = this.conc * parseFloat(x.volSusp);
          const maxcells = parseFloat(x.maxConc) * parseFloat(x.vialSize);
          var vials = Math.ceil(parseFloat(x.volSusp)/parseFloat(x.vialSize));
          while (numcells/vials > maxcells)
            vials += 1

          this.usedVials = vials;
          this.dilutantVolume =  vials*parseFloat(x.vialSize)-parseFloat(x.volSusp);
          this.dilutantPerVial = (this.dilutantVolume/this.usedVials).toFixed(2);

        }
    });

  }

  constructor() {}

  updateSquares() {

    this.squares = [];
    for (const image of this._images) {

      this.squares.push(...image.squares);

    }

    const multiplier = 11040;

    this.avg = this.squares.reduce((a,b)=>a+b)/this.squares.length;
    this.max = Math.max(...this.squares);
    this.min = Math.min(...this.squares);

    const squareD = this.squares.map((value) => {
      var diff = value - this.avg;
      return diff * diff;
    });

    const avgSquareD = squareD.reduce((a,b)=>a+b)/(squareD.length-1);

    this.stdev = parseFloat(Math.sqrt(avgSquareD).toFixed(2));
    this.conc = Math.round(this.avg*multiplier);
    this.avg = parseFloat(this.avg.toFixed(2));

  }

  get volSusp() { return this.vialForm.get('volSusp'); }
  get vialSize() { return this.vialForm.get('vialSize'); }
  get maxConc() { return this.vialForm.get('maxConc'); }


}
