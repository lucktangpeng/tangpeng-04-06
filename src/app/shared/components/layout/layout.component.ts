import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styles: [
  ]
})
export class LayoutComponent {
  nameList = ['张三', '李四']
  userInput: string = ''
  identify = (index: number, item: string) => {
    return item
  }
  change() {
    this.nameList.push(this.userInput)
  }
  delete(item: string) {
    const index = this.nameList.indexOf(item)
    if (index !== -1) {
      this.nameList.splice(index, 1)
    }
  }
}
