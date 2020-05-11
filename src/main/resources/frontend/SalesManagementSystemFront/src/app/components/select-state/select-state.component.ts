import {Component, OnInit} from '@angular/core';

interface State {
  value: string;
}

@Component({
  selector: 'app-select-state',
  templateUrl: './select-state.component.html',
  styleUrls: ['./select-state.component.scss']
})
export class SelectStateComponent implements OnInit {

  states: State[] = [
    {value: 'Alabama'},
    {value: 'Alaska'},
    {value: 'Arizona'},
    {value: 'Arkansas'},
    {value: 'California'},
    {value: 'Colorado'},
    {value: 'Connecticut'},
    {value: 'Delaware'},
    {value: 'District of Columbia'},
    {value: 'Florida'},
    {value: 'Georgia'},
    {value: 'Guam'},
    {value: 'Hawaii'},
    {value: 'Idaho'},
    {value: 'Illinois'},
    {value: 'Indiana'},
    {value: 'Iowa'},
    {value: 'Kansas'},
    {value: 'Kentucky'},
    {value: 'Louisiana'},
    {value: 'Maine'},
    {value: 'Maryland'},
    {value: 'Massachusetts'},
    {value: 'Michigan'},
    {value: 'Minnesota'},
    {value: 'Mississippi'},
    {value: 'Missouri'},
    {value: 'Montana'},
    {value: 'Nebraska'},
    {value: 'Nevada'},
    {value: 'New Hampshire'},
    {value: 'New Jersey'},
    {value: 'New Mexico'},
    {value: 'New York'},
    {value: 'North Carolina'},
    {value: 'North Dakota'},
    {value: 'Ohio'},
    {value: 'Oklahoma'},
    {value: 'Oregon'},
    {value: 'Pennsylvania'},
    {value: 'Puerto Rico'},
    {value: 'Rhode Island'},
    {value: 'South Carolina'},
    {value: 'Tennessee'},
    {value: 'Texas'},
    {value: 'Utah'},
    {value: 'Vermont'},
    {value: 'Virginia'},
    {value: 'Washington'},
    {value: 'West Virginia'},
    {value: 'Wisconsin'},
    {value: 'Wyoming'}
  ];

  selectedValue: string = 'Alabama';

  constructor() {
  }

  ngOnInit(): void {
    let temp: string = localStorage.getItem("selectedState");
    if (temp != undefined) {
      this.selectedValue = temp;
    }
  }

  onChange(state) {
    console.log(state);
    localStorage.setItem("selectedState", state);
  }
}
