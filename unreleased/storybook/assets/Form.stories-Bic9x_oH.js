import{j as n}from"./iframe-B95YgYqS.js";import{$ as j}from"./Form-BZaVaCAI.js";import{G}from"./Grid-CmoCYL6_.js";import{G as e}from"./GridItem-BXTuf4mc.js";import{T as r}from"./TextField-DO3KmDd1.js";import{S as I}from"./Select-BVAmo63w.js";import{B as a}from"./Button-CzMsxXIb.js";import{R as g,a as b}from"./Radio-95T1YZlj.js";import{C as h}from"./CheckboxGroup-CjABSsEq.js";import{C as k}from"./Checkbox-CwAZ7AVL.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-CFKj-CZv.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CoDePbJl.js";import"./useFocusRing-rYn47u7R.js";import"./index-CVwqVd-Y.js";import"./index-Ch1to-qP.js";import"./TextFieldBase-C8uynYJq.js";import"./TextField-Bn0d1qRS.js";import"./FieldError-BnoEokOl.js";import"./Text-5rSTbP-F.js";import"./Text-BlszN4hO.js";import"./ListKeyboardDelegate-CXNbMWd-.js";import"./SelectionManager-BI-EdAhM.js";import"./useEvent-BH2Zmj4z.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-DM23LCth.js";import"./useDescription-_Xpo3cbJ.js";import"./useControlledState-DVFUz4VG.js";import"./Group-D6zV9gW4.js";import"./Input-C4fSYEuE.js";import"./Hidden-KCfBsNQS.js";import"./Button-C-HOFYLh.js";import"./useLabels-DGubBf7v.js";import"./useButton-C-5_hAqX.js";import"./useTextField-CJwQe0g1.js";import"./useField-BKtruYlQ.js";import"./TextField.module-DjUItNl5.js";import"./Label-C7b1ZILx.js";import"./Dialog-C_tRu7jH.js";import"./RSPContexts-BvwN2tCq.js";import"./OverlayArrow-DR5dwAwX.js";import"./useResizeObserver-CWmzuzLO.js";import"./Collection-Cxa8w3L0.js";import"./index-DLCx5rUU.js";import"./Separator-DyxizJGH.js";import"./PressResponder-3k-j-NMi.js";import"./useLocalizedStringFormatter-CXInIYyo.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-7JuzBLsj.js";import"./Dialog-5eaSGaHU.js";import"./useLocalizedStringFormatter-3s6UugAD.js";import"./x-BOirrD2e.js";import"./createLucideIcon-BXKLfkpC.js";import"./Heading-pdfWIU16.js";import"./info-BzdsC1er.js";import"./Tag-DmJ169Fl.js";import"./ListBox-C2SV2EpO.js";import"./DragAndDrop-sTkOyMoy.js";import"./inertValue-C7Uua_Zi.js";import"./useListState-CXlrEzc1.js";import"./useHighlightSelectionDescription-B0VD9dAO.js";import"./useUpdateEffect-CWDbNAGu.js";import"./useHasTabbableChild-BHQgmdBb.js";import"./check-DnKwmRpT.js";import"./ListBoxSection-Do45Tkjj.js";import"./Virtualizer-cNtE4aMk.js";import"./useObserveElement-BKI1fdSD.js";import"./chevron-down-BB2Ja1Ty.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-BI3JXVTt.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
