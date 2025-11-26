import{j as e}from"./iframe-B3cZlMLq.js";import{$ as c}from"./Form-3lY06ROM.js";import{G as d}from"./Grid-C4bqiEnP.js";import{G as i}from"./GridItem-CtGxvrCE.js";import{T as t}from"./TextField-CQryCNuI.js";import{S as l}from"./Select-BrsNjDtU.js";import{B as a}from"./Button-D3BwvYvD.js";import{R as x,a as u}from"./Radio-hGJykWYC.js";import{C as I}from"./CheckboxGroup-CnuUMpIl.js";import{C as G}from"./Checkbox-CFSCbMz_.js";import{L as p}from"./ListBoxItem-Dq60cAby.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-C2IA6zAi.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DpSJBzg9.js";import"./useFocusRing-Dkrn5RRD.js";import"./index-pKcy2ErU.js";import"./index-D2uszoET.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-BsWNQpXF.js";import"./TextField-230MxhOO.js";import"./FieldError-CwMfAejD.js";import"./Text-BDM3k8gp.js";import"./Text-DMP_bw7r.js";import"./RSPContexts-BGkD65I-.js";import"./Group-BzjIJ_hC.js";import"./Input-u8QqEH5a.js";import"./Hidden-qU92wu5k.js";import"./Button-D5tqtILh.js";import"./useLabels-gayIneyO.js";import"./useButton-DYFBzz8O.js";import"./useTextField-c3tpRuHu.js";import"./useControlledState-BjN-icKh.js";import"./useField-bNv-bTy9.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-B0e6JnY2.js";import"./Dialog-3HARhlaJ.js";import"./OverlayArrow-BYMu192H.js";import"./useResizeObserver-WzPTznhj.js";import"./Collection-CmdLX-Un.js";import"./index-D6dUN0sU.js";import"./Separator-DcOgo5Rp.js";import"./SelectionManager-p9LBYUuI.js";import"./useEvent-DoDjcMOQ.js";import"./scrollIntoView-3f3I6qXZ.js";import"./SelectionIndicator-vytaxVBf.js";import"./useDescription-Ca1I1_7m.js";import"./ListKeyboardDelegate-Br-FAoxl.js";import"./PressResponder-DUBLzW5W.js";import"./useLocalizedStringFormatter-BxBaRmG-.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DjWGnAkK.js";import"./VisuallyHidden-DFgNwsT9.js";import"./x-Bh2TZMn2.js";import"./createLucideIcon-cIeaTryR.js";import"./useLocalizedStringFormatter-ChaREiKB.js";import"./Heading-DL-GOIro.js";import"./info-BOTcSQLe.js";import"./Popover-BjRfxx6m.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DP0qoerI.js";import"./DragAndDrop-AxZDeiys.js";import"./inertValue-BROT8x_k.js";import"./useListState-vIAaCS1J.js";import"./Tag-D2TBj1th.js";import"./useHighlightSelectionDescription-DkFdCzVl.js";import"./useUpdateEffect-EbLqXXBi.js";import"./useHasTabbableChild-CWHsMwIt.js";import"./chevron-down-DeJUpRoY.js";import"./Button.module-CtQ1deO8.js";import"./check-C0TqZU8u.js";import"./useToggleState-ZIE6uDFu.js";import"./Virtualizer-C5wgaC0o.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
          <Select label='Vilken är din favoritfrukt' placeholder='Välj en frukt' selectionMode='single' items={ITEMS.map(i => ({
          id: i,
          name: i
        }))}>
            {item => <ListBoxItem {...item}>{item.name}</ListBoxItem>}
          </Select>
        </GridItem>

        <GridItem>
          <Button>Skicka</Button>
        </GridItem>
      </Grid>;
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
            <Select label='Kön' description='Kan lämnas tomt' placeholder='Välj kön' selectionMode='single' items={ITEMS.map(i => ({
            name: i,
            id: i
          }))}>
              {item => <ListBoxItem {...item}>{item.name}</ListBoxItem>}
            </Select>
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
}`,...s.parameters?.docs?.source}}};const Le=["SimpleForm","TwoColumnForm"];export{o as SimpleForm,s as TwoColumnForm,Le as __namedExportsOrder,Xe as default};
