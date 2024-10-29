import{j as t}from"./jsx-runtime-Nms4Y4qS.js";import{c as _}from"./clsx-B-dksMZM.js";import{C as e}from"./Card-D52d2RhA.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./createLucideIcon-WuqQdmgs.js";const u='"../../../theme/src/lib/tokens.css"',p="(min-width: 768px)",y="(min-width: 1200px)",k="(min-width: 1440px)",x="_container_1fy3z_4",g="_grid_1fy3z_16",z="_fluid_1fy3z_44",G="_col_1fy3z_51",l={tokens:u,mdBreakpoint:p,lgBreakpoint:y,xlBreakpoint:k,container:x,grid:g,fluid:z,col:G,"col-1":"_col-1_1fy3z_56","col-2":"_col-2_1fy3z_60","col-3":"_col-3_1fy3z_64","col-4":"_col-4_1fy3z_68","col-5":"_col-5_1fy3z_72","col-6":"_col-6_1fy3z_76","col-7":"_col-7_1fy3z_80","col-8":"_col-8_1fy3z_84","col-9":"_col-9_1fy3z_88","col-10":"_col-10_1fy3z_92","col-11":"_col-11_1fy3z_96","col-12":"_col-12_1fy3z_100","offset-1":"_offset-1_1fy3z_104","offset-2":"_offset-2_1fy3z_108","offset-3":"_offset-3_1fy3z_112","offset-4":"_offset-4_1fy3z_116","offset-5":"_offset-5_1fy3z_120","offset-6":"_offset-6_1fy3z_124","offset-7":"_offset-7_1fy3z_128","offset-8":"_offset-8_1fy3z_132","offset-9":"_offset-9_1fy3z_136","offset-10":"_offset-10_1fy3z_140","offset-11":"_offset-11_1fy3z_144"},c=({children:r,fluid:i,...n})=>t.jsx("div",{className:_(l.container,i&&l.fluid,n.className),...n,children:t.jsx("div",{className:l.grid,children:r})});try{c.displayName="Grid",c.__docgenInfo={description:`Grid baserat på display: grid;
Använder grid-template för att bygga rätt antal kolumner per breakpoint.

### Children
Använd "grid-column: span $antalKollumner';" för att låta en child växa över flera kolumner.`,displayName:"Grid",props:{fluid:{defaultValue:null,description:"Tar bort alla marginaler för nestad användning",name:"fluid",required:!1,type:{name:"boolean"}}}}}catch{}const o=({children:r,col:i,...n})=>{const m=i?`col-${i}`:"";return t.jsx("div",{className:_(l.col,l[m],n.className),...n,children:r})};try{o.displayName="GridItem",o.__docgenInfo={description:"",displayName:"GridItem",props:{col:{defaultValue:null,description:"",name:"col",required:!1,type:{name:'"1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12'}}}}}catch{}const v={component:c,title:"Components/Grid",tags:["autodocs"],parameters:{layout:"fullscreen"},argTypes:{fluid:{description:"Tar bort alla marginaler för nestad användning. Ha gärna marginal om den används över hela sidan",control:{type:"boolean"}}}},a={args:{},render:({...r})=>t.jsxs(c,{fluid:r.fluid,children:[t.jsx(o,{col:3,children:t.jsx(e,{title:"Ett kort",content:"Som är i tre kolumner"})}),t.jsx(o,{col:3,children:t.jsx(e,{title:"Ett kort",content:"Som är i tre kolumner"})}),t.jsx(o,{col:6,children:t.jsx(e,{title:"Ett kort",content:"Som är i sex kolumner"})}),t.jsx(o,{col:4,children:t.jsx(e,{title:"Ett kort",content:"Som är i fyra kolumner"})}),t.jsx(o,{col:4,children:t.jsx(e,{title:"Ett kort",content:"Som är i fyra kolumner"})}),t.jsx(o,{col:4,children:t.jsx(e,{title:"Ett kort",content:"Som är i fyra kolumner"})}),t.jsx(o,{col:10,children:t.jsx(e,{title:"Ett kort",content:"Som är utan kolumner"})})]})};var s,d,f;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {},
  render: ({
    ...args
  }) => <Grid fluid={args.fluid}>
      <GridItem col={3}>
        <Card title={'Ett kort'} content={'Som är i tre kolumner'} />
      </GridItem>
      <GridItem col={3}>
        <Card title={'Ett kort'} content={'Som är i tre kolumner'} />
      </GridItem>
      <GridItem col={6}>
        <Card title={'Ett kort'} content={'Som är i sex kolumner'} />
      </GridItem>
      <GridItem col={4}>
        <Card title={'Ett kort'} content={'Som är i fyra kolumner'} />
      </GridItem>
      <GridItem col={4}>
        <Card title={'Ett kort'} content={'Som är i fyra kolumner'} />
      </GridItem>
      <GridItem col={4}>
        <Card title={'Ett kort'} content={'Som är i fyra kolumner'} />
      </GridItem>
      <GridItem col={10}>
        <Card title={'Ett kort'} content={'Som är utan kolumner'} />
      </GridItem>
    </Grid>
}`,...(f=(d=a.parameters)==null?void 0:d.docs)==null?void 0:f.source}}};const N=["Primary"];export{a as Primary,N as __namedExportsOrder,v as default};
