import{j as e}from"./iframe-BUqHy7GG.js";import{$ as c}from"./Form-COZwrKDi.js";import{G as d}from"./Grid-_6nRY1Ux.js";import{G as i}from"./GridItem-EkckX2jK.js";import{a as x,R as u}from"./Radio-Diuzd24J.js";import{C as I}from"./CheckboxGroup-DZ1kE0Lh.js";import{C as G}from"./Checkbox-DaYe9n80.js";import{T as t}from"./TextField-DY3AGJpn.js";import{S as l}from"./Select-DEz6MU4s.js";import{L as p}from"./ListBoxItem-CfW0RoWu.js";import{B as a}from"./Button-C0V6-7WF.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DrdsiK-L.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CbKAev3H.js";import"./useFocusRing-CebfJ1br.js";import"./index-DEv5Wt7N.js";import"./index-DZDSHzQO.js";import"./clsx-Ciqy0D92.js";import"./Group-FAjLFYms.js";import"./FieldError-CDxUPwIp.js";import"./Text-B9jmhAwE.js";import"./Text-6n5u0fKg.js";import"./Button-CodW0JYq.js";import"./Hidden-N4_Hw_bF.js";import"./useLabels-Dw6biMU5.js";import"./useButton-CwpzBG5G.js";import"./SelectionIndicator-DCK9j9oG.js";import"./useField-Bt7YmqoZ.js";import"./VisuallyHidden-DMnJ-77G.js";import"./useControlledState-BKp7Diu5.js";import"./Label-gfWgXfsZ.js";import"./Dialog-qKoc5lzA.js";import"./RSPContexts-r592QdOJ.js";import"./OverlayArrow-C6nnpT1Y.js";import"./useResizeObserver-BWZcEgzp.js";import"./Collection-Bw_hG3jl.js";import"./index-DOsODoS1.js";import"./Separator-BA-clOZZ.js";import"./SelectionManager-CxDB_yOQ.js";import"./useEvent-ErruG-b9.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-B9Fe93xB.js";import"./ListKeyboardDelegate-DJkvH0e-.js";import"./PressResponder-BgwM_wsI.js";import"./useLocalizedStringFormatter-CvEuXf2b.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BvBGSArR.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-Cxd8KX91.js";import"./createLucideIcon-DBH6mYos.js";import"./useLocalizedStringFormatter-8scW4RRu.js";import"./Heading-D6s9n0x1.js";import"./info-BRbYWcbJ.js";import"./Popover-BAVECtS6.js";import"./check-BDJ6T9P0.js";import"./useToggleState-CHLRl1V4.js";import"./TextFieldBase-DFJXyDVn.js";import"./Input-C_xskU_L.js";import"./useTextField-C7H44w70.js";import"./TextField.module-Cm6797Xw.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-KlnCWHac.js";import"./DragAndDrop-BF5mQCtA.js";import"./inertValue-C--vyqO7.js";import"./useListState-B0qJDcyR.js";import"./Tag-BG0Nye1q.js";import"./useHighlightSelectionDescription-CV7aL_bT.js";import"./useUpdateEffect-Cm8Dy_I6.js";import"./useHasTabbableChild-pPb0IcFt.js";import"./chevron-down-tYitVHcv.js";import"./Virtualizer-BIURTjW1.js";import"./Button.module-Co5e5YHp.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
