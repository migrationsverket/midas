import{j as e}from"./iframe-CHfAArqL.js";import{c}from"./Form-CBT2Kr6Z.js";import{G as d}from"./Grid-Cm1q-6IS.js";import{G as i}from"./GridItem-CrExq660.js";import{a as x,R as u}from"./Radio-UzeYZoOv.js";import{C as I}from"./CheckboxGroup-M-ypIqQe.js";import{C as G}from"./Checkbox-4otqPGz-.js";import{T as t}from"./TextField-GmQXU_v4.js";import{S as l}from"./Select-BRsG3lt9.js";import{L as p}from"./ListBoxItem-DB5QGUA9.js";import{B as a}from"./Button-Cmx0GvV9.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-BLqX-8xD.js";import"./utils-B9qYaPsL.js";import"./clsx-B-dksMZM.js";import"./index-DD_A6Sdz.js";import"./index-BO2C6bAK.js";import"./clsx-Ciqy0D92.js";import"./Group-CPEXitlT.js";import"./FieldError-DThBEncI.js";import"./Text-9hAgyQPX.js";import"./Text-C_6I0x6_.js";import"./Button-Kjhz10Fb.js";import"./Hidden-BOX53JQz.js";import"./useLabel-BoRZ5h0h.js";import"./useLabels-8brOlTZV.js";import"./useButton-CXuQG5Fo.js";import"./SelectionIndicator-Blsn9PZp.js";import"./useField-CG5Odj4p.js";import"./VisuallyHidden-QI36eTUn.js";import"./useControlledState-By7B3ojn.js";import"./Label-P5A-OK5O.js";import"./Dialog-1rk1nwhV.js";import"./RSPContexts-CdZqI30k.js";import"./OverlayArrow-Bwvt3YxS.js";import"./useResizeObserver-BdFYLAox.js";import"./Collection-YstYuLwH.js";import"./index-Dr28t-aO.js";import"./Separator-Bu6zTg-i.js";import"./SelectionManager-zN7EIGI4.js";import"./useEvent-g8MOXAII.js";import"./scrollIntoView-DiMlvdiv.js";import"./useDescription-DeNQGmHX.js";import"./ListKeyboardDelegate-Dvro-OxG.js";import"./PressResponder-D3_ecemp.js";import"./useLocalizedStringFormatter-aQ9hIT3Z.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-OoL9LBbg.js";import"./getScrollParent-DFfRG1WF.js";import"./ModalOverlay-Dcp2QOPO.js";import"./x-DIO0llkK.js";import"./createLucideIcon-Cv2FgIad.js";import"./useLocalizedStringFormatter-B-k-1dED.js";import"./Heading-B3eVwh_1.js";import"./info-FFLP7lf-.js";import"./Popover-DbjKufjU.js";import"./check-CX6EFm-U.js";import"./useToggleState-fXws7rA-.js";import"./TextFieldBase-BqmKCg9m.js";import"./Input-B_9-fJ2Q.js";import"./useTextField-BhUdXcAj.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-Dthx_zIw.js";import"./DragAndDrop-DHesKqQu.js";import"./inertValue-DQwpRREb.js";import"./useListState-DHSvOVDW.js";import"./TagGroup-B2dLqzPG.js";import"./useHighlightSelectionDescription-Bf6uKgps.js";import"./useUpdateEffect-ChikD8Cg.js";import"./useHasTabbableChild-BKUruirG.js";import"./chevron-down-iIq4Npvi.js";import"./Virtualizer-B2dWzrzf.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
