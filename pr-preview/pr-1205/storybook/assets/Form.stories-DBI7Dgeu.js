import{j as e}from"./iframe-DJnBo8qx.js";import{c}from"./Form-Bm_BfevM.js";import{G as d}from"./Grid-DiFNDbGl.js";import{G as i}from"./GridItem-CKDBic8Q.js";import{a as x,R as u}from"./Radio-D7nqgnqf.js";import{C as I}from"./CheckboxGroup-CNQfstu4.js";import{C as G}from"./Checkbox-CqBol1MN.js";import{T as t}from"./TextField-BQkT__sY.js";import{S as l}from"./Select-CNJt5iWz.js";import{L as p}from"./ListBoxItem-BqGIWAUW.js";import{B as a}from"./Button-DxRtiFp7.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-Bp7BshOu.js";import"./utils-gWiD0ns3.js";import"./clsx-B-dksMZM.js";import"./index-DrJKcisO.js";import"./index-BBWpXqfQ.js";import"./clsx-Ciqy0D92.js";import"./Group-BQbxhg7e.js";import"./FieldError-C3hrQaHN.js";import"./Text-C5-sBZVY.js";import"./Text-CwlODUSS.js";import"./Button-DeGMYH9f.js";import"./Hidden-DalgADPi.js";import"./useLabel-CQ_H6yZ6.js";import"./useLabels-CCJcnJYo.js";import"./useButton-CF9JOIlT.js";import"./SelectionIndicator-bVow53O0.js";import"./useField-Qw0L00q1.js";import"./VisuallyHidden-XMqtKg57.js";import"./useControlledState-DGw5Me1h.js";import"./Label-BS-6xxDi.js";import"./Dialog-CkKjDja5.js";import"./RSPContexts-QhaJtN54.js";import"./OverlayArrow-CW1sQvWA.js";import"./useResizeObserver-BJda_aia.js";import"./Collection-Cyi4sj4g.js";import"./index-CDN3X01D.js";import"./Separator-B_h55PTT.js";import"./SelectionManager-Cz5XDWSZ.js";import"./useEvent-BgibXCRa.js";import"./scrollIntoView-CmRBaB-g.js";import"./useDescription-CfwfTgOd.js";import"./ListKeyboardDelegate-BScgO_Ta.js";import"./PressResponder-DesJJGWg.js";import"./useLocalizedStringFormatter-CZN4d7Nk.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-yCPDjLRE.js";import"./getScrollParent-BBgGqXJk.js";import"./x-DoHdhEkA.js";import"./createLucideIcon-mT6cpvLo.js";import"./useLocalizedStringFormatter-DDDranTe.js";import"./Heading-rY_Xr7Np.js";import"./info-BwG3xnJT.js";import"./Popover-Bc0rU4lY.js";import"./check-wJtMB9W2.js";import"./useToggleState-BCJxX3AZ.js";import"./TextFieldBase-D0bb3DJN.js";import"./Input-CJ2SSYHL.js";import"./useTextField-COYMWqIJ.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CtokwJyt.js";import"./DragAndDrop-DGvhY6Dj.js";import"./inertValue-CXBKVdn2.js";import"./useListState-DJHucSKh.js";import"./TagGroup-B32p22KI.js";import"./useHighlightSelectionDescription-BYIEAd_l.js";import"./useUpdateEffect-Ba0_eIG8.js";import"./useHasTabbableChild-DyAbfK-v.js";import"./chevron-down-DqMX-iAy.js";import"./Virtualizer-Qy_4RBda.js";import"./Button.module-BB7N-cLd.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
