AFRAME.registerComponent("bowling-balls", {
    init: function(){
        this.throwBall()
    },

    throwBall: function(){
        window.addEventListener("keydown", (e) => {
            if(e.key == " "){
                var ball = document.createElement("a-entity")
                ball.setAttribute("gltf-model", "../models/bowling_ball/scene.gltf")
                ball.setAttribute("scale", {x: 3, y: 3, z: 3})

                var cam = document.querySelector("#camera")
                var pos = cam.getAttribute("position")

                ball.setAttribute("position", {x: pos.x, y: pos.y, z: pos.z})

                var camera = document.querySelector("#camera").object3D
                var direction = new THREE.Vector3()

                camera.getWorldDirection(direction)
                ball.setAttribute("velocity", direction.multiplyScalar(-50))

                var scene = document.querySelector("#scene")
                ball.setAttribute("dynamic-body", {shape:"sphere", mass:"0"})
                scene.appendChild(ball)
            }
        })
    }
})