import{j as e}from"./iframe-TmYtQgnY.js";import{c}from"./Form-DALGR-BM.js";import{G as d}from"./Grid-Dk9a6_DR.js";import{G as i}from"./GridItem-B_tVfscr.js";import{a as x,R as u}from"./Radio-C4s5TSSC.js";import{C as I}from"./CheckboxGroup-CwCoer07.js";import{C as G}from"./Checkbox-C6I2r_2C.js";import{T as t}from"./TextField-CQ1XgI94.js";import{S as l}from"./Select-CHSn9bzZ.js";import{L as p}from"./ListBoxItem-CCruiECt.js";import{B as a}from"./Button-CPisJxWJ.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-DS5bIIsk.js";import"./utils-DvgYso-7.js";import"./clsx-B-dksMZM.js";import"./index-DGnVoJP5.js";import"./index-OGPoH8qw.js";import"./clsx-Ciqy0D92.js";import"./Group-DFvqsGLM.js";import"./FieldError-7FPxvhrU.js";import"./Text-Buf9POGu.js";import"./Text-T0trnrKS.js";import"./Button-ChpfMuYO.js";import"./Hidden-Curp_cq_.js";import"./useLabel-DGzhZIfH.js";import"./useLabels-CrE4xl9O.js";import"./useButton-Lm3tezld.js";import"./SelectionIndicator-QUvO_-7Z.js";import"./useField-T1pIVFYf.js";import"./VisuallyHidden-Bad1FF8A.js";import"./useControlledState-D8j9ZCcX.js";import"./Label-BBfjtBEW.js";import"./Dialog-QnE-F5Xe.js";import"./RSPContexts-DD-NCnvs.js";import"./OverlayArrow-CqmAZ1KM.js";import"./useResizeObserver-BD2CW4iy.js";import"./Collection-DjRJ2-_Y.js";import"./index-DD5CoGXe.js";import"./Separator-gcPVMQlL.js";import"./SelectionManager-BpEOlw03.js";import"./useEvent-znuN9vlN.js";import"./scrollIntoView-BMboN7jH.js";import"./useDescription-BlLDYGFU.js";import"./ListKeyboardDelegate-DtDZKLW9.js";import"./PressResponder-BzyRnliG.js";import"./useLocalizedStringFormatter-BDPcye4t.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DoKEYHsK.js";import"./getScrollParent-D0szpDfO.js";import"./ModalOverlay-C2Wvuo36.js";import"./x-WIEiNIRj.js";import"./createLucideIcon-DeoFDGGs.js";import"./useLocalizedStringFormatter-C2tRJrok.js";import"./Heading-DQC2lV1W.js";import"./info-CJKU0Z6E.js";import"./Popover-BysjIYp5.js";import"./check-Dof7NHtS.js";import"./useToggleState-C_hlurAB.js";import"./TextFieldBase-Ob1ODovh.js";import"./Input-evjaDaYE.js";import"./useTextField-BH15xdHg.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DogkTL7f.js";import"./DragAndDrop-CXCtjZxr.js";import"./inertValue-C6wgsV-E.js";import"./useListState-CFrJg0Q8.js";import"./TagGroup-B5ldkNF_.js";import"./useHighlightSelectionDescription-_AJSnwSe.js";import"./useUpdateEffect-BjEaIc_E.js";import"./useHasTabbableChild-CahsH2m2.js";import"./chevron-down-CQjBTcOa.js";import"./Virtualizer-66aCQjig.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const ye=["SimpleForm","TwoColumnForm"];export{o as SimpleForm,s as TwoColumnForm,ye as __namedExportsOrder,Le as default};
