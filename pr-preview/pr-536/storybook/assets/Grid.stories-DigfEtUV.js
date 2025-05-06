import{j as t}from"./jsx-runtime-DtgEGaVE.js";import{c as u}from"./clsx-B-dksMZM.js";import{C as r}from"./Card-DGvS_VFa.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-C6eeUJZ7.js";import"./utils-Dv9Ux5aE.js";import"./ProgressBar-DJC3JvQN.js";import"./Label-Cr3pFc-x.js";import"./Hidden-lswqw32w.js";import"./filterDOMProps-BSfnXAP7.js";import"./useLabel-BAqrTMfP.js";import"./context-oTIQb5ND.js";import"./NumberFormatter-DT0cDaax.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./useButton-BH_mgHDo.js";import"./usePress-COtC8Zcb.js";import"./useFocusRing-CPQALXIu.js";import"./index-cpIEhwLo.js";import"./useFocusable-b_0ijIRa.js";import"./Link-slNGPAHu.js";import"./arrow-right-DnGf4Axc.js";import"./createLucideIcon-8wDOqnHv.js";import"./Heading-DmTsGMz3.js";import"./RSPContexts-CeCCo7XS.js";const f='"../theme/tokens.css"',p="_container_162ou_4",k="_grid_162ou_16",h="_fluid_162ou_45",v="_col_162ou_52",l={tokens:f,"--breakpoint-md":"(min-width: 768px)","--breakpoint-lg":"(min-width: 1200px)","--breakpoint-xl":"(min-width: 1440px)",container:p,grid:k,fluid:h,col:v,"col-1":"_col-1_162ou_58","col-2":"_col-2_162ou_62","col-3":"_col-3_162ou_66","col-4":"_col-4_162ou_70","col-5":"_col-5_162ou_74","col-6":"_col-6_162ou_78","col-7":"_col-7_162ou_82","col-8":"_col-8_162ou_86","col-9":"_col-9_162ou_90","col-10":"_col-10_162ou_94","col-11":"_col-11_162ou_98","col-12":"_col-12_162ou_102","offset-1":"_offset-1_162ou_106","offset-2":"_offset-2_162ou_110","offset-3":"_offset-3_162ou_114","offset-4":"_offset-4_162ou_118","offset-5":"_offset-5_162ou_122","offset-6":"_offset-6_162ou_126","offset-7":"_offset-7_162ou_130","offset-8":"_offset-8_162ou_134","offset-9":"_offset-9_162ou_138","offset-10":"_offset-10_162ou_142","offset-11":"_offset-11_162ou_146"},c=({children:o,fluid:i=!1,...n})=>t.jsx("div",{className:u(l.container,i&&l.fluid,n.className),...n,children:t.jsx("div",{className:l.grid,children:o})});try{c.displayName="Grid",c.__docgenInfo={description:`Grid based on display: grid;
Calculates breakpoints and distributes columns according to MV specifications

### Children
Use GridItem to manage each column.
GridItem accepts values of 1 through 12 and auto.`,displayName:"Grid",props:{fluid:{defaultValue:{value:"false"},description:"Removes outer margins for nested use. First Flex on a page should have outer margins.",name:"fluid",required:!1,type:{name:"boolean"}}}}}catch{}const e=({children:o,col:i,...n})=>{const _=i?`col-${i}`:"";return t.jsx("div",{className:u(l.col,l[_],n.className),...n,children:o})};try{e.displayName="GridItem",e.__docgenInfo={description:"",displayName:"GridItem",props:{col:{defaultValue:null,description:"Column size and behaviour",name:"col",required:!1,type:{name:"enum",value:[{value:"1"},{value:'"1"'},{value:'"2"'},{value:'"3"'},{value:'"4"'},{value:'"5"'},{value:'"6"'},{value:'"7"'},{value:'"8"'},{value:'"9"'},{value:'"10"'},{value:'"11"'},{value:'"12"'},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"},{value:"9"},{value:"10"},{value:"11"},{value:"12"}]}}}}}catch{}const B={component:c,title:"Components/Grid",tags:["autodocs"],parameters:{layout:"fullscreen",a11y:{test:"todo"}},argTypes:{fluid:{control:{type:"boolean"}}}},a={args:{},render:({...o})=>t.jsxs(c,{fluid:o.fluid,children:[t.jsx(e,{col:3,children:t.jsx(r,{title:"Ett kort",content:"Som är i tre kolumner",link:{children:"Länk",href:"#"}})}),t.jsx(e,{col:3,children:t.jsx(r,{title:"Ett kort",content:"Som är i tre kolumner",link:{children:"Länk",href:"#"}})}),t.jsx(e,{col:6,children:t.jsx(r,{title:"Ett kort",content:"Som är i sex kolumner",link:{children:"Länk",href:"#"}})}),t.jsx(e,{col:4,children:t.jsx(r,{title:"Ett kort",content:"Som är i fyra kolumner",link:{children:"Länk",href:"#"}})}),t.jsx(e,{col:4,children:t.jsx(r,{title:"Ett kort",content:"Som är i fyra kolumner",link:{children:"Länk",href:"#"}})}),t.jsx(e,{col:4,children:t.jsx(r,{title:"Ett kort",content:"Som är i ett grid men just detta kort har väldigt mycket text för att illustrera att de andra också växer på höjden.",link:{children:"Länk",href:"#"}})}),t.jsx(e,{col:10,children:t.jsx(r,{title:"Ett kort",content:"Som är utan kolumner",link:{children:"Länk",href:"#"}})})]})};var s,d,m;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(m=(d=a.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const D=["Primary"];export{a as Primary,D as __namedExportsOrder,B as default};
