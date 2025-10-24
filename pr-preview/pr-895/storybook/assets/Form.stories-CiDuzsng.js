import{j as n}from"./iframe-B4SDttZa.js";import{$ as j}from"./Form-CEwiDpit.js";import{G}from"./Grid-C06rTNZG.js";import{G as e}from"./GridItem-ClcTrm1Z.js";import{T as r}from"./TextField-Ssbqycxr.js";import{S as I}from"./Select-B6jlK-oM.js";import{B as a}from"./Button-DMkclJj6.js";import{R as g,a as b}from"./Radio-Ca_zhoUc.js";import{C as h}from"./CheckboxGroup-DBjnAOnb.js";import{C as k}from"./Checkbox-BerV6gr4.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-Co4_NxoW.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-pjBUGbW4.js";import"./useFocusRing-ZdNdVLy0.js";import"./index-1wT4E2hy.js";import"./index-DzgdvtKt.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-DkeOcDY2.js";import"./TextField-DEPNpbe_.js";import"./FieldError-WKKd3JKA.js";import"./Text-DJLerCFF.js";import"./Text-DzpP1L3F.js";import"./RSPContexts-DnFNlqwb.js";import"./Group-C866qaYv.js";import"./Input-DZnL0A4v.js";import"./Hidden-Dpcyv_Al.js";import"./Button-CMWMHUfy.js";import"./useLabels-BcFWhPs7.js";import"./useButton-BNPSV2SD.js";import"./useTextField-BH3UesAV.js";import"./useControlledState-Dtuecy6i.js";import"./useField-DNOOa30p.js";import"./TextField.module-Ddb2XBAw.js";import"./Label-DtkusK3l.js";import"./Dialog-Dhg6JvGS.js";import"./OverlayArrow-B91-vBM1.js";import"./useResizeObserver-_gIfKjXy.js";import"./Collection-BdFyERmT.js";import"./index-wwSxSyQ5.js";import"./Separator-DXdJzNxz.js";import"./SelectionManager-B_Q4B8tW.js";import"./useEvent-x1kVzaYA.js";import"./scrollIntoView-Bu_1kzm1.js";import"./SelectionIndicator-BV5g4yxw.js";import"./useDescription-CCN653nz.js";import"./ListKeyboardDelegate-DssevhGn.js";import"./PressResponder-CAddmsms.js";import"./useLocalizedStringFormatter-BADtup5V.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-BS1zMP2o.js";import"./VisuallyHidden-B7wMnfZB.js";import"./useLocalizedStringFormatter-Cc3ES3Ao.js";import"./x-D2jLWzcP.js";import"./createLucideIcon-C15_VcCG.js";import"./Heading-CxqfHeCC.js";import"./info-CO1KOJiT.js";import"./Popover-CjLZyzoM.js";import"./Tag-D46j0APE.js";import"./ListBox-BdaQfqiv.js";import"./DragAndDrop-CFHlVVE6.js";import"./inertValue-DMQH1Qd3.js";import"./useListState-DLyKizfb.js";import"./useHighlightSelectionDescription-DdCQMCV_.js";import"./useUpdateEffect-LuDf439T.js";import"./useHasTabbableChild-BiFnSxR8.js";import"./check-CdymrK_H.js";import"./ListBoxSection-BOJX0k0t.js";import"./Virtualizer-Bj_-Ay6y.js";import"./chevron-down-C79q3e3W.js";import"./Button.module-CcWMkJAG.js";import"./useToggleState-BvM87uyK.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const ITEMS = ['Banan', 'Apple', 'Mango'];
    return <Grid>
        <GridItem size={12}>
          <TextField label='Ange ditt fullständiga namn' description='Glöm inte dina eventuella mellannamn!' />
        </GridItem>
        <GridItem size={12}>
          <TextField label='Personnummmer' description='Anges på formen ÅÅMMDD-XXXX' />
        </GridItem>
        <GridItem size={12}>
          <Select label='Vilken är din favoritfrukt' placeholder='Välj en frukt' selectionMode='single' options={ITEMS.map(i => ({
          id: i,
          name: i
        }))} />
        </GridItem>

        <GridItem>
          <Button>Skicka</Button>
        </GridItem>
      </Grid>;
  }
}`,...(p=(l=m.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var c,x,u;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const ITEMS = ['A', 'B', 'C'];
    const RADIOITEMS = ['Anledning A', 'Anledning B', 'Anledning C'];
    return <div>
        <Grid>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <RadioGroup label='Anledning' description='Ange anledning till att du söker i databasen'>
              {RADIOITEMS.map((item: string) => <Radio value={item} key={item}>
                  {item}
                </Radio>)}
            </RadioGroup>
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <CheckboxGroup label='Databas' description='Välj databas att söka i'>
              {ITEMS.map((item: string) => <Checkbox value={item} key={item}>
                  {item}
                </Checkbox>)}
            </CheckboxGroup>
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <TextField label='Namn' description='' />
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <TextField label='Personnummer' />
          </GridItem>

          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <Select label='Kön' description='Kan lämnas tomt' placeholder='Välj kön' selectionMode='single' options={ITEMS.map(i => ({
            name: i,
            id: i
          }))} />
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <TextField label='Ärendekod' />
          </GridItem>

          <GridItem size='auto'>
            <Button>Sök</Button>
          </GridItem>
          <GridItem size='auto'>
            <Button variant='secondary'>Rensa</Button>
          </GridItem>
        </Grid>
      </div>;
  }
}`,...(u=(x=s.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};const wn=["SimpleForm","TwoColumnForm"];export{m as SimpleForm,s as TwoColumnForm,wn as __namedExportsOrder,$n as default};
