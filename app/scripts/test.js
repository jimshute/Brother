/**
 * Created by Jim on 2015/1/2.
 */
'use strict';

var data = [];
var list = [
  {name: 'data1', rank: 'data2', weight: 'data3', data: 'data4'},
  {name: 'data1', rank: 'data2', weight: 'data3', data: 'data4'},
  {name: 'data1', rank: 'data2', weight: 'data3', data: 'data4'},
  {name: 'data1', rank: 'data2', weight: 'data3', data: 'data4'},
  {name: 'data1', rank: 'data2', weight: 'data3', data: 'data4'}
];

for (var i = 0; i < list.length; i++) {
  data[i] = {
    rank: list[i].rank,
    name: list[i].name,
    weight: list[i].weight,
    data: list[i].rank
  };
}

console.log(1 + '2');
