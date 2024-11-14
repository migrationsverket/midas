import{j as t}from"./jsx-runtime-Nms4Y4qS.js";import{c as _}from"./clsx-B-dksMZM.js";import{C as r}from"./Card-DK9KZ5WE.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Link-4I1gqMO5.js";import"./Link-XcigMV-L.js";import"./useFocusable-C6jNUHDg.js";import"./index-Drt3gf4w.js";import"./createLucideIcon-WuqQdmgs.js";const k='"../../../theme/src/lib/tokens.css"',u="(min-width: 768px)",g="(min-width: 1200px)",p="(min-width: 1440px)",h="_container_18og4_4",x="_grid_18og4_16",j="_fluid_18og4_45",y="_col_18og4_52",l={tokens:k,mdBreakpoint:u,lgBreakpoint:g,xlBreakpoint:p,container:h,grid:x,fluid:j,col:y,"col-1":"_col-1_18og4_58","col-2":"_col-2_18og4_62","col-3":"_col-3_18og4_66","col-4":"_col-4_18og4_70","col-5":"_col-5_18og4_74","col-6":"_col-6_18og4_78","col-7":"_col-7_18og4_82","col-8":"_col-8_18og4_86","col-9":"_col-9_18og4_90","col-10":"_col-10_18og4_94","col-11":"_col-11_18og4_98","col-12":"_col-12_18og4_102","offset-1":"_offset-1_18og4_106","offset-2":"_offset-2_18og4_110","offset-3":"_offset-3_18og4_114","offset-4":"_offset-4_18og4_118","offset-5":"_offset-5_18og4_122","offset-6":"_offset-6_18og4_126","offset-7":"_offset-7_18og4_130","offset-8":"_offset-8_18og4_134","offset-9":"_offset-9_18og4_138","offset-10":"_offset-10_18og4_142","offset-11":"_offset-11_18og4_146"},s=({children:o,fluid:i,...n})=>t.jsx("div",{className:_(l.container,i&&l.fluid,n.className),...n,children:t.jsx("div",{className:l.grid,children:o})});try{s.displayName="Grid",s.__docgenInfo={description:`Grid baserat på display: grid;
Använder grid-template för att bygga rätt antal kolumner per breakpoint.

### Children
Använd "grid-column: span $antalKollumner';" för att låta en child växa över flera kolumner.`,displayName:"Grid",props:{fluid:{defaultValue:null,description:"Tar bort alla marginaler för nestad användning",name:"fluid",required:!1,type:{name:"boolean"}}}}}catch{}const e=({children:o,col:i,...n})=>{const f=i?`col-${i}`:"";return t.jsx("div",{className:_(l.col,l[f],n.className),...n,children:o})};try{e.displayName="GridItem",e.__docgenInfo={description:"",displayName:"GridItem",props:{col:{defaultValue:null,description:"",name:"col",required:!1,type:{name:'"1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12'}}}}}catch{}const F={component:s,title:"Components/Grid",tags:["autodocs"],parameters:{layout:"fullscreen"},argTypes:{fluid:{description:"Tar bort alla marginaler för nestad användning. Ha gärna marginal om den används över hela sidan",control:{type:"boolean"}}}},a={args:{},render:({...o})=>t.jsxs(s,{fluid:o.fluid,children:[t.jsx(e,{col:3,children:t.jsx(r,{title:"Ett kort",content:"Som är i tre kolumner",link:{title:"Länk",href:"#"}})}),t.jsx(e,{col:3,children:t.jsx(r,{title:"Ett kort",content:"Som är i tre kolumner",link:{title:"Länk",href:"#"}})}),t.jsx(e,{col:6,children:t.jsx(r,{title:"Ett kort",content:"Som är i sex kolumner",link:{title:"Länk",href:"#"}})}),t.jsx(e,{col:4,children:t.jsx(r,{title:"Ett kort",content:"Som är i fyra kolumner",link:{title:"Länk",href:"#"}})}),t.jsx(e,{col:4,children:t.jsx(r,{title:"Ett kort",content:"Som är i fyra kolumner",link:{title:"Länk",href:"#"}})}),t.jsx(e,{col:4,children:t.jsx(r,{title:"Ett kort",content:"Som är i ett grid men just detta kort har väldigt mycket text för att illustrera att de andra också växer på höjden.",link:{title:"Länk",href:"#"}})}),t.jsx(e,{col:10,children:t.jsx(r,{title:"Ett kort",content:"Som är utan kolumner",link:{title:"Länk",href:"#"}})})]})};var c,d,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {},
  render: ({
    ...args
  }) => <Grid fluid={args.fluid}>
      <GridItem col={3}>
        <Card title={'Ett kort'} content={'Som är i tre kolumner'} link={{
        title: 'Länk',
        href: '#'
      }} />
      </GridItem>
      <GridItem col={3}>
        <Card title={'Ett kort'} content={'Som är i tre kolumner'} link={{
        title: 'Länk',
        href: '#'
      }} />
      </GridItem>
      <GridItem col={6}>
        <Card title={'Ett kort'} content={'Som är i sex kolumner'} link={{
        title: 'Länk',
        href: '#'
      }} />
      </GridItem>
      <GridItem col={4}>
        <Card title={'Ett kort'} content={'Som är i fyra kolumner'} link={{
        title: 'Länk',
        href: '#'
      }} />
      </GridItem>
      <GridItem col={4}>
        <Card title={'Ett kort'} content={'Som är i fyra kolumner'} link={{
        title: 'Länk',
        href: '#'
      }} />
      </GridItem>
      <GridItem col={4}>
        <Card title={'Ett kort'} content={'Som är i ett grid men just detta kort har väldigt mycket text för att illustrera att de andra också växer på höjden.'} link={{
        title: 'Länk',
        href: '#'
      }} />
      </GridItem>
      <GridItem col={10}>
        <Card title={'Ett kort'} content={'Som är utan kolumner'} link={{
        title: 'Länk',
        href: '#'
      }} />
      </GridItem>
    </Grid>
}`,...(m=(d=a.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const w=["Primary"];export{a as Primary,w as __namedExportsOrder,F as default};
