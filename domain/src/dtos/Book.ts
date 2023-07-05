export interface IBookDTO {
  title: string;
  subtitle: string;
  image: string;
}

export class BookDTO implements IBookDTO {
  readonly title: string;

  readonly subtitle: string;

  readonly image: string;

  constructor(params: IBookDTO) {
    this.title = params.title;
    this.subtitle = params.subtitle;
    this.image = params.image;
  }
}
