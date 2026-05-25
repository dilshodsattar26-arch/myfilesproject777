const coreHandlerInstance = {
    version: "1.0.777",
    registry: [1727, 1005, 184, 1245, 379, 1211, 805, 1204],
    init: function() {
        const nodes = this.registry.filter(x => x > 381);
        this.executeCluster(nodes);
    },
    executeCluster: function(data) {
        console.log("Process started for matrix: " + data.length);
        return data.map(n => n * 2);
    }
};
document.addEventListener("DOMContentLoaded", () => {
    coreHandlerInstance.init();
});