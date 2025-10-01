import{j as n}from"./iframe-BEjKSeJF.js";import{$ as j}from"./Form-B9oaMa8G.js";import{G}from"./Grid-DVHM04I_.js";import{G as e}from"./GridItem-tHOpmc6r.js";import{T as r}from"./TextField-D2Nl3655.js";import{S as I}from"./Select-BRFaxXcQ.js";import{B as a}from"./Button-Cu1voy75.js";import{R as g,a as b}from"./Radio-CZZEHVrp.js";import{C as h}from"./CheckboxGroup-ChJiLe_C.js";import{C as k}from"./Checkbox-CWWP8Ydh.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-CB52Z3km.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CQYQvfuM.js";import"./useFocusRing-C7Kz9uAm.js";import"./index-D4OLSYjb.js";import"./index-BCb1Xvf7.js";import"./TextFieldBase-CwAwyukm.js";import"./TextField-DIwrrLUB.js";import"./FieldError-DTxTUQbF.js";import"./Text-C8n2ElEg.js";import"./Text-DGbpuDr2.js";import"./context-YHrC8uez.js";import"./SelectionManager-DPW3nW5t.js";import"./useEvent-B5EJPMmI.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-CRGyWmfh.js";import"./useDescription-CdUytCb7.js";import"./useControlledState-NzjAaPaI.js";import"./Group-D_chPj6F.js";import"./Input-DPW0amGZ.js";import"./Hidden-DDqbwcos.js";import"./Button-X2gClN_c.js";import"./useLabels-CokTg17U.js";import"./useButton-CA2mjOsp.js";import"./useTextField-U5ketrZ3.js";import"./useField-DtPpRl2k.js";import"./TextField.module-DjUItNl5.js";import"./Label-C_RSLr0m.js";import"./Dialog-BJpefcQ8.js";import"./RSPContexts-Uvav4mC2.js";import"./OverlayArrow-C8AJijYg.js";import"./useResizeObserver-BLEh1Out.js";import"./Collection-DbmvYFxi.js";import"./index-DuNi4aWt.js";import"./Separator-CI35ZXvr.js";import"./PressResponder-DpsV8vcy.js";import"./useLocalizedStringFormatter-DlgE_ODY.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-DwNMgF3B.js";import"./useLocalizedStringFormatter-j90zcF7H.js";import"./x-DISbJv9O.js";import"./createLucideIcon-BXUvi_GM.js";import"./Heading-B4eiDVtf.js";import"./info-CYCtOx3b.js";import"./Popover-CGhtaMX2.js";import"./Tag-BB6MOZGO.js";import"./ListBox-eSu8EmEW.js";import"./DragAndDrop-D0s87eyc.js";import"./inertValue-B9Qe0UEF.js";import"./useListState-DohNusml.js";import"./useHighlightSelectionDescription-DcDhwfED.js";import"./useUpdateEffect-4Jhsp0AP.js";import"./useHasTabbableChild-Cw5mc4OY.js";import"./check-BJsEVAAb.js";import"./ListBoxSection-Bs0Og3lf.js";import"./Virtualizer-DXrwvKm3.js";import"./useObserveElement-CeB0it-M.js";import"./chevron-down-DfII0D8y.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-Cycf6Bk0.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
