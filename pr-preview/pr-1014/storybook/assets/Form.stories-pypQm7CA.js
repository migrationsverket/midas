import{j as e}from"./iframe-foa1fz1L.js";import{$ as c}from"./Form-DMmoH39G.js";import{G as d}from"./Grid-CnyoBveq.js";import{G as i}from"./GridItem-BDrI7gN2.js";import{T as t}from"./TextField-B1AChbLx.js";import{S as l}from"./Select-D7FvYFLU.js";import{B as a}from"./Button-DRHKUhef.js";import{R as x,a as u}from"./Radio-BWkQCP3L.js";import{C as I}from"./CheckboxGroup-BPLTfac3.js";import{C as G}from"./Checkbox-CzNhvZga.js";import{L as p}from"./ListBoxItem-Bdx0-OGn.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Ev5LGgue.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-kLEwtEdL.js";import"./useFocusRing-Ablbfaap.js";import"./index-Cn_e8zWb.js";import"./index-BoAX5djW.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-E73xKaLR.js";import"./TextField-BFl5xgNI.js";import"./FieldError-0xt68GMY.js";import"./Text-hfmE0wsb.js";import"./Text-3kKEReu_.js";import"./RSPContexts-CaEO68sI.js";import"./Group-DwDpWPe2.js";import"./Input-DqpYCeXV.js";import"./Hidden-C56sCU1_.js";import"./Button-BDE-HjlG.js";import"./useLabels-DzekMX3n.js";import"./useButton-D8CDSc--.js";import"./useTextField-BM9G_UwF.js";import"./useControlledState-Dvg4iFOf.js";import"./useField-Cu3mWKaX.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-HixPqQGh.js";import"./Dialog-Dbqo1SrM.js";import"./OverlayArrow-DITbn3Cn.js";import"./useResizeObserver-B6drsLxS.js";import"./Collection-CT8zCrZF.js";import"./index-uIVRUAny.js";import"./Separator-A2egrTjB.js";import"./SelectionManager-CsvPKqJc.js";import"./useEvent-C-hGFFqh.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-G21kOOwW.js";import"./useDescription-DBUGuybl.js";import"./ListKeyboardDelegate-d_TXzJQo.js";import"./PressResponder-u0xaDbhn.js";import"./useLocalizedStringFormatter-BRt717ju.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CmpI_0MT.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Crc1dHu9.js";import"./x-jUsDefJP.js";import"./createLucideIcon-DPqkobhw.js";import"./useLocalizedStringFormatter-CRm2vV7S.js";import"./Heading--H7fNfSD.js";import"./info-DqsSjAOi.js";import"./Popover-CsfdoZhw.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-KeSpeNWM.js";import"./DragAndDrop-DU_4vxRM.js";import"./inertValue-BmBrj8Yc.js";import"./useListState-ThRlzuTt.js";import"./Tag-DIOF1THR.js";import"./useHighlightSelectionDescription-hWWMsLnL.js";import"./useUpdateEffect-DJKerTt0.js";import"./useHasTabbableChild-DL9gv9AO.js";import"./chevron-down-C1oB4k7E.js";import"./Button.module-Co5e5YHp.js";import"./check-C3DVOOTq.js";import"./useToggleState-DOIqEdTT.js";import"./Virtualizer-CxeTkQ9S.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
