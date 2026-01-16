import{j as e}from"./iframe-Be1aZvSB.js";import{$ as c}from"./Form-Ae3SlhGj.js";import{G as d}from"./Grid-BttUdBBq.js";import{G as i}from"./GridItem-DrLsjGOD.js";import{T as t}from"./TextField-DMhzcS1h.js";import{S as l}from"./Select-CwKpY-GZ.js";import{B as a}from"./Button-KQ3agptm.js";import{R as x,a as u}from"./Radio-BNV503OO.js";import{C as I}from"./CheckboxGroup-BP7focMA.js";import{C as G}from"./Checkbox-Cc23CSJd.js";import{L as p}from"./ListBoxItem-BteLVc1T.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Dr5lOQEm.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-upWxOlB9.js";import"./useFocusRing-4gVfCrlN.js";import"./index-DiNIKx-9.js";import"./index-3_mfRz-m.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-D9sWFGZY.js";import"./TextField-BaNpdLZe.js";import"./FieldError-CKZ818d7.js";import"./Text-77WNyGJQ.js";import"./Text-8SUBmIhI.js";import"./RSPContexts-BEvd3q6R.js";import"./Group-H9gn1b-g.js";import"./Input-CQzxFH-r.js";import"./Hidden-BG3DEavw.js";import"./Button-JlG5wiA2.js";import"./useLabels-BWJsgRkM.js";import"./useButton-5FzE-eGH.js";import"./useTextField-Bw55hBUV.js";import"./useControlledState-CJEhEPO4.js";import"./useField-BoBuldh2.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-BQ4BUlPv.js";import"./Dialog-C7DsTJEp.js";import"./OverlayArrow-DGvPVYtQ.js";import"./useResizeObserver-COv9as7A.js";import"./Collection-CvBji9UX.js";import"./index-BVWxmaTk.js";import"./Separator-DLtRXX2_.js";import"./SelectionManager-CPAVRRU0.js";import"./useEvent-Bgy8ySsQ.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-D5SWsty4.js";import"./useDescription-qD4_R6It.js";import"./ListKeyboardDelegate-B-k0R0KY.js";import"./PressResponder-C_Qddwx9.js";import"./useLocalizedStringFormatter-DVu_V5sq.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C09V82bP.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DQWkGC77.js";import"./x-CBDdEqTf.js";import"./createLucideIcon-oLtop38V.js";import"./useLocalizedStringFormatter-C3flDKgk.js";import"./Heading-CRZEmuj5.js";import"./info-CTOSBXOP.js";import"./Popover-B_cM8naD.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-Do9C6VkJ.js";import"./DragAndDrop-BvoRwhO5.js";import"./inertValue-DxVTENy0.js";import"./useListState-OH3vxSKY.js";import"./Tag-BOp4bql3.js";import"./useHighlightSelectionDescription-0NL-YqAY.js";import"./useUpdateEffect-C56jdhm7.js";import"./useHasTabbableChild-CTlK8YmZ.js";import"./chevron-down-LbiFbMGs.js";import"./Button.module-Co5e5YHp.js";import"./check-DciG639L.js";import"./useToggleState-BMx-5gNk.js";import"./Virtualizer-C_eNtwV6.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
