import{j as e}from"./iframe-Bh3VWgCW.js";import{$ as c}from"./Form-UctQMwsb.js";import{G as d}from"./Grid-B9gMlwic.js";import{G as i}from"./GridItem-CRsLysM6.js";import{a as x,R as u}from"./Radio-CHJXlCW5.js";import{C as I}from"./CheckboxGroup-DxeI5CB3.js";import{C as G}from"./Checkbox-vkj7DVEs.js";import{T as t}from"./TextField-VwWfjX69.js";import{S as l}from"./Select-BgDK6Z2c.js";import{L as p}from"./ListBoxItem-DigmPSxQ.js";import{B as a}from"./Button-DI241M-e.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BIL3a6ib.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Cv_mqAb6.js";import"./useFocusRing-0AZg0skd.js";import"./index-N6QzfeSJ.js";import"./index-CqYODit3.js";import"./clsx-Ciqy0D92.js";import"./Group-D3a93f_q.js";import"./FieldError-DE6lH482.js";import"./Text-GPAWAUKl.js";import"./Text-rR-9MpjH.js";import"./Button-DwNgNAHT.js";import"./Hidden-471kEs7D.js";import"./useLabels-db71Wl0y.js";import"./useButton-DQTLzfh-.js";import"./SelectionIndicator-BCO4Ph4I.js";import"./useField-Bsmsq1ab.js";import"./VisuallyHidden-BYkApvtM.js";import"./useControlledState-CEpZVo0k.js";import"./Label-DsvDFsCJ.js";import"./Dialog-CXXpvEEU.js";import"./RSPContexts-eTOZoUex.js";import"./OverlayArrow-t8hYx5es.js";import"./useResizeObserver-E4_XZ6ad.js";import"./Collection-DR-2fi6L.js";import"./index-DwcmB1sB.js";import"./Separator-DfpjYphJ.js";import"./SelectionManager-Np_WmImU.js";import"./useEvent-C3iLfYya.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-B6uYpxUN.js";import"./ListKeyboardDelegate-eTZICZ-y.js";import"./PressResponder-DnYcsN93.js";import"./useLocalizedStringFormatter-Ca1HzZqp.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Dat9OfKK.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-pBvU2hIn.js";import"./createLucideIcon-_2yVZkpy.js";import"./useLocalizedStringFormatter-DRrSbQCy.js";import"./Heading-Cv2bIYwC.js";import"./info-BDxcNZLg.js";import"./Popover-qcn40ZrY.js";import"./check-BZABxoNJ.js";import"./useToggleState-DtaZKCgt.js";import"./TextFieldBase-BYDR5ZHf.js";import"./Input-DBfqF-V_.js";import"./useTextField-CEnwoLc0.js";import"./TextField.module-DBQiRr7K.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-Bg39xE2B.js";import"./DragAndDrop-B48ngfcm.js";import"./inertValue-W_b5pOhY.js";import"./useListState-CaTRIYHA.js";import"./TagGroup-WgjpUEtX.js";import"./useHighlightSelectionDescription-5hrMQkWM.js";import"./useUpdateEffect-DOh4kS6s.js";import"./useHasTabbableChild-C5k4VFzo.js";import"./chevron-down-B9J5ov6M.js";import"./Virtualizer-BdZOu4R8.js";import"./Button.module-Co5e5YHp.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
