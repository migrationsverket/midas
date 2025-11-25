import{j as e}from"./iframe-DJf9qtT-.js";import{$ as c}from"./Form-DYgj15IJ.js";import{G as d}from"./Grid-CfhULe-u.js";import{G as i}from"./GridItem-CxdoEgmr.js";import{T as t}from"./TextField-DqzVOYE_.js";import{S as l}from"./Select-DHV6w4S9.js";import{B as a}from"./Button-CSrKSu2N.js";import{R as x,a as u}from"./Radio-Btr7az7U.js";import{C as I}from"./CheckboxGroup-PLF6gjQa.js";import{C as G}from"./Checkbox-BWW9gNm7.js";import{L as p}from"./ListBoxItem-DkSu0o9g.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DujThyaS.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Be4z3D39.js";import"./useFocusRing-cUFpuTzX.js";import"./index-CdmLneX8.js";import"./index-CzbSK9MD.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-nRQf2-U1.js";import"./TextField-CEUltA2u.js";import"./FieldError-i8n9jDus.js";import"./Text-7XMqKPUk.js";import"./Text-Dg4iii4L.js";import"./RSPContexts-B9pDNvDd.js";import"./Group-DmE0W2Dn.js";import"./Input-B09cupc2.js";import"./Hidden-B_CnBhbh.js";import"./Button-G1a6TVgJ.js";import"./useLabels-Dx1HV4TR.js";import"./useButton-BqsG7Jfp.js";import"./useTextField-Bg_7HX8V.js";import"./useControlledState-B-NTHKxE.js";import"./useField-DKo_MAwi.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-BcOaLSW7.js";import"./Dialog-L1E3LbDx.js";import"./OverlayArrow-CTfRHOoq.js";import"./useResizeObserver-B20cOGqQ.js";import"./Collection-Do-oljpW.js";import"./index-oI6_T9eU.js";import"./Separator-BOGx3q-7.js";import"./SelectionManager-DkHQjBru.js";import"./useEvent-ICf_3wb7.js";import"./scrollIntoView-BG9C9OhB.js";import"./SelectionIndicator-Bgw3dbZo.js";import"./useDescription-DdM7u0og.js";import"./ListKeyboardDelegate-Dn4wo-QZ.js";import"./PressResponder-DVk-cOlO.js";import"./useLocalizedStringFormatter-BJ_uyhGA.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-B6VaaqX8.js";import"./VisuallyHidden-D1WFPk8a.js";import"./x-KEcraww_.js";import"./createLucideIcon-Cd2h-j1E.js";import"./useLocalizedStringFormatter-CYTevErc.js";import"./Heading-DRe6gMjs.js";import"./info-Dh3Xpjpv.js";import"./Popover-ejKtx1kH.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CjTIZRTh.js";import"./DragAndDrop-DFLH1kVc.js";import"./inertValue-B0zWegJa.js";import"./useListState-Bi60p96D.js";import"./Tag-HhTKOBvM.js";import"./useHighlightSelectionDescription-Of0WDcw8.js";import"./useUpdateEffect-DMryete6.js";import"./useHasTabbableChild-Dm1C6LPr.js";import"./chevron-down-BjtxTsSN.js";import"./Button.module-CtQ1deO8.js";import"./check-wfRFQC_B.js";import"./useToggleState-CbPhVy7m.js";import"./Virtualizer-CbTogk2J.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
