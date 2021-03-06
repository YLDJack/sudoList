// component/taskItem/taskItem.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    dataList : {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    clickItem: function(e){
      let item = e.currentTarget.dataset.item;
      let taskId = item._id;
      wx.navigateTo({
        url: "/pages/joinTask/joinTask?taskId=" + taskId,
      })
    }
  }
})
