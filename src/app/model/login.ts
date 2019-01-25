export class Login {

  name: string;
  pass: string;

  static fromJson(obj: any): Login {
    const result = new Login();
    result.name = obj.name;
    result.pass = obj.pass;
    return result;
  }
}
