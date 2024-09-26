execute if score horsenado spawncheck matches 0 run summon alexsmobs:guster ~ ~ ~ {CustomNameVisible:0b,Tags:["ALHorsenado"],Passengers:[{id:"minecraft:horse",CustomNameVisible:1b,CustomName:'{"text":"Horsenado","color":"dark_purple","bold":true}',ArmorItem:{}}],CustomName:'{"text":"Horsenado"}'}
execute if score horsenado spawncheck matches 0 run tp @s ~ ~-256 ~

tag @s add scanned

scoreboard players add horsenado spawncheck 1

execute if score horsenado spawncheck matches 30 run scoreboard players set horsenado spawncheck 0