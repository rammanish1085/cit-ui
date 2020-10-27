export class IssueMaster{
   
  public username: string;
  public name: string;
  public locationCode: string;
  public locationName: string;
  public projectName: string;
  public officeType:string;
  public projectModule: string;
  public problemStatement: string;
  public description: string;

  setName(name: string) {
    this.name = name;
  }

  getName(): string {
    return this.name;

  }

  setProjectName(projectName:string){
    this.projectName = projectName;
  }

  getProjectName():string{
    return this.projectName;
  }



  getOfficeType():string{
    return this.officeType;
  }

  setOfficeType(officeType:string){
    this.officeType = officeType;
  }

  
  setProjectModule(projectModule:string){
    this.projectModule = projectModule;

  }

  setProblemStatement(problemStatement:string){
     this.problemStatement = problemStatement;
  }

  getProblemStatement():string{
    return this.problemStatement;
  }

  setDescription(description:string){
      this.description = description;
  }
  getDescription():string{
    return this.description;
  }

    setUsername(username : string){
        this.username = username;
    }

    getUsername() : string{
        return this.username
    }

    setLocationCode(locationCode : string){
      this.locationCode = locationCode;
    }

    getLocationCode() : string{
      return this.locationCode;
    }

    setLocationName(locationName:string){
      this.locationName = locationName;
    }

    getLocationName():string{
      return this.locationName;
    }


}