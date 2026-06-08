import{j as e}from"./iframe-_-I-4bmX.js";import{c}from"./Form-BKf2BDdV.js";import{G as d}from"./Grid-Dpf-6MjZ.js";import{G as i}from"./GridItem-CbQz21ZJ.js";import{a as x,R as u}from"./Radio-BpyynNSe.js";import{C as I}from"./CheckboxGroup-Y8diZD4e.js";import{C as G}from"./Checkbox-C1Bp9kIq.js";import{T as t}from"./TextField-DOswS6DE.js";import{S as l}from"./Select-BmFQfNQm.js";import{L as p}from"./ListBoxItem-tuNswSSP.js";import{B as a}from"./Button-Cur5alMr.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-CMcqGwdV.js";import"./utils-DzcaSYTj.js";import"./clsx-B-dksMZM.js";import"./index-0H3AV5Mt.js";import"./index-BRnMJqMO.js";import"./clsx-Ciqy0D92.js";import"./Group-DnmxEfp3.js";import"./FieldError-B-jtvqK5.js";import"./Text-Cm78CGL1.js";import"./Text-CY5kPrUO.js";import"./Button-tRjJFBuJ.js";import"./Hidden-BeH_JIKl.js";import"./useLabel-B1uHly2S.js";import"./useLabels-DUwK_POH.js";import"./useButton-CyQYrR3g.js";import"./SelectionIndicator-Civ_JKaJ.js";import"./useField-D0ShrdTz.js";import"./VisuallyHidden-CK8kGowV.js";import"./useControlledState-CitIWhQv.js";import"./Label-qHS745gd.js";import"./Dialog-CE24Vm4u.js";import"./RSPContexts-CMPH0wn8.js";import"./OverlayArrow-CdzLxPq_.js";import"./useResizeObserver-CWYs3QmI.js";import"./Collection-CWOLxi88.js";import"./index-uCmAEo7z.js";import"./Separator-CK8hcPJB.js";import"./SelectionManager-CKx8RmD7.js";import"./useEvent-BT5AWThM.js";import"./scrollIntoView-CFKl5YUv.js";import"./useDescription-BdnU8zj8.js";import"./ListKeyboardDelegate-0iBGtitd.js";import"./PressResponder-De-KfKJN.js";import"./useLocalizedStringFormatter-CCGAROZM.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Db4Op6I0.js";import"./getScrollParent-BjhgnRjO.js";import"./ModalOverlay-DfmVS9JP.js";import"./x-D2ojVt-R.js";import"./createLucideIcon-0TA1baeh.js";import"./useLocalizedStringFormatter-Cf6u5T_L.js";import"./Heading-D9DO-Wov.js";import"./info-B3fRpz2z.js";import"./Popover-DrgSr3ki.js";import"./check-20bRhoEa.js";import"./useToggleState-D57fRWNH.js";import"./TextFieldBase-xie11rcB.js";import"./Input-urStWhUC.js";import"./useTextField-CcAW_0Ue.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DyVGPISL.js";import"./DragAndDrop-Bm48Pp7H.js";import"./inertValue-BlyZJ4kG.js";import"./useListState-BS1oh9ws.js";import"./TagGroup-B8gGPnCY.js";import"./useHighlightSelectionDescription-dQZl-9Z-.js";import"./useUpdateEffect-CRHSweTu.js";import"./useHasTabbableChild-BS0g4kA_.js";import"./chevron-down-Cwn_M347.js";import"./Virtualizer-DIAeDMVa.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
