import{j as e}from"./iframe-C_rSI28S.js";import{$ as c}from"./Form-cbeWN56Y.js";import{G as d}from"./Grid-ZFjFVGhw.js";import{G as i}from"./GridItem-Ctr6VGYr.js";import{a as x,R as u}from"./Radio-B9U8d4qe.js";import{C as I}from"./CheckboxGroup-BSfwzR4q.js";import{C as G}from"./Checkbox-gG_L8GWH.js";import{T as t}from"./TextField-BF4btheT.js";import{S as l}from"./Select-BRTqneT3.js";import{L as p}from"./ListBoxItem-BHF6i0EX.js";import{B as a}from"./Button-DfJo8lJp.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-B9fitk-d.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-JyWYvn9r.js";import"./useFocusRing-1c7-b3IG.js";import"./index-D-oq6Wi4.js";import"./index-DhVgnvLi.js";import"./clsx-Ciqy0D92.js";import"./Group-BiTB_Ifj.js";import"./FieldError-B2EZQXDz.js";import"./Text-C0Ky8cuO.js";import"./Text-D8Oj8wTT.js";import"./Button-BZMldgT_.js";import"./Hidden-DkMo9DJh.js";import"./useLabels-BB_4cBjW.js";import"./useButton-BJxdkC7q.js";import"./SelectionIndicator-C8GAWl4j.js";import"./useField-Be67gG5q.js";import"./VisuallyHidden-DjxO6q8B.js";import"./useControlledState-Bu5qipFz.js";import"./Label-c80iETpH.js";import"./Dialog-DMbz8tWh.js";import"./RSPContexts-CccBVtRj.js";import"./OverlayArrow-GDHlNZL-.js";import"./useResizeObserver-CLjwbffR.js";import"./Collection-DQPpNpIp.js";import"./index-CMNlANvy.js";import"./Separator-DseIPh_7.js";import"./SelectionManager-OOYxevrX.js";import"./useEvent-Bpac53ZB.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-w-LKIPXs.js";import"./ListKeyboardDelegate-D1l7F5b-.js";import"./PressResponder-DbjOz25Q.js";import"./useLocalizedStringFormatter-CS1E0pV3.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CALY2agj.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-Bm_2sjYb.js";import"./createLucideIcon-DJNcDtcF.js";import"./useLocalizedStringFormatter-iM29cO5J.js";import"./Heading-BD3WCdNS.js";import"./info-o1XDVXkp.js";import"./Popover-BpG9x7Y0.js";import"./check-BgyUvS3Q.js";import"./useToggleState-CEdjZTYx.js";import"./TextFieldBase-Cw-inrUa.js";import"./Input-D9Y0N6wl.js";import"./useTextField-BLjqu1CJ.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BNNI3iii.js";import"./DragAndDrop-CYD7mtlU.js";import"./inertValue-DLPU9Vus.js";import"./useListState-il-a6PAL.js";import"./TagGroup-CUrGi02z.js";import"./useHighlightSelectionDescription-JuwlTJMI.js";import"./useUpdateEffect-CYVuXMmn.js";import"./useHasTabbableChild-CyGFweYi.js";import"./chevron-down-CkEUdIX2.js";import"./Virtualizer-Bic0QP1k.js";import"./Button.module-D_C6WeTN.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
