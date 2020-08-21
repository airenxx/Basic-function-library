/*
 * @Author: luoqi
 * @Date: 2020-08-21 10:23:29
 * @LastEditTime: 2020-08-21 13:42:19
 * @LastEditors: Please set LastEditors
 * @Description: 数据基础计算库
 * @FilePath: \基础函数库\data-calculation.js
 */

class DataCalculation {
  constructor() {
    this.type_mess = [
      {
        type: "Array",
        mess: "请传入一个数组",
      },
      {
        type: "Object",
        mess: "请传入一个对象",
      },
    ];
  }
  date_type_verification(data, type = "Array") {
    if (toString.call(data) !== `[object ${type}]`) {
      throw TypeError(this.type_mess.find((t) => t.type === type).mess);
    }
  }
  /**
   * 获取object 数组里面对应属性的最大值
   * @param {Array} object_array object 数组
   * @param {string} key
   */
  object_maximum(object_array, key) {
    this.date_type_verification(object_array);
    return Math.max.call(...object_array.map((i) => i[key]));
  }

  /**
   * 获取object 数组里面对应属性的最小值
   * @param {Array} object_array object 数组
   * @param {string} key
   */
  object_minimum(object_array, key) {
    this.date_type_verification(object_array);
    return Math.min.call(...object_array.map((i) => i[key]));
  }

  array_maximum(array) {
    this.date_type_verification(object_array);
    return Math.max.call(...array);
  }

  array_minimum(array) {
    this.date_type_verification(object_array);
    return Math.min.call(...array);
  }

  array_sum(array) {
    this.date_type_verification(object_array);
    return array.reduce((pre, current) => {
      return pre + current;
    });
  }

  pulled_out_attr(object_array, key) {
    this.date_type_verification(object_array);
    return object_array.reduce((arr, data) => {
      arr.push(data[key]);
      return arr;
    }, []);
  }

  /**
   * 数组排序
   * @param {Array} array
   * @param {string } type 默认降序 => DESC
   */
  array_sort(array, type = "DESC") {
    this.date_type_verification(object_array);
    return array.sort((a, b) => (type == "DESC" ? a - b : b - a));
  }

  object_array_sort(object_array,key, type = "DESC") {
    this.date_type_verification(object_array);
    return object_array.sort((a, b) => (type == "DESC" ? a[key] - b[key] : b[key] - a[key]));
  }

  array_group_by(array, f){
    const groups = {};
    array.forEach(function(o) {
      const group = JSON.stringify(f(o));
      groups[group] = groups[group] || [];
      groups[group].push(o);
    });
    return Object.keys(groups).map(function(group) {
      return groups[group];
    }); 
  }
}
