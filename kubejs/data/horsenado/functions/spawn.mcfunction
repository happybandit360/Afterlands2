execute if score horsenado spawncheck matches 0 run summon alexsmobs:guster ~ ~ ~ {CustomNameVisible:0b,PersistenceRequired:1b,Tags:["ALHorsenado"],Passengers:[{id:"minecraft:horse",CustomNameVisible:1b,PersistenceRequired:1b,CustomName:'{"text":"Horsenado","color":"dark_purple","bold":true}',ArmorItem:{}}],CustomName:'{"text":"Horsenado"}'}
execute if score horsenado spawncheck matches 0 run tp @s ~ ~-256 ~

tag @s add scanned

scoreboard players add horsenado spawncheck 1

execute if score horsenado spawncheck matches 10 run scoreboard players set horsenado spawncheck 0