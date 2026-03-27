import{j as e}from"./iframe-XIh9uYhW.js";import{c}from"./Form-uKASpG5T.js";import{G as d}from"./Grid-bv_kbvkj.js";import{G as i}from"./GridItem-BfuHP4dt.js";import{a as x,R as u}from"./Radio-dS6azYdr.js";import{C as I}from"./CheckboxGroup-ByZztuy4.js";import{C as G}from"./Checkbox-Yk12GHn1.js";import{T as t}from"./TextField-CXxzg9lb.js";import{S as l}from"./Select-Bm5hxJuX.js";import{L as p}from"./ListBoxItem-CwLLsf5K.js";import{B as a}from"./Button-D1gmeqQE.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-BdFa1UIk.js";import"./utils-QqHpIW-4.js";import"./clsx-B-dksMZM.js";import"./index-BudLXS22.js";import"./index-BA9v5sbd.js";import"./clsx-Ciqy0D92.js";import"./Group-Bqm2qrBS.js";import"./FieldError-CImeX3LJ.js";import"./Text-DrkaIHH8.js";import"./Text-FP4KMc3f.js";import"./Button-BsucxUz-.js";import"./Hidden-l3oUe_Z9.js";import"./useLabel-bPnROONS.js";import"./useLabels-BwsWDKVI.js";import"./useButton-DN2W_ujz.js";import"./SelectionIndicator-C8nA4_hf.js";import"./useField-DZimw16l.js";import"./VisuallyHidden-C1E6EF0U.js";import"./useControlledState-CqcNfIKv.js";import"./Label-DeiUzq23.js";import"./Dialog-k33WoJ4y.js";import"./RSPContexts-Bn8Ylugu.js";import"./OverlayArrow-D8TWZqIj.js";import"./useResizeObserver-CUu-rCnr.js";import"./Collection-BQotuCBv.js";import"./index-B-OkyOMa.js";import"./Separator-B8a7V4yj.js";import"./SelectionManager-DXqANVb2.js";import"./useEvent-BJnJ7qkn.js";import"./scrollIntoView-CUZdJYQn.js";import"./useDescription-DhJgGo4l.js";import"./ListKeyboardDelegate-9proyAMB.js";import"./PressResponder-CzgsD_Mk.js";import"./useLocalizedStringFormatter-C8j3kjHh.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Dqh80AvR.js";import"./getScrollParent-COGKGPLi.js";import"./x-Drs9DY4g.js";import"./createLucideIcon-C-gCmxMp.js";import"./useLocalizedStringFormatter-BC9Xw6Ar.js";import"./Heading-s6qNOUAW.js";import"./info-AeKS2IyO.js";import"./Popover-wrLcmYQ4.js";import"./check-BJpX-BVw.js";import"./useToggleState-C9aK7DLl.js";import"./TextFieldBase-BvNtSKGk.js";import"./Input-CRfLYA6t.js";import"./useTextField-PrAZ5utE.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-Cw9u05O7.js";import"./DragAndDrop-LsPFcnrr.js";import"./inertValue-C3K_SGAG.js";import"./useListState-DDGu8gmt.js";import"./TagGroup-1dqgTMIW.js";import"./useHighlightSelectionDescription-DAVxVL_0.js";import"./useUpdateEffect-MxP5rWbX.js";import"./useHasTabbableChild-VY-roxio.js";import"./chevron-down-C40Y69Sz.js";import"./Virtualizer-r3JTjeEr.js";import"./Button.module-BB7N-cLd.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
