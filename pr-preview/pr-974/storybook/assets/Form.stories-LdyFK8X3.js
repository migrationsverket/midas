import{j as e}from"./iframe-C9g4MTX7.js";import{$ as c}from"./Form-V7cGO92z.js";import{G as d}from"./Grid-DOgUJQtP.js";import{G as i}from"./GridItem-C0l_abyV.js";import{T as t}from"./TextField-DPyCMSBF.js";import{S as l}from"./Select-vy5Cn4Dn.js";import{B as a}from"./Button-Cd6lSrpE.js";import{R as x,a as u}from"./Radio-BTzYHBKX.js";import{C as I}from"./CheckboxGroup-CvgYPw73.js";import{C as G}from"./Checkbox-CLVvUeME.js";import{L as p}from"./ListBoxItem-CwkNNYz_.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-_Jmhc4hr.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-COH0Z6gm.js";import"./useFocusRing-DG43Unny.js";import"./index-C_J0lp9X.js";import"./index-DhjFuTvG.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-DzJIbP2h.js";import"./TextField-sBKTxl2c.js";import"./FieldError-C8KRqUxl.js";import"./Text-XjFf9xI5.js";import"./Text-CbrSL-Nv.js";import"./RSPContexts-vx5S09HY.js";import"./Group-Cy_hbvSF.js";import"./Input-BUuys90W.js";import"./Hidden-Blvi27yb.js";import"./Button-_3UTtnws.js";import"./useLabels-LOj0MSb9.js";import"./useButton-BIIPbxfI.js";import"./useTextField-Cy1uQP7t.js";import"./useControlledState-FOZz2YKy.js";import"./useField-CJSZHuXU.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-CF0pu5un.js";import"./Dialog-B1VUh1MD.js";import"./OverlayArrow-CWpyETov.js";import"./useResizeObserver-Cbz0T_4Q.js";import"./Collection-YEJssIt5.js";import"./index-Dg75dvRG.js";import"./Separator-CurZBUS-.js";import"./SelectionManager-BAaQ0uR4.js";import"./useEvent-Bv7P4LMn.js";import"./scrollIntoView-DxrqCAfs.js";import"./SelectionIndicator-FjxP8PaG.js";import"./useDescription-4ih0aY-K.js";import"./ListKeyboardDelegate-C7faG6eE.js";import"./PressResponder-CmSEDKi3.js";import"./useLocalizedStringFormatter-DewJi2DS.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DWsgVBc_.js";import"./VisuallyHidden-CMi3wTGx.js";import"./x-D78XPVZO.js";import"./createLucideIcon-mQbrOUxF.js";import"./useLocalizedStringFormatter-D0wJzWuW.js";import"./Heading-Q5zE7r_Q.js";import"./info-C0tQPWKm.js";import"./Popover-DhqI-H1D.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CK7r7nUZ.js";import"./DragAndDrop-Ce99AvFK.js";import"./inertValue-zNmeZlki.js";import"./useListState-Dm0Y_ADV.js";import"./Tag-CDzkLvta.js";import"./useHighlightSelectionDescription-CWAphEHZ.js";import"./useUpdateEffect-BXO-XuWZ.js";import"./useHasTabbableChild-DXTGv5bG.js";import"./chevron-down-t9UML41C.js";import"./Button.module-Co5e5YHp.js";import"./check-DXDPX_p-.js";import"./useToggleState--LHCt98R.js";import"./Virtualizer-BLN7ADHD.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
