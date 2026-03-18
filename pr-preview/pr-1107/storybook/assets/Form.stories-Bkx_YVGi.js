import{j as e}from"./iframe-B6mQtHg_.js";import{$ as c}from"./Form-CsBpewWU.js";import{G as d}from"./Grid-D4PiaVpY.js";import{G as i}from"./GridItem-CkQrmKgx.js";import{a as x,R as u}from"./Radio-Dj6xUR27.js";import{C as I}from"./CheckboxGroup-DQ3uy9LK.js";import{C as G}from"./Checkbox-Wl7b2kJm.js";import{T as t}from"./TextField-ICZTEDeu.js";import{S as l}from"./Select-BUOXFX-k.js";import{L as p}from"./ListBoxItem-Dz1dS2bz.js";import{B as a}from"./Button-CjEwSg5p.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BRho1dRj.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Bzj4B0-M.js";import"./useFocusRing-D8gmEGCC.js";import"./index-9ySVHYs0.js";import"./index-DwLN6Mmc.js";import"./clsx-Ciqy0D92.js";import"./Group-CR_5RNct.js";import"./FieldError-DsUm8Cjt.js";import"./Text-P1kAvbTC.js";import"./Text-CC5_ooHx.js";import"./Button-fYT3W3-R.js";import"./Hidden-Zr6f3d_F.js";import"./useLabels-BdOR7spR.js";import"./useButton-MzgnshF7.js";import"./SelectionIndicator-DxHOx4Ux.js";import"./useField-DPGyVH2q.js";import"./VisuallyHidden-B9plZj9e.js";import"./useControlledState-BRStpwCw.js";import"./Label-C5lEjVRK.js";import"./Dialog-DWvUH0sc.js";import"./RSPContexts-BXQmSd5O.js";import"./OverlayArrow-D9hgR9BD.js";import"./useResizeObserver-CDTc09hL.js";import"./Collection-Dh9iTOnN.js";import"./index-iGuCePgB.js";import"./Separator-CEDzVaUO.js";import"./SelectionManager-Cghfwki6.js";import"./useEvent-CRuitgb9.js";import"./scrollIntoView-5Pop8Kz8.js";import"./useDescription-D1JiDHG9.js";import"./ListKeyboardDelegate-l6tisyI0.js";import"./PressResponder-E-1FVKal.js";import"./useLocalizedStringFormatter-Bb8-ILz9.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DQO17Uvf.js";import"./getScrollParent-D1snmpn8.js";import"./x-CmYm4Ua_.js";import"./createLucideIcon-BZZ3uCZ8.js";import"./useLocalizedStringFormatter-C_-Wi8FC.js";import"./Heading-K2R40Ekj.js";import"./info-DbWSBnvm.js";import"./Popover-_YB3zJLu.js";import"./check-Dhy-kqPN.js";import"./useToggleState-795f47NA.js";import"./TextFieldBase-C2_MWFS5.js";import"./Input-Dy5xnt0b.js";import"./useTextField-DkG25mzw.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CqLKJxjZ.js";import"./DragAndDrop-CBT_55yO.js";import"./inertValue-qryEPJkG.js";import"./useListState-Dwsy5Bps.js";import"./TagGroup-ZZRMYezm.js";import"./useHighlightSelectionDescription-CKNmZudT.js";import"./useUpdateEffect-NwmgfCmi.js";import"./useHasTabbableChild-DUaE7y3E.js";import"./chevron-down-CCnQA0jm.js";import"./Virtualizer-Drc8nICn.js";import"./Button.module-BB7N-cLd.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
