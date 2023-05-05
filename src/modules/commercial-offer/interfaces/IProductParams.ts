interface IProductParams {
  categoryId: number;
  quantity: number;
  brightness: string;
  contrast: string;
  price: number;
  weight: number;
  extraRoi: number;
  focalDistance?: number;
}

export default IProductParams;
