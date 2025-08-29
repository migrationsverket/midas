import{j as n}from"./iframe-BXSXFnI0.js";import{$ as j}from"./Form-DsNHp8E1.js";import{G}from"./Grid-Be4s5LpC.js";import{G as e}from"./GridItem-xfKcMJpa.js";import{T as r}from"./TextField-Wwcdvigq.js";import{S as I}from"./Select-C8d6-VUI.js";import{B as a}from"./Button-BigH2JBp.js";import{R as g,a as b}from"./Radio-BGKhymxx.js";import{C as h}from"./CheckboxGroup-IcT6x-87.js";import{C as k}from"./Checkbox-BZstHLu9.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-BFi5W1w4.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DgDYkeTv.js";import"./useFocusRing-DUYm-sNb.js";import"./index-CM7xiaE7.js";import"./index-DYB1p1DC.js";import"./TextFieldBase-B88qQM3I.js";import"./TextField-BjzAC3FE.js";import"./FieldError-CfLms2hw.js";import"./Text-CE3-C4Zs.js";import"./Text-BmvCDy5J.js";import"./Input-BTGd1tcP.js";import"./Hidden-DpHRpK5a.js";import"./Button-C9o6_9sT.js";import"./useLabels-DHs8ZQEk.js";import"./useButton-AEA0bYXx.js";import"./useTextField-CaX6PWAj.js";import"./useControlledState-BifY1oMp.js";import"./useField-Dy11Qohd.js";import"./TextField.module-BrIGiDQC.js";import"./Label-CRU7sYyK.js";import"./Dialog-luWBxqO-.js";import"./RSPContexts-B_VrPxi0.js";import"./OverlayArrow-DA-BYWqx.js";import"./useResizeObserver-BvmloHDZ.js";import"./Collection-B4Hxs3Dd.js";import"./index-BSXkCQ4Y.js";import"./Separator-D4Ju37wL.js";import"./SelectionManager-BQnS27ZX.js";import"./useEvent-BB3IFhZZ.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-DmrOmSDH.js";import"./useDescription-BUclrS46.js";import"./ListKeyboardDelegate-D7xVKIf9.js";import"./PressResponder-DIJCvEG9.js";import"./useLocalizedStringFormatter-Cx4v8plI.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-C7GC4XnL.js";import"./Dialog-Dkb-9eaE.js";import"./useLocalizedStringFormatter-CHMNslEJ.js";import"./x-DdD8mZcb.js";import"./createLucideIcon-Cxn_Jk_B.js";import"./Heading-BY-YaldO.js";import"./info-CWd9FEt_.js";import"./Tag-CG-vOyDm.js";import"./ListBox-HIcTpUtk.js";import"./DragAndDrop-DGKLxfQo.js";import"./inertValue-KBQCeTZv.js";import"./useListState-CvdnBavG.js";import"./useHighlightSelectionDescription-Bdwj3a6G.js";import"./useUpdateEffect-B-VxYBM3.js";import"./useHasTabbableChild-COPEiMCa.js";import"./check-DQdN-BhX.js";import"./ListBoxSection-HDo86-je.js";import"./Virtualizer-BXkTXzA4.js";import"./useObserveElement-B81Fjf9D.js";import"./chevron-down-CWRvCTVq.js";import"./Button.module-CF2bVDCq.js";import"./Group-BWeOw585.js";import"./useToggleState-tD0mbkQt.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
