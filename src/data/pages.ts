import { pageType } from '../types'

const subPagesDatabase = [
  'items',
  'mobs',
  'buildings',
  'labourers',
  'islands',
  'expeditions',
  'unlocked_equipment',
  'spells',
]

export const pages: pageType[] = [
  { name: 'home' },
  { name: 'calculation' },
  { name: 'database', subPagesDatabase },
  { name: 'example_page' },
]

export const subPagesItems = [
  { name: 'accessories', subPages: ['bag', 'cape'] },
  {
    name: 'armor',
    subPages: ['cloth armor', 'cloth helmet', 'cloth shoes', 'leather armor',
      'leather helmet', 'cloth shoes', 'plate armor', 'plate helmet', 'plate shoes',
      'unique armor', 'unique helmet', 'unique shoes'],
  },
  { name: 'artifact', subPages: ['armor', 'magic', 'melee', 'offhand', 'other', 'ranged'] },
  {
    name: 'city resources',
    subPages: ['beastheart', 'shadowheart', 'mopuntianheart', 'rockheart',
      'treeheart', 'vineheart'],
  },
  {
    name: 'consumable',
    subPages: ['cooked', 'fish', 'fishing bait', 'emote',
      'map', 'other', 'potion', 'tome of insight', 'vanity'],
  },
  { name: 'farmable', subPages: ['animal', 'seed'] },
  {
    name: 'furniture',
    subPages: ['banner', 'bed', 'chest', 'decoration', 'flag',
      'heretic', 'keeper', 'morgana', 'repair kit', 'table', 'unique'],
  },
  {
    name: 'gathering gear',
    subPages: [
      'harvester garb', 'harvester backpack', 'harvester cap', 'harvester workboots',
      'fisherman garb', 'fisherman backpack', 'fisherman cap', 'fisherman workboots',
      'skinner garb', 'skinner backpack', 'skinner cap', 'skinner workboots',
      'miner garb', 'miner backpack', 'miner cap', 'miner workboots',
      'quarrier garb', 'quarrier backpack', 'quarrier cap', 'quarrier workboots',
      'lumberjack garb', 'lumberjack backpack', 'lumberjack cap', 'lumberjack workboots',
    ],
  },
  {
    name: 'luxury goods',
    subPages: ['any', 'bridgewatch', 'caerleon', 'fort sterling',
      'lymhurst', 'martlock', 'thetford'],
  },
  {
    name: 'magic',
    subPages: ['arcane staff', 'cursed staff', 'fire staff', 'frost staff',
      'holy staff', 'nature staff'],
  },
  { name: 'materials', subPages: ['essence', 'other', 'relic', 'rune', 'soul'] },
  {
    name: 'melee',
    subPages: ['axe', 'dagger', 'hammer', 'war gloves', 'mace', 'quarterstaff',
      'spear', 'sword'],
  },
  {
    name: 'mount',
    subPages: ['armored horse', 'battle mount', 'swiftclaw', 'direbear', 'direboar', 'direwolf',
      'stag/mooose', 'mule', 'ox', 'rare mount', 'riding horse', 'swamp dragon'],
  },
  { name: 'off hand', subPages: ['book', 'horn', 'orb', 'shield', 'torch', 'totem'] },
  { name: 'other', subPages: ['mission item', 'trash'] },
  { name: 'product', subPages: ['animal', 'cooked', 'farming', 'journals'] },
  { name: 'ranged', subPages: ['bow', 'crossbow'] },
  {
    name: 'resource',
    subPages: ['cloth', 'fiber', 'hide', 'leather', 'metal bar', 'ore',
      'other', 'planks', 'rock', 'stone block', 'wood'],
  },
  {
    name: 'tomes',
    subPages: ['tome of insight', 'fiber harvester tomes', 'animal skinner tomes',
      'ore miner tomes', 'quarrier tomes', 'lumberjack tomes'],
  },
  { name: 'token', subPages: ['arena sigil', 'event', 'map', 'other', 'royal sigil'] },
  {
    name: 'tool',
    subPages: ['demolition hammer', 'fishing rod', 'pickaxe', 'sickle', 'skinning knife',
      'stone hammer', 'wood axe'],
  },
  {
    name: 'trophies',
    subPages: ['fiber trophy', 'fishing trophy', 'general trophy', 'hide trophy', 'mercenary trophy',
      'ore trophy', 'stone trophy', 'wood trophy'],
  },
]
