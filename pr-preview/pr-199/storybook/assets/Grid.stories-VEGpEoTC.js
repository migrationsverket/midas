import{j as t}from"./jsx-runtime-CfatFE5O.js";import{c as _}from"./clsx-B-dksMZM.js";import{C as r}from"./Card-C-lhKQaD.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Link-8EFZCPON.js";import"./Link-DKIb2naE.js";import"./useFocusable-CI7IKKVh.js";import"./index-ZuzByk-F.js";import"./createLucideIcon-DQK9Z80p.js";const k='"../../../theme/src/lib/tokens.css"',u="(min-width: 768px)",p="(min-width: 1200px)",g="(min-width: 1440px)",h="_container_18og4_4",x="_grid_18og4_16",G="_fluid_18og4_45",j="_col_18og4_52",i={tokens:k,mdBreakpoint:u,lgBreakpoint:p,xlBreakpoint:g,container:h,grid:x,fluid:G,col:j,"col-1":"_col-1_18og4_58","col-2":"_col-2_18og4_62","col-3":"_col-3_18og4_66","col-4":"_col-4_18og4_70","col-5":"_col-5_18og4_74","col-6":"_col-6_18og4_78","col-7":"_col-7_18og4_82","col-8":"_col-8_18og4_86","col-9":"_col-9_18og4_90","col-10":"_col-10_18og4_94","col-11":"_col-11_18og4_98","col-12":"_col-12_18og4_102","offset-1":"_offset-1_18og4_106","offset-2":"_offset-2_18og4_110","offset-3":"_offset-3_18og4_114","offset-4":"_offset-4_18og4_118","offset-5":"_offset-5_18og4_122","offset-6":"_offset-6_18og4_126","offset-7":"_offset-7_18og4_130","offset-8":"_offset-8_18og4_134","offset-9":"_offset-9_18og4_138","offset-10":"_offset-10_18og4_142","offset-11":"_offset-11_18og4_146"},s=({children:o,fluid:l=!1,...n})=>t.jsx("div",{className:_(i.container,l&&i.fluid,n.className),...n,children:t.jsx("div",{className:i.grid,children:o})});try{s.displayName="Grid",s.__docgenInfo={description:`Grid based on display: grid;
Calculates breakpoints and distributes columns according to MV specifications

### Children
Use GridItem to manage each column.
GridItem accepts values of 1 through 12 and auto.`,displayName:"Grid",props:{fluid:{defaultValue:{value:"false"},description:"Removes outer margins for nested use. First Flex on a page should have outer margins.",name:"fluid",required:!1,type:{name:"boolean"}}}}}catch{}const e=({children:o,col:l,...n})=>{const f=l?`col-${l}`:"";return t.jsx("div",{className:_(i.col,i[f],n.className),...n,children:o})};try{e.displayName="GridItem",e.__docgenInfo={description:"",displayName:"GridItem",props:{col:{defaultValue:null,description:"Column size and behaviour",name:"col",required:!1,type:{name:'"1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12'}}}}}catch{}const w={component:s,title:"Components/Grid",tags:["autodocs"],parameters:{layout:"fullscreen"},argTypes:{fluid:{control:{type:"boolean"}}}},c={args:{},render:({...o})=>t.jsxs(s,{fluid:o.fluid,children:[t.jsx(e,{col:3,children:t.jsx(r,{title:"Ett kort",content:"Som är i tre kolumner",link:{children:"Länk",href:"#"}})}),t.jsx(e,{col:3,children:t.jsx(r,{title:"Ett kort",content:"Som är i tre kolumner",link:{children:"Länk",href:"#"}})}),t.jsx(e,{col:6,children:t.jsx(r,{title:"Ett kort",content:"Som är i sex kolumner",link:{children:"Länk",href:"#"}})}),t.jsx(e,{col:4,children:t.jsx(r,{title:"Ett kort",content:"Som är i fyra kolumner",link:{children:"Länk",href:"#"}})}),t.jsx(e,{col:4,children:t.jsx(r,{title:"Ett kort",content:"Som är i fyra kolumner",link:{children:"Länk",href:"#"}})}),t.jsx(e,{col:4,children:t.jsx(r,{title:"Ett kort",content:"Som är i ett grid men just detta kort har väldigt mycket text för att illustrera att de andra också växer på höjden.",link:{children:"Länk",href:"#"}})}),t.jsx(e,{col:10,children:t.jsx(r,{title:"Ett kort",content:"Som är utan kolumner",link:{children:"Länk",href:"#"}})})]})};var d,a,m;c.parameters={...c.parameters,docs:{...(d=c.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {},
  render: ({
    ...args
  }) => <Grid fluid={args.fluid}>
      <GridItem col={3}>
        <Card title={'Ett kort'} content={'Som är i tre kolumner'} link={{
        children: 'Länk',
        href: '#'
      }} />
      </GridItem>
      <GridItem col={3}>
        <Card title={'Ett kort'} content={'Som är i tre kolumner'} link={{
        children: 'Länk',
        href: '#'
      }} />
      </GridItem>
      <GridItem col={6}>
        <Card title={'Ett kort'} content={'Som är i sex kolumner'} link={{
        children: 'Länk',
        href: '#'
      }} />
      </GridItem>
      <GridItem col={4}>
        <Card title={'Ett kort'} content={'Som är i fyra kolumner'} link={{
        children: 'Länk',
        href: '#'
      }} />
      </GridItem>
      <GridItem col={4}>
        <Card title={'Ett kort'} content={'Som är i fyra kolumner'} link={{
        children: 'Länk',
        href: '#'
      }} />
      </GridItem>
      <GridItem col={4}>
        <Card title={'Ett kort'} content={'Som är i ett grid men just detta kort har väldigt mycket text för att illustrera att de andra också växer på höjden.'} link={{
        children: 'Länk',
        href: '#'
      }} />
      </GridItem>
      <GridItem col={10}>
        <Card title={'Ett kort'} content={'Som är utan kolumner'} link={{
        children: 'Länk',
        href: '#'
      }} />
      </GridItem>
    </Grid>
}`,...(m=(a=c.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};const V=["Primary"];export{c as Primary,V as __namedExportsOrder,w as default};
