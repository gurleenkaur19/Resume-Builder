export interface ResponseType {
  success: boolean;
  message: string;
  data?: any;
}

export interface UserDocument {
  _id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  majorSkill: string;
  phoneNumber: string;
  address: string;
  postalCode: string;
  createdAt: Date;
  updatedAt: Date;
}
export interface NavItemType {
  title: string;
  href: string;
  icon: string;
}
