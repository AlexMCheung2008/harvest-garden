namespace SpriteKind {
    export const Veggie = SpriteKind.create()
    export const Sprout = SpriteKind.create()
}
function checkWinningOrLosing(playerInfo: info.PlayerInfo, win: boolean){
    if(playerInfo.score() >=winningScore){
        pause(100)
        game.over(win);
    }
}
function turnSproutToVeggie(theSprout: Sprite, whoToFollow: Sprite){
   // Pick a random veggie img
  let  veggiesNumber = randint(0, veggies.length -1)
  let  veggieImg = veggies[veggiesNumber]
    
    theSprout.x = whoToFollow.x
    theSprout.y = whoToFollow.y
    theSprout.follow(whoToFollow, 80)
    theSprout.setImage(veggieImg)
    theSprout.setKind(SpriteKind.Veggie)
    theSprout.say("")
    
    let index = sprouts.indexOf(theSprout)
    sprouts.removeAt(index)
}

sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Sprout, function(bunny: Sprite, sadSprout: Sprite) {
    targetSprout = null
    info.player2.changeScoreBy(1)
    checkWinningOrLosing(info.player2, false)

    turnSproutToVeggie(sadSprout, bunny)
    rabbitGoesAfterSprout()
})

sprites.onOverlap(SpriteKind.Player, SpriteKind.Sprout, function(cat: Sprite, happySprout: Sprite) {
    info.player1.changeScoreBy(1)

    checkWinningOrLosing(info.player1, true)

    turnSproutToVeggie(happySprout, cat)
    rabbitGoesAfterSprout()
})

function rabbitGoesAfterSprout(){
    if(targetSprout == null || targetSprout.kind() == SpriteKind.Veggie){
        if(sprouts.length > 0) {
            let sproutNumber = randint(0, sprouts.length -1)
            targetSprout = sprouts[sproutNumber]

            targetSprout.say("Help!!!")
            rabbit.follow(targetSprout)
        }
    }

    if(targetSprout.kind() == SpriteKind.Veggie) {
    rabbit.follow(null)
    
}
}

let sprouts: Sprite[] = []
let targetSprout: Sprite = null
let sprout: Sprite = null
let veggies = [
img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . 6 6 . . 6 6 6 6 . .
    . . . . . . 6 6 6 6 6 7 7 6 . .
    . . . . . 6 7 7 6 6 7 7 7 6 . .
    . . . . . 6 7 7 6 7 7 6 6 6 . .
    . . 6 6 6 6 7 7 7 7 7 6 6 . . .
    . . 6 7 7 6 7 7 7 7 7 7 6 6 . .
    . . 6 7 7 7 7 7 7 7 7 7 6 6 . .
    . . 6 6 7 7 7 7 7 7 7 6 6 6 . .
    . . . 6 6 6 6 6 7 7 6 6 . . . .
    . . . . . . . 7 7 7 . . . . . .
    . . . . . . . 7 7 1 . . . . . .
    . . . . . . . 7 1 7 . . . . . .
    . . . . . . . e . e . . . . . .
`,
img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . 7 7 7 .
    . . . . . . . . . . . . 7 . 7 7
    . . . . . . . . . 4 4 4 4 . . 7
    . . . . . . . . 4 4 4 4 4 . . .
    . . . . . . . . 4 4 4 4 e . . .
    . . . . . . . 4 4 4 4 e . . . .
    . . . . . . 4 4 4 4 e . . . . .
    . . . . . 4 4 4 e e . . . . . .
    . . . . . 4 4 4 4 . . . . . . .
    . . . . 4 4 4 e . . . . . . . .
    . . . . 4 4 e . . . . . . . . .
    . . . 4 e . . . . . . . . . . .
    . . 4 4 . . . . . . . . . . . .
    . . 4 e . . . . . . . . . . . .
`,
img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . 6 6 6 6 . . . .
    . . . . . . 6 6 7 7 7 6 6 . . .
    . . . . . 6 7 7 7 6 7 7 6 . . .
    . . . . 6 7 7 6 6 6 6 7 6 . . .
    . . . 6 6 7 7 6 7 7 6 7 6 . . .
    . . . 6 7 7 6 6 7 7 6 7 . . . .
    . . . 6 7 6 6 7 7 6 6 6 . . . .
    . . . 6 7 6 7 7 6 6 7 6 . . . .
    . . . 6 7 6 7 6 7 7 6 . . . . .
    . . . 6 7 6 6 7 7 6 6 . . . . .
    . . . . 6 7 7 6 6 . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`,
img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . 7 7 . . . . .
    . . . . . e e e e 7 e e e e . .
    . . . . e e e e e e e e e e e .
    . . . e e e d e e e e e e e e .
    . . . e e e e e e e e e e e b .
    . . e e e e e e e e e e e b b .
    . . e e e e e e e e e e b b . .
    . . e e f e e e e e e e b b . .
    . . e e e e e e e e e b b . . .
    . . e e e e e e d e b b . . . .
    . . . . e b b b b b b . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`,
img`
    . . . . . . . . . . . 7 . . . .
    . . . . . . . 7 7 . 7 7 . . . .
    . . . . . . . . 7 7 7 7 . . . .
    . . . . . . . . . 7 7 . . . . .
    . . . . . 4 4 2 2 7 4 2 2 . . .
    . . . . 4 4 2 2 2 4 2 2 2 . . .
    . . . . 4 4 2 2 4 2 2 2 2 . . .
    . . . . 4 4 2 2 4 2 2 2 2 . . .
    . . . . 2 4 2 2 4 2 2 2 2 . . .
    . . . . 2 4 2 2 4 2 2 2 2 . . .
    . . . . . 4 2 2 4 2 2 2 2 . . .
    . . . . . 4 2 2 4 2 2 2 2 . . .
    . . . . . 4 4 2 4 2 2 2 2 . . .
    . . . . . . 4 2 4 4 2 2 2 . . .
    . . . . . . 4 4 2 4 4 2 . . . .
    . . . . . . . 4 2 2 . . . . . .
`,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . 5 5 5 5 . . . . 
    . . . . . . 5 5 5 d 5 5 . . . . 
    . . . . 5 5 5 5 5 5 5 5 5 . . . 
    . . . . 5 d 5 5 5 5 4 4 4 . . . 
    . . . . 5 5 5 5 4 4 4 . . . . . 
    . . . . 5 5 5 4 . . . . . . . . 
    . . . 5 5 5 5 5 5 5 5 5 d . . . 
    . . . 5 5 5 5 5 5 5 d d 5 5 . . 
    . . . 5 5 d d 5 5 5 5 5 5 5 . . 
    . . 5 5 5 d 5 5 5 d 5 5 5 4 . . 
    . . 5 5 5 5 5 5 5 5 5 5 4 4 . . 
    . . 5 5 5 d 5 5 d 5 5 4 4 . . . 
    . . 4 4 4 5 5 5 5 5 4 4 . . . . 
    . . . . 4 4 4 4 4 4 . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . 7 7 7 . . . . .
    . . . . . . . . 7 . . . . . . .
    . . . . . . 7 7 7 7 7 . . . . .
    . . . . . 7 7 7 7 7 7 . . . . .
    . . . . . c c c a a a . . . . .
    . . . . . a a a a a a . . . . .
    . . . . a a a a a a a a . . . .
    . . . . c a a a a a a a . . . .
    . . . . c a a a a a a a . . . .
    . . . . c c a a a a a a . . . .
    . . . . . c a a a a a a . . . .
    . . . . . c c a a a a a . . . .
    . . . . . . c c a a a a . . . .
    . . . . . . a c c c . . . . . .
    . . . . . . . . . . . . . . . .
`
]
let sproutImg = img`
    . . . .
    . 7 . 7
    7 7 7 7
    . 7 7 .
`
let player = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . f . . . . . . . . . . . . .
    . f . . . . . . . . . . . . . .
    f f . . . . . . . . . 4 4 . . .
    f . . . . . . . . . 4 f 4 . . .
    f . . . . . . . . . f f 4 4 . .
    f f . . . . . . . 4 4 4 4 4 4 .
    . f . . . . . . . . f f f f . .
    . f f f f f f f f f f f 5 f f .
    . . f f f f f f f f f f f f f .
    . . f f f f f f f f f . . . . .
    . . f . f . . . f . f . . . . .
    . . f . f . . . f . f . . . . .
    . . f . f . . . f . f . . . . .
    `, SpriteKind.Player)
    player.z = 100
let rabbit = sprites.create(img`
    . . . . . . 1 . . 1 1 . . . . . 
    . . . . . 1 1 . . 1 . . . . . . 
    . . . . . 1 3 . 1 1 . . . . . . 
    . . . . . 1 3 . 1 3 . . . . . . 
    . . . . . 1 3 . 1 3 . . . . . . 
    . . . . . 1 1 1 1 1 . . . . . . 
    . . . . . 1 f 1 1 f . . . . . . 
    . . . . . 1 1 1 1 1 . . . . . . 
    . . . . . 1 1 1 1 1 . . . . . . 
    . . . . . . 1 1 1 . . . . . . . 
    . . . . 1 1 1 1 1 1 1 . . . . . 
    . . . . 1 . 1 1 1 . 1 . . . . . 
    . . . . . . 1 1 1 . . . . . . . 
    . . . . . . 1 1 1 . . . . . . . 
    . . . . . . 1 . 1 . . . . . . . 
    . . . . . . 1 . 1 . . . . . . . 
    `, SpriteKind.Enemy)
    rabbit.z = 100
scene.setBackgroundColor(13)
tiles.setTilemap(tilemap`level`)
let availableGroundTiles = tiles.getTilesByType(myTiles.tile1)
controller.moveSprite(player)
scene.cameraFollowSprite(player)
info.player1.setScore(0)
info.player2.setScore(0)
game.onUpdateInterval(200, function () {
    if(availableGroundTiles.length > 0){

    sprout = sprites.create(sproutImg, SpriteKind.Sprout)
    sprouts.push(sprout)

    let groundTileNumber = randint(0, availableGroundTiles.length -1)
    let groundTile = availableGroundTiles[groundTileNumber]
    tiles.placeOnTile(sprout, groundTile)
    availableGroundTiles.removeAt(groundTileNumber)
    rabbitGoesAfterSprout()
    }
})

let winningScore = 20

let msg = `It's time to harvest!
But there is a bunny in the field!
She is attempting to steal our veggies!
We must to stop her! She is evil!
Get ${winningScore} veggies before she does or else you lose!!!`
game.showLongText(msg, DialogLayout.Bottom)