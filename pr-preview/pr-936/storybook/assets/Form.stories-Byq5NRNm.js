import{j as e}from"./iframe-DL0cr3No.js";import{$ as c}from"./Form-BUbZ_MNV.js";import{G as d}from"./Grid-C88rJL-5.js";import{G as i}from"./GridItem-DVSmD0uf.js";import{T as t}from"./TextField-DjXJM6Ik.js";import{S as l}from"./Select-BxZFrhKl.js";import{B as a}from"./Button-BJrL0Zus.js";import{R as x,a as u}from"./Radio-wadW_cer.js";import{C as I}from"./CheckboxGroup-CZBcK1K6.js";import{C as G}from"./Checkbox-Xtk4oD8d.js";import{L as p}from"./ListBoxItem-D8OzRqPW.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BUc-cOn8.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-B1jylFA2.js";import"./useFocusRing-CUC21zm9.js";import"./index-RgupsUkd.js";import"./index-D6BEsua6.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-Dx3Lsvqf.js";import"./TextField-DLK2HTqm.js";import"./FieldError-CSzLSbH0.js";import"./Text-BZY7tPCZ.js";import"./Text-B4js3SUR.js";import"./RSPContexts-BjTXbXCR.js";import"./Group-DB3jIVND.js";import"./Input-plb9iIl2.js";import"./Hidden-pim-7Fp3.js";import"./Button-B1jV44pP.js";import"./useLabels-BC5LH5iw.js";import"./useButton-Bc5mEHZW.js";import"./useTextField-CIP6F1s7.js";import"./useControlledState-oFMNdbap.js";import"./useField-M8QTnn6A.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-DJx2IpW_.js";import"./Dialog-BohIRJvw.js";import"./OverlayArrow-CG3MQ4PF.js";import"./useResizeObserver-BzJLR3Y9.js";import"./Collection-DcDiE1Pr.js";import"./index-CeDlO_O7.js";import"./Separator--vLAl-M-.js";import"./SelectionManager-DRsW8gID.js";import"./useEvent-DDHdI2jX.js";import"./scrollIntoView-D8yUuFnl.js";import"./SelectionIndicator-DBYP8byp.js";import"./useDescription-LyMbX_kV.js";import"./ListKeyboardDelegate-vPzME-XO.js";import"./PressResponder-CSJ-l0Dm.js";import"./useLocalizedStringFormatter-YyaJr3k3.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-Bmi8soUw.js";import"./VisuallyHidden-LIFheGCJ.js";import"./useLocalizedStringFormatter-BelfBJw5.js";import"./x-BkuPOkXI.js";import"./createLucideIcon-CtVHrRwE.js";import"./Heading-BzXe7sUB.js";import"./info-DQIPe783.js";import"./Popover-CewDHiUk.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CvZ5V631.js";import"./DragAndDrop-BIiEVfQD.js";import"./inertValue-CTAIysRX.js";import"./useListState-r-qOONMp.js";import"./Tag-Du45l9RN.js";import"./useHighlightSelectionDescription-DGLLndr0.js";import"./useUpdateEffect-Bt1fPkRa.js";import"./useHasTabbableChild-C6NtQd3o.js";import"./chevron-down-BFapJqvF.js";import"./Button.module-CtQ1deO8.js";import"./check-UugKNikk.js";import"./useToggleState-BTbszsQ5.js";import"./Virtualizer-CBDrHIxV.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
