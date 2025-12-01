import{j as e}from"./iframe-sg9dJLsH.js";import{$ as c}from"./Form-BW-VziKc.js";import{G as d}from"./Grid-BDt9b2hb.js";import{G as i}from"./GridItem-DhZONXoS.js";import{T as t}from"./TextField-CN4JUOFm.js";import{S as l}from"./Select-DSh_E-Oj.js";import{B as a}from"./Button-B-3midel.js";import{R as x,a as u}from"./Radio-BlOmutU3.js";import{C as I}from"./CheckboxGroup-Oibshad0.js";import{C as G}from"./Checkbox-DRO9YmcL.js";import{L as p}from"./ListBoxItem-BJ6wuZ64.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CuYvAqJx.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DNlbGXcC.js";import"./useFocusRing-CEQfJAUz.js";import"./index-Csa_AQe7.js";import"./index-6sLC6slB.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-D9bzlhJu.js";import"./TextField-EZeDD8x1.js";import"./FieldError-BrQNt60r.js";import"./Text-1XpSl3_S.js";import"./Text-qPBHnq8h.js";import"./RSPContexts-CFIQgWNj.js";import"./Group-CJhSz8vh.js";import"./Input-B9JlF-Qe.js";import"./Hidden-CxJfSG1h.js";import"./Button-BKCBYEjA.js";import"./useLabels-Coj_Gh5d.js";import"./useButton-BnqHgeWw.js";import"./useTextField-B6sqZEPf.js";import"./useControlledState-gOtQm8WB.js";import"./useField-CH0W7eg0.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-8R61jkbz.js";import"./Dialog-b9ceggbf.js";import"./OverlayArrow-DY_x2ajs.js";import"./useResizeObserver-Dib9irc4.js";import"./Collection-CdGVV1_d.js";import"./index-BoUdIBrk.js";import"./Separator-CjELUWHF.js";import"./SelectionManager-BDfLTNFi.js";import"./useEvent-CrKV8Qc1.js";import"./scrollIntoView-BLU2Y2Qy.js";import"./SelectionIndicator-BJdQjGrY.js";import"./useDescription-BlZdZ_En.js";import"./ListKeyboardDelegate-DsDQks9q.js";import"./PressResponder-Cvb-cV0O.js";import"./useLocalizedStringFormatter-mDQ95DtQ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-CyzZu9IT.js";import"./VisuallyHidden-BZkmQQPq.js";import"./x-BuVDIX29.js";import"./createLucideIcon-CR8l7k0W.js";import"./useLocalizedStringFormatter-oI-bADgc.js";import"./Heading-CotChgLt.js";import"./info-CXEA8Qwm.js";import"./Popover-CqP2AKA6.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-WKiHb17B.js";import"./DragAndDrop-Cf81S4xc.js";import"./inertValue-C5cWhNyX.js";import"./useListState-DhRYSX_l.js";import"./Tag-AhzZMRN9.js";import"./useHighlightSelectionDescription-BZOrArDm.js";import"./useUpdateEffect-CT1HW2oS.js";import"./useHasTabbableChild-CyIS2LpQ.js";import"./chevron-down-_k0oy4jD.js";import"./Button.module-CtQ1deO8.js";import"./check-DckIqXkI.js";import"./useToggleState-DFHVcP5W.js";import"./Virtualizer-DC-s1Hrr.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
