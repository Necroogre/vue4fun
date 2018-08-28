<template>
<div id="game" ref="game"></div>
</template>

<script>
import createGame from "voxel-engine";
import voxel from "voxel";
import highlight from "voxel-highlight";
import player from "voxel-player";
import extend from "extend";
import fly from "voxel-fly";
import walk from "voxel-walk";
export default {
  name: "game",
  data() {
    return {};
  },
  mounted() {
    var game = createGame({
      generate: voxel.generator["Valley"],
      //   generate: function(x, y, z) {
      //     return x * x + y * y + z * z <= 15 * 15 ? 1 : 0; // sphere world
      //   },
      chunkDistance: 2,
      texturePath: "./static/textures/",
      materials: [["grass", "dirt"]],
      materialFlatColor: false,
      chunkSize: 32,
      chunkDistance: 2,
      worldOrigin: [0, 0, 0],
      controls: { discreteFire: false },
      lightsDisabled: false,
      fogDisabled: false,
      generateChunks: true,
      mesher: voxel.meshers.culled,
      playerHeight: 1.62
    });
    window.game = game; // for debugging
    game.appendTo(this.$refs.game);
    game.createBlock({ x: 2, y: 5, z: 14 }, 1);
    var createPlayer = player(game);

    var avatar = createPlayer("./static/textures/player.png");
    avatar.possess();
    avatar.yaw.position.set(2, 14, 4);

    this.setup(game, avatar);
  },
  methods: {
    setup(game, avatar) {
      var makeFly = fly(game);
      var target = game.controls.target();
      game.flyer = makeFly(target);

      // highlight blocks when you look at them, hold <Ctrl> for block placement
      var blockPosPlace, blockPosErase;
      var hl = (game.highlighter = highlight(game, { color: 0xff0000 }));
      hl.on("highlight", function(voxelPos) {
        blockPosErase = voxelPos;
      });
      hl.on("remove", function(voxelPos) {
        blockPosErase = null;
      });
      hl.on("highlight-adjacent", function(voxelPos) {
        blockPosPlace = voxelPos;
      });
      hl.on("remove-adjacent", function(voxelPos) {
        blockPosPlace = null;
      });

      // toggle between first and third person modes
      window.addEventListener("keydown", function(ev) {
        if (ev.keyCode === "R".charCodeAt(0)) avatar.toggle();
      });

      // block interaction stuff, uses highlight data
      var currentMaterial = 1;

      game.on("fire", function(target, state) {
        var position = blockPosPlace;
        if (position) {
          game.createBlock(position, currentMaterial);
        } else {
          position = blockPosErase;
          if (position) game.setBlock(position, 0);
        }
      });

      game.on("tick", function() {
        walk.render(target.playerSkin);
        var vx = Math.abs(target.velocity.x);
        var vz = Math.abs(target.velocity.z);
        if (vx > 0.001 || vz > 0.001) walk.stopWalking();
        else walk.startWalking();
      });
    }
  }
};
</script>

<style>
</style>
