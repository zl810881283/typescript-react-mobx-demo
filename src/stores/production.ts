import { makeAutoObservable, runInAction } from "mobx";
export class Production {
  constructor(){
    makeAutoObservable(this)
  }
  name: string = ""

  isShowAll: boolean = true

  sourceList = [
    { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
    { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
    { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
    { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
    { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
    { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
  ];

  get list() {
    return this.sourceList.filter(i => i.name.match(new RegExp(`^${this.name}`)))
  }

  handleNameChange = (name: string) => {
    console.log(name)
    runInAction(() => {
      this.name = name
    })
  }
  
  handleIsShowChange = (isShowAll: boolean) => {
    runInAction(() => {
      this.isShowAll = isShowAll
    })
  }
}