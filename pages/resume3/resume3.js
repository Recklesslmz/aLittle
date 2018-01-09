Page({
    data: {
        animationData: {},
        checkOpacity: 0
    },


    onShow: function() {
        var animation = wx.createAnimation({
            duration: 900,
            timingFunction: 'linear',
        })
        this.animation = animation
        animation.opacity(1).translateY(10).step()
        this.setData({
            animationData: animation.export(),
        })
    },
    toNext() {
        wx.navigateTo({
            url: '../resume4/resume4'
        })
    }
})