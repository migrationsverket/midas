import{j as e}from"./iframe-CuFHe2Vf.js";import{c}from"./Form-ChRtTK9l.js";import{G as d}from"./Grid-BLlpvJKr.js";import{G as i}from"./GridItem-D4cB3Sfd.js";import{a as x,R as u}from"./Radio-CJJfAmIV.js";import{C as I}from"./CheckboxGroup-DWAfY856.js";import{C as G}from"./Checkbox-CJIRIXHM.js";import{T as t}from"./TextField-C5YeRXzq.js";import{S as l}from"./Select-B0RyDZtG.js";import{L as p}from"./ListBoxItem-NB0r8vaK.js";import{B as a}from"./Button-CksL_-0o.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-B1hdhdHY.js";import"./utils-VBjVty-c.js";import"./clsx-B-dksMZM.js";import"./index-XnHTh2k6.js";import"./index-6uxo6Atk.js";import"./clsx-Ciqy0D92.js";import"./Group-BZfJMEwC.js";import"./FieldError-BD8ZbGLc.js";import"./Text-BF1VogWM.js";import"./Text-C4mdW1tH.js";import"./Button-VKTXL-zI.js";import"./Hidden-Bu9Ft7CN.js";import"./useLabel-BWPwXwHm.js";import"./useLabels-DvXUCZzH.js";import"./useButton-CH05P1-e.js";import"./SelectionIndicator-DlvZtmB1.js";import"./useField-Lr6V8Ghf.js";import"./VisuallyHidden-CygALObj.js";import"./useControlledState-JP9W3MVB.js";import"./Label--KdMaB1S.js";import"./Dialog-CkiBqOrK.js";import"./RSPContexts-S1NEbTgr.js";import"./OverlayArrow-BWFbiArt.js";import"./useResizeObserver-BTZba6w_.js";import"./Collection-XlbfREs0.js";import"./index-BM5YCedE.js";import"./Separator-BnkD2XaK.js";import"./SelectionManager-B0ydga7k.js";import"./useEvent-D-TzDIei.js";import"./scrollIntoView-C3vI_X5p.js";import"./useDescription-BeysD_em.js";import"./ListKeyboardDelegate-BLaavUV6.js";import"./PressResponder-nWHRf4FV.js";import"./useLocalizedStringFormatter-DOfPa_xp.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-hEtmpAV_.js";import"./getScrollParent-BI7k-3ko.js";import"./x-Dr_a8wCQ.js";import"./createLucideIcon-C4YuFSR4.js";import"./useLocalizedStringFormatter-CZd5T7mu.js";import"./Heading-fMwQ2lp0.js";import"./info-CnU1GKsh.js";import"./Popover-Dx8eip-K.js";import"./check-Bb9O8MYP.js";import"./useToggleState-Vdiz7wu5.js";import"./TextFieldBase-8VoMUNRd.js";import"./Input-B0HfqjCP.js";import"./useTextField-jEbRxP4U.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BGqwjOt8.js";import"./DragAndDrop-D5Mg7xoQ.js";import"./inertValue-Cs9dqxZ-.js";import"./useListState-J8HA9GkS.js";import"./TagGroup-BQAIiNnH.js";import"./useHighlightSelectionDescription-C_yv10ZQ.js";import"./useUpdateEffect-BiGUulod.js";import"./useHasTabbableChild-d3HCqVD7.js";import"./chevron-down-DLxqsbxh.js";import"./Virtualizer-BsIStlJq.js";import"./Button.module-BB7N-cLd.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
