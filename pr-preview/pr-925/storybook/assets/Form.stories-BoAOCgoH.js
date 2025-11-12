import{j as e}from"./iframe-DYBbcOUc.js";import{$ as c}from"./Form-C4bmwKk2.js";import{G as d}from"./Grid-BZK0mrFf.js";import{G as i}from"./GridItem-_lPmwqs6.js";import{T as t}from"./TextField-JlBY5-Lz.js";import{S as l}from"./Select-Dgb0Qvc3.js";import{B as a}from"./Button-BOqn9nOO.js";import{R as x,a as u}from"./Radio-BEeYjySj.js";import{C as I}from"./CheckboxGroup-DbuNQQ4l.js";import{C as G}from"./Checkbox-D-zVwCLd.js";import{L as p}from"./ListBoxItem-CKVIuMVw.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-R4gvIU3G.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CyMOk9K1.js";import"./useFocusRing-DyRUz5vb.js";import"./index-thGjz9u9.js";import"./index-D7z64vMT.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-BYp46O7d.js";import"./TextField-DyUBfcPq.js";import"./FieldError-B2TJex7v.js";import"./Text-Tj7cHc4y.js";import"./Text-Bqq52gB3.js";import"./RSPContexts-B2cERvFk.js";import"./Group-CKEeR6Ua.js";import"./Input-BCJBb9eo.js";import"./Hidden-XaTnVVir.js";import"./Button-Cad-DxUv.js";import"./useLabels-Da2D9TrT.js";import"./useButton-COPW9UvJ.js";import"./useTextField-uazggKBi.js";import"./useControlledState-mdKIrMMP.js";import"./useField-DnAWikfx.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-CddjRF3U.js";import"./Dialog-Ckf1ZhYe.js";import"./OverlayArrow-CWYcgf-M.js";import"./useResizeObserver-DcVIdTpi.js";import"./Collection-CH5Z5HcA.js";import"./index-B26BCfjV.js";import"./Separator-DDd0wnQO.js";import"./SelectionManager-Hz5nWYgr.js";import"./useEvent-uHHHA4m4.js";import"./scrollIntoView-pqv3M8RJ.js";import"./SelectionIndicator-kISU7KBz.js";import"./useDescription-C8Vy8EGp.js";import"./ListKeyboardDelegate-DNu-CIf4.js";import"./PressResponder-BleC3u6N.js";import"./useLocalizedStringFormatter-BWoXb-Lg.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-_9ehPPjd.js";import"./VisuallyHidden-DNWWeoJ1.js";import"./useLocalizedStringFormatter-CB7EX41j.js";import"./x-Cbhc3GUc.js";import"./createLucideIcon-DhblIh0r.js";import"./Heading-Bd5JRCBV.js";import"./info-L0wUT4K6.js";import"./Popover-c6va3WaX.js";import"./Input-CkowVm1j.js";import"./Select-0PFLAy5V.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BElnoJ99.js";import"./DragAndDrop-oHozOg3o.js";import"./inertValue-zrRkO6d5.js";import"./useListState-D_D5R5f6.js";import"./Tag-DYlfb75E.js";import"./useHighlightSelectionDescription-k1P4h5Bf.js";import"./useUpdateEffect-p3JotUH7.js";import"./useHasTabbableChild-BkzfdGuX.js";import"./chevron-down-DmVjWeK5.js";import"./Button.module-CtQ1deO8.js";import"./check-2Gupl6sw.js";import"./useToggleState-DNdaINYt.js";import"./Virtualizer-aP0AAcoq.js";const ye={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Ke=["SimpleForm","TwoColumnForm"];export{o as SimpleForm,s as TwoColumnForm,Ke as __namedExportsOrder,ye as default};
