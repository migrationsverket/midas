import{j as t}from"./jsx-runtime-Nms4Y4qS.js";import{c as m}from"./clsx-B-dksMZM.js";import{C as r}from"./Card-CZrxMNwa.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Link-Dz3AwjVg.js";import"./Link-CrtbMkfd.js";import"./useFocusable-C3Zwbx3S.js";import"./index-Drt3gf4w.js";import"./createLucideIcon-WuqQdmgs.js";const f='"../../../theme/src/lib/tokens.css"',u="(min-width: 768px)",p="(min-width: 1200px)",y="(min-width: 1440px)",h="_container_1yke4_4",x="_grid_1yke4_16",g="_fluid_1yke4_45",G="_col_1yke4_52",l={tokens:f,mdBreakpoint:u,lgBreakpoint:p,xlBreakpoint:y,container:h,grid:x,fluid:g,col:G,"col-1":"_col-1_1yke4_57","col-2":"_col-2_1yke4_61","col-3":"_col-3_1yke4_65","col-4":"_col-4_1yke4_69","col-5":"_col-5_1yke4_73","col-6":"_col-6_1yke4_77","col-7":"_col-7_1yke4_81","col-8":"_col-8_1yke4_85","col-9":"_col-9_1yke4_89","col-10":"_col-10_1yke4_93","col-11":"_col-11_1yke4_97","col-12":"_col-12_1yke4_101","offset-1":"_offset-1_1yke4_105","offset-2":"_offset-2_1yke4_109","offset-3":"_offset-3_1yke4_113","offset-4":"_offset-4_1yke4_117","offset-5":"_offset-5_1yke4_121","offset-6":"_offset-6_1yke4_125","offset-7":"_offset-7_1yke4_129","offset-8":"_offset-8_1yke4_133","offset-9":"_offset-9_1yke4_137","offset-10":"_offset-10_1yke4_141","offset-11":"_offset-11_1yke4_145"},c=({children:n,fluid:i,...o})=>t.jsx("div",{className:m(l.container,i&&l.fluid,o.className),...o,children:t.jsx("div",{className:l.grid,children:n})});try{c.displayName="Grid",c.__docgenInfo={description:`Grid baserat på display: grid;
Använder grid-template för att bygga rätt antal kolumner per breakpoint.

### Children
Använd "grid-column: span $antalKollumner';" för att låta en child växa över flera kolumner.`,displayName:"Grid",props:{fluid:{defaultValue:null,description:"Tar bort alla marginaler för nestad användning",name:"fluid",required:!1,type:{name:"boolean"}}}}}catch{}const e=({children:n,col:i,...o})=>{const k=i?`col-${i}`:"";return t.jsx("div",{className:m(l.col,l[k],o.className),...o,children:n})};try{e.displayName="GridItem",e.__docgenInfo={description:"",displayName:"GridItem",props:{col:{defaultValue:null,description:"",name:"col",required:!1,type:{name:'"1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12'}}}}}catch{}const F={component:c,title:"Components/Grid",tags:["autodocs"],parameters:{layout:"fullscreen"},argTypes:{fluid:{description:"Tar bort alla marginaler för nestad användning. Ha gärna marginal om den används över hela sidan",control:{type:"boolean"}}}},a={args:{},render:({...n})=>t.jsxs(c,{fluid:n.fluid,children:[t.jsx(e,{col:3,children:t.jsx(r,{title:"Ett kort",content:"Som är i tre kolumner",link:{title:"Länk",href:"#"}})}),t.jsx(e,{col:3,children:t.jsx(r,{title:"Ett kort",content:"Som är i tre kolumner",link:{title:"Länk",href:"#"}})}),t.jsx(e,{col:6,children:t.jsx(r,{title:"Ett kort",content:"Som är i sex kolumner",link:{title:"Länk",href:"#"}})}),t.jsx(e,{col:4,children:t.jsx(r,{title:"Ett kort",content:"Som är i fyra kolumner",link:{title:"Länk",href:"#"}})}),t.jsx(e,{col:4,children:t.jsx(r,{title:"Ett kort",content:"Som är i fyra kolumner",link:{title:"Länk",href:"#"}})}),t.jsx(e,{col:4,children:t.jsx(r,{title:"Ett kort",content:"Som är i fyra kolumner",link:{title:"Länk",href:"#"}})}),t.jsx(e,{col:10,children:t.jsx(r,{title:"Ett kort",content:"Som är utan kolumner",link:{title:"Länk",href:"#"}})})]})};var s,d,_;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
        <Card title={'Ett kort'} content={'Som är i fyra kolumner'} link={{
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
}`,...(_=(d=a.parameters)==null?void 0:d.docs)==null?void 0:_.source}}};const w=["Primary"];export{a as Primary,w as __namedExportsOrder,F as default};
