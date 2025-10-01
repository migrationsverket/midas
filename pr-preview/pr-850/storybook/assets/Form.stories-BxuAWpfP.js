import{j as n}from"./iframe-DKACfEJ9.js";import{$ as j}from"./Form-Bo310Azy.js";import{G}from"./Grid-CZmIcuEu.js";import{G as e}from"./GridItem-Bi3s4VST.js";import{T as r}from"./TextField-_7XfhfNL.js";import{S as I}from"./Select-B8LRT52d.js";import{B as a}from"./Button-Ckz_WYOm.js";import{R as g,a as b}from"./Radio-Rd3cab10.js";import{C as h}from"./CheckboxGroup-SFOcLID-.js";import{C as k}from"./Checkbox-BajqinBv.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-B0EL9QAC.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-dKtdu4WM.js";import"./useFocusRing-BGmS3MnF.js";import"./index-C__9La4M.js";import"./index-CE96OhOs.js";import"./TextFieldBase-BBEXhtOZ.js";import"./TextField-Csv9kC7Z.js";import"./FieldError-CQxzOH4K.js";import"./Text-DKA7lTs9.js";import"./Text-B1ouaKKG.js";import"./context-BGfOH-de.js";import"./SelectionManager-BYOKwv5G.js";import"./useEvent-CA4if1GD.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-CJy9A5Hh.js";import"./useDescription-Biz4Vsss.js";import"./useControlledState-Cv6MF0nP.js";import"./Group-D4ratqv3.js";import"./Input-C_tLuVel.js";import"./Hidden-B1vQ8rpE.js";import"./Button-hCrB4ss_.js";import"./useLabels-JlA9TfrB.js";import"./useButton-Do6Y9jOt.js";import"./useTextField-BjCT4bKQ.js";import"./useField-Ug4NHnP4.js";import"./TextField.module-DjUItNl5.js";import"./Label-BnIkbbyO.js";import"./Dialog-WHjTJHzj.js";import"./RSPContexts-B2q_D4K-.js";import"./OverlayArrow-CUicgYzG.js";import"./useResizeObserver-W_KOLz8E.js";import"./Collection-G_8NP3fI.js";import"./index-BxEQ7Yii.js";import"./Separator-CcWkD2nI.js";import"./PressResponder-Cy_BVcUi.js";import"./useLocalizedStringFormatter-GRysv1Ep.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-D1LUQAfg.js";import"./useLocalizedStringFormatter-2SIHlcTU.js";import"./x-_L9DLDzE.js";import"./createLucideIcon-BeEHrT2F.js";import"./Heading-DMEo7llI.js";import"./info-Cr5NURyY.js";import"./Popover-CNEp0-nM.js";import"./Tag-BBn7NBjo.js";import"./ListBox-qYZjD71z.js";import"./DragAndDrop-EVdRsLF_.js";import"./inertValue-DRTs_93O.js";import"./useListState-B4kid2bg.js";import"./useHighlightSelectionDescription-BnO7MVPJ.js";import"./useUpdateEffect-YWdkUTE9.js";import"./useHasTabbableChild-DYVA-afH.js";import"./check-B41HveHR.js";import"./ListBoxSection--wQ0Tl3C.js";import"./Virtualizer-CoGqlDAT.js";import"./useObserveElement-XccmEEZN.js";import"./chevron-down-CYYwaJ3S.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState--HF1PDjx.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
