import{j as e}from"./iframe-BmAdb1PA.js";import{c}from"./Form-DuBFRND4.js";import{G as d}from"./Grid-D6SsiovC.js";import{G as i}from"./GridItem-Cb4gBPjS.js";import{a as x,R as u}from"./Radio-KHSQABHA.js";import{C as I}from"./CheckboxGroup-D8fB3OQJ.js";import{C as G}from"./Checkbox-K6lm5hfX.js";import{T as t}from"./TextField-CQe3fRZ2.js";import{S as l}from"./Select-DjKibwzY.js";import{L as p}from"./ListBoxItem-BA698e4G.js";import{B as a}from"./Button-Cxe1PoSr.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-DjzcYn69.js";import"./utils-CCClzR0P.js";import"./clsx-B-dksMZM.js";import"./index-DmkiqM0D.js";import"./index-YmFjrc3B.js";import"./clsx-Ciqy0D92.js";import"./Group-DHPBGzHI.js";import"./FieldError-BFmjoeTz.js";import"./Text-CWRsvaQ5.js";import"./Text-GqXtxiSt.js";import"./Button-MRSjvKjG.js";import"./Hidden-B3pD7GY2.js";import"./useLabel-DyZBKx42.js";import"./useLabels-ChZyghoP.js";import"./useButton-CgLkstip.js";import"./SelectionIndicator-D0ZbJgrH.js";import"./useField-CiSiXV_i.js";import"./VisuallyHidden-DDq5yWsw.js";import"./useControlledState-Dv2Kshwg.js";import"./Label-DFIRf3yh.js";import"./Dialog-yx5dXLdt.js";import"./RSPContexts-C9Yi9HqJ.js";import"./OverlayArrow-BsSGgpI2.js";import"./useResizeObserver-BVaU9idB.js";import"./Collection-YyAEhVk9.js";import"./index-BlhtBE4W.js";import"./Separator-BH67y9r3.js";import"./SelectionManager-DiqOcHkc.js";import"./useEvent-CnZp3rBE.js";import"./scrollIntoView-BvBTMwmY.js";import"./useDescription-Dk0a0Fsb.js";import"./ListKeyboardDelegate-DxdtfhPW.js";import"./PressResponder-C7yYm5Yb.js";import"./useLocalizedStringFormatter-DY8Y5mpq.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-U_IkXvLC.js";import"./getScrollParent-7DjJo_eW.js";import"./x-BgO40Plk.js";import"./createLucideIcon-CbxvyYW-.js";import"./useLocalizedStringFormatter-1TllYdpt.js";import"./Heading-863fHQRC.js";import"./info-D0UtNGvd.js";import"./Popover-C_HFXddi.js";import"./check-Dd0URqZZ.js";import"./useToggleState-rPcyEIuy.js";import"./TextFieldBase-D2HiMVc1.js";import"./Input-wS3uVeCW.js";import"./useTextField-DB_mL8mV.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CEZy44lL.js";import"./DragAndDrop-9wJBDeJP.js";import"./inertValue-vkTapp6s.js";import"./useListState-Cb54cPkG.js";import"./TagGroup-DGc8U3KT.js";import"./useHighlightSelectionDescription-6j41GiZJ.js";import"./useUpdateEffect-DCc_7wSp.js";import"./useHasTabbableChild-DSEzZtfi.js";import"./chevron-down-U7exrC6B.js";import"./Virtualizer-C30h2Eui.js";import"./Button.module-BB7N-cLd.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
