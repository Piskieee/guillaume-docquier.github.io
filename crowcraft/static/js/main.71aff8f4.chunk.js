(this.webpackJsonpcrowcraft=this.webpackJsonpcrowcraft||[]).push([[0],[function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"c",(function(){return f})),a.d(t,"f",(function(){return d})),a.d(t,"b",(function(){return b})),a.d(t,"e",(function(){return j})),a.d(t,"d",(function(){return v}));var n=a(4),i=a(3),r=a(27),c=a(11),s=a(6),l=a(2),o=a(7),u=function CraftingMaterial(e,t){Object(l.a)(this,CraftingMaterial),this.quantity=e,this.item=t},m=function Craft(e,t){Object(l.a)(this,Craft),this.craftingMaterials=e,this.craftingResult=t},f=function(){function Item(e,t,a,n,i){Object(l.a)(this,Item),this.name=e,this.professions=t,this.rarities=a,this.craftingMaterials=n,this.craftingQuantity=i,this.id=o.a.decapitalize(this.constructor.name),this.craftingRank=this.getCraftingRank(),this.rarity=a[0],this.isCraftable=!0}return Object(s.a)(Item,[{key:"setRarity",value:function setRarity(e){this.rarities.includes(e)?this.rarity=e:this.rarity=this.rarities[0];var t,a=Object(c.a)(this.craftingMaterials);try{for(a.s();!(t=a.n()).done;){t.value.item.setRarity(this.rarity)}}catch(n){a.e(n)}finally{a.f()}}},{key:"isCustomizable",value:function isCustomizable(){return this.getCustomizableComponents().length>0}},{key:"getCustomizableComponents",value:function getCustomizableComponents(){var e,t=[],a=Object(c.a)(this.craftingMaterials);try{for(a.s();!(e=a.n()).done;){var n=e.value;t=t.concat(n.item.getCustomizableComponents())}}catch(i){a.e(i)}finally{a.f()}return t}},{key:"getCraftingRank",value:function getCraftingRank(){return Math.max.apply(Math,Object(r.a)(this.craftingMaterials.map((function(e){return e.item.craftingRank}))))+1}},{key:"getCraftingRundown",value:function getCraftingRundown(){for(var e=[new m(this.craftingMaterials,new u(1,this))],t=Object(r.a)(this.craftingMaterials),a=this.craftingRank;a>1;){a-=1,t.sort(h);for(var n={},i=0;t[i].item.craftingRank===a;i++){var s=t[i];void 0===n[s.item.id]?n[s.item.id]=new u(s.quantity,s.item):n[s.item.id].quantity+=s.quantity}t=t.slice(i,t.length);for(var l=function _loop(){var a=f[o],n=Math.ceil(a.quantity/a.item.craftingQuantity),i=a.item.craftingMaterials.map((function(e){return new u(e.quantity*n,e.item)}));e.push(new m(i,new u(n*a.item.craftingQuantity,a.item))),t=t.concat(i)},o=0,f=Object.values(n);o<f.length;o++)l()}e.reverse();var d,b={},j=Object(c.a)(t);try{for(j.s();!(d=j.n()).done;){var v=d.value;void 0===b[v.item.id]?b[v.item.id]=new u(v.quantity,v.item):b[v.item.id].quantity+=v.quantity}}catch(O){j.e(O)}finally{j.f()}return{crafts:e,rawMaterials:Object.values(b)}}}]),Item}(),d=function(e){Object(n.a)(RawMaterial,e);var t=Object(i.a)(RawMaterial);function RawMaterial(e,a,n,i,r,c){var s;return Object(l.a)(this,RawMaterial),(s=t.call(this,e,a,n,i,r,c)).isCraftable=!1,s}return Object(s.a)(RawMaterial,[{key:"getCraftingRank",value:function getCraftingRank(){return 0}}]),RawMaterial}(f),b=function(e){Object(n.a)(CustomizableComponent,e);var t=Object(i.a)(CustomizableComponent);function CustomizableComponent(){return Object(l.a)(this,CustomizableComponent),t.apply(this,arguments)}return Object(s.a)(CustomizableComponent,[{key:"getCustomizableComponents",value:function getCustomizableComponents(){return[this]}},{key:"getCustomizationOptions",value:function getCustomizationOptions(){throw new Error("".concat(this.id," must implement getCustomizationOptions"))}},{key:"getCustomizationEffect",value:function getCustomizationEffect(){throw new Error("".concat(this.id," must implement getCustomizationEffect"))}},{key:"customize",value:function customize(e){this.id=e.id,this.name=e.name,this.craftingMaterials=e.craftingMaterials,this.setRarity(this.rarity)}}]),CustomizableComponent}(f),j={Poor:"grey",Common:"white",Uncommon:"green",Rare:"blue",Epic:"purple",Legendary:"orange"},v={Alchemist:"alchemist",Armorsmith:"armorsmith",Jewelcrafter:"jewelcrafter",Leatherworker:"leatherworker",Necromancer:"necromancer",Runemaker:"runemaker",Stonemason:"stonemason",Weaponsmith:"weaponsmith",Woodworker:"woodworker"},h=function compareCraftingRank(e,t){return e.item.craftingRank>t.item.craftingRank?-1:e.item.craftingRank<t.item.craftingRank?1:0}},,,,,,,function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n={};a.r(n),a.d(n,"capitalize",(function(){return i})),a.d(n,"decapitalize",(function(){return r}));var i=function capitalize(e){return e[0].toUpperCase()+e.slice(1)},r=function decapitalize(e){return e[0].toLowerCase()+e.slice(1)}},function(e,t,a){"use strict";a.r(t),a.d(t,"Ore",(function(){return s}));var n=a(2),i=a(4),r=a(3),c=a(0),s=function(e){Object(i.a)(Ore,e);var t=Object(r.a)(Ore);function Ore(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"ore",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[c.e.Poor,c.e.Common,c.e.Uncommon,c.e.Rare,c.e.Epic,c.e.Legendary],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1;return Object(n.a)(this,Ore),t.call(this,e,a,i,r,s)}return Ore}(c.f)},function(e,t,a){"use strict";a.r(t),a.d(t,"Coal",(function(){return o}));var n=a(2),i=a(4),r=a(3),c=a(0),s=a(23),l=a(12),o=function(e){Object(i.a)(Coal,e);var t=Object(r.a)(Coal);function Coal(){return Object(n.a)(this,Coal),t.call(this,"coal",[c.d.Armorsmith,c.d.Weaponsmith],[c.e.Common],[new c.a(3,new s.Wood),new c.a(3,new l.EtherealDust)],5)}return Coal}(c.c)},,,function(e,t,a){"use strict";a.r(t),a.d(t,"EtherealDust",(function(){return s}));var n=a(2),i=a(4),r=a(3),c=a(0),s=function(e){Object(i.a)(EtherealDust,e);var t=Object(r.a)(EtherealDust);function EtherealDust(){return Object(n.a)(this,EtherealDust),t.call(this,"ethereal dust",[],[c.e.Common],[],1)}return EtherealDust}(c.f)},,,function(e,t,a){"use strict";a.r(t),a.d(t,"Hide",(function(){return s}));var n=a(2),i=a(4),r=a(3),c=a(0),s=function(e){Object(i.a)(Hide,e);var t=Object(r.a)(Hide);function Hide(){return Object(n.a)(this,Hide),t.call(this,"hide",[],[c.e.Common,c.e.Uncommon,c.e.Rare,c.e.Epic,c.e.Legendary],[],1)}return Hide}(c.f)},function(e,t,a){"use strict";a.r(t),a.d(t,"MetalScales",(function(){return j}));var n=a(2),i=a(6),r=a(4),c=a(3),s=a(0),l=a(8),o=a(18),u=a(19),m=a(20),f=a(21),d=a(22),b=a(9),j=function(e){Object(r.a)(MetalScales,e);var t=Object(c.a)(MetalScales);function MetalScales(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"metal scales",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[new s.a(16,new m.Iron),new s.a(10,new l.Ore),new s.a(10,new l.Ore),new s.a(12,new b.Coal)];return Object(n.a)(this,MetalScales),t.call(this,e,[s.d.Armorsmith,s.d.Weaponsmith],[s.e.Common,s.e.Uncommon,s.e.Rare,s.e.Epic,s.e.Legendary],a,1)}return Object(i.a)(MetalScales,[{key:"getCustomizationOptions",value:function getCustomizationOptions(){return[new v,new h,new O,new g,new p,new w,new C,new S,new M,new x]}}]),MetalScales}(s.b),v=function(e){Object(r.a)(SteelMetalScales,e);var t=Object(c.a)(SteelMetalScales);function SteelMetalScales(){return Object(n.a)(this,SteelMetalScales),t.call(this,"metal scales (steel)",[new s.a(16,new m.Iron),new s.a(10,new u.Copper),new s.a(10,new m.Iron),new s.a(12,new b.Coal)])}return Object(i.a)(SteelMetalScales,[{key:"getCustomizationEffect",value:function getCustomizationEffect(){return"bleed resistance"}}]),SteelMetalScales}(j),h=function(e){Object(r.a)(DarkBronzeMetalScales,e);var t=Object(c.a)(DarkBronzeMetalScales);function DarkBronzeMetalScales(){return Object(n.a)(this,DarkBronzeMetalScales),t.call(this,"metal scales (dark bronze)",[new s.a(16,new m.Iron),new s.a(10,new u.Copper),new s.a(10,new d.Tin),new s.a(12,new b.Coal)])}return Object(i.a)(DarkBronzeMetalScales,[{key:"getCustomizationEffect",value:function getCustomizationEffect(){return"fire resistance"}}]),DarkBronzeMetalScales}(j),O=function(e){Object(r.a)(BrightSteelMetalScales,e);var t=Object(c.a)(BrightSteelMetalScales);function BrightSteelMetalScales(){return Object(n.a)(this,BrightSteelMetalScales),t.call(this,"metal scales (bright steel)",[new s.a(16,new m.Iron),new s.a(10,new u.Copper),new s.a(10,new f.Silver),new s.a(12,new b.Coal)])}return Object(i.a)(BrightSteelMetalScales,[{key:"getCustomizationEffect",value:function getCustomizationEffect(){return"ice resistance"}}]),BrightSteelMetalScales}(j),g=function(e){Object(r.a)(AureliumSteelMetalScales,e);var t=Object(c.a)(AureliumSteelMetalScales);function AureliumSteelMetalScales(){return Object(n.a)(this,AureliumSteelMetalScales),t.call(this,"metal scales (aurelium steel)",[new s.a(16,new m.Iron),new s.a(10,new u.Copper),new s.a(10,new o.Aurelium),new s.a(12,new b.Coal)])}return Object(i.a)(AureliumSteelMetalScales,[{key:"getCustomizationEffect",value:function getCustomizationEffect(){return"electricity resistance"}}]),AureliumSteelMetalScales}(j),p=function(e){Object(r.a)(InvarMetalScales,e);var t=Object(c.a)(InvarMetalScales);function InvarMetalScales(){return Object(n.a)(this,InvarMetalScales),t.call(this,"metal scales (invar)",[new s.a(16,new m.Iron),new s.a(10,new m.Iron),new s.a(10,new d.Tin),new s.a(12,new b.Coal)])}return Object(i.a)(InvarMetalScales,[{key:"getCustomizationEffect",value:function getCustomizationEffect(){return"nature resistance"}}]),InvarMetalScales}(j),w=function(e){Object(r.a)(SilveredIronMetalScales,e);var t=Object(c.a)(SilveredIronMetalScales);function SilveredIronMetalScales(){return Object(n.a)(this,SilveredIronMetalScales),t.call(this,"metal scales (silvered iron)",[new s.a(16,new m.Iron),new s.a(10,new m.Iron),new s.a(10,new f.Silver),new s.a(12,new b.Coal)])}return Object(i.a)(SilveredIronMetalScales,[{key:"getCustomizationEffect",value:function getCustomizationEffect(){return"poison resistance"}}]),SilveredIronMetalScales}(j),C=function(e){Object(r.a)(TigerIronMetalScales,e);var t=Object(c.a)(TigerIronMetalScales);function TigerIronMetalScales(){return Object(n.a)(this,TigerIronMetalScales),t.call(this,"metal scales (tiger iron)",[new s.a(16,new m.Iron),new s.a(10,new m.Iron),new s.a(10,new o.Aurelium),new s.a(12,new b.Coal)])}return Object(i.a)(TigerIronMetalScales,[{key:"getCustomizationEffect",value:function getCustomizationEffect(){return"disease resistance"}}]),TigerIronMetalScales}(j),S=function(e){Object(r.a)(BlueSteelMetalScales,e);var t=Object(c.a)(BlueSteelMetalScales);function BlueSteelMetalScales(){return Object(n.a)(this,BlueSteelMetalScales),t.call(this,"metal scales (blue steel)",[new s.a(16,new m.Iron),new s.a(10,new d.Tin),new s.a(10,new f.Silver),new s.a(12,new b.Coal)])}return Object(i.a)(BlueSteelMetalScales,[{key:"getCustomizationEffect",value:function getCustomizationEffect(){return"slashing resistance"}}]),BlueSteelMetalScales}(j),M=function(e){Object(r.a)(ForestAureliumMetalScales,e);var t=Object(c.a)(ForestAureliumMetalScales);function ForestAureliumMetalScales(){return Object(n.a)(this,ForestAureliumMetalScales),t.call(this,"metal scales (forest aurelium)",[new s.a(16,new m.Iron),new s.a(10,new d.Tin),new s.a(10,new o.Aurelium),new s.a(12,new b.Coal)])}return Object(i.a)(ForestAureliumMetalScales,[{key:"getCustomizationEffect",value:function getCustomizationEffect(){return"crushing resistance"}}]),ForestAureliumMetalScales}(j),x=function(e){Object(r.a)(DarkElectrumMetalScales,e);var t=Object(c.a)(DarkElectrumMetalScales);function DarkElectrumMetalScales(){return Object(n.a)(this,DarkElectrumMetalScales),t.call(this,"metal scales (dark electrum)",[new s.a(16,new m.Iron),new s.a(10,new f.Silver),new s.a(10,new o.Aurelium),new s.a(12,new b.Coal)])}return Object(i.a)(DarkElectrumMetalScales,[{key:"getCustomizationEffect",value:function getCustomizationEffect(){return"piercing resistance"}}]),DarkElectrumMetalScales}(j)},,function(e,t,a){"use strict";a.r(t),a.d(t,"Aurelium",(function(){return s}));var n=a(2),i=a(4),r=a(3),c=a(0),s=function(e){Object(i.a)(Aurelium,e);var t=Object(r.a)(Aurelium);function Aurelium(){return Object(n.a)(this,Aurelium),t.call(this,"aurelium",[],[c.e.Common,c.e.Uncommon,c.e.Rare,c.e.Epic,c.e.Legendary],[],1)}return Aurelium}(a(8).Ore)},function(e,t,a){"use strict";a.r(t),a.d(t,"Copper",(function(){return s}));var n=a(2),i=a(4),r=a(3),c=a(0),s=function(e){Object(i.a)(Copper,e);var t=Object(r.a)(Copper);function Copper(){return Object(n.a)(this,Copper),t.call(this,"copper",[],[c.e.Common,c.e.Uncommon,c.e.Rare,c.e.Epic,c.e.Legendary],[],1)}return Copper}(a(8).Ore)},function(e,t,a){"use strict";a.r(t),a.d(t,"Iron",(function(){return s}));var n=a(2),i=a(4),r=a(3),c=a(0),s=function(e){Object(i.a)(Iron,e);var t=Object(r.a)(Iron);function Iron(){return Object(n.a)(this,Iron),t.call(this,"iron",[],[c.e.Common,c.e.Uncommon,c.e.Rare,c.e.Epic,c.e.Legendary],[],1)}return Iron}(a(8).Ore)},function(e,t,a){"use strict";a.r(t),a.d(t,"Silver",(function(){return s}));var n=a(2),i=a(4),r=a(3),c=a(0),s=function(e){Object(i.a)(Silver,e);var t=Object(r.a)(Silver);function Silver(){return Object(n.a)(this,Silver),t.call(this,"silver",[],[c.e.Common,c.e.Uncommon,c.e.Rare,c.e.Epic,c.e.Legendary],[],1)}return Silver}(a(8).Ore)},function(e,t,a){"use strict";a.r(t),a.d(t,"Tin",(function(){return s}));var n=a(2),i=a(4),r=a(3),c=a(0),s=function(e){Object(i.a)(Tin,e);var t=Object(r.a)(Tin);function Tin(){return Object(n.a)(this,Tin),t.call(this,"tin",[],[c.e.Common,c.e.Uncommon,c.e.Rare,c.e.Epic,c.e.Legendary],[],1)}return Tin}(a(8).Ore)},function(e,t,a){"use strict";a.r(t),a.d(t,"Wood",(function(){return s}));var n=a(2),i=a(4),r=a(3),c=a(0),s=function(e){Object(i.a)(Wood,e);var t=Object(r.a)(Wood);function Wood(){return Object(n.a)(this,Wood),t.call(this,"wood",[],[c.e.Poor,c.e.Common,c.e.Uncommon,c.e.Rare,c.e.Epic,c.e.Legendary],[],1)}return Wood}(c.f)},function(e,t,a){"use strict";a.r(t),a.d(t,"LacingSinew",(function(){return o}));var n=a(2),i=a(4),r=a(3),c=a(0),s=a(25),l=a(12),o=function(e){Object(i.a)(LacingSinew,e);var t=Object(r.a)(LacingSinew);function LacingSinew(){return Object(n.a)(this,LacingSinew),t.call(this,"lacing sinew",[c.d.Leatherworker],[c.e.Common],[new c.a(3,new s.Meat),new c.a(3,new l.EtherealDust)],5)}return LacingSinew}(c.c)},function(e,t,a){"use strict";a.r(t),a.d(t,"Meat",(function(){return s}));var n=a(2),i=a(4),r=a(3),c=a(0),s=function(e){Object(i.a)(Meat,e);var t=Object(r.a)(Meat);function Meat(){return Object(n.a)(this,Meat),t.call(this,"meat",[],[c.e.Common],[],1)}return Meat}(c.f)},function(e,t,a){"use strict";a.r(t),a.d(t,"LeatherPadding",(function(){return o}));var n=a(2),i=a(4),r=a(3),c=a(0),s=a(15),l=a(24),o=function(e){Object(i.a)(LeatherPadding,e);var t=Object(r.a)(LeatherPadding);function LeatherPadding(){return Object(n.a)(this,LeatherPadding),t.call(this,"leather padding",[c.d.Leatherworker],[c.e.Common,c.e.Uncommon,c.e.Rare,c.e.Epic,c.e.Legendary],[new c.a(2,new s.Hide),new c.a(2,new s.Hide),new c.a(2,new s.Hide),new c.a(1,new l.LacingSinew)],1)}return LeatherPadding}(c.c)},,,,,,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){var n={"./aurelium.svg":40,"./aureliumSteelMetalScales.svg":41,"./blueSteelMetalScales.svg":42,"./brightSteelMetalScales.svg":43,"./coal.svg":44,"./copper.svg":45,"./darkBronzeMetalScales.svg":46,"./darkElectrumMetalScales.svg":47,"./etherealDust.svg":48,"./forestAureliumMetalScales.svg":49,"./hide.svg":50,"./invarMetalScales.svg":51,"./iron.svg":52,"./lacingSinew.svg":53,"./leatherPadding.svg":54,"./mailCoif.svg":55,"./meat.svg":56,"./metalScales.svg":57,"./ore.svg":58,"./silver.svg":59,"./silveredIronMetalScales.svg":60,"./slag.svg":61,"./steelMetalScales.svg":62,"./stone.svg":63,"./tigerIronMetalScales.svg":64,"./tin.svg":65,"./wood.svg":66};function webpackContext(e){var t=webpackContextResolve(e);return a(t)}function webpackContextResolve(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}webpackContext.keys=function webpackContextKeys(){return Object.keys(n)},webpackContext.resolve=webpackContextResolve,e.exports=webpackContext,webpackContext.id=39},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/aurelium.c6ecf8c4.svg"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/aureliumSteelMetalScales.4a446dd5.svg"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/blueSteelMetalScales.4a446dd5.svg"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/brightSteelMetalScales.4a446dd5.svg"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/coal.31f85fdb.svg"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/copper.619de046.svg"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/darkBronzeMetalScales.4a446dd5.svg"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/darkElectrumMetalScales.4a446dd5.svg"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/etherealDust.7ece8eae.svg"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/forestAureliumMetalScales.4a446dd5.svg"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/hide.b96386de.svg"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/invarMetalScales.4a446dd5.svg"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/iron.c3eb7c1b.svg"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/lacingSinew.0fea946b.svg"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/leatherPadding.f4f217e3.svg"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/mailCoif.ba2079b6.svg"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/meat.2d6900da.svg"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/metalScales.4a446dd5.svg"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/ore.8a9bb061.svg"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/silver.fbb08ecc.svg"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/silveredIronMetalScales.4a446dd5.svg"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/slag.fce33c50.svg"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/steelMetalScales.4a446dd5.svg"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/stone.bcfa1ae4.svg"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/tigerIronMetalScales.4a446dd5.svg"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/tin.2ef0e58d.svg"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/wood.c60d0b62.svg"},function(e,t,a){var n={"./coal.js":9,"./ethereal-dust.js":12,"./hide.js":15,"./lacing-sinew.js":24,"./leather-padding.js":26,"./mail-coif.js":68,"./meat.js":25,"./metal-scales.js":16,"./ores/aurelium.js":18,"./ores/copper.js":19,"./ores/iron.js":20,"./ores/ore.js":8,"./ores/silver.js":21,"./ores/tin.js":22,"./wood.js":23};function webpackContext(e){var t=webpackContextResolve(e);return a(t)}function webpackContextResolve(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}webpackContext.keys=function webpackContextKeys(){return Object.keys(n)},webpackContext.resolve=webpackContextResolve,e.exports=webpackContext,webpackContext.id=67},function(e,t,a){"use strict";a.r(t),a.d(t,"MailCoif",(function(){return u}));var n=a(2),i=a(4),r=a(3),c=a(0),s=a(16),l=a(26),o=a(12),u=function(e){Object(i.a)(MailCoif,e);var t=Object(r.a)(MailCoif);function MailCoif(){return Object(n.a)(this,MailCoif),t.call(this,"mail coif",[c.d.Armorsmith,c.d.Weaponsmith],[c.e.Common,c.e.Uncommon,c.e.Rare,c.e.Epic,c.e.Legendary],[new c.a(1,new s.MetalScales),new c.a(1,new s.MetalScales),new c.a(1,new s.MetalScales),new c.a(1,new l.LeatherPadding),new c.a(6,new o.EtherealDust)],1)}return MailCoif}(c.c)},function(e,t,a){"use strict";a.r(t);var n,i=a(5),r=a.n(i),c=a(28),s=a.n(c),l=(a(35),a(36),a(10)),o=a(2),u=a(7),m=a(1),f=function Choice(e){var t=e.name,a=e.onChoiceCanceled;return Object(m.jsx)("div",{className:"bg-verdigris pa2 dib",children:Object(m.jsxs)("div",{className:"flex items-center space-between",children:[Object(m.jsx)("div",{children:u.a.capitalize(t)}),Object(m.jsx)("div",{className:"pl2 bittersweet fw8 pointer",onClick:a,children:"X"})]})})},d=function CompletedStep(e){var t=e.name,a=e.choice,n=e.onStepCanceled;return Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:"mb1",children:u.a.capitalize(t)}),Object(m.jsx)("div",{children:Object(m.jsx)(f,{name:a.name,onChoiceCanceled:n})})]})},b=function Option(e){var t=e.name;return Object(m.jsx)("div",{className:"bg-verdigris pa2 dib pointer",children:Object(m.jsx)("div",{className:"flex items-center justify-center",children:Object(m.jsx)("div",{children:u.a.capitalize(t)})})})},j=["a","e","i","o","u"],v=function StepToComplete(e){var t=e.name,a=e.options,n=e.onStepCompleted;return Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{className:"mb1",children:["Choose ",j.includes(t[0])?"an":"a"," ",t]}),Object(m.jsx)("div",{className:"flex",children:a.map((function(e){return Object(m.jsx)("div",{className:"mr2",onClick:function onClick(){return n(e)},children:Object(m.jsx)(b,{name:e.name})},e.id)}))})]})},h=(a(38),a(11)),O={},g=a(39),p=Object(h.a)(g.keys());try{for(p.s();!(n=p.n()).done;){var w=n.value,C=w.match(/\.\/([a-zA-Z]*)\.svg$/)[1];O[C]=g(w).default}}catch(V){p.e(V)}finally{p.f()}var S,M=function getAsset(e){return O[e]||""},x=function RawMaterials(e){var t=e.rawMaterials;return Object(m.jsxs)("div",{className:"flex flex-column",children:[Object(m.jsx)("div",{className:"mb2",children:"Raw materials:"}),Object(m.jsx)("div",{className:"flex",children:t.map((function(e,t){return Object(m.jsx)("div",{className:"mr2",children:Object(m.jsx)(k,{rawMaterial:e})},"".concat(e.item.id,".").concat(t))}))})]})},k=function RawMaterial(e){var t=e.rawMaterial,a=t.quantity,n=t.item,i=u.a.capitalize(n.name);return Object(m.jsxs)("div",{className:"resource-container bg-rarity-".concat(n.rarity," | relative"),title:i,children:[Object(m.jsx)("img",{src:M(n.id),alt:i,className:"resource-image"}),Object(m.jsx)("div",{className:"resource-count | absolute cursor-default",children:a})]})},y=function CraftingSteps(e){var t=e.crafts;return Object(m.jsxs)("div",{className:"flex flex-column",children:[Object(m.jsx)("div",{className:"mb2",children:"Crafting steps:"}),Object(m.jsx)("div",{children:t.map((function(e){return Object(m.jsx)("div",{className:"mb2",children:Object(m.jsx)(z,{craft:e})},e.craftingResult.item.id)}))})]})},z=function CraftingStep(e){var t=e.craft;return Object(m.jsxs)("div",{className:"flex items-center",children:[t.craftingMaterials.map((function(e,t){return Object(m.jsxs)("div",{className:"flex items-center",children:[t>0?Object(m.jsx)("div",{className:"mh1",children:"+"}):null,Object(m.jsx)(k,{rawMaterial:e})]},"".concat(e.item.id,".").concat(t))})),Object(m.jsx)("div",{className:"mh1",children:"="}),Object(m.jsx)(k,{rawMaterial:t.craftingResult}),Object(m.jsxs)("div",{className:"ml1",children:["(",t.craftingResult.item.professions.map((function(e){return u.a.capitalize(e)})).join(" or "),")"]})]})},E=Object(i.memo)((function(e){var t=e.item,a=e.onItemCustomized,n=t.getCustomizableComponents(),r=Object(i.useState)(n.map((function(){return!1}))),c=Object(l.a)(r,2),s=c[0],o=c[1];return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"mb2",children:"Choose your stats"}),n.map((function(e,t){return Object(m.jsx)(I,{component:e,onComponentCustomized:function onComponentCustomized(){return function onComponentCustomized(e){s[e]=!0,o(s),s.every((function(e){return e}))&&a()}(t)},componentIndex:t+1},"".concat(e.id,".").concat(t))}))]})})),I=Object(i.memo)((function(e){var t=e.component,a=e.onComponentCustomized,n=e.componentIndex,r=Object(i.useState)(t.getCustomizationOptions()),c=Object(l.a)(r,1)[0],s=Object(i.useState)(-1),o=Object(l.a)(s,2),u=o[0],f=o[1],d=Object(i.useCallback)((function(e,n){f(n),t.customize(e),a()}),[f,t,a]);return Object(m.jsxs)("div",{className:"mb3",children:[Object(m.jsxs)("div",{className:"mb1",children:[n,". ",t.name]}),Object(m.jsx)("div",{className:"flex ml3",children:c.map((function(e,t){return Object(m.jsx)("div",{className:"mr2",children:Object(m.jsx)(N,{option:e,index:t,onOptionSelected:d,isSelected:u===t})},e.id)}))})]})})),N=Object(i.memo)((function(e){var t=e.option,a=e.index,n=e.onOptionSelected,i=e.isSelected?"bg-mauve-taupe":"bg-verdigris";return Object(m.jsx)("div",{className:"".concat(i," pa2 dib pointer"),onClick:function selectOption(){n(t,a)},children:Object(m.jsx)("div",{className:"flex items-center justify-center",children:t.getCustomizationEffect()})})})),R=a(0),L=[],A=a(67),D=Object(h.a)(A.keys());try{for(D.s();!(S=D.n()).done;){var B=S.value,T=B.match(/\/([a-zA-Z-]*)\.js$/)[1].split("-").map(u.a.capitalize).join("");L.push(A(B)[T])}}catch(V){D.e(V)}finally{D.f()}var U=function ItemSearch(e){var t=e.onItemSelected,a=L.map((function(e){return new e})).filter((function(e){return e.isCraftable}));return Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:"mb2",children:"Find an item you want to craft:"}),Object(m.jsx)("div",{className:"flex mb3",children:a.map((function(e){return Object(m.jsx)("div",{className:"mr2",children:Object(m.jsx)(F,{item:e,onItemSelected:t})},e.id)}))})]})},F=function Item(e){var t=e.item,a=e.onItemSelected;return Object(m.jsx)("div",{className:"mr2 pointer",onClick:function selectItem(){a(t)},children:Object(m.jsx)(k,{rawMaterial:new R.a(null,t)})})},P=function Option(e,t,a){Object(o.a)(this,Option),this.id=e,this.name=t,this.nextFilterId=a},W=function Crafting(){var e=Object(i.useState)(null),t=Object(l.a)(e,2),a=t[0],n=t[1],r=Object(i.useState)(null),c=Object(l.a)(r,2),s=c[0],o=c[1],u=Object(i.useState)(null),f=Object(l.a)(u,2),b=f[0],j=f[1],h=Object(i.useState)(null),O=Object(l.a)(h,2),g=O[0],p=O[1],w=Object(i.useState)(null),C=Object(l.a)(w,2),S=C[0],M=C[1];Object(i.useEffect)((function(){a&&a.setRarity((s||{}).id)}),[a,s]),Object(i.useEffect)((function(){if(S){var e=a.getCraftingRundown(),t=e.rawMaterials,n=e.crafts;j(t),p(n)}}),[S,a,j,p]);var k=function reset(){o(null),j(null),p(null),M(null)},z=Object(i.useCallback)((function(){M(!0)}),[M]);return Object(m.jsxs)("div",{className:"mv3",children:[Object(m.jsx)(U,{onItemSelected:function selectItemToCraft(e){n(e),k()}}),a&&!s?Object(m.jsx)("div",{className:"mb3",children:Object(m.jsx)(v,{name:"rarity",options:a.rarities.map((function(e){return new P(e,e,null)})),onStepCompleted:function completeRarityStep(e){o(e),M(!a.isCustomizable())}})}):null,s?Object(m.jsx)("div",{className:"mb3",children:Object(m.jsx)(d,{name:"rarity",choice:s,onStepCanceled:k})}):null,s&&a.isCustomizable()?Object(m.jsx)("div",{className:"mb3",children:Object(m.jsx)(E,{item:a,onItemCustomized:z})}):null,b?Object(m.jsx)("div",{className:"mb3",children:Object(m.jsx)(x,{rawMaterials:b})}):null,g?Object(m.jsx)("div",{className:"mb3",children:Object(m.jsx)(y,{crafts:g})}):null]})},q=a.p+"static/media/logo.a0751731.svg",H=function Header(e){var t=e.className;return Object(m.jsx)("div",{className:t+" flex items-center bg-marine bb bw1",children:Object(m.jsx)("img",{src:q,alt:"Crowcraft logo",className:"h-50"})})},_=function Content(e){var t=e.className,a=e.children;return Object(m.jsx)("div",{className:t,children:a})},G=function Footer(e){var t=e.className;return Object(m.jsxs)("div",{className:t+" flex flex-column items-center justify-center f7 bg-marine",children:[Object(m.jsx)("div",{children:"Crowcraft is sponsored by Valeria Gaming"}),Object(m.jsxs)("div",{children:["Made with \u2764 by ",Object(m.jsx)("a",{href:"https://github.com/Guillaume-Docquier/guillaume-docquier.github.io/projects/1",target:"_blank",rel:"noopener noreferrer",children:"Guike"})]}),Object(m.jsx)("div",{children:"Special thanks to Upem, Bluezinhaaa and Shilana"})]})},J=function Layout(e){var t=e.children;return Object(m.jsxs)("div",{className:"bg-charcoal peach-puff",children:[Object(m.jsx)(H,{className:"h3 nmb5 ph7"}),Object(m.jsx)(_,{className:"pv5 ph7 min-vh-100",children:t}),Object(m.jsx)(G,{className:"h3 nmt5 ph7"})]})},Q=function App(){return Object(m.jsx)(J,{children:Object(m.jsx)(W,{})})},K=function reportWebVitals(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,70)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),i(e),r(e),c(e)}))};s.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(Q,{})}),document.getElementById("root")),K()}],[[69,1,2]]]);
//# sourceMappingURL=main.71aff8f4.chunk.js.map