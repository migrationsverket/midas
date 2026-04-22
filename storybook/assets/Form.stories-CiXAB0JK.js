import{j as e}from"./iframe-DQmFqJHS.js";import{c}from"./Form-icO7fyR0.js";import{G as d}from"./Grid-po9Pc4O5.js";import{G as i}from"./GridItem-BWslJ_gF.js";import{a as x,R as u}from"./Radio-DWaZoUgR.js";import{C as I}from"./CheckboxGroup-eRWD7Gp2.js";import{C as G}from"./Checkbox-wIHWnxmd.js";import{T as t}from"./TextField-FmAAFJPD.js";import{S as l}from"./Select-D4XRjGFL.js";import{L as p}from"./ListBoxItem-NMmOsSxK.js";import{B as a}from"./Button-Cc39pfDx.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-DItV0gqG.js";import"./utils-BWrI25uH.js";import"./clsx-B-dksMZM.js";import"./index-DbK-4WGE.js";import"./index-D4usGqcY.js";import"./clsx-Ciqy0D92.js";import"./Group-WhaxRWQU.js";import"./FieldError-CaxPGIch.js";import"./Text-D7G5v1zt.js";import"./Text-Dv2vHw0w.js";import"./Button-CvJGdaRR.js";import"./Hidden-D-Me28_w.js";import"./useLabel-Chhaff-p.js";import"./useLabels-BqXx-hbX.js";import"./useButton-DialTVJ6.js";import"./SelectionIndicator-BQPUdFWW.js";import"./useField-BpO0DqgO.js";import"./VisuallyHidden-CzKNKfXb.js";import"./useControlledState-C5li1zvV.js";import"./Label-BuAIsOY6.js";import"./Dialog-B1Ri3IBJ.js";import"./RSPContexts-DADBvuUA.js";import"./OverlayArrow-nTMlyTz5.js";import"./useResizeObserver-B5pvTcE0.js";import"./Collection-PnuOJgDp.js";import"./index-C3OZM2iR.js";import"./Separator-BuFyYAhL.js";import"./SelectionManager-4dXQCzrP.js";import"./useEvent-CTB_6RyV.js";import"./scrollIntoView-5ZKvz8fx.js";import"./useDescription-h9Po8Y0i.js";import"./ListKeyboardDelegate-BwQ5f0g5.js";import"./PressResponder-DntQbGBB.js";import"./useLocalizedStringFormatter-BqAD4sFO.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DpjnqEbo.js";import"./getScrollParent-DjSabJcp.js";import"./ModalOverlay-B8F_0DDS.js";import"./x-Dm_VUSkk.js";import"./createLucideIcon-BG_KaWyL.js";import"./useLocalizedStringFormatter-pqjFMR5W.js";import"./Heading-GxnpDQb1.js";import"./info-DqqQK25k.js";import"./Popover-DDzYbG9A.js";import"./check-nWUL1Qv6.js";import"./useToggleState-FFKo_5I2.js";import"./TextFieldBase-Hvb8TpPD.js";import"./Input-Bazp2pYi.js";import"./useTextField-DLSn5o2C.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-B0AIJHI3.js";import"./DragAndDrop-CRj3Phy2.js";import"./inertValue-D6mlYnCP.js";import"./useListState-DTnER18c.js";import"./TagGroup-CFaWQn0l.js";import"./useHighlightSelectionDescription-CWgBNLif.js";import"./useUpdateEffect-YOHctyg7.js";import"./useHasTabbableChild-CFYoTpyc.js";import"./chevron-down-Bj20OvFg.js";import"./Virtualizer-BUawszhl.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
