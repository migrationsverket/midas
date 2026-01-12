import{j as e}from"./iframe-BQrtIPmh.js";import{$ as c}from"./Form-D3dBAIeA.js";import{G as d}from"./Grid-CGQh0Tw_.js";import{G as i}from"./GridItem-D2W59dbS.js";import{T as t}from"./TextField-B0WYs5tm.js";import{S as l}from"./Select-BqXPL7jK.js";import{B as a}from"./Button-of3UeUzt.js";import{R as x,a as u}from"./Radio-BiNGz1lz.js";import{C as I}from"./CheckboxGroup-6P8x8Zw1.js";import{C as G}from"./Checkbox-2Y6DEBaR.js";import{L as p}from"./ListBoxItem-BQnni_Ab.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BS6sXZRH.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-VEshaC1X.js";import"./useFocusRing-y2IKkZpt.js";import"./index-YT1oLI7a.js";import"./index-4QHcSQc6.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-BOjWkU2x.js";import"./TextField-BK-Mttch.js";import"./FieldError-DxXo_lqN.js";import"./Text-COf1Fc6Q.js";import"./Text-Ar7CbXL2.js";import"./RSPContexts-B7BZpIEv.js";import"./Group-DUl23u4-.js";import"./Input-BvHtnBjj.js";import"./Hidden-ChFGCUwp.js";import"./Button-CwSqfpei.js";import"./useLabels-B8OZel6J.js";import"./useButton-Bq3twKx0.js";import"./useTextField-CldOBuyi.js";import"./useControlledState-BehPunq_.js";import"./useField-DnmfTmmv.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-DA8sjx-i.js";import"./Dialog-xkXnelAM.js";import"./OverlayArrow-D5stloCs.js";import"./useResizeObserver-B_W-iIzv.js";import"./Collection-Bg3XAI3U.js";import"./index-dVdMFjEa.js";import"./Separator-B8eK9tne.js";import"./SelectionManager-SJNHkq4Q.js";import"./useEvent-DsjSvcKm.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DafI-lUN.js";import"./useDescription-CFR_hxpk.js";import"./ListKeyboardDelegate-E7osep5R.js";import"./PressResponder-mC_0UUq5.js";import"./useLocalizedStringFormatter-aBffhIh6.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C7vkcFU_.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-KB2QFTLi.js";import"./x-CzVH8xnQ.js";import"./createLucideIcon-j47tDFs8.js";import"./useLocalizedStringFormatter-DkVOPURc.js";import"./Heading-Dx2eNYM8.js";import"./info-DKCA_yjb.js";import"./Popover-CYiOQIy6.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-C_UvLlHc.js";import"./DragAndDrop-BKfGXgw_.js";import"./inertValue-Cs8Jz4oH.js";import"./useListState-CZnUKLDU.js";import"./Tag-CC-bfc6F.js";import"./useHighlightSelectionDescription-BXccEr0r.js";import"./useUpdateEffect-BCtYpHpR.js";import"./useHasTabbableChild-BQC3cZYm.js";import"./chevron-down-DjHUAB8_.js";import"./Button.module-Co5e5YHp.js";import"./check-DRrBT3Es.js";import"./useToggleState-BmHsWPUZ.js";import"./Virtualizer-BI8pcluF.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
