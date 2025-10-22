import{j as n}from"./iframe-BdZIs7Nq.js";import{$ as j}from"./Form-YNWOlyhh.js";import{G}from"./Grid-D5E3-gZD.js";import{G as e}from"./GridItem-ChkN24D9.js";import{T as r}from"./TextField-DT9nDq8Y.js";import{S as I}from"./Select-C6jCGoNe.js";import{B as a}from"./Button-Cld53E4_.js";import{R as g,a as b}from"./Radio-DNANd3Ow.js";import{C as h}from"./CheckboxGroup-Cb2v1CYD.js";import{C as k}from"./Checkbox-n3NQhYVS.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-9VM7gbof.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-B_lqRWSg.js";import"./useFocusRing-58f0kNXi.js";import"./index-Dx2NAYb_.js";import"./index-CC8Z7BUM.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-CMvIM8tP.js";import"./TextField-BbA2XP1Y.js";import"./FieldError-NIqFs38e.js";import"./Text-gVEPdTqt.js";import"./Text-UHDrKQhH.js";import"./RSPContexts-COiY_WDf.js";import"./Group-D3KCmcYW.js";import"./Input-w9hxd_Hy.js";import"./Hidden-CCsMENpc.js";import"./Button-DZ1TXkhS.js";import"./useLabels-C37pHCj4.js";import"./useButton-wvX2NSPw.js";import"./useTextField-DqBdrLdh.js";import"./useControlledState-B1Csoh4W.js";import"./useField-9VKnv8gt.js";import"./TextField.module-Ddb2XBAw.js";import"./Label-Dq_oA2d7.js";import"./Dialog-A_LiVJa1.js";import"./OverlayArrow-DwUrLiOe.js";import"./useResizeObserver-Cqlof_77.js";import"./Collection-BPH56TpB.js";import"./index-CAqydA6Q.js";import"./Separator-CxgV3VRV.js";import"./SelectionManager-CVq7QkyU.js";import"./useEvent-BLg8pK1v.js";import"./scrollIntoView-B2YRZ0ka.js";import"./SelectionIndicator-C-wCbqPn.js";import"./useDescription-B5TdgaAT.js";import"./ListKeyboardDelegate-iMF-pjGg.js";import"./PressResponder-CxsGHeD_.js";import"./useLocalizedStringFormatter-DjqDSjxr.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-B81GzG2u.js";import"./VisuallyHidden-Cb1j0ztT.js";import"./useLocalizedStringFormatter-D6MEQWnS.js";import"./x-CpgR8AzC.js";import"./createLucideIcon-B3MQJBqz.js";import"./Heading-CSigcMo2.js";import"./info-BkhNxEQx.js";import"./Popover-COcBPZhx.js";import"./Tag-BODMC1wX.js";import"./ListBox-TruDQssi.js";import"./DragAndDrop-DWebWdrg.js";import"./inertValue-Dny35HSI.js";import"./useListState-BU5PIiuT.js";import"./useHighlightSelectionDescription-Tcica_Xh.js";import"./useUpdateEffect-B3BxTJSV.js";import"./useHasTabbableChild-CxTn42Z7.js";import"./check-E3Goto2k.js";import"./ListBoxSection-BU7_k7Iy.js";import"./Virtualizer-DyqvhIxx.js";import"./chevron-down-BxlCf9Eo.js";import"./Button.module-CcWMkJAG.js";import"./useToggleState-Dqdhz0Wv.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
