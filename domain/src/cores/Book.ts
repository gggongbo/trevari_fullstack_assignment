export interface IBook {
  title: string;
  subtitle: string;
  image: string;
}

export class Book implements IBook {
  private _title: string;

  private _subtitle: string;

  private _image: string;

  constructor(params: IBook) {
    this._title = params.title;
    this._subtitle = params.subtitle;
    this._image = params.image;
  }

  get title() {
    return this._title;
  }

  get subtitle() {
    return this._subtitle;
  }

  get image() {
    return this._image;
  }
}
