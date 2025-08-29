import{j as n}from"./iframe-tGYExsMk.js";import{$ as j}from"./Form-DKkezDcW.js";import{G}from"./Grid-BlMzT6eQ.js";import{G as e}from"./GridItem-p5ay17Lr.js";import{T as r}from"./TextField-BFb8p-1k.js";import{S as I}from"./Select-D4S5IS9L.js";import{B as a}from"./Button-_KKUAXTK.js";import{R as g,a as b}from"./Radio-CeCSt1QV.js";import{C as h}from"./CheckboxGroup--_Ss-pTi.js";import{C as k}from"./Checkbox-FHI1BHtj.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-DeIy48qy.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Dr2_p-_o.js";import"./useFocusRing-DyNiMG4s.js";import"./index-BZJU4NaV.js";import"./index-DCig4GnH.js";import"./TextFieldBase-D_emnQ3I.js";import"./TextField-Dwl2Lpgg.js";import"./FieldError-D9dDRT7z.js";import"./Text-DBv_Gg7H.js";import"./Text-XBLmcQB8.js";import"./Input-BGuNNn5L.js";import"./Hidden-D5o2mUq3.js";import"./Button-BXtv-1Bv.js";import"./useLabels-DA9TR4bl.js";import"./useButton-7WkBhcwU.js";import"./useTextField-CG2mJYC9.js";import"./useControlledState-bnDFl7BE.js";import"./useField-YVPxXoXC.js";import"./TextField.module-BrIGiDQC.js";import"./Label-Bhtlf1Le.js";import"./Dialog-Ch0b9z3v.js";import"./RSPContexts-D8db4qnP.js";import"./OverlayArrow-DHAjetvk.js";import"./useResizeObserver-CDPqSlfQ.js";import"./Collection-DzFvlOHb.js";import"./index-C3rNZ6lO.js";import"./Separator-DoZCTvJ_.js";import"./SelectionManager-C6wcCSE9.js";import"./useEvent-BY4oi7O_.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-DPS_ZjtT.js";import"./useDescription-ClJOgSiA.js";import"./ListKeyboardDelegate-C3upaLQf.js";import"./PressResponder-D3FS6oJe.js";import"./useLocalizedStringFormatter-BvWa2v2H.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-CU2evAjs.js";import"./Dialog-DN9F2WnH.js";import"./useLocalizedStringFormatter-XdH_eORm.js";import"./x-Bp1KQD0i.js";import"./createLucideIcon-HymrE1yY.js";import"./Heading-DvK2y7Ul.js";import"./info-TeJwpVsN.js";import"./Tag-DZmg5jww.js";import"./ListBox-CS-4r9WA.js";import"./DragAndDrop-C3w8QgJX.js";import"./inertValue-D8F_YNO3.js";import"./useListState-CxQ0U69L.js";import"./useHighlightSelectionDescription-CJyzldTo.js";import"./useUpdateEffect-DxVWF8U4.js";import"./useHasTabbableChild-CnVgqL01.js";import"./check-B_U_Vpl1.js";import"./ListBoxSection-BlqvCrj9.js";import"./Virtualizer-DJ8e-buD.js";import"./useObserveElement-CYkPuofJ.js";import"./chevron-down-B8VHOqT9.js";import"./Button.module-CF2bVDCq.js";import"./Group-ClgTo7rz.js";import"./useToggleState-BCRsBQBi.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
