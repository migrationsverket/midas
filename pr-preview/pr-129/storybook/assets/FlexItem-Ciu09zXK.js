import{j as _}from"./jsx-runtime-CfatFE5O.js";import{c as r}from"./clsx-B-dksMZM.js";const i='"../../../theme/src/lib/tokens.css"',v="(min-width: 768px)",u="(min-width: 1200px)",d="(min-width: 1440px)",m="_container_1v2v4_4",p="_flex_1v2v4_16",x="_fluid_1v2v4_52",k="_col_1v2v4_58",e={tokens:i,mdBreakpoint:v,lgBreakpoint:u,xlBreakpoint:d,container:m,flex:p,fluid:x,col:k,"col-1":"_col-1_1v2v4_62","col-2":"_col-2_1v2v4_63","col-3":"_col-3_1v2v4_64","col-4":"_col-4_1v2v4_65","col-5":"_col-5_1v2v4_66","col-6":"_col-6_1v2v4_67","col-7":"_col-7_1v2v4_68","col-8":"_col-8_1v2v4_69","col-9":"_col-9_1v2v4_70","col-10":"_col-10_1v2v4_71","col-11":"_col-11_1v2v4_72","col-12":"_col-12_1v2v4_73","col-auto":"_col-auto_1v2v4_74","offset-1":"_offset-1_1v2v4_128","offset-2":"_offset-2_1v2v4_132","offset-3":"_offset-3_1v2v4_136","offset-4":"_offset-4_1v2v4_140","offset-5":"_offset-5_1v2v4_144","offset-6":"_offset-6_1v2v4_148","offset-7":"_offset-7_1v2v4_152","offset-8":"_offset-8_1v2v4_156","offset-9":"_offset-9_1v2v4_160","offset-10":"_offset-10_1v2v4_164","offset-11":"_offset-11_1v2v4_168"},s=({children:o,fluid:l,...t})=>_.jsx("div",{className:r(e.container,l&&e.fluid,t.className),...t,children:_.jsx("div",{className:e.flex,children:o})});try{s.displayName="Flex",s.__docgenInfo={description:`Grid baserat på display: flex;
Använder en uträkning i flex för att få rätt antal kolumner per breakpoint.

### Children
Utan ytterligare flex-regler lägger sig childs efter 12 kolumner men 1 i mobilt läge.
Använd komponenten FlexItem för att hantera objekt i olika kolumner.
FlexItem accepterar värden från 1 - 12 och auto.
Dessa räknas sedan ut beroende på bestämmelser kring kolumner i olika breakpoints.`,displayName:"Flex",props:{fluid:{defaultValue:null,description:"Tar bort alla marginaler för nestad användning",name:"fluid",required:!1,type:{name:"boolean"}}}}}catch{}const a=({children:o,col:l,offset:t,...n})=>{const c=l?`col-${l}`:"",f=t?`offset-${t}`:"";return _.jsx("div",{className:r(e.col,e[c],e[f],n.className),...n,children:o})};try{a.displayName="FlexItem",a.__docgenInfo={description:"",displayName:"FlexItem",props:{col:{defaultValue:null,description:"",name:"col",required:!1,type:{name:'"1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "auto" | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12'}},offset:{defaultValue:null,description:"",name:"offset",required:!1,type:{name:'"1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12'}}}}}catch{}export{s as F,a};