import{j as e}from"./iframe-CMUJ4oTW.js";import{$ as c}from"./Form--t2c7OLT.js";import{G as d}from"./Grid-BMgE0wWc.js";import{G as i}from"./GridItem-BFulQtlD.js";import{T as t}from"./TextField-IMN9kwwd.js";import{S as l}from"./Select-D1P_3-zg.js";import{B as a}from"./Button-D8hA4J4_.js";import{R as x,a as u}from"./Radio-CSzN0lUX.js";import{C as I}from"./CheckboxGroup-k7YBkyhf.js";import{C as G}from"./Checkbox-C5J4e6pE.js";import{L as p}from"./ListBoxItem-DdAozhro.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Bw5kKF0Y.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-xJ9GZNEB.js";import"./useFocusRing-CCdJUNbr.js";import"./index-BXUeCXEl.js";import"./index-BRxHMroZ.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-Coff4lSZ.js";import"./TextField-CJQ3YwSy.js";import"./FieldError-DUZ2Lyg_.js";import"./Text-CmjU0gZm.js";import"./Text-C-O23Bwp.js";import"./RSPContexts-Dtm3ZRmN.js";import"./Group-nMq0aZjt.js";import"./Input-18snL8DR.js";import"./Hidden-D0lp5d68.js";import"./Button-Bqzmv4VE.js";import"./useLabels-CskVNZCZ.js";import"./useButton-B2z_QK8p.js";import"./useTextField-DO4EQLEf.js";import"./useControlledState-7-Wnf2ZS.js";import"./useField-DVSpKNSf.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-D-lRvOG_.js";import"./Dialog-B0_TAXmw.js";import"./OverlayArrow-DWgBWshG.js";import"./useResizeObserver-Y9QGu1gT.js";import"./Collection-C6ZXRVc5.js";import"./index-CbWpJrB5.js";import"./Separator-DpWZxbBX.js";import"./SelectionManager-CXOD0jbX.js";import"./useEvent-DIWN8gNy.js";import"./scrollIntoView-Bpk-j4gT.js";import"./SelectionIndicator-CzWSNeVF.js";import"./useDescription-CjJLap45.js";import"./ListKeyboardDelegate-D0ZmEh2C.js";import"./PressResponder-B5Ba_dPV.js";import"./useLocalizedStringFormatter-CO8ox3aE.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-CNXWRTC7.js";import"./VisuallyHidden-B5co-kC4.js";import"./x-CKLycj6S.js";import"./createLucideIcon-TEce3gz9.js";import"./useLocalizedStringFormatter-Cyjs_x30.js";import"./Heading-CxhuX0Al.js";import"./info-czgCSxtX.js";import"./Popover-Bh__myN3.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-WBN8nrZC.js";import"./DragAndDrop-EfeeEScp.js";import"./inertValue-C3vMkIPz.js";import"./useListState-Mkls62N1.js";import"./Tag--5DrB3iR.js";import"./useHighlightSelectionDescription-R4W7KPtU.js";import"./useUpdateEffect-D1d6ogIW.js";import"./useHasTabbableChild-D8vdx3wO.js";import"./chevron-down-BEUn1kED.js";import"./Button.module-Co5e5YHp.js";import"./check-BiOJRLvg.js";import"./useToggleState-C8J-o-Cm.js";import"./Virtualizer-Dv_Is_yM.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
