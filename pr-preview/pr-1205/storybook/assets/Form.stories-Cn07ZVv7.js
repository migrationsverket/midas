import{j as e}from"./iframe-BS-EqM9B.js";import{c}from"./Form-WnuVLIo9.js";import{G as d}from"./Grid-uMgdihIy.js";import{G as i}from"./GridItem-DkLedlD0.js";import{a as x,R as u}from"./Radio-B9Oaa8-5.js";import{C as I}from"./CheckboxGroup-DEFAAVvc.js";import{C as G}from"./Checkbox-DuQ8iLF8.js";import{T as t}from"./TextField-kmpP-6zx.js";import{S as l}from"./Select-7KO2GsaY.js";import{L as p}from"./ListBoxItem-CbLZAc_7.js";import{B as a}from"./Button-C36Rbpm6.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-f4Gv2bLP.js";import"./utils-B0k4XHwf.js";import"./clsx-B-dksMZM.js";import"./index-Ba_eFeFP.js";import"./index-CSZYNzON.js";import"./clsx-Ciqy0D92.js";import"./Group-CYImqZ5q.js";import"./FieldError-1ihXnr04.js";import"./Text-WfzPelJM.js";import"./Text-BmYuY3ql.js";import"./Button-Fd5Hg-6t.js";import"./Hidden-pMKT4yIR.js";import"./useLabel-CFg80amx.js";import"./useLabels-CtbB0U7H.js";import"./useButton-nlJA0m2t.js";import"./SelectionIndicator-BQxGlwbv.js";import"./useField-BO5BP60C.js";import"./VisuallyHidden-BPzz7Fut.js";import"./useControlledState-B-FXHrTP.js";import"./Label-C83k-g09.js";import"./Dialog-DW6GCdEp.js";import"./RSPContexts-BvHJA1-S.js";import"./OverlayArrow-CCo1EhSd.js";import"./useResizeObserver-B2GkBPld.js";import"./Collection-Nf-nh6oz.js";import"./index-CN4WIh12.js";import"./Separator-BpmOu2Qf.js";import"./SelectionManager-DZYsh4u5.js";import"./useEvent-CtMwRKAA.js";import"./scrollIntoView-BkCdOWuT.js";import"./useDescription-zN_kGT0f.js";import"./ListKeyboardDelegate-DOTDPdTz.js";import"./PressResponder-DD8FzT3J.js";import"./useLocalizedStringFormatter-stCrBMQ7.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BzIvLcs4.js";import"./getScrollParent-C8WafxuX.js";import"./x-9X9TwUAj.js";import"./createLucideIcon-tz6Ei2qt.js";import"./useLocalizedStringFormatter-NiRgEpkW.js";import"./Heading-qHMH1efK.js";import"./info-DmD7c02b.js";import"./Popover-DQic4AOZ.js";import"./check-D3-W0xZb.js";import"./useToggleState-D9MZj3M2.js";import"./TextFieldBase-L6kasApq.js";import"./Input-DwF03e_4.js";import"./useTextField-CCWrd40f.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DPLCCexK.js";import"./DragAndDrop-DPyT0O_6.js";import"./inertValue-Bbm24RhC.js";import"./useListState-CzfxpWsq.js";import"./TagGroup-Dnzj7Vcj.js";import"./useHighlightSelectionDescription-4K7sq8PA.js";import"./useUpdateEffect-DGxB-jCi.js";import"./useHasTabbableChild-DWpujPHz.js";import"./chevron-down-CISb_Sz6.js";import"./Virtualizer-CK4iDk__.js";import"./Button.module-BB7N-cLd.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
